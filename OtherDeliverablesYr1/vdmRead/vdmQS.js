#!/usr/bin/env node

/*
 * vdm query service wraps vdm.query and adds support for XML/JLD - with context/ excel
 * for DESCRIBEs
 *
 * In PWS, "VDM Query" and "FileMan Query Service (FQS)" are used. We stick to VDM Query Service (vdmQS)
 *
 * Deliverable #25, #33:
 * - satisfy: Query response /output options include hypertext markup language (HTML), extensible markup language (XML), java script object notation for linked data 
 * (JSON-LD), and in Excel spreadsheet compatible form.
 * - enable: 
 *   - "Representational state transfer application programming interface (REST API) to VDM" ie/ can run behind a VDM Job Server
 *   - (#33): Web-Based Query Interface to (FileMan) Data
 */

'use strict';

/*
 * Basic setup
 */
var _ = require('underscore');
var VDM = require('../vdm');
var replyReformatter = require('./replyReformatter');
var XMLReformatter = require('./toFormats').XMLReformatter;
var HTMLReformatter = require('./toFormats').HTMLReformatter;
var CSVReformatter = require('./toFormats').CSVReformatter;

/*
 * Expects VDM to have been initialized with basic READ ONLY model ie/
 *      db = new nodem.Gtm();
 *      db.open();
 *      VDM.setDBAndModel(db, vdmModel);
 *
 */
function VDMQS() {
}

/*
 * Formats:
 * - JSONLD
 * - JSON (old FMQL JSON)
 * - HTML (limited example as prototype)
 * - XML (limited example as prototype)
 * - CSV for Excel (limited example as prototype)
 */
VDMQS.prototype.query = function(query, format) { 

    if (format === undefined)
        format = "JSONLD";

    if (!_.contains(["JSONLD", "JSON", "HTML", "XML", "CSV"], format))
        return "Invalid format";

    var useOldJSON = (format === "JSONLD") ? false : true;

    var queryRes = VDM.query(query, useOldJSON);
 
    if (_.has(queryRes, "query") && (queryRes.query.FORMAT === "JSONLD"))
        return queryRes;

    if (format === "JSON")
        return queryRes; // want old!

    if (!_.has(queryRes, "query") || (!_.contains(["DESCRIBE", "SELECT"], queryRes.query.OP)))
        return queryRes; // only for DESCRIBE or SELECT from now on

    queryRes.query["FORMAT"] = format; // reset JSON format setting

    if (format === "HTML") {
        var htmlRF = new HTMLReformatter();
        replyReformatter(queryRes, htmlRF);
        queryRes["html"] = htmlRF.mu();
        delete queryRes.results;
    }
    else if (format === "XML") {
        var xmlRF = new XMLReformatter();
        replyReformatter(queryRes, xmlRF);
        queryRes["xml"] = xmlRF.mu();
        delete queryRes.results;
    }
    else if (format === "CSV") {
        var csvRF = new CSVReformatter();
        replyReformatter(queryRes, csvRF);
        queryRes["csv"] = csvRF.mu();
        delete queryRes.results;
    }

    return queryRes;
};

// singleton - mongoose pattern - causes problems for inherit and GTM in -spec
module.exports = exports = new VDMQS();
