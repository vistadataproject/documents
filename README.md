# VISTA Data Project

The Veterans Information System Technology Architecture (VISTA) is the integrated, comprehensive, longitudinal health information system of the U.S. Department of Veterans Affairs (VA). For the past thirty-five years, 131 VISTA systems have provided all clinical, financial, and administrative functions to support the operations of over 1200 VA hospitals and clinics throughout the United States. [ [VISTA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista) ]


The VISTA Data Project is a new data-centric, model-driven approach to VA VISTA master data management and interfacing.  This is in contrast to the current code-centric approach to interfacing VISTA's data which relies on a byzantine array of thousands hard-coded opaque, brittle remote procedure calls (RPCs) which have accumulated over three decades - none of which are validated, documented, or maintained.  Such a code-centric approach does not provide a coherent, comprehensive, maintainable approach to master data management or interfacing to VISTA's data.

VISTA's master data model - the roadmap to all of VA's institutional, business process, and clinical know-how and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  Now, for the first time, VISTA's data model will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write, server-side interface to all VISTA data in all VISTA systems for external interfaces and integration. This data model uniformly bridges  all VISTA data models, allowing secure read-write access to all 131 VISTA systems enterprise-wide using a single Master VISTA Data Model (__MVDM__).

### Contrasting Interfacing Approaches
Current VISTA data interfaces wrap legacy MUMPS remote procedure calls (RPCs) within various mid-tier object models  __above the RPCs__ (figure below, left).  This dependency and encapsulation of legacy RPCs within the model not just fails to remediate, but propagates all the issues inherent to the MUMPS RPCs - most notably lack of testing, auditing and security. In contrast, the true, native, operational Master VISTA Data Model  __under the RPCs__ (figure below, right), not only provides a single, standardized, server-side interface to all VISTA data, but also remediates, documents, tests, audits, and secures all the legacy RPCs within the RPC Locker.

