/*
 * Simple utilities for Basic FMQL HTML/JS clients
 *
 * Highlights:
 * - support FMQL query and result display for IE 7+, FF 3.5+, Safari 4+,
 * and Chrome
 * - builds HTML for styling with fmbase.css
 * - support FMQL full and url query formats
 *
 * LICENSE:
 * This program is free software; you can redistribute it and/or modify it under the terms of 
 * the GNU Affero General Public License version 3 (AGPL) as published by the Free Software 
 * Foundation. Modified or not:
 * - as required under Section 5, its source must retain appropriate legal notices
 * - in accordance with Section 7(b), its display must retain the "Master FileMan's Data" slogan with its link to http://vista.caregraf.info
 * (c) 2014 Caregraf
 */

// SAMEASBASE
var SAMEASBASE = "http://schemes.caregraf.info/";
// FMQL EP
var ENDPOINT = location.protocol + "//" + location.host + "/fmqlEP";
// hash to use
var HASHSYMBOL = "#";
// Default SELECT (for referrers)
var SELECTLIMIT = "100";
// TRACKER ID
var TRACKERID = "";

/* 
 * IE Specials (IE 7)
 *
 * - from JQuery, support XHR
 * - use eval if no JSON support (this applies to FF < 3.5)
 */
function getXMLHttpRequest() 
{
    return( window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest( ) );
}

function toJSON(jsonStr)
{
    // brackets around {} response stops eval getting mixed up
    return( (typeof JSON != 'undefined') ? JSON.parse(jsonStr) : eval('(' + jsonStr + ')') );
}

/*
 * Simple JQuery-like convenience without JQuery
 */
function $(id){ return document.getElementById(id); }
function html(id, html){ $(id).innerHTML = html; }
function htmla(id, html) { $(id).innerHTML += html; }
function css(id, style){ $(id).style.cssText += ';'+style; }

/* 
 * Handle URI extraction and invocation for hash and non hash change
 * supporting browsers. The hash form (#50-1 etc.) is the desired one
 * but changes to it won't lead to hash change events on old browsers.
 * The workaround is to use full URL (and force page reloads) on those
 * old targets.
 *
 * Nuance: #!50 == #50 to support google crawler.
 *
 * IE7 is main non hash supporting target. FF < 3.6 needs this function
 * too but few still use old FFs.
 *
 * Approach: treat hash and / as semantically the same. Decided not to
 * go with workarounds for lack of # support in IE7. 
 * 
 * To use: app should invoke "handleURIChange" on page load.
 * Assumptions: 
 * - app defines method processURI
 * - app defines APPPREFIX and HASHSYMBOL
 *   TBD: may calculate.
 *
 * Four cases: handle hash form and / form for non hash and hash supporting
 * browsers. .replace is used so the new form won't appear in history as
 * a duplicate. 
 *
 * Note: 
 * - simple # nav has been superceeded by fuller HTML5 browser
 * history. Sticking with simple for now. 
 * - use host not hostname to support ports other than 80
 * - use location.protocol, so support https as well as http
 * - use replace and not assign for location to replace a history
 * entry if need be and not create another. replace still causes a
 * navigation change event.
 *
 */
