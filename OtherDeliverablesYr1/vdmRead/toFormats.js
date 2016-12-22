/*
 * Derived from fmUtils.js of Caregraf FMQL
 *
 * Note: based on (old) JSON to HTML and not JSONLD to HTML. Effect is the "same".
 *
 * LICENSE:
 * This program is free software; you can redistribute it and/or modify it under the terms of 
 * the GNU Affero General Public License version 3 (AGPL) as published by the Free Software 
 * Foundation. Modified or not:
 * - as required under Section 5, its source must retain appropriate legal notices
 * - in accordance with Section 7(b), its display must retain the "Master FileMan's Data" slogan with its link to http://vista.caregraf.info
 * (c) 2014-2016 Caregraf
 */


function XMLReformatter() {
    this._mu = "";
}

XMLReformatter.prototype.mu = function() {
    return this._mu;
};

XMLReformatter.prototype.replyStart = function() {
    this._mu += "<reply>";
};

XMLReformatter.prototype.noResults = function() {
    this._mu += "<results></results>";
};

XMLReformatter.prototype.resultsStart = function(vars) {
    this._mu += "<results>";
};

XMLReformatter.prototype.resultStart = function() {
    this._mu += "<result>";
};

XMLReformatter.prototype.propertyMissing = function(propertyId) {

}

XMLReformatter.prototype.propertyStart = function(propertyId) {
    this._mu += "<property><id>" + propertyId + "</id>";
};

XMLReformatter.prototype.propertyValue = function(propertyValue, esc) {
    this._mu += "<value>" + propertyValue + "</value>";
};

XMLReformatter.prototype.stoppedList = function() {
    // 
};

XMLReformatter.prototype.startListValue = function() {
    this._mu += "<list>";
};

XMLReformatter.prototype.startListValueElement = function() {
    this._mu += "<element>";
};

XMLReformatter.prototype.endListValueElement = function() {
    this._mu += "</element>";
};

XMLReformatter.prototype.endListValue = function() {
    this._mu += "</list>";
};

XMLReformatter.prototype.propertyEnd = function() {
    this._mu += "</property>";
}

XMLReformatter.prototype.resultEnd = function() {
    this._mu += "</result>";
};

XMLReformatter.prototype.resultsEnd = function() {
    this._mu += "</results>";
};

XMLReformatter.prototype.replyEnd = function() {
    this._mu += "</reply>";
};

function HTMLReformatter() {
    this._mu = "";
    this._resultCount = 0;
    this._inList = false;
}

HTMLReformatter.prototype.mu = function() {
    return this._mu;
};

HTMLReformatter.prototype.replyStart = function() {
};

HTMLReformatter.prototype.noResults = function() {
    this._mu += "<div class='results'><p>No Results</p>";
};

HTMLReformatter.prototype.resultsStart = function(vars) {
    this._mu += "<div id='results'>";
};

HTMLReformatter.prototype.resultStart = function() {
    if (!this._inList) {
        if (this._resultCount != 0)
            this._mu += "\n<hr>";
        this._resultCount += 1;
    }
    this._mu += "\n<dl>";
};

HTMLReformatter.prototype.propertyMissing = function(propertyId) {

}

HTMLReformatter.prototype.propertyStart = function(propertyId) {
    this._mu += "\n<dt>" + propertyId + "</dt>";
};

HTMLReformatter.prototype.propertyValue = function(propertyValue, esc) {
    if (esc)
        this._mu += "\n<dd><pre>" + propertyValue + "</pre></dd>";
    else
        this._mu += "\n<dd>" + propertyValue + "</dd>";
};

HTMLReformatter.prototype.stoppedList = function() {
    this._mu += "\n<dd><em>Too many to show: count > CSTOP</em></dd>";
};

HTMLReformatter.prototype.startListValue = function() {
    this._inList = true;
    this._mu += "\n<dd><ol>";
};

HTMLReformatter.prototype.startListValueElement = function() {
    this._mu += "\n<li>";
};

HTMLReformatter.prototype.endListValueElement = function() {
    this._mu += "\n</li>";
};

HTMLReformatter.prototype.endListValue = function() {
    this._mu += "\n</ol></dd>";
    this._inList = false;
};

HTMLReformatter.prototype.propertyEnd = function() {
}

HTMLReformatter.prototype.resultEnd = function() {
    this._mu += "\n</dl>";
};

HTMLReformatter.prototype.resultsEnd = function() {
    this._mu += "\n</div>";
};

HTMLReformatter.prototype.replyEnd = function() {
};

function CSVReformatter() {
    this._mu = "";
    this._resultCount = 0;
    this._listLevel = [];
}

CSVReformatter.prototype.mu = function() {
    return this._mu;
};

CSVReformatter.prototype.replyStart = function() {
};

CSVReformatter.prototype.noResults = function() {
};

CSVReformatter.prototype.resultsStart = function(vars) {
    var varsMU = "#";
    vars.forEach(function(v) {
        varsMU += "," + v;
    });
    this._mu += varsMU + "\n";
};

CSVReformatter.prototype.resultStart = function() {
    if (this._listLevel.length)
        return; // if in list
    this._resultCount += 1;
    this._mu += parseInt(this._resultCount);
};

CSVReformatter.prototype.propertyMissing = function(propertyId) {
    if (this._listLevel.length)
        return; // if in list
    this._mu += ",";
}

CSVReformatter.prototype.propertyStart = function(propertyId) {
};

CSVReformatter.prototype.propertyValue = function(propertyValue, escape) {
    if (this._listLevel.length)
        return; // if in list
    this._mu += ",";
    if (escape) {
        var safeValue = propertyValue.replace(/[\n\r\,]/, "  "); // crude
        this._mu += safeValue;
    }
    else
        this._mu += propertyValue
};

CSVReformatter.prototype.stoppedList = function() {
    if (this._listLevel.length)
        return; // if in list
    this._mu += ",<STOPPED LIST>";
};

CSVReformatter.prototype.startListValue = function() {
    if (this._listLevel.length == 0)
        this._mu += ",<LIST>";
    this._listLevel.push("LIST");
};

CSVReformatter.prototype.startListValueElement = function() {
};

CSVReformatter.prototype.endListValueElement = function() {
};

CSVReformatter.prototype.endListValue = function() {
    this._listLevel.pop();
};

CSVReformatter.prototype.propertyEnd = function() {
}

CSVReformatter.prototype.resultEnd = function() {
    if (this._listLevel.length)
        return; // if in list
    this._mu += "\n";
};

CSVReformatter.prototype.resultsEnd = function() {
    this._mu += "\n\n";
};

CSVReformatter.prototype.replyEnd = function() {
};

module.exports.HTMLReformatter = HTMLReformatter;
module.exports.XMLReformatter = XMLReformatter;
module.exports.CSVReformatter = CSVReformatter;
