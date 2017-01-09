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


