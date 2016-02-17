# VISTA Data Project

### Secure Symmetric Read-Write Master Data Model for VA VISTA
*Research, Discovery, and Prototyype*


.


![VDP Overview - Simple](/images/vdp-simple4.png)


.

## Objective and Method of Delivery

__What?__

 >__Provide a comprehensive security-enabled read/write data model for all VA VISTA data  across VA VISTA operational systems__, establishing the technical foundation  for __master data management__  and computable data representation and __exchange between VA and DoD clinical information systems__. --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.1

__How?__

>__All sources of available metadata__ (both __internal to VISTA as well as external__) will be __transformed to a single integrated web-standard data model__ which is then __annotated, normalized, and enriched__. This enhanced model is in turn is __embedded back in VISTA as a server-side, security-enabled, in-process, transactional read/write Master Data Model__.   

__Where?__

>__All artifacts and deliverables__ shall be developed, version-controlled, stored, and delivered on an industry-standard __public Github__ repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the __public__ shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1


## Project Attributes
Attribute | Details
---- | -----
__Prototype-Driven__ |  Employs rapid iterative prototyping approach. *Not waterfall development*.
__Data-centric__ | Novel approach to managing VISTA data.  *Not a code-centric approach*.
__Comprehensive__  | Exposes and leverages *all* of VA VISTA data in *all* of VA VISTA systems.  The VISTA Data Model comprises the entire current existing data-driven architecture of VISTA.  All data definitions of all of the the 180 VISTA applications will be  incorporated, operationalized, and maintained always-up-to-date within the VISTA Data Model through direct triggered updates to the model from all 130 authoritative VISTA systems.
__Noninvasive__ | The VISTA Data Model provides essential new functionality on top of the unmodified VISTA architecture 'as is'. No existing VISTA code, routines, packages, modules, or infrastructure will be affected or changed in any way (i.e. this is 'safe' and 'noninvasive').
__Web-Standard Data Model__  | Exposes VISTA data models and metadata using universal World Wide Web Consortium (W3C) [Linked Data standards](https://github.com/vistadataproject/documents/tree/master/Background#standards) (RDF, JSON-LD).




## Technical Overview

![VDP Components Overview](/images/vdp-overview4.png)





#### [Web Technologies](https://github.com/vistadataproject/documents/tree/master/Background#technologies)
![](/images/logos-tech/square/40h/m-tech.fw.jpg)
![](/images/logos-tech/square/40h/js5.jpg)
![](/images/logos-tech/square/40h/node-js.jpg)
![](/images/logos-tech/square/40h/npm.jpg)
![](/images/logos-tech/square/40h/d3-js.jpg)
![](/images/logos-tech/square/40h/webstorm.jpg)
![](/images/logos-tech/square/40h/vagrant.jpg)
![](/images/logos-tech/square/40h/python.jpg)
![](/images/logos-tech/square/40h/git.jpg)
![](/images/logos-tech/square/40h/github.jpg)

#### [Web Standards](https://github.com/vistadataproject/documents/tree/master/Background#standards)
![](/images/logos-tech/square/40h/html5.jpg)
![](/images/logos-tech/square/40h/js5.jpg)
![](/images/logos-tech/square/40h/css3.jpg)
![](/images/logos-tech/square/40h/json.jpg)
![](/images/logos-tech/square/40h/jsonld.jpg)
![](/images/logos-tech/square/40h/rdf.jpg)
![](/images/logos-tech/square/40h/markdown.jpg)
![](/images/logos-tech/square/40h/CC.jpg)
![](/images/logos-tech/square/40h/asf.jpg)







## Tracks

The Project organizes deliverables in five “tracks” each backed by one or more Gits in the Project Repository.

Track | Name | Description | Git | Technical Deliverables
:---: | :---: | :--- | :--- | :---:
A | Infrastructure | Project infrastructure including Test VISTA (“nodeVISTA”), gits, tooling, website | [nodeVISTA](https://github.com/vistadataproject/nodeVISTA), [Website](https://github.com/vistadataproject/vistadataproject.github.io), [documents](https://github.com/vistadataproject/documents) | 3
B | VDM | VISTA Data Model (VDM) - Comprehensive, native model exposure and package implementation for any specific VISTA | [VDM](https://github.com/vistadataproject/VDM) | 12
C | MVDM | Master VISTA Data Model (MVDM) - Definition and implementation of master data model spanning all VISTA instances | [MVDM](https://github.com/vistadataproject/MVDM) | 9
D | MVDMmap | Mapping MVDM to other models such as FHIR | [MVDMmap](https://github.com/vistadataproject/MVDMmap) | 3
PM | Project Management | Business/Project Management  | [documents](https://github.com/vistadataproject/documents) | &nbsp;


#### Formats and Licenses of Deliverables 

From PWS 8.2 ...

Artifact | Format(s) | License
:---: | :--- | :--- 
Data | CSV if tabular structure; JSON-LD for all other structures. | Creative Commons CC0
Metadata | JSON-LD | Creative Commons CC0
Documents | Markdown (git Markdown or Docbook). From this HTML and PDF shall be auto-generated | Creative Commons CC0
Code (Software) | Source code, and all dependent code, with full version control history | Apache 2.0

The forms and licenses are in keeping with the requirement that <q>All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”)</q>.



## Technical Deliverables

27 Technical Deliverables involve:
  * 8 MetaData Definitions/System Configurations
  * 18 Software 
  * 6 Documents

More artifacts may be identified as work proceeds.

#### Metadata Definitions and System Configurations

\# | Name | Format | Functon | Deliverable(s)
:---: | :---: | :---: | :--- | :---:
1. | dd.jsonld 	| JSON-LD | Formal, portable definition of the contents of a VISTA data dictionary | 8
2. | rpc.jsonld | JSON-LD |	Formal definition of the model implicit in RPCs, captured in JSON-LD | E1
3. | vpr.jsonld | JSON-LD | Formal definition of the VPR RPC's patient data model in JSON-LD | Part of 10.1
4. | vdm.jsonld | JSON-LD |	Formal definition of Native VISTA data model based on one or more dd.jsonld's and rpc.jsonld | 7.1, 7.2
5. | mvdm.jsonld | JSON-LD | Formal definition of the MVDM subset of VDM that supports full CRUD | 10.1, 10.2
6. | piks.jsonld | JSON-LD | Formal annotation of vdm.jsonld that distinguishes Patient, Institution, Knowledge and System (PIKS) classes and properties | 18
7. | nodeVISTA Scenarios | GT.M and Cache Databases | VISTA databases for testing and demonstrations | Part of E2.2 Development
8. | MVDM to FHIR Rules | Rules Format | Translation rules (MVDM to FHIR) | Part of 39

#### Software

\# | Name | Language | Function | Deliverable(s) 
:---: | :---: | :---: | --- | :---: 
1. | DDJLD Maker | Python/ Javascript |	Caches FileMan Data Dictionary (dd) from a VISTA and creates a _dd.jsonld_ | 8 
2. | RPCJLD Maker | Python/ Javascript | Caches RPC definitions from a VISTA and creates an _rpc.jsonld_ | E1
3. | nodeVISTA | VISTA, node.js | A test VISTA based on OSEHRA's VISTA and a simple node.js front end | E3
4. | nodeVISTA Commands | Javascript (node.js) | invocations of mainly write-back functions in VISTA to prepare for the write-back support of _VDM Package_ | Part 7.2, E2.2
5. | VDM Maker | Python/ Javascript | Creates a VISTA Data Model (VDM), _vdm.jsonld_, from a VISTA's _dd.jsonld_ and _rpc.jsonld_ | 7.1, 7.2
6. | __VDM Package__ | Javascript (node.js module), MUMPS | Implements VDM inside Fileman. The first version will support querying ("Read-only"). The full version will support Create-Read-Update-Delete and transactions. | E2.1, E2.2
7. | MVDM Maker | Python/ Javascript | Creates a Master VISTA Data Model (MVDM), _mvdm.jsonld_, from one or more _vdm.jsonld_'s and _vpr.jsonld_ | 10.1, 10.2
8. | __MVDM Module__ | Javascript (node.js module) | Implements MVDM inside Fileman over the _VDM Package_. The first version will support querying ("Read-only"). The full version will support Create-Read-Update-Delete and transactions. | 11.1, 11.2
9. | MVDM Test Suite | Javascript | A series of tests focused on write-back support of the _MVDM Module_. Tests _VDM_ write-back as MVDM relies on VDM. | 35
10. | PIKS Generator | Python | Generates Patient, Institution, Knowledge and System (PIKS) annotations in _piks.jsonld_ for a _vdm.jsonld_ | 19
11. | Patient Security Prototype | Javascript (node.js) | An illustration of PIKS-enabled Patient level security. This involves an example client and an addition to FQS | 28
12. | FQS	| Javascript (node.js) | Fileman Query Service (FQS) based on embedded VDM model (REST service; read only) | 25
13. | Example Query Clients | Python, Javascript | Example command line clients that show how to use the FQS | 25
14. | FQS Web Client | Javascript, HTML | Browser based client for using the FQS | 33
15. | Metadata Cacher	| Javascript | queries (VISTA Application) metadata using VDM Package | 15
16. | FHIR Translator | Javascript, Translation rules | prototypes showing mapping from MVDM to FHIR | 39
17. | Web-based Rules Hub | Javascript, HTML | host for Translation rules | 32
18. | Document Generators	| Various |	Generators of documentation leveraging common packages such as Sphinx and JSDoc and translators from Markdown to PDF and HTML | E4

Note that _VDM Package_ and _MVDM Module_ are the key software artifacts of the Project. Other software either helps in their development or configuration or illustrates their use.

#### Documents/Web Site

Per the PWS, all non PM documentation will be delivered on the Project Gits in the Markdown format.

\# | Name | Deliverable
:---: | :--- | --- | :---:
1. | Website | 13
2. | (Document) Approach to “Live VDM” Maintenance of Current State | 9
3. | [MVDM] Normalization Reports | 12
4. | Report on [MVDM] Exposure of older models | 14
5. | Prototype Patient-centric Data Security [Document] | 28 (Document)
6. | Document VISTA-ese vs. FHIR | 40

In addition, programmer documentation will be generated for _VDM Package_, _MVDM Module_ and _FQS_.

#### Model and Metadata Transformations

 Input | Software | Output
:--- | :--- | --- 
Fileman DD 			| DDJLD Maker 	|  dd.jsonld 
RPC models  				| RPCJLD Maker 	| rpc.jsonld
VPR RPC models 			| VPR Maker 		|  vpr.jsonld
dd.jsonld + rpc.jsonld   	| VDM Maker 		| vdm.jsonld  
vdm.jsonld + vpr.jsonld 	| MVDM Maker 		| mvdm.jsonld
vdm.jsonld 			| PIKS Generator 	| piks.jsonld
MVDM 				| MVDMmap 		| FHIR
Markdown 			| Doc Generator	|  PDF, HTML



### Deliverables Schedule

In addition to the deliverables listed in the [Program Management Plan](https://github.com/vistadataproject/documents/blob/master/Submissions/VistAMetadata-PMP-2016-01-08.pdf) submitted to the government (Section 8.2), additional deliverables were identified for planning purposes. Such deliverables have been identified with a prefix of “E”. Deliverables 7, 10, and 11 were divided and designated .1 and .2 for VDM and MVDM, respectively.


#### Track A: Infrastructure
Track  | PWS#  | Name |  Git | Content(s) | Format(s) | WBS |  PWS<br>Section
:---: | :---: | :---: | :---: | :---: | :--- | :---: | :---: 
A | 13 | Website  | [Website](https://github.com/vistadataproject/vistadataproject.github.io) | website, infographics to showcase the contents of the VDM and MVDM Subset | HTML, Javascript (d3.js) |  Q1 &#8594; Q4 | 5.3.2 
A | E3 | FileMan TEST VISTA ["nodeVISTA"]  | [nodeVISTA](https://github.com/vistadataproject/nodeVISTA) | a test VISTA ("nodeVISTA") that hosts different test datasets ("nodeVISTA Scenarios") | VISTA System, Vagrant | Q1 &#8594; Q4 | 
A | E4 |  Document Generators  | [documents](https://github.com/vistadataproject/documents) | Programmer documentation will be generated using tools such as Sphinx (http://sphinx-doc.org/) and JSDoc (http://usejsdoc.org/). Important Markdown-formatted documents need to be translated into PDF and HTML | Various  | Q1 &#8594; Q3 |  
&nbsp; ||||||

#### Track B: VISTA Data Model
Track  | PWS#  | Name |  Git | Content(s) | Format(s) | WBS |  PWS<br>Section
:---: | :---: | :---: | :---: | :---: | :--- | :---: | :---: 
B |  7.1 |  Machine Processable VISTA Data Model (VDM) "Read Only"  | [VDM](https://github.com/vistadataproject/VDM)  | _vdm.jsonld_, the native VISTA data model in JSON-LD based on one or more _dd.jsonld_'s.<br><br>_VDM Maker_, a program that creates _vdm.jsonld_ from _dd.jsonld_'s.<br><br>This version will support query/read ("VDM (read)"). | JSON-LD, Python, Javascript | Q1 | 5.3.1 
 B | 7.2 |  Machine Processable VISTA Data Model (VDM)  | [VDM](https://github.com/vistadataproject/VDM)  | _vdm.jsonld_, enhanced by write-data in _dd.jsonld_s and _rpc.jsonld_.<br><br>_VDM Maker_ must process more information from _dd.jsonld_'s and process _rpc.jsonld_. | JSON-LD, Python, Javascript | Q2 &#8594; Q4 |5.3.1
 B | 8 |   Date-stamped FileMan Data Model Implementations (Definitions) (cross refs, triggers ...)  | [VDM](https://github.com/vistadataproject/VDM) | _dd.jsonld_, a data dictionary captured in JSON-LD<br><br>_DDJLD Maker_, a program that caches and interprets the dictionaries from VISTAs in JSON-LD form. MUMPS code reduction will be needed for write-back support | JSON-LD, Python, Javascript | Q1 &#8594; Q2 | 5.3.1 
 B | E1 |  RPC Model  | [VDM](https://github.com/vistadataproject/VDM), [nodeVISTA](https://github.com/vistadataproject/nodeVISTA) | formal definition of the model implicit in "write-back RPCs", _rpc.jsonld_. Required for write support in _vdm.jsonld_ (#7.2/#E2.2). Created with _RPCJLD Maker_. It may encompass VISTA Options (file 101) too | JSON-LD, Python | Q1 &#8594; Q3 |  
 B | E2.1 |  VDM Package "Read-only"  | [VDM](https://github.com/vistadataproject/VDM) | a package that implements the VDM inside a VISTA. It will allow any FileMan data to be queried according to the VDM. | Javascript (node.js), MUMPS (KIDS) | Q1 | &nbsp; 
B  |   E2.2 | VDM Package | [VDM](https://github.com/vistadataproject/VDM), [nodeVISTA](https://github.com/vistadataproject/nodeVISTA) | Will add support for creating, updating and deleting (full CRUD) VISTA Data enabled by a write-back supporting VDM (#7.2). Initial write-back testing (in Q1) will be directly against nodeVISTA ("nodeVISTA Commands") | Javascript (node.js), MUMPS (KIDS)  | Q1 &#8594; Q4  |  &nbsp; 
B | 9 |  (Document) Approach to “Live VDM” Maintenance of Current State  | [VDM](https://github.com/vistadataproject/VDM) (Wiki) | In a wiki page, describe ways in which _dd.jsonld_ definitions and hence _vdm.jsonld_ could keep pace with changes in VISTAs | Markdown | Q4 | 5.3.1
B | 15 |  Date Stamped (Application) Meta Data for lab, surgery and other applications | [VDM](https://github.com/vistadataproject/VDM) | _Metadata Cacher_ that queries meta-data using _VDM package (Read)_ | Python, JSON-LD |  Q2 |  5.3.3
 B | 18 |  Machine-processable [PIKS] Annotations  | [VDM](https://github.com/vistadataproject/VDM) | Distinguish patient data from other types of VISTA data in a formal definition _piks.jsonld_. A VDM PIKS definition enables MVDM PIKS which in turn enables patient-centric security (#28) |  JSON-LD | Q2 |  5.3.4
B | 19 |  Software code [for PIKS] | [VDM](https://github.com/vistadataproject/VDM) | _PIKS Annotation Generator_. Relies on _VDM Package (Read)_ to create a _piks.jsonld_ | Python | Q2 | 5.3.4
B | 25 |  Prototype query access to VISTA Data against VDM ["FQS"] | [VDM](https://github.com/vistadataproject/VDM) | _Example Query clients_ that query (read-only) nodeVISTA using a REST-based FileMan Query Service (FQS) implemented over _VDM Package (Read)_ | Javascript, Python, JSON-LD |  Q2 | 5.4.1
B | 33 |  Prototype Web-Based Query Interface to FileMan [VDM] Data  | [VDM](https://github.com/vistadataproject/VDM) | _FQS Web Client_ for using _VDM Package (Read)_ | Javascript | Q2 &#8594; Q3 |  5.4.1
&nbsp; ||||||

#### Track C: Master VISTA Data Model
Track  | PWS#  | Name |  Git | Content(s) | Format(s) | WBS |  PWS<br>Section
:---: | :---: | :---: | :---: | :---: | :--- | :---: | :---: 
C | 10.1  |  Master VISTA Data Model (MVDM) "Read-only"   | [MVDM](https://github.com/vistadataproject/MVDM) | _mvdm.jsonld_, a formal “MVDM Subset” definition with much of the scope of the VPR RPC which must be formally captured in _vpr.jsonld_. | JSON-LD | Q1 &#8594; Q2 | 5.3.2
C | 10.2 |  Master VISTA Data Model (MVDM)  | [MVDM](https://github.com/vistadataproject/MVDM) | full CRUD support rounded out for _mvdm.jsonld_. | JSON-LD | Q2 &#8594; Q4 |  5.3.2
C | 11.1  |  [MVDM over VDM] Heuristic (mapping) code "Read-only" [_MVDM Module_]  | [MVDM](https://github.com/vistadataproject/MVDM) | mapping tables and rules implemented in a _MVDM module_ that delivers a read-only version of MVDM over the VDM Package "Read-only". | Javascript (node.js), JSON | Q2 |  5.3.2
C | 11.2  |  [MVDM over VDM] Heuristic (mapping) code [_MVDM Module_]  | [MVDM](https://github.com/vistadataproject/MVDM) | full CRUD support added to _MVDM Module_ (Read). | Javascript (node.js), JSON | Q3 &#8594; Q4 |  5.3.2
C | 12  |  [MVDM] Normalization Reports | [MVDM](https://github.com/vistadataproject/MVDM) (Wiki) | Documents VDM to MVDM mapping as implemented in Deliverable #11. | Markdown | Q2 &#8594; Q4  | 5.3.2
C | 14  |  Report on [MVDM] Exposure of older models  | [MVDM](https://github.com/vistadataproject/MVDM) (Wiki) | Describe how older, cruder models could be handled in the MVDM | Markdown | Q4 | 5.3.2
C | 28 |  Prototype Patient-centric Data Security | [MVDM](https://github.com/vistadataproject/MVDM) | First document and then provide a self- contained prototype ("Patient Security Prototype") that shows how PIKS- enabled annotations enable patient-centric secure queries. The prototype will enhance FQS and have an example client | Javascript, Markdown | Q3 &#8594; Q4  | 5.4.1
C | 35 |  VISTA Application model(s)/Prototype(s) [Tests] | [MVDM](https://github.com/vistadataproject/MVDM) | MVDM write back tests (tier 1 through 3), enabled by mvdm.js configurations. Test scenarios for Deliverable #11. | Javascript, Python | Q2 &#8594; Q4  | 5.4.2
C | 36 |  Meta-model(s) [VPR] Prototype(s) | [MVDM](https://github.com/vistadataproject/MVDM) | Test code that shows how well the MVDM supports VPR (Read-only) convenience methods - read-only side of #35 | Javascript, Python | Q2 &#8594; Q3  | 5.4.2
&nbsp; ||||||

#### Track D: Master VISTA Data Model maps
Track  | PWS#  | Name |  Git | Content(s) | Format(s) | WBS |  PWS<br>Section
:---: | :---: | :---: | :---: | :---: | :--- | :---: | :---: 
D | 32  |  Prototype Web-based Rules Hub  | [MVDMmap](https://github.com/vistadataproject/MVDMmap) | Prototype a sharable, crowd source-able mechanism to exchange and grow a library of open, standards-based, validated, and exchangeable transformation rules | Web-based interface | Q3 | 5.4.1
D | 39 |  Reference model(s)/Prototype(s) ["FHIR Translator"] | [MVDMmap](https://github.com/vistadataproject/MVDMmap) | Prototypes that demonstrate mapping from MVDM to FHIR | Javascript and/or other translation rules languages | Q3 &#8594; Q4  | 5.4.2
D | 40 |  Document VISTA-ese vs. FHIR  | [MVDMmap](https://github.com/vistadataproject/MVDMmap) | Human-readable mapping descriptions | Markdown | Q3 &#8594; Q4 | 5.4.2
&nbsp; ||||||


### Notes

  * Enumerated above are 27 technical deliverables within four tracks ( _VDM_, _MVDM_, _MVDMmap_, and _Infrastructure_).
  * Deliverables E1-4 are required but not explicitly enumerated in the PWS.
  * Deliverable #’s have gaps. The following PWS deliverables were retired as redundant or out of scope per government determination: 6, 16, 17, 20-24, 26, 27, 29-31, 34, 37, 38
  * __There is a substantial difference in complexity between read-only and read-write models and implementations.__ To write anything demands knowledge of rules that go beyond the demands of reading. As a result, both VDM and MVDM models and packages will be delivered in two phases, with read coming first. 
    * __VDM "Read"__ and its package (#7.1 and #E1.1) are due in Q1; Deliverables #8, #15, #18, #19, #25, #33 only require such read-only functionality and are due in Q2
    * __MVDM "Read"__ and its module (#10.1 and #11.1) are due in Q2: Deliverables #28, #36 and all of track D rely only on MVDM ("Read").
    * Read-only VDM and by extension MVDM will expand on open source [FMQL](https://github.com/caregraf/FMQL)



#### Program Management
Track  | PWS#  | Name |  Git | Content(s) | Format(s) | WBS |  PWS<br>Section
:---: | :---: | :---: | :---: | :---: | :--- | :---: | :---: 
PM | 1AA | Artifact Repository |  Project Gits |  ALL |  ALL  |  Q1 | 8.2
PM | 1A  | Non-disclosure/Non-Use Agreement   | &nbsp; | &nbsp; |  &nbsp; | Q1 |  6.1 
PM | 1B |  Quality Control Plan [QCP] |  documents |  an effective quality control program  | &nbsp;  | Q1 | 1.6.1 
PM | 1C  |  Phase-out Migration Plan |  documents | elaborates the artifacts to be transitioned on the Project Repository, and a schedule for transition completion  | &nbsp; | Q4 | 1.6.17 
PM | 2 |   Program Management Plan (PMP)	 | documents | strategy to accomplish the tasks and include the risk, quality and technical management approach, work breakdown structure (WBS), schedule management approach, schedule, cost requirements, and proposed staffing  | &nbsp; | Q1 |  5.2 
PM | 3|   Program Schedule and Monthly Updates  | documents | schedule, updated monthly | &nbsp; | Monthly | 5.2 
PM | 4 |  Monthly Progress Report  | &nbsp; | includes project status and financial management reporting | &nbsp; |  Monthly | 5.2 
PM | 5 |  Quarterly Strategic Communications Message  | documents | project progress and feasibility of transition to production | &nbsp; | Quarterly | 5.2
&nbsp; ||||||
