# VISTA Data Model - Web Based Query Service

* The VISTA Data Model (VDM) Web Query Service is a new, simple, user-friendly web-based query interface to all VISTA data.
* This allows nontechnical end-users, clincians, and others - with no training in VISTA, MUMPS, Fileman, or any database query langauges like SQL - to immediately take advantage of VISTA data for secondary use and analytics.
* Different output formats are available including HTML, CSV, XML, JSON, and JSON-LD:
* Multiple examples of existing canned queries are available to experiment
* To get started with the VDM query web interface, start nodeVISTA, and then point your browser to the web query interface:
http://10.2.2.100:9000/query

## Main Query Interface
![vdm QSS HTML](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSS-main.png)

## Main Query Interface - Canned Queries
![vdm QSS HTML](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSS-canned.png)


#### HTML Output
![vdm QSS HTML](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSS-output-html.png)

#### CSV Output
![vdm QSS JSONLD](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSS-output-csv.png)

#### XML Output
![vdm QSS JSONLD](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSS-output-xml.png)

#### JSONLD (web Output)
![vdm QSS JSONLD](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSS-output-jsonld.png)

#### JSON (raw Output)
![vdm QSS JSON](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSS-output-json.png
)


<br><br><br><br>

## Technical

### Deliverable #33
> Prototype a web user interface to FileMan to make FileMan more usable and accessible. This shall demonstrate data query and review via web interface to FileMan and must use commodity, industry standard, vendor-agnostic, battle tested, secure TCP and HTTPS protocols, and vendor- agnostic JS framework.

Relies on the [VDM Read Prototype](https://github.com/vistadataproject/VDM/tree/master/prototypes/vdmRead) (Deliverable #25)
VDM Web Based Query interface and REST Server

## Adding VDM Web Based Query to nodeVISTA

__code:__ 
https://github.com/vistadataproject/nodeVISTA/blob/master/interfaces/vdmQSS/simpleVdmQueryServer.js

_vagrant ssh_ into the VM and if you haven't already, perform an _npm install_: 

```text
$ su vdp    			--> password: vistaisdata
$ cd /home/vdp/interfaces/
$ npm install  			<-- installs dependencies
```
and bring up the _fmqlServer_ ...

```text
$ nohup node vdmQSS/simpleVdmQueryServer.js >> SEESERVERRUN &
```

and try a query ...

```text
$ curl https://localhost:9000/vdmService?query=DESCRIBE%20120_82-1

{"results" ...
```

You can now exit the VM (exit/exit) and in the host system's browser, use vdmQSS and its clients to view all the data and schema of the VISTA system. 