function handleURIChange()
{
    HASHCHANGESUPPORT = false;
    if ("onhashchange" in window)
        HASHCHANGESUPPORT = true;

    if (HASHCHANGESUPPORT)
    {
        window.onhashchange = handleHashChange;
        URISEP = "/" + APPPREFIX + HASHSYMBOL;

        /* 1. Hash Browser / / format - replace with # form */
        var pathname = location.pathname.toString();
        var uri = pathname.replace("/" + APPPREFIX, "");
        if (uri[0] == "/")
        {
            hashhref = location.protocol + "//" + location.host + "/" + APPPREFIX + HASHSYMBOL + uri.substr(1)
            location.replace(hashhref);
            return;
        }

        /* 2. Hash Browser / # format - process ala hash change event */
        handleHashChange()
        return;
    }
    URISEP = "/" + APPPREFIX + "/"; 
    /* 3. Non Hash Browser/ # format - replace with / form */
    if (location.hash)
    {
        var slashhref = location.href.toString().replace("#", "/")
        // remove ! too if there.
        slashhref = slashhref.replace("!", "");
        location.replace(slashhref);
        return
    }
    /* 4. Non Hash Browser/ / form - process it */
    var pathname = location.pathname.toString();
    var uri = pathname.replace("/" + APPPREFIX, "");
    // need charAt as IE 7 no like (non standard) uri[0]
    if ((uri != "") && (uri.charAt(0) == "/"))
        uri = uri.substr(1);
    trackURIChange(uri);
    processURI(uri);
}

function handleHashChange()
{
    // Note this applies to no hash and just hash. location.hash
    // is "" for both cases. Means can't reset # -> "" in here
    if (location.hash == "")
    {
        processURI("");
        return;
    }

    if (location.hash == HASHSYMBOL)
    {
        location.hash = "";
        processURI("");
        return;
    }

    var uri = location.hash.toString().replace("#", '');
    // account for #! form
    if (uri.charAt(0) == "!")
        uri = uri.substr(1);
        
    trackURIChange(uri);
    processURI(uri);
}

function goHome()
{
    if (HASHCHANGESUPPORT)
        location.hash = "" 
    else
        location.href = location.protocol + "//" + location.host + "/" + APPPREFIX;
    return;
}

/*
 * Track with / form (can't use #'s remotely
 * using sync _gat (TBD: go to gaq?. Debugger didn't see it though)
 */
function trackURIChange(uri)
{
    if (TRACKERID && (typeof(_gat) == 'object')) 
    {
        var pageTracker =  _gat._createTracker(TRACKERID);
        pageTracker._trackPageview("/" + APPPREFIX + "/" + uri);
    }   
}

/*
 * Assemble Query from args and dispatch it.
 * - index can be used to track queries
 * - replyHandler is anything you want
 */
function doFMQLQuery(args, index, fmqlReplyHandler)
{
    var xhr = getXMLHttpRequest();
    var qquery = "";
    var query = makeQuery(args);
    qquery = ENDPOINT + "?fmql=" + query;
    xhr.open('GET', qquery, true);
    xhr.onreadystatechange=function() {
        if (xhr.readyState==4) {
            response = xhr.responseText;
            if (!response)
            {
                fmqlReplyHandler(index, null);
                return;
            }
            var jreply = toJSON(response);
            fmqlReplyHandler(index, jreply);
        }
    }
    xhr.send(null); 
}

/*
 * Turn FMQL URI query format into args
 */
