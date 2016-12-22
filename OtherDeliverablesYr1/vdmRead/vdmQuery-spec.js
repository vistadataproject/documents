#!/usr/bin/env node

/*
 * Tests of VDM Query - JLD for DESCRIBE/SELECT, else pass through
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

process.env.gtmroutines = process.env.gtmroutines + ' ..'; // make VDP MUMPS available

describe('testVDMQuery', function() {

   var db; // for afterAll

   beforeAll(function() {
       db = new nodem.Gtm();
       db.open();
       VDM.setDBAndModel(db, vdmModel);
       console.log("VDM read only model loaded into VDM - ready to go ...");
   });

   it("DESCRIBE one", function() {

       var res = VDM.query("DESCRIBE 120_82-1");
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

       var res = VDM.query("DESCRIBE 120_82 LIMIT 3");
       expect(res.results).toBeDefined();
       expect(res.results.length).toEqual(3);

       // still expect meta on query
       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("DESCRIBE");
       expect(res.query.FORMAT).toEqual("JSONLD");

   });

   it("DESCRIBE list - empty", function() {

       var res = VDM.query("DESCRIBE 50 LIMIT 3"); // know 50 is empty
       expect(res.results).toBeDefined();
       expect(res.results.length).toEqual(0);

       // still expect meta on query
       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("DESCRIBE");
       expect(res.query.FORMAT).toEqual("JSON");

   });

   // Next two test that multiples/cnodes are flattened if singletons

   it("DESCRIBE to see [STRING] property (multiple flatten)", function() {

       var res = VDM.query("DESCRIBE 4_2 LIMIT 1 FILTER(bound(5))");
       expect(res.results).toBeDefined();
       res = res.results;
       expect(res.length).toEqual(1); // make sure there is a candidate
       expect(_.isArray(res[0]["synonym"])).toEqual(true);
       expect(res[0]["synonym"].length).toBeGreaterThan(0); // never empty
       expect(_.isString(res[0]["synonym"][0])).toEqual(true);

   });

   it("DESCRIBE to see [POINTER] property (multiple flatten)", function() {

       var res = VDM.query("DESCRIBE 3_6 LIMIT 1 FILTER(bound(4))");
       expect(res.results).toBeDefined();
       res = res.results;
       expect(res.length).toEqual(1);
       expect(_.isArray(res[0]["mail_group"])).toEqual(true);
       expect(res[0]["mail_group"].length).toBeGreaterThan(0); // never empty
       expect(_.isObject(res[0]["mail_group"][0])).toEqual(true);
       expect(res[0]["mail_group"][0].id).toBeDefined(); // ptr has id

   });

   // Test CSTOP - stop is inlined. TODO FMQL: note if stop kicked in at the request left (good for cacher tweeking)
   it("DESCRIBE for CSTOP", function() {

       var res = VDM.query("DESCRIBE 120_82 LIMIT 1 CSTOP 0");
       expect(res.results).toBeDefined();
       expect(res.results.length).toEqual(1);
       expect(res.results[0]["effective_date_time"]).toBeDefined();
       // {"stopped": true} - this is not data but a walk value. Client needs to understand cstopped
       expect(res.results[0]["effective_date_time"].stopped).toBeDefined();

       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("DESCRIBE");
       expect(res.query.CSTOP).toBeDefined();

   });

   // want to see sameAs and vuid:, not va:
   it("DESCRIBE to see sameAs VUID", function() {

       var res = VDM.query("DESCRIBE 50_68 LIMIT 1 FILTER(bound(.05))"); // .05 is va_generic_name
       expect(res.results).toBeDefined();
       res = res.results;
       expect(res.length).toEqual(1);
       // va_generic_name: { id: '50_6-1', label: 'ATROPINE', sameAs: 'vuid:4019591' }
       expect(res[0]["va_generic_name"]["sameAs"]).toBeDefined();
       expect(res[0]["va_generic_name"]["sameAs"]).toMatch(/vuid\:/);

   });

   // want to see boolean enums typed as booleans
   it("DESCRIBE to see boolean value", function() {

       var res = VDM.query("DESCRIBE 50_68 LIMIT 1 FILTER(bound(99.98))"); // 99.98 is master_entry_for_vuid
       expect(res.results).toBeDefined();
       res = res.results;
       expect(res.length).toEqual(1);
       // master_entry_for_vuid: true
       expect(_.isBoolean(res[0]["master_entry_for_vuid"])).toBeDefined();
       expect(_.isBoolean(res[0]["master_entry_for_vuid"])).toEqual(true);

   });

   // want to see numerics typed as integers where appropriate (ie/ if typing matches) 
   it("DESCRIBE to see numeric value", function() {

       var res = VDM.query("DESCRIBE 50_68 LIMIT 1 FILTER(bound(30))"); // 30 is dss_number
       expect(res.results).toBeDefined();
       res = res.results;
       expect(res.length).toEqual(1);
       // dss_number: 1
       expect(_.isNumber(res[0]["dss_number"])).toEqual(true);

   });

   it("DESCRIBE to see reserved 'type' qualified", function() {

       var res = VDM.query("DESCRIBE 3_5 LIMIT 1 FILTER(bound(2))"); // 2 is 'type'
       expect(res.results).toBeDefined();
       res = res.results;
       expect(res.length).toEqual(1);
       // type-2: ...
       expect(res[0]["type-2"]).toBeDefined();

   });

   // TODO: add for normalized name - non reserved ie/ straight dup
   // ... issue: seems to have bug where doesn't account for deleted fields ex/ 'edit ineligable data' in 391.

   /* ******************* Select - JLD list **/
   it("SELECT JLD", function() {

       var res = VDM.query("SELECT 50_68 LIMIT 5");
       expect(res.results).toBeDefined();
       expect(res.results.length).toEqual(5); // ensure empty
       expect(res.results[0]["id"]).toBeDefined();
       expect(res.query.FORMAT).toEqual("JSONLD");

   });

   it("SELECT FIELD JLD", function() {

       var res = VDM.query("SELECT 50_68 FIELD .05 LIMIT 3");
       expect(res.results).toBeDefined();
       expect(res.results.length).toEqual(3); // ensure empty
       expect(res.results[0]["id"]).toBeDefined();
       expect(res.results[0]["va_generic_name"]).toBeDefined();
       expect(res.query.FORMAT).toEqual("JSONLD");

   });

   /* ********************* Negative/Error Tests *************** */

   it("BADOP (ERROR)", function() {

       var res = VDM.query("BADOP 50 LIMIT 1");        
       // { error: 'Bad Query Form: OP MISSING' }
       expect(res.error).toBeDefined();

   });

   it("DESCRIBE non existent entry (ERROR)", function() {

       var res = VDM.query("DESCRIBE 50 LIMIT 1");
       expect(res.results).toBeDefined();
       res = res.results;
       expect(res.length).toEqual(0); // ensure empty

       res = VDM.query("DESCRIBE 50-1");
       // { error: 'No such identifier for type 50' }
       expect(res.error).toBeDefined();

   });

   /* ******************* Pass through Schema/Count ***** */

   it("COUNT", function() {
       var res = VDM.query("COUNT 50_68");
       expect(res["count"]).toBeDefined();
   });

   it("DESCRIBE TYPE (non JLD)", function() {

       var res = VDM.query("DESCRIBE TYPE 50");
       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("DESCRIBE TYPE");
       expect(res.query.FORMAT).toEqual("JSON");
   });

   it("SELECT TYPES (non JLD)", function() {

       var res = VDM.query("SELECT TYPES");
       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("SELECT TYPES");
       expect(res.query.FORMAT).toEqual("JSON");
   });

   /* **************** Force non JLD (old style) ********* */

   it("SELECT - old JSON", function() {

       var res = VDM.query("SELECT 50_68 LIMIT 3", true);
       expect(res.query).toBeDefined();
       expect(res.query.OP).toEqual("SELECT");
       expect(res.results).toBeDefined();
       expect(res.results.length).toEqual(3);
       expect(res.query.FORMAT).toEqual("JSON");

   });

   afterAll(function() {
       db.close();
   });

});
