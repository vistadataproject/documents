## Deliverable #33

> Prototype a web user interface to FileMan to make FileMan more usable and accessible. This shall demonstrate data query and review via web interface to FileMan and must use commodity, industry standard, vendor-agnostic, battle tested, secure TCP and HTTPS protocols, and vendor- agnostic JS framework.

Relies on the [VDM Read Prototype](https://github.com/vistadataproject/VDM/tree/master/prototypes/vdmRead) (Deliverable #25)


VDM Web Based Query interface and REST Server

## Adding VDM Web Based Query to nodeVISTA
code: https://github.com/vistadataproject/nodeVISTA/blob/master/interfaces/vdmQSS/simpleVdmQueryServer.js

_vagrant ssh_ into the VM and if you haven't already, perform an _npm install_: 

```text
$ su vdp
password: vistaisdata
$ cd /home/vdp/interfaces/
$ npm install <--- installs dependencies
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

You can now exit the VM (exit/exit) and in the host system's browser, use vdmQSS and its clients to view
all the data and schema of the osehraVISTA system. 

## Some one page client screens


__JSON raw Output__ ...

![vdm QSS JSON](/interfaces/vdmQSS/screenshots/vdmQSSjson.png?raw=true)

__HTML Output__ ...

![vdm QSS HTML](/interfaces/vdmQSS/screenshots/vdmQSShtml.png?raw=true)

__JSONLD web Output__ ...

![vdm QSS JSONLD](/interfaces/vdmQSS/screenshots/vdmQSSjsonld.png?raw=true)

__CSV Output__ ...

![vdm QSS JSONLD](/interfaces/vdmQSS/screenshots/vdmQSScsv.png?raw=true)

__XML Output__ ...

![vdm QSS JSONLD](/interfaces/vdmQSS/screenshots/vdmQSSxml.png?raw=true)