![vdp-model-above-below](https://github.com/vistadataproject/documents/blob/master/images/vdp-model-above-below-20170108e.png)

Examples of the mid-tier _RPC code wrapping frameworks_ include  MDWS (C# RPC wrapper), VIA (Java RPC wrapper), VSA (Java RPC wrapper), and eHMP RDK (Javascript RPC wrapper). [[historical details](https://github.com/vistadataproject/documents/blob/master/README.md#current-mid-tier-mumps-rpc-code-wrapping-frameworks)]


## VISTA Interfacing Evolution
*The figure summarizes the evolution from __thousands of unique, inconsistent, insecure, unidirectional code-based interfaces__ to that of a __single, standardized, secure, server-side, symmetric (bidirectional) Linked Data model-driven interface__ - the Master VistA Data Model (MVDM).*   


![vdp-transition](https://github.com/vistadataproject/documents/blob/master/images/vdp-transition-20170108.png)


__In Model-driven VISTA, interfacing is through the Master VistA Data Model (MVDM).__  The MVDM and its symmetric, server-side, security-enhanced Linked Data Model-driven interface is indicated by the blue bidirectional arrow with Linked Data icon. For __existing CPRS clients__, security is enhanced and audited by the RPC Locker; then all reads and writes controlled through MVDM. For __new  clients and interfaces__, reads and writes are through MVDM.  __Authentication__ for all VISTA clients and interfaces is provided (*separately*) through Enterprise mechanisms.

The first set of interfaces to migrate are those of the clinical domain. This are based on the graphical user interface to VISTA called the Computerized Patient Record System __[CPRS](https://www.va.gov/vdl/application.asp?appid=61)__, which is comprised of over one thousand remote procedure calls (__RPCs__).  
 
Each of the original CPRS RPCs will be incrementally audited, emulated, isolated, and secured by the __RPC Locker__, with all semantics reflected in the Master VistA Data Model (__MVDM__). The RPC Locker audits and prevents any code injection, and directs all database access correctly through the Fileman API (database management system). 

Within the MVDM is a configurable set of patient-centric security policies. This is based on the logical separation of patient data from all other kinds of data. The four kinds of data segregated are Patient, Institutional, Knowledge, and Systems/configuration, or __(PIKS)__ logical components.  In addition to supporting patient-centric security, this logical separation of data provides the foundation for enterprise Master Data Management __(MDM)__, enterprise systems/configuration management, and enterprise Knowledge management.


<br><br>

## Comparison of Code-driven VISTA to Model-driven VISTA
Code-driven VISTA <br> (Current) | Model-driven VISTA <br> (VISTA Data Project)
---|---
__Current interfacing  to VISTA is through thousands (over 3300) of unique, opaque, one-way  (either read or write)  legacy (20+ years old)  MUMPS remote procedure calls (RPCs) which are neither documented nor maintained.__ These are hard-coded in MUMPS for specific clients only and not interchangeable to other clients due to business logic within the custom MUMPS and client code. |   __All interfacing to VISTA is through one single, secure, symmetric (bidirectional)  read-write Master VISTA Data Model (MVDM).__  The read data model is identical to the write data model (i.e. symmetric)  providing one single universal structured data read/write mechanism. 
__Access is based on the legacy (1980's) terminal interface and its Menu Actions.__ This is a nonstandard, bespoke, opaque mechanism hardwirted to permutations of permissions to use 9000 menu opttions within 1700 menus within a legacy terminal interface. Clearly this  is not applicable to any new, modern, generic, or graphical interfaces such as web or mobile. The only way to interface to data currently is to write new MUMPS code using the opaque Terminal-specific Actions-centric security, in addition to custom RPC MUMPS security code. | __New, modern, industry-standard, fine-grained access control__ is provided through patient-centric access control (PCAC; new blue layer).  All existing RPC-based clients (left) access the MVDM via the __RPC Locker__, an RPC isolation and audit security layer (new). All new clients and integrations (right) access the MVDM via PCAC security. Authentication (top layer) will leverage enterprise identity and authentication management with time-limited SAML tokens.  
__Many of the MUMPS RPCs bypass the Fileman API and Data Dictionary, writing direct to MUMPS global storage.__ Bypassing the Fileman API means that the security and auditing measures of  the database are bypassed, creating a significant security gap, in addition to currupted data dictionary.  This makes the data inaccessible to any other applications or by any other method other than by writing yet more custom MUMPS global data access code. | __All  interfaces and functionality are Model-driven,  language-agnostic, client-agnostic, and Fileman API compliant, assuring universal auditing of all data access.__ 




__Data Model Features:__
+ All interfacing is through a __single, secure, symmetric read-write Master VISTA Data Model__.
+ All interfaces are Model-driven, language-agnostic, client-agnostic, Fileman API compliant.
+ All interfaces are secured with both existing Kernel authentication, in addition to new modern, industry-standard, patient-centric, attribute-based access control (ABAC).
+ All interfaces are written using modern, web-standard languages and tools (Javascript). 
+ The read data model is identical to the write data model (i.e. symmetric), assuring completeness and correctness of both. 
+ All existing clients or interfaces (such as CPRS) continue to function unchanged on top of MVDM through the a RPC Locker (a new, security isolation locker for all RPCs).
+ All existing clients inherit all MVDM features, including enhanced patient-centric security and attribute-based access control (ABAC).


#### VISTA Interfacing Evolution

Interface |  Code-driven <br>MUMPS RPCs (x3500)  | Data model-driven<br>Master VISTA Data Model (x1)
--- | --- | ---
Method |   :no_entry_sign:  Relies on over 3500 client-specific, non-interchangeable legacy MUMPS routines <br>  :no_entry_sign: Distinct, unique routines for reading vs writing the same data <br>  :no_entry_sign: Requires extensive knowledge and experience with MUMPS and VISTA | :white_check_mark:  Data Model-Driven :new: <br> :white_check_mark: Client-agnostic :new: <br> :white_check_mark: One single, symmetric read-write mechanism for all data :new: <br>:white_check_mark: Requires no knowledge or experience with VISTA internals or MUMPS.
Ease of interfacing to new clients | :no_entry_sign: HARD | :white_check_mark: EASY
Security |  :no_entry_sign: Patchy, Opaque  | :white_check_mark:  Comprehensive, Clear
Authentication |  Kernel Access/Verify | :white_check_mark: SAML token
Access Control |  :no_entry_sign: Dependent on and specific to the legacy terminal interface Menu Options  | :white_check_mark:  Applicable to any and all (new) interfaces  <br>:white_check_mark:  Data-Centric; :new: <br> :white_check_mark:  Patient-Centric :new: <br>:white_check_mark:   Enables Attribute-Based Access Control (ABAC) :new:
Fileman API Compliant|  :no_entry_sign: Unreliable, Incomplete <br> :no_entry_sign: Variable compliance| :white_check_mark:  Reliable, Complete <br> :white_check_mark: 100% Compliant
Audit |   :no_entry_sign: Incomplete <br> :no_entry_sign: Bypassess Fileman auditing | :white_check_mark:  Comprehensive AND <br> :white_check_mark: Patient-Centric :new:  
Unit Tested  |   :no_entry_sign: NO <br>  :no_entry_sign:  0% logic tested  | :white_check_mark: YES <br> :white_check_mark: 100% logic validated
Documentation |  :no_entry_sign: Incomplete, inconsistent, unclear. <br> :no_entry_sign:  Requires understanding MUMPS code | :white_check_mark: Complete, consistent, clear.  <br>:white_check_mark: Core is machine generated  :new: 



##  VISTA Data Model:  Details
_Server-side. Security-enhanced. Symmetric-Read-Write._

![VDP-intro](https://github.com/vistadataproject/documents/blob/master/images/vdp-introA.png)



## VISTA Data Model: Features

*__An operationalized Master VISTA Data Model (MVDM) provides VA with three key transformational capabilities:__*

VISTA<br>Data | Details
---|---
 ![db-search](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-db/50h/db-search.jpg) <br> __Access__ | __A single, universal, industry-standard mechanism for reading and writing *all VISTA data*.__ <br> This mechanism is unified by the read model and the write write model integrated into a single, symmetric-read-write data model (VDM), with all data in industry-standard web formats. *This overcomes the well understood shortcoming with VISTA Data Read and Write, which uses completely unique code, models, and mechanisms for reading data as distinct from writing data. Furthermore, the 20+ year old RPCs - over 3300 MUMPS routines which encapsulate all these idiosyncratic approaches (written *exclusively* and in lock-step with the the Delphi code of CPRS, and none of which are documented or maintained) simply cannot be relied on going forward, particularly for generic, external non-CPRS interfaces and clients.*
![db-integrity](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-db/50h/db-integrityA.jpg) <br> __Integrity__| __Comprehensive, automated, standardized, strict data integrity enforcement for  *all VISTA data*.__ <br> *This is a major improvement over the hodgepodge of legacy, ad-hoc methods that have accumulated over the past 35 years (HL7, RPCs, MUMPS, procedural code), none of which are documented, and all of which are inconsistent, unpredictable, and highly permissive*.  See also: [Master Data Management](https://en.wikipedia.org/wiki/Master_data_management)
![db-security](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-db/50h/db-security.jpg) <br> __Security__ | __Comprehensive, industry-standard, fine-grained, data-centric security for *all VISTA data*.__ <br> Currently VISTA provides security for only a small fraction of its data, and does this through bespoke, complex, opaque, and unmaintainable methods hardwired to a legacy terminal interface and its 9000+ terminal menu options. <br> __Data-centric, attribute-based security__ is the foundation for all other security levels and technologies, because without knowledge of the data and its logical attributes, it will not be possible to provide the appropriate security measures on the data. <br>__Through metadata enrichment of the VISTA Data Model__, VISTA will know *what categories of data it is managing* and thus allow, for the first time, comprehensive, data-centric, attribute-based security "on-the-data" for all VISTA data, permitting the secure exchange of data. See [Data-Centric Security](https://en.wikipedia.org/wiki/Data-centric_security),  [Logical Security](http://www.mdpi.com/1999-5903/4/4/929/htm#fig_body_display_futureinternet-04-00929-f001), [Semantic Security](https://www.google.com/search?q=semantic+data+security&sa=X&biw=1154&bih=1062&tbm=isch&tbo=u&source=univ&ved=0ahUKEwi_14b--JXLAhWKOz4KHWghAVEQsAQIgwE) and [Attribute-Based Access Control (ABAC)](http://csrc.nist.gov/projects/abac)


*Note: As a side-effect of establishing a single comprehensive mechanism for data management for VISTA data, a large portion of VISTA's legacy code (its thousands of data interfacing routines) may be retired.*



## VISTA Data Model: Attributes

Attribute | Details
---|---
__Representative__  | __VDM operationalizes all relevant VA VISTA data to the maximum extent available.__ <br> The VISTA Data Model comprises the current existing data-driven architecture of VISTA, and thus leverages all existing VISTA definitions. There is 100% correspondence and coverage of the internal data definitions of any local VISTA and that of its corresponding  VISTA Data Model (VDM), since these are maintained always in-sync and up-to-date. Any and all enhancements to any VISTA system and its data definitions will automatically be reflected in the VISTA Data Model through automated, triggered updates whenever VISTA's data dictionary is updated. 
__Real-Time__ | __VDM is operationalized using Best-of-Breed real-time server-side runtime technology.__<br> The same runtime technology that drives the largest commericial real-time high-traffic websites such as Walmart, eBay, PayPal, Netflix, Uber, LinkedIn, and the New York Times with millions of concurrent users also drives MVDM. *This maximizes transactional processing performance directly on the transactional database.*
__Noninvasive__ | __VDM provides VISTA with essential new functionality within the current VISTA architecture 'as is', without modification.__ <br>  No existing VISTA code, routines, packages, modules, infrastructure, or functionality will be affected or changed in any way (i.e. this is a 'safe'and 'noninvasive'). This keeps all existing functionality, while offering new, essential functionality for parallel development of all new web-oriented clients. In addition, it makes it easy and 'safe' to install, as this does not affect any current code or functionality.
__Self-Contained__ | __VDM runs server-side, in-process, directly within the existing VISTA/M transaction engine.__ <br> This eliminates all moving parts and maximizes transaction processing performance by running as an embedded process directly within the local M transactional database, fully leveraging the 'as-is' VISTA architecture. *This makes it extremely performant - at native speed of the MUMPS transaction engine. It also makes it easy to deploy and maintain. No moving parts. No external dependencies. No middleware. "On the metal" native M server-side performance*
__Data-Centric__ | __VDM is a completely new, purely data-centric approach to managing VISTA's data__. It does not involve changing a single line of VISTA's existing M procedural code, nor is it 'wrapping' (i.e. secretly using) any legacy code, routines, or RPCs dressed up within a shiny new encapsulation method (i.e. RPC wrapper "APIs"), which only add yet more obfuscation layers on the data. A data-centric approach __*comprehensively exposes all the data, which exposes the fact that VISTA has a data model*__ - which up to this point has not been realized nor taken advantage of. *This is the opposite of a code-centric approach, which obfuscates the data and its data model*.
__Web-Standard__ |  __VDM technologies are 100% web standard__ and all used in production settings by the worlds' largest corporations and organizations.  For further information see [standards and technologies](https://github.com/vistadataproject/documents/tree/master/Background#standards).
__Empiric Evolution__ | __VDM employs a new approach to emprically evolving VISTA's capabilities through rapid, iterative, functional prototypes.__ This allows the focus to remain on exploration of new techniques and approaches, rather than on more superficial end-user requirements, which rarely if ever attempt to tackle the deep conceptual and technological issues of data management. This is *the opposite waterfall development*.  See [spiral model](https://en.wikipedia.org/wiki/Spiral_model)



## Objective and Method of Delivery


__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all adminstrative, financial, and clinical information management to efficiently run over 1200 hospitals and clinics throughout the U.S., and thus provide veterans the highest quality of care, everywhere.  

> There are over 131 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 131. As a result, VA cannot share any computable data across or between any of the other VISTA systems.

__Why?__

> The mission of the Veterans Health Administration (VHA) is to provide comprehensive lifelong healthcare services to veterans everywhere. To support this, VA must have a seamless, comprehensive, nationally integrated healthcare information system to provide all relevant VISTA data in real-time in computable form at the bedside at all 1200 facilities.  In addition, in order to support the needs of veterans in today's mobile web-oriented world, VA needs to create new web-based clients and services to VISTA data to provide all necessary information to providers and veterans at the point of care using mobile, tablet, and web browser based interfaces to support truly ubiquitous access to healthcare services.

> VA thus needs a single, consistent, web-standard mechanism for real-time read-write transactions to all of the 131 local, unique VISTA systems as one, national master VISTA system.  This reduces the complexity of development, deployment, and maintenance for any new nationwide data service from any of the 131 distinct local VISTA systems to that of only one standardized computable Master VISTA system.

__How?__

> All sources of available metadata and models (internal to VISTA as well as external) will be transformed to a single integrated web-standard machine-processable data model which is then annotated, normalized, and enriched. This enhanced model is in turn is embedded back in VISTA as a server-side, security-enabled, symmetric read/write (i.e. transactional) Master Data Model.   

__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1








## Technologies
The VISTA Data Project is based on the following [Web Technologies](https://github.com/vistadataproject/documents/tree/master/Background#technologies) and  [Web Standards](https://github.com/vistadataproject/documents/tree/master/Background#standards):

![](/images/logos/logos-tech/square/60h/node-js.jpg)
![](/images/logos/logos-tech/square/60h/js5.jpg)
![](/images/logos/logos-tech/square/60h/html5.jpg)
![](/images/logos/logos-tech/square/60h/css3.jpg)
![](/images/logos/logos-tech/square/60h/rdf.jpg)
![](/images/logos/logos-tech/square/60h/jsonld.jpg)
![](/images/logos/logos-tech/square/60h/json.jpg)
![](/images/logos/logos-tech/square/60h/markdown.jpg)
![](/images/logos/logos-tech/square/60h/github.jpg)
![](/images/logos/logos-tech/square/60h/git.jpg)
![](/images/logos/logos-tech/square/60h/vagrant.jpg)
![](/images/logos/logos-tech/square/60h/CC.jpg)
![](/images/logos-tech/square/60h/asf.jpg)  

* Detailed review of these and other foundation technologies is contained in the [Background](https://github.com/vistadataproject/documents/tree/master/Background) section.
* The current baseline VISTA and Client functionality and capability is described [here](https://github.com/vistadataproject/documents/blob/master/Background/vista/vista-baseline.md).







# NOTES

### Current Mid-tier MUMPS RPC code wrapping frameworks

A few of the mid-tier _RPC code wrapping frameworks_ include the following:

Mid-tier Models | RPC code wrappers | TRM Approval| Links | Notes
--- | --- | --- | --- | ----
MDWS | C# |  [TRM](http://www.va.gov/TRM/ToolPage.asp?tid=7242) |  [guide](https://vacloud.us/groups/mdws)   [blog](https://robtweed.wordpress.com/2012/11/20/openmdws-transforming-vista-into-an-open-source-service-oriented-platform-for-healthcare) | SOAP/Java wrappers for RPCs.
VIA | Java  |  [TRM ](https://www.va.gov/TRM/ToolPage.asp?tid=8338#) |  [github](https://github.com/va-projects/year/tree/master/2016/VIA_API_specs) | SOAP/XML wrappers for RPCs.
VSA | Java|  NA | [slides](http://slideplayer.com/slide/6149872/) | RPC Wrapper generation backed by tooling.
RDK| Javascript | NA |[link](https://vacloud.us/groups/ehmp/revisions/cf5be/2/) | Hand-crafted wrappers for RPCs used by CPRS. Used by eHMP.

- __Current external interfacing  to VISTA is through remote procedure calls (RPCs) written in the MUMPS language.__
- These are hard-coded for very specific clients and are not interchangeable to other clients due to the shared, embedded business logic within the custom MUMPS and client code.
- The RPCs may be "wrapped" with any number of client languages or technologies, which only complicates the maintenance of VISTA business logic as it is now embedded and obfuscated within within multiple different languages depending on the client.  
- This creates a polyglot "babelized"  VISTA, where parts of its logic is written in one language, and other parts of the same transactional logic is written in another, fragmenting and decentralizing the integrity of its business logic. 
- This makes the system extremely brittle and difficult to maintain because any changes to the system would require knowlege not just of MUMPS, but of the 'wrapping' language and technology as well, which changes over time.
- Security for all RPCs is based on the Terminal  (roll-and-scroll) interface and its Menu Actions. These Menus are hard-coded and exclusive to the terminal interface, and is not applicable to any generalized, external, web, or GUI-based interfaces.
- Many of the 3500 RPCs bypass the Fileman API and Data Dictionary, writing direct to MUMPS global storage. Bypassing the FM API means that Fileman security and auditing measures are bypassed, creating a significant security gap. 
- Bypassing the Fileman API also makes the data inaccessible to any other applications or by any other method other than by writing yet more custom MUMPS RPCs (The read and write RPCs are completely distinct from each other).  
- The only means to access or interface to new data is to write new MUMPS RPCs using the Terminal-based Actions-centric security, in addition to custom RPC MUMPS security code. 

