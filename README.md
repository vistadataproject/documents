# VISTA Data Project


### A Real-time Computable Master Data Model for VA's VISTA Systems
_Web-standard. Security-enabled. Symmetric-Read-Write._

The VISTA Data Project is a new VA data-centric approach to comprehensively expose and represent all 35 years of patient data and institutional know-how currently in the VA's 131 nationally deployed health information systems (VISTA) using a modern web-standard machine-processable data model; and by enriching and operationalizing this model, make all relevant VISTA data securely accessible and computable in real-time across all VA VISTA systems as one national, standard Master VISTA system.


![VDP-annotated](/images/vdp-basic-annotated11.png)


## Features

*New and unique features for VISTA Data management that the Master VISTA Data Model (MVDM) provides:*

Feature | Details
---|---
__Data Access__ | __MVDM provides VISTA with its first universal, standardized mechanism for reading and writing data.__ <br> This mechanism is unified through a read model and write write model that are integrated into one single, symmetric-read-write VISTA Data Model (VDM; See diagram above). *This overcomes the well understood shortcoming with VISTA Data Read and Write. The 20+ year old CPRS-specific RPC Broker and the associated 3300+ MUMPS routines - none of which are documented nor maintained - cannot be relied on going forward, particularly for non-CPRS clients.*
__Data Integrity__| __MVDM provides VISTA with its first single, comprehensive framework for strict validation and consistency checks for all information provided to or from all clients.__ <br> *This is a major improvement over the hodgepodge of legacy, ad-hoc methods that have accumulated over the past 35 years (HL7, RPCs, MUMPS, procedural code), none of which are documented, and all of which are inconsistent, unpredictable, and highly permissive*
__Data Security__ | __MVDM provides VISTA with its first comprehensive, granular, systematic *Data Security Model*.__ <br> Currently VISTA is data-category agnostic. Through metadata enrichment of the VISTA Data Model, VISTA will know for the first time *what categories and types of data it is managing* (patient data, institution data, etc.). Data-centric, semantic (logical) security is the foundation for all other security levels and technologies, because without knowledge of what the data is or its category, it will not be possible to provide the appropriate security measures to the data.  See [Data-Centric Security](https://en.wikipedia.org/wiki/Data-centric_security),  [Logical Security](http://www.mdpi.com/1999-5903/4/4/929/htm#fig_body_display_futureinternet-04-00929-f001), and [Semantic Security](https://www.google.com/search?q=semantic+data+security&sa=X&biw=1154&bih=1062&tbm=isch&tbo=u&source=univ&ved=0ahUKEwi_14b--JXLAhWKOz4KHWghAVEQsAQIgwE)
__Representative__  | __MVDM operationalizes all relevant VA VISTA data to the maximum extent available.__ <br> The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and therefore leverages all existing VISTA definitions. There is 100% correspondence and coverage of the data definitions of any local VISTA and that of the  VISTA Data Model (VDM), and these are maintained always-up-to-date. Any and all enhancements to the VISTA system and its data definitions will automatically be reflected in the VISTA Data Model through automated, triggered updates whenever VISTA's data dictionary is updated. 
__Noninvasive__ | __MVDM provides VISTA with essential new functionality within the current VISTA architecture 'as is', without modification.__ <br> *No existing VISTA code, routines, packages, modules, infrastructure, or functionality will be affected or changed in any way (i.e. this is a 'safe'and 'noninvasive' approach, keeping all existing functionality, while offering new and supplementary functionality for all new web-oriented clients).*
__Self-Contained__ | __MVDM runs entirely server-side, embedded directly on the existing VISTA database__. <br> This eliminates all moving parts and maximizes transaction processing performance by running as an embedded process directly on the local database, leveraging the 'as-is' database architecture. *This makes it easy to deploy, maintain, and keep highly performant.  No moving parts. No external dependencies. No middleware.* 
__Real-Time__ | __MVDM is operationalized using Best-of-Breed real-time server-side runtime technology.__<br> This same runtime technology drives the largest commericial transactional websites such as PayPal, LinkedIn, New York Times, Netflix, and Uber. *This maximizes transactional processing performance directly on the transactional database.*
__Web-Scale__  | __MVDM makes VISTA a first-class citizen of the Web of Data,  enabling VISTA to natively and dynamically link to thousands of external Linked Data resources on the web.__ This is because MVDM uses the same web-standard, web-scale Linked Data model and technology that all the largest web search engines use to search and link to all structured data on the web. Linking specific patient information, for example, would allow highly personalized, precision enrichment of the veteran health record with information from external, always-up-to-date authoritative sources.
__Web-Standard__ |  MVDM technologies are all web standard and used by the worlds' largest corporations and organizations.  For further information see [standards and technologies](https://github.com/vistadataproject/documents/tree/master/Background#standards).
__Data-driven__ | MVDM is a new approach to managing VISTA's data.  *Not a code-centric approach*.
__Empiric Evolution__ | Employs a rapid iterative prototyping approach to evolving VISTA's functionality. *Not waterfall development*.  See [spiral model](https://en.wikipedia.org/wiki/Spiral_model)







## Objective and Method of Delivery

__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all administrative, financial, and clinical information management to efficiently run over 1200 hospitals and clinics throughout the U.S., and thus provide veterans the highest quality of care, everywhere.  

> There are over 130 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 130. As a result, there is no single consistent mechanism for reading and writing data into any of these systems across the VA nationwide.

__Why?__

> Each of VA's 130 VISTA systems has a unique database and data model, and therefore cannot share any computable data across or between any of the other VISTA systems. Because veterans receive care at multiple facilities, and because VA needs to nationally coordinated approach to veteran care, these VISTA systems need to be functionally integrated as a single, national system.  In addition, in order to support the needs of  veterans and clinicians in today's web-oriented world, VA needs to create web-based clients and services based on VISTA data. 

> __VA therefore needs a single, consistent, web-standard mechanism for real-time read-write transactions to all of the 130 local, unique VISTA systems as if they were only one, national master VISTA system__.  This reduces the complexity of development, deployment, and maintenance for any new nationwide data service from any of the 130 distinct local VISTA systems to that of only one standardized computable Master VISTA system.

__How?__

> All sources of available metadata and models (internal to VISTA as well as external) will be transformed to a single integrated web-standard machine-processable data model which is then annotated, normalized, and enriched. This enhanced model is in turn is embedded back in VISTA as a server-side, security-enabled, symmetric read/write (i.e. transactional) Master Data Model.   

__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1

## Technical Background

Technical decisions by the VA and in mainstream software industry that framed the approach taken here

1. By virtue of VA's technical review and approval of Node.js in the VA Technical Reference Model ([TRM](http://www.va.gov/TRM/ToolPage.asp?tid=6716)), VA endorses the use of server-side Javascript/Node in the  VA enterprise architecture. See [TRM-Node](http://www.va.gov/TRM/ToolPage.asp?tid=6716).
1. By virtue of VA's Enterprise Health Management Platform being rewritten almost entirely in Javascript and Node.js, the VA has decided that Node.js is essential for the success of enterprise projects.  The backdrop to this decision was the conspicuous failure of numerous mid-tier Java wrappers for VISTA, starting with MyHealtheVet and the others since then. See [reference](http://www.openhealthnews.com/story/2014-07-27/vista-evolution-whats-wrong-picture).
1.  By virtue of VA's large, multi-year [contract](https://www.fbo.gov/index?s=opportunity&mode=form&tab=core&id=2a9bd7f10699f046bd284a2ac28ccf9e&_cview=0) (and [see](https://www.google.com/search?q=%22Control%20Number%2015-038%22&rct=j)) for Node.js, the VA has decided that Node-enabled Javascript on MUMPs is productive and practical.
1. By virtue of inclusion of the Node in all official releases of Cache, Intersystems views in-process Javascript coding on Cache as practical, maintainable, and essential for their commercial customers, particularly VA. See Intersystems documentation on [Cache/Node](http://docs.intersystems.com/ens20141/csp/docbook/DocBook.UI.Page.cls?KEY=BXJS_intro) and [PDF](http://docs.intersystems.com/documentation/cache/20122/pdfs/BXJS.pdf).
1. Node.js adoption continues to grow for mainstream production projects, including Netflix, New York Times, PayPal, LinkedIn, Walmart, Yahoo, and Uber.
1. Javascript is the most popular coding language in the world, as  measured by number of projects, coders, and new code on Github, and by the number of companies developing and deploying enterprise software for consumption on the web.
1. By virtue of VA's technical review and approval in the VA Technical Reference Model of the Resource Description Framework ([RDF](https://www.w3.org/standards/techs/rdf#w3c_all)), VA  endorses the RDF data model for use in the VA enterprise architecture. See [TRM-RDF](http://www.va.gov/TRM/StandardPage.asp?tid=6405).
1. JSON-LD is the most commonly used form of RDF deployed in production settings. It is used by Google, Yahoo, and Microsoft as a common mechanism to structure and index all the data on the web by their search engines, and by the U.S. National Library of Congress and U.S. National Library of Medicine to structure and search all published books and medical journals, respectively.  See [JSON-LD](http://json-ld.org).



## Technologies

The VISTA Data Project is based on the following [Web Technologies](https://github.com/vistadataproject/documents/tree/master/Background#technologies) and  [Web Standards](https://github.com/vistadataproject/documents/tree/master/Background#standards):

![](/images/logos-tech/square/60h/node-js.jpg)
![](/images/logos-tech/square/60h/js5.jpg)
![](/images/logos-tech/square/60h/html5.jpg)
![](/images/logos-tech/square/60h/css3.jpg)
![](/images/logos-tech/square/60h/rdf.jpg)
![](/images/logos-tech/square/60h/jsonld.jpg)
![](/images/logos-tech/square/60h/json.jpg)
![](/images/logos-tech/square/60h/markdown.jpg)
![](/images/logos-tech/square/60h/github.jpg)
![](/images/logos-tech/square/60h/git.jpg)
![](/images/logos-tech/square/60h/vagrant.jpg)
![](/images/logos-tech/square/60h/CC.jpg)
![](/images/logos-tech/square/60h/asf.jpg)  

* Detailed review of these and other foundation technologies is contained in the [Background](https://github.com/vistadataproject/documents/tree/master/Background) section.
* The current baseline VISTA and Client functionality and capability is described [here](https://github.com/vistadataproject/documents/blob/master/Background/vista/vista-baseline.md).


## Technical Overview

![VDP Components Overview](/images/vdp-overview8.png)

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
Metadata | JSON-LD (RDF) | Creative Commons CC0
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

\# | Name | Format | Function | Deliverable(s)
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