function parseQueryURI(uri)
{
    if (!uri)
        return null;

    if (/^schema\/?$/.test(uri))
        return {"OP": "SELECT TYPES", "POPONLY": "True"};

    var schMatch = /^schema\/([\d\_]+)$/.exec(uri);
    if (schMatch)
        return {"OP": "DESCRIBE TYPE", "TYPE": schMatch[1]};

    // Never do SELECT TYPE REFS

    var urlMatch = /^([\d\_]+\-[\d\.]+)$/.exec(uri);
    if (urlMatch)
        return {"OP": "DESCRIBE", "URI": uri};

    var typeMatch = /^([\d\_]+)/.exec(uri);
    if (!typeMatch)
        return null;

    var args = {"OP": "SELECT"};
    args["TYPE"] = typeMatch[1];
    // Three cases of qualifier
    var qualifierMatch = /^[\d\_]+\/?(\d*)\/?(\d*)\/?(.*)$/.exec(uri);
    // a. No qualifier - limit is implicit
    if (!qualifierMatch[1])
        args["LIMIT"] = SELECTLIMIT;
    // b. Triple of LIMIT/OFFSET/FILTER
    else
    {
        args["LIMIT"] = qualifierMatch[1];
        if (qualifierMatch[2])
        {
            args["OFFSET"] = qualifierMatch[2];
            if (qualifierMatch[3])
            {
                // Decode filter - allows > etc to put in manually
                args["FILTER"] = decodeURIComponent(qualifierMatch[3]);
                // Use ' in innerHTML: if in filter, replace with "
                args["FILTER"] = args["FILTER"].replace(/'/g, '"');
            }
        }
    }
    return args;
}

/*
 * This matches the query keys passed back in an FMQL response
 */
function makeQuery(args)
{
    // SELECT 2 FILTER(.02=X) LIMIT 1 OFFSET 1
    var query = args["OP"];
    if ("TOPONLY" in args)
    {
        query += " TOPONLY True";
        return query;
    }
    if ("POPONLY" in args)
    {
        query += " POPONLY True";
        return query;
    }
    if ("TYPE" in args)
        query += " " + args["TYPE"];
    else if ("URI" in args)
        query += " " + args["URI"];
    else
         return "";
    if ("FILTER" in args)
        query += " FILTER(" + args["FILTER"] + ")"
    if ("LIMIT" in args)
        query += " LIMIT " + args["LIMIT"];
    if ("OFFSET" in args)
        query += " OFFSET " + args["OFFSET"];
    if ("CSTOP" in args)
        query += " CSTOP " + args["CSTOP"];
    return query;
}

/* 
 * Make HTML from responses. Returned in div with class 'results'
 * 
 * Details:
 * - drives off self contained FMQL SELECT reply
 * - form is <table> of results + optional div for paging inside
 * a div of class results. One way to style this is in fmbase.css.
 * - For fragments, base is "#" or "#!". For queries, there is no base.
 * - Supports FMQL URL and full query formats
 * 
 * TBD:
 * - Excludes allows you to suppress pointers to certain file types.
 * This is useful for "walled" clients like Vocab or Patient. Suppression
 * is NOT removal. It means display as a literal.
 */
function selectResultToHTML(reply, useURIForm, base, excludes)
{
    var results = reply["results"];
    
    if (reply.results.length == 0)
        return "<div class='results'><p>No entries</p></div>";
    
    var resultsMarkup = "<div id='results'>";
    resultsMarkup += "<table class='selectResults'>";
    var offset = parseInt(reply.fmql.OFFSET);
    for (var i=0; i<results.length; i++)    
    {
            var result = results[i];
            /* TBD: should never get "empty" dictionaries */
            if (!("uri" in result))
                continue;
            var label = result["uri"].label.split("/")[1];
            resultsMarkup += "<tr><td>" + (offset + i + 1) + ".</td><td><a href=\"";
            if (useURIForm) // use URL format
                resultsMarkup += base + result["uri"]["value"];
            else
                resultsMarkup += base + "?fmql=DESCRIBE " + result["uri"]["value"] + "&format=HTML";
            resultsMarkup += "\">" + label + "</a></td>";
            if ("sameAs" in result["uri"])
                resultsMarkup += "<td>" + sameAsLink(result["uri"], base) + "</td>";
            resultsMarkup += "</tr>";
    }
    resultsMarkup += "</table>";
    // pager must go in with result
    var navMarkup = makeNavMarkup(useURIForm, base, reply);
    if (navMarkup)
        resultsMarkup += navMarkup;
    resultsMarkup += "</div>";
    return resultsMarkup;
}

/*
 * Assumption: SAMEASBASE defined in App
 */
function sameAsLink(uriValue, base, label)
{
    var sameasURI = uriValue["sameAs"];
    if (sameasURI == "LOCAL")
        return "LOCAL";
    if (!label)
        label = sameasURI;
    var lMatch = /LOCAL:([\d\-]+)$/.exec(sameasURI);
    if (lMatch)
        return "<a href='" + base + lMatch[1] + "'>" + label + "</a>";
    // TBD: HL7, ICD, CPT etc.
    sameas = sameasURI.replace(".", "_").replace("VA:", SAMEASBASE + "va/").replace("ICD9CM:", SAMEASBASE + "icd9cm/").replace("CPT:", SAMEASBASE + "cpt/").replace("HPTC:", SAMEASBASE + "hptc/").replace("NDDF:", SAMEASBASE + "nddf/");
    return "<a href='" + sameas + "'>" + label + "</a>";
}

function makeNavMarkup(useURIForm, base, reply)
{
    // Calculate NEXT/PREV navigation and offset (put in below)
    var navMarkup = "";
    
    var args = reply["fmql"];

    // For 
    if (!("OFFSET" in args))
        return navMarkup;

    if (args["OFFSET"] != "0")
    {
        var offset = parseInt(args["OFFSET"]);
        navMarkup = "<div class='pager'>";
        var prevURI = "";
        var poffset = offset - parseInt(args["LIMIT"]);
        if (useURIForm) // use URL format
        {
            var prevURI = base + args["TYPE"] + "/" + args["LIMIT"];
            if (poffset > 0)
                prevURI += "/" + poffset.toString();
        }
        else // use full query format
        {
            var pargs = {};
            for (key in args)
                pargs[key] = args[key];
            if (poffset > 0)
                pargs["OFFSET"] = poffset.toString();
            else
                delete pargs["OFFSET"]
            prevURI = base + "?fmql=" + makeQuery(pargs) + "&format=HTML";
        }
        navMarkup += "<a href='" + prevURI + "' rel='prev'>PREV</a>";
    }
    else
        offset = 0;
    // Going to need a next
    if (args["LIMIT"] == reply.results.length.toString())
    {
        if (navMarkup == "")
            navMarkup = "<div class='pager'>";
        else
            navMarkup += " | ";
        var nextURI = "";
        var noffset = parseInt(args["LIMIT"]) + offset; 
        if (useURIForm)
        {
            nextURI = base + args["TYPE"] + "/" + args["LIMIT"] + "/" + noffset.toString();
            if ("FILTER" in args)
                nextURI += "/" + args["FILTER"];
        }
        else
        {
            var nargs = {};
            for (key in args)
                nargs[key] = args[key];
            nargs["OFFSET"] = noffset;
            nextURI = base + "?fmql=" + makeQuery(nargs) + "&format=HTML";
        }
        navMarkup += "<a href='" + nextURI + "' rel='next'>NEXT</a>";
    }
    if (navMarkup)
    {
        navMarkup += " (" + args["LIMIT"] + ")"
        navMarkup += "</div>";
    }
    return navMarkup;
}

function describeResultToHTML(reply, useURIForm, base, excludes)
{    
    // TBD: need better split of "no results" and errors
    if ((!("results" in reply)) || (reply["results"].length == 0))
        return "<div class='results'><p>No results</p></div>";

    var resultsMarkup = "<div id='results'>";

    // can be more than one for DESCRIBE X IN Y etc.
    for (var i=0; i<reply["results"].length; i++)
    {
        var result = reply["results"][i];
        if (i>0)
            resultsMarkup += "<hr/>";
        var vars = [];
        for (var field in result)
            vars.push(field);
        resultsMarkup += describeFieldsToHTML(vars, result, useURIForm, base, excludes);
    }
    
    // pager must go in with result
    var navMarkup = makeNavMarkup(useURIForm, base, reply);
    if (navMarkup)
        resultsMarkup += "<hr/>";
        resultsMarkup += navMarkup;
        
    resultsMarkup += "</div>";
    
    return resultsMarkup;
}

function describeFieldsToHTML(fields, result, useURIForm, base, excludes)
{
    var resultsMarkup = "<dl>";
    for (var i=0; i<fields.length; i++)
    {
        var field = fields[i];
        var displayField = field.replace(/_$/, "").replace(/_/g, " ");
        if (field == "uri")
            continue;
        if (result[field]["type"] == "uri")
        {
            resultsMarkup += "<dt>" + displayField + "</dt><dd><a href=\"";
            if (useURIForm) 
                resultsMarkup += base + result[field]["value"];
            else
                resultsMarkup += base + "?fmql=DESCRIBE " + result[field]["value"] + "&format=HTML";
            resultsMarkup += "\">" + result[field]["label"] + "</a></dd>";
        }
        else if (result[field]["type"] == "typed-literal")
        { 
            if (/XMLLiteral$/.exec(result[field]["datatype"]))
            {
                resultsMarkup += "<dt>" + displayField + "</dt><dd><pre>" + result[field]["value"] + "</pre></dd>";         
            }
            // Either xsd:date or xsd:boolean - just show
            else if (result[field]["datatype"] == "xsd:boolean")
                resultsMarkup += "<dt>" + displayField + "</dt><dd>" + result[field]["value"].toUpperCase() + "</dd>";
            else
                resultsMarkup += "<dt>" + displayField + "</dt><dd>" + result[field]["value"] + "</dd>";                
        }
        else if (result[field]["type"] == "cnodes")
        {
            resultsMarkup += "<dt>" + displayField + "</dt><dd>";
            if ("stopped" in result[field])
            {
                resultsMarkup += "Too many to show: count > CSTOP.";
                // Only support query if top level CNode (works for 63-4, not for 3_075-60698) 
                if (!/\_/.exec((result["uri"]["value"].split("-")[1])))
                {
                    var cNodeQuery = "DESCRIBE " + result[field]["file"] + " IN " + result["uri"]["value"] + " LIMIT 10";
                    resultsMarkup += " <a href='/query?fmql=" + cNodeQuery + "&format=HTML'>View in Query Maker</a></dd>";
                }
            }
            else
            {
                resultsMarkup += "<ol class='multiple'>";
                for (var j=0; j<result[field]["value"].length; j++)
                { 
                    // TBD: shouldn't need this check. Should get IEN for all or not send.
                    if (!("uri" in result[field]["value"][j]))
                        continue;
                    resultsMarkup += "<li><h3>" + result[field]["value"][j]["uri"]["label"] + "</h3>";
                    var bnfields = [];
                    for (var bnfield in result[field]["value"][j])
                        bnfields.push(bnfield);
                    resultsMarkup += describeFieldsToHTML(bnfields, result[field]["value"][j], useURIForm, base);
                    resultsMarkup += "</li>";
                }
                resultsMarkup += "</ol></dd>";
            }
        }
        else
            resultsMarkup += "<dt>" + displayField + "</dt><dd>" + result[field]["value"] + "</dd>";
    }
    resultsMarkup += "</dl>";
    return resultsMarkup;
}

/*
 * Pass in LIMIT here as it is a policy and not some derived from the reply
 */
function countRefsResultToHTML(reply, useURIForm, base, limit, excludes)
{
    var resultsMarkup = "<div id='results'>";
    if ((!("results" in reply)) || (reply["results"].length == 0))
        return "<p>No indexed entries</p></div>";
    resultsMarkup += "<table>";
    for (var i=0; i<reply["results"].length; i++)
    {
        var result = reply["results"][i];
        resultsMarkup += "<tr>";
        resultsMarkup += "<td>" + result["fileLabel"] + " (" + result["file"] + ")" + "</td>";
        resultsMarkup += "<td>" + result["fieldLabel"] + " (" + result["field"] + ")" + "</td>";
        resultsMarkup += "<td><a href='";
        if (!useURIForm)
        {
            var query = "SELECT " + result["file"] + " FILTER(" + result["field"] + "=" + reply["fmql"]["URI"] + ")";
            if (limit < parseInt(result["count"]))
                query += " LIMIT " + limit;
            resultsMarkup += base + "?fmql=" + query + "&format=HTML";
        }
        else
            resultsMarkup += base + result["file"] + "/" + limit + "/0/" + result["field"] + "=" + reply["fmql"]["URI"];
        resultsMarkup += "'>" + result["count"] + "</a>" + "</td>";
        resultsMarkup += "</tr>";
    }
    resultsMarkup += "</table>";
    resultsMarkup += "</div>";
    return resultsMarkup;
}

function selectAllResultsToHTML(reply, useURIForm, base, topOnly)
{
    var resultsMarkup = "<div id='results'>";
    resultsMarkup += "<table><thead><tr>";
    results = reply["results"];
    var fields;
    var ths = "<th>#</th><th>Name</th>";
    if (topOnly)
    {
        fields = ["global", "count"];
        ths += "<th>Global</th><th>Count</th>";
    }
    else
    {
        fields = ["global", "parent", "count"];
        ths += "<th>Global</th><th>Parent</th><td>Count</th>";
    }
    resultsMarkup += ths + "</tr></thead><tbody>";
    for (var i = 0;i<results.length;i++)
    {
        rowMarkup = "<tr><td>" + results[i]["number"] + "</td><td>";
        var url = base + results[i]["number"].replace(".", "_");
        rowMarkup += "<a href=\"" + url + "\">" + results[i]["name"] + "</a></td>";
        for (var j = 0; j<fields.length; j++)
        {
            if (!(fields[j] in results[i]))
            {
                rowMarkup += "<td></td>";
                continue;
            }
            var value = results[i][fields[j]];
            if (fields[j] == "parent")
            {
                var url = base + value.replace(".", "_");
                value = "<a href=\"" + url +  "\">" + value + "</a>";
            }
            rowMarkup += "<td>" + value + "</td>";
        }
        rowMarkup += "</tr>";
        resultsMarkup += rowMarkup;
    }
    resultsMarkup += "</tbody></table></div>";
    return resultsMarkup;
}

function findSubFileInfo(fieldInfos, number)
{
    for (var i=0;i<fieldInfos.length;i++)
    {
        if ("SUBFILEINFO" in fieldInfos[i])
        {
            var sfi = fieldInfos[i]["SUBFILEINFO"];
            if (sfi["NUMBER"] == number)
                return sfi;
            if (!("FIELDS" in sfi))
                continue;
            sfi = findSubFileInfo(sfi["FIELDS"], number); // recurse
            if (sfi)
                return sfi;
        }
    }   
    return null; 
}

function describeTypeResultToHTML(reply, useURIForm, base)
{
    var resultsMarkup = "<div id='results'>";
    var fileId = reply["number"];
    if (!("parent" in reply))
        parentId = "";
    else
        parentId = reply["parent"];

    resultsMarkup += "<dl>";
    if (parentId)
        resultsMarkup += "<dt>Parent</dt><dd><a href=\"" + base + parentId.replace(".", "_") + "\">" + parentId + "</a></dd>";     
    for (key in reply)
    {
        if ((key == "fields") || (key == "parent")|| (key == "fmql"))
            continue;
        if (key == "description")
            value = reply[key]["value"];
        else
            value = reply[key];
        resultsMarkup += "<dt>" + key + "</dt><dd>" + value + "</dd>";
    }

    resultsMarkup += "<dt>Fields</dt><dd>"; 
    fields = ["number", "name", "location", "type", "details", "index", "description"];
    fieldNames = ["#", "Name", "Location", "Type", "Details", "Index", "Description"];
    var results = reply["fields"];
    resultsMarkup += "<table><thead><tr>";
    for (var i = 0;i<fieldNames.length;i++)
    {   
        resultsMarkup += "<th>" + fieldNames[i] + "</th>";
    }

    resultsMarkup += "</tr></thead><tbody>";
    for (var i = 0;i<results.length;i++)
    {
        // account for a corrupt field. TODO: "corruption" in ...
        if (!("name" in results[i]))
            continue;
        resultsMarkup += "<tr>";
        for (var j = 0; j<fields.length; j++)
        {
            if (fields[j] in results[i])
            {
                value = results[i][fields[j]];
                if (fields[j] == "name")
                {
                    var name = value.toLowerCase();
                    resultsMarkup += "<td>" + name;
                    if (results[i]["flags"].search(/R/) != -1)
                        resultsMarkup += "(+)";
                    resultsMarkup += "</td>";
                }
                else if (fields[j] == "type")
                    resultsMarkup += "<td>" + typeIdToLabel(value) + "</td>";
                else if (fields[j] == "details")
                {
                    var values = results[i]["details"];
                    if ((results[i]["type"] == "7") || (results[i]["type"] == "9"))
                    {
                        resultsMarkup += "<td><a href=\"" + base + values.replace(".", "_") + "\">" + values + "</a></td>"
                    }
                    else if ((results[i]["type"] == "3") || (results[i]["type"] == "12"))
                    {
                        var values = values.split(";");
                        resultsMarkup += "<td>";
                        for (var z = 0; z<values.length; z++)
                        {
                            if (z > 0)
                                resultsMarkup += "<br/>" + values[z];
                            else 
                                resultsMarkup += values[z];
                        }
                        resultsMarkup += "</td>";
                    }
                    else if (results[i]["type"] == "8")
                    {
                        var values = values.split(";");
                        resultsMarkup += "<td>";
                        for (var z = 0; z<values.length; z++)
                        {
                            var alnk = "<a href=\"" + base + values[z].replace(".", "_") + "\">" + values[z] + "</a>";
                            if (z > 0)
                                resultsMarkup += ", " + alnk;
                            else 
                                resultsMarkup += alnk;
                        }
                        resultsMarkup += "</td>";
                    }
                }
                else if (fields[j] == "description")
                    resultsMarkup += "<td>" + value["value"] + "</td>";
                else
                    resultsMarkup += "<td>" + value + "</td>";
            }
            else
                resultsMarkup += "<td/>";
        }
        resultsMarkup += "</tr>";
    }
    resultsMarkup += "</tbody></table>";
    resultsMarkup += "</dd></dl></div>";
    return resultsMarkup;
}

function typeIdToLabel(typeId)
{
    var FIELDTYPES = {
        "1": "DATE-TIME",
        "2": "NUMERIC",
        "3": "SET OF CODES",
        "4": "FREE TEXT",
        "5": "WORD-PROCESSING",
        "6": "COMPUTED",
        "7": "POINTER",
        "8": "VARIABLE-POINTER",
        "9": "MULTIPLE",
        "10": "MUMPS",
        "11": "IEN",
        "12": "BOOLEAN"
    }  
    if (!(typeId in FIELDTYPES))
        return typeId
    return FIELDTYPES[typeId];
}

function selectAllReferrersToHTML(reply, useURIForm, base)
{
    var resultsMarkup = "<div id='results'>";
    if (reply["results"].length == 0)
        resultsMarkup += "<p>No entries</p>";
    else
    {
        for (var i=0; i<reply["results"].length; i++)
        {
            var result = reply["results"][i];
            if (i==0)
                resultsMarkup += "<ol>";
            var rurl = base + result["rfile"].replace(".", "_");
            var rfieldLabels = "";
            for (var k=0; k<result["rfields"].length; k++)
            {
                if (rfieldLabels)
                    rfieldLabels += ","
                rfieldLabels += result["rfields"][k]["rfieldLabel"];
            }
            resultsMarkup += "<li><a href=\"" + rurl + "\">" + result["rfileLabel"] + "</a> (" + rfieldLabels + ")</li>";
        }
        resultsMarkup += "</ol>";
    }
    resultsMarkup += "</div>";
    return resultsMarkup;
}

