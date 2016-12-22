#!/usr/bin/env node

/*
 * Simple cluster-based VDM server that can also statically serve Rambler and
 * other one page apps and their CSS/JS.
 * 
 * For local test invoke with: nohup node simpleVdmQueryServer.js > SEESERVERRUN &
 *
 *
 * - SIGKILL (kill -9) - cluster will kill workers (once they are done)
 * - see: curl http://localhost:9000/vdmService?query=DESCRIBE%202-1 -v
 *
 *
 * LICENSE:
 * This program is free software; you can redistribute it and/or modify it under the terms of 
 * the GNU Affero General Public License version 3 (AGPL) as published by the Free Software 
 * Foundation.
 * (c) 2016 caregraf
 */

'use strict';

var express = require("express"),
    compress = require("compression"),
    cluster = require('cluster'),
    nodem = require('nodem'),

    VDM = require('../../prototypes/vdm'),
    vdmModel = require('../../prototypes/vdmRead/vdmReadOnly').vdmModel,
    vdmQS = require('../../prototypes/vdmRead/vdmQS'),
    port = process.argv[2] || 9000;

/* 
 * Typical 'cluster' setup
 */
if (cluster.isMaster) {

    var numCPUs = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }

    console.log("Master process %d (kill -9 this) with %d CPUs to play with", process.pid, numCPUs);

    // Listen for dying workers
    cluster.on('exit', function (worker) {

        // If forced, don't restart - uncaughtException forces with kill()
        if (worker.suicide === true)
            return;

        // Replace the dead worker, we're not sentimental
        console.log('Worker %d died :( - starting a new one', worker.id);
        cluster.fork();

    });

}
else {

    var db = new nodem.Gtm();
    // { ok: 1, result: '1' }
    var ok = db.open();
    VDM.setDBAndModel(db, vdmModel);

    process.on('uncaughtException', function(err) {
        db.close();
        console.trace('Uncaught Exception - exiting worker');
        console.error(err.stack);
        // exit(1) - Uncaught Fatal Exception
        cluster.worker.kill();
    });

    var app = express();

    // gzip etc if accepted - must come before middleware for static handling
    app.use(compress());

    /*
     * Redirect / or index.html to schema (for now)
     */
    app.use(function(req, res, next) {
        if ((req.url.length === 0) || req.path.match(/index/) || req.path.match(/\/$/))
            res.redirect(302, "/schema");
        else
            next();
    });

    /*
     * Silently rewrites /rambler, /query and /schema to respective htmls
     */
    app.use(function(req, res, next) {
        if (req.path.match(/query/)) {
            req.url = "/vdmQuery.html";
            console.log("Redirected /query to %s", req.url);
        }
        next();
    });

    // First try VDM
    app.get("/vdmService", function(request, response) {

        // {"query": "DESCRIBE 2-9"}
        var query = request.query.query;
        //JSON, HTML, etc
        var format = request.query.format;

        // Enforce ?query="SOME QUERY" (rem: query arguments don't get routes of their own in Express)
        if (!(("query" in request.query) && (query !== ""))) {
            response.status(404).json({"error": "No VDM Query Specified"});
            console.log("404'ing: %s", request.url);
            return;
        }


        console.log("Worker %s: invoking VDM Query %s", cluster.worker.id, query);

        var jsont = vdmQS.query(query, format); // ask for text to preserve order 
        console.log("Response: %s\n\n", JSON.stringify(jsont));
        
        // could use response.json but will be changing to jsonld so making explicit
        if(format == 'HTML') {
            response.type('text/html');
            jsont = jsont.html;
        } else {
            response.type('application/json');
        }
        response.send(jsont);
        
    });

    // Not VDM - try static - Express 4 respects order
    app.use(express.static(__dirname + "/static")); //use static files in ROOT/public folder

    var server = app.listen(port, function() {
        console.log("VDM worker %d, process %d", cluster.worker.id, process.pid);
    });

}
