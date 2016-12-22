var _ = require("underscore");

/*
 * This reply walker takes Formatters which must handle:
     replyStart
        noResults
            OR
        resultsStart
        resultStart
        ...
        resultEnd
        resultsEnd
     replyEnd
 */
function reformatReply(reply, formatter) {

    formatter.replyStart();

    if ((!("results" in reply)) || (reply["results"].length == 0)) {
        formatter.noResults();
        formatter.replyEnd();
        return;
    }

    var allVars = allFields(reply["results"]);

    formatter.resultsStart(allVars);

    // can be more than one for DESCRIBE X IN Y etc.
    for (var i=0; i<reply["results"].length; i++)
    {
        var result = reply["results"][i];
        var vars = [];
        for (var field in result)
            vars.push(field);
                
        reformatResult(allVars, result, formatter);
    }
    
    formatter.resultsEnd();
    
    formatter.replyEnd();
}

function allFields(results) {
    var fields = [];
    if (results.length == 0)
        return fields;
    if (_.has(results[0], "uri")) // one has it then all will and put first
        fields.push("uri");
    results.forEach(function(result) {
        for (var field in result) {
            if (field == "uri")
                continue;
            if (!_.contains(fields, field))
                fields.push(field);
        } 
    });
    return fields;
}

function reformatResult(allVars, result, formatter) {

    // required for a CSV
    formatter.resultStart();

    for (var i=0; i<allVars.length; i++) {
    
        var field = allVars[i];

        var displayField = field.replace(/_$/, "").replace(/_/g, " ");

        // for fixed position vs sparce array
        if (!_.has(result, field)) {
            formatter.propertyMissing(displayField);
            continue;
        }

        formatter.propertyStart(displayField);
        var fieldValue;
        if (field == "uri") {
            fieldValue = result[field].value;
            formatter.propertyValue(fieldValue, false);
        }
        else if (result[field]["type"] == "uri")
        {
            fieldValue = result[field]["label"] + " (" + result[field]["value"];
            if (_.has(result[field], "sameAs")) {
                fieldValue += " / " + result[field]["sameAs"];
            }
            fieldValue += ")";
            formatter.propertyValue(fieldValue, false);
        }
        else if (result[field]["type"] == "typed-literal")
        { 
            if (/XMLLiteral$/.exec(result[field]["datatype"])) {
                fieldValue = result[field]["value"];        
                formatter.propertyValue(fieldValue, true);
            }
            // Either xsd:date or xsd:boolean - just show
            else if (result[field]["datatype"] == "xsd:boolean") {
                fieldValue = result[field]["value"].toUpperCase();
                formatter.propertyValue(fieldValue, false);
            }
            else {
                fieldValue = result[field]["value"];
                formatter.propertyValue(fieldValue, false);
            }            
        }
        else if (result[field]["type"] == "cnodes")
        {
            if ("stopped" in result[field]) {
                formatter.stoppedList();
            }
            else
            {
                formatter.startListValue();
                for (var j=0; j<result[field]["value"].length; j++)
                {
                    // TBD: shouldn't need this check. Should get IEN for all or not send.
                    if (!("uri" in result[field]["value"][j]))
                        continue;
                    formatter.startListValueElement();
                    var bnAllVars = allFields(result[field]["value"]);
                    reformatResult(bnAllVars, result[field]["value"][j], formatter);
                    formatter.endListValueElement();
                }
                formatter.endListValue();
            }
        }
        else
            formatter.propertyValue(result[field]["value"], false);
        formatter.propertyEnd();
    }
    
    formatter.resultEnd();
}

module.exports = reformatReply;
