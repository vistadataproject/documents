#!/usr/bin/env node

/*
 * Tests of VDM Describe - simple wrapper for vdm query DESCRIBE one
 *
 *    jasmine x-spec.js
 *
 * after npm install -g jasmine, jasmine init
 *
 * Queries are on basic data expected in nodeVISTA - the "K" files
 * like Drug (50) etc. that don't change.
 *
 * (c) 2016 VISTA Data Project
 */

'use strict';

/*
 * Basic setup
 */
var _ = require('underscore');
var nodem = require('nodem');
var VDM = require('../vdm');
var vdmModel = require('./vdmReadOnly').vdmModel;
var VDMQS = require('./vdmQS');

process.env.gtmroutines = process.env.gtmroutines + ' ..'; // make VDP MUMPS available

describe('testVDMQS', function() {

   var db; // for afterAll

   beforeAll(function() {
       db = new nodem.Gtm();
       db.open();
       VDM.setDBAndModel(db, vdmModel);
       console.log("VDM read only model loaded into VDM - ready to go ...");
   });

   /* ************* Same as VDM.query tests *************/

   it("DESCRIBE one", function() {

       var res = VDMQS.query("DESCRIBE 120_82-1"); // JSONLD is the default
       expect(res.results).toBeDefined();
       // even though one, always return array
       expect(_.isArray(res.results)).toEqual(true);
       expect(res.results.length).toEqual(1);
       expect(res.results[0].id).toBeDefined();

       // still expect meta on query
       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("DESCRIBE");
       expect(res.query.FORMAT).toEqual("JSONLD");

   });

   it("DESCRIBE list - first three", function() {

       var res = VDMQS.query("DESCRIBE 120_82 LIMIT 3", "JSONLD"); // variation - JSONLD form explicitly
       expect(res.results).toBeDefined();
       expect(res.results.length).toEqual(3);
       expect(res.results[0].id).toBeDefined(); // JSONLD version

       // still expect meta on query
       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("DESCRIBE");
       expect(res.query.FORMAT).toEqual("JSONLD");

   });

   it("DESCRIBE list - first three - old JSON (JSON)", function() {

       var res = VDMQS.query("DESCRIBE 120_82 LIMIT 3", "JSON"); // variation - (old) JSON form explicitly
       expect(res.results).toBeDefined();
       expect(res.results.length).toEqual(3);
       expect(res.results[0].uri).toBeDefined(); // Old JSON version

       // still expect meta on query
       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("DESCRIBE");
       expect(res.query.FORMAT).toEqual("JSON");

   });

   it("DESCRIBE list - first three - HTML", function() {

       var res = VDMQS.query("DESCRIBE 120_82 LIMIT 3", "HTML"); // variation - HTML form explicitly
       expect(res.results).toBeUndefined();
       expect(res.html).toBeDefined();
       expect(res.query.FORMAT).toEqual("HTML");
   });

   it("DESCRIBE list - first three - XML", function() {

       var res = VDMQS.query("DESCRIBE 120_82 LIMIT 3", "XML"); // variation - XML form explicitly
       expect(res.results).toBeUndefined();
       expect(res.xml).toBeDefined();
       expect(res.query.FORMAT).toEqual("XML");
   });

   it("DESCRIBE list - first three - CSV", function() {

       var res = VDMQS.query("DESCRIBE 120_82 LIMIT 3", "CSV"); // variation - CSV form explicitly
       expect(res.results).toBeUndefined();
       expect(res.csv).toBeDefined();
       expect(res.query.FORMAT).toEqual("CSV");
   });

   it("SELECT list - CSV", function() {

       var res = VDMQS.query("SELECT 120_82 LIMIT 3", "CSV"); // variation - CSV form explicitly
       expect(res.results).toBeUndefined();
       expect(res.csv).toBeDefined();
       expect(res.query.FORMAT).toEqual("CSV");
   });

   it("COUNT - forced to JSON", function() {

       var res = VDMQS.query("COUNT 120_82", "JSONLD");
       expect(res.query.OP).toEqual("COUNT");
       expect(res.query.FORMAT).toEqual("JSON");
       expect(res.count).toBeDefined();

   });

   it("DESCRIBE TYPE - expect to be forced to JSON", function() {

       var res = VDMQS.query("DESCRIBE TYPE 120_82", "JSONLD");
       expect(res.query.OP).toEqual("DESCRIBE TYPE");
       expect(res.query.FORMAT).toEqual("JSON");
   });

   it("SELECT TYPES TOPONLY - expect to be forced to JSON", function() {

       var res = VDMQS.query("SELECT TYPES TOPONLY", "JSONLD");
       expect(res.query.OP).toEqual("SELECT TYPES");
       expect(res.query.FORMAT).toEqual("JSON");

   });

   it("BADOP - simple error", function() {
       var res = VDMQS.query("BADOP", "JSONLD");
       expect(res.error).toBeDefined();
   });

   afterAll(function() {
       db.close();
   });

});
