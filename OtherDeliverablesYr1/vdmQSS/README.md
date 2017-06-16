# VISTA Data Model - Web Query Service

* The VDM web Query Service is a simple Web Browser-based query interface to VISTA. 
* Several different output formats are available to maximize secondary use of VISTA data in commodity data analytics tools.
* Output formats include HTML, CSV, XML, JSON, and JSON-LD


__HTML Output__ ...![vdm QSS HTML](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSShtml.png)

__CSV Output__ ...![vdm QSS JSONLD](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSScsv.png)
__XML Output__ ...![vdm QSS JSONLD](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSSxml.png)

__JSON raw Output__ ..
![vdm QSS JSON](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSSjson.png
)

__JSONLD web Output__ ...
![vdm QSS JSONLD](https://github.com/vistadataproject/documents/blob/master/OtherDeliverablesYr1/vdmQSS/screenshots/vdmQSSjsonld.png)



## Technical Details

### Deliverable #33
> Prototype a web user interface to FileMan to make FileMan more usable and accessible. This shall demonstrate data query and review via web interface to FileMan and must use commodity, industry standard, vendor-agnostic, battle tested, secure TCP and HTTPS protocols, and vendor- agnostic JS framework.
Relies on the [VDM Read Prototype](https://github.com/vistadataproject/VDM/tree/master/prototypes/vdmRead) (Deliverable #25)
VDM Web Based Query interface and REST Server
## Adding VDM Web Based Query to nodeVISTAcode: https://github.com/vistadataproject/nodeVISTA/blob/master/interfaces/vdmQSS/simpleVdmQueryServer.js
_vagrant ssh_ into the VM and if you haven't already, perform an _npm install_: 
```text$ su vdppassword: vistaisdata$ cd /home/vdp/interfaces/$ npm install <--- installs dependencies```
and bring up the _fmqlServer_ ...
```text$ nohup node vdmQSS/simpleVdmQueryServer.js >> SEESERVERRUN &```
and try a query ...
```text$ curl https://localhost:9000/vdmService?query=DESCRIBE%20120_82-1
{"results" ...```
You can now exit the VM (exit/exit) and in the host system's browser, use vdmQSS and its clients to viewall the data and schema of the osehraVISTA system. 



