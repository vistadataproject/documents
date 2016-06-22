# VISTA Data Project

The VISTA Data Project is a research and discovery initiative to prototype a data-centric, model-driven approach to VISTA master data management and interfacing.  This is in contrast to the current code-centric approach to interfacing with VISTA's data which relies on a byzantine array of thousands hard-coded remote procedure calls (RPCs) that have accumulated over three decades for different clients, none of which are validated, documented, or maintained.  Such a code-centric approach does not provide a coherent, comprehensive, maintainable approach to interfacing to VISTA's data.

VISTA's data model - the roadmap to all of VA's institutional and clinical know-how and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  Now, for the first time, VISTA's data model will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write interface to all VISTA data for external interfacing and integration.


##  VISTA Data Model:  Overview
_Server-side. Security-enhanced. Symmetric-Read-Write._

![VDP-intro](https://github.com/vistadataproject/documents/blob/master/images/vdp-introA.png)


## VISTA Data Model: Features

*__An operationalized Master VISTA Data Model (MVDM) provides VA with three key transformational capabilities:__*

VISTA<br>Data | Details
---|---
 ![db-search](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-db/50h/db-search.jpg) <br> __Access__ | __A single, universal, industry-standard mechanism for reading and writing *all VISTA data*.__ <br> This mechanism is unified through a read model and write write model integrated into a single, symmetric-read-write data model (VDM), with all data in industry-standard web formats. *This overcomes the well understood shortcoming with VISTA Data Read and Write, which uses completely unique code, models, and mechanisms for reading data as distinct from writing data. Furthermore, the 20+ year old RPCs - over 3300 MUMPS routines which encapsulate all these idiosyncratic approaches (written *exclusively* and in lock-step with the the Delphi code of CPRS, and none of which are documented or maintained) simply cannot be relied on going forward, particularly for generic, external non-CPRS interfaces and clients.*
![db-integrity](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-db/50h/db-integrityA.jpg) <br> __Integrity__| __Comprehensive, automated, standardized, strict data integrity enforcement for  *all VISTA data*.__ <br> *This is a major improvement over the hodgepodge of legacy, ad-hoc methods that have accumulated over the past 35 years (HL7, RPCs, MUMPS, procedural code), none of which are documented, and all of which are inconsistent, unpredictable, and highly permissive*.  See also: [Master Data Management](https://en.wikipedia.org/wiki/Master_data_management)
![db-security](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-db/50h/db-security.jpg) <br> __Security__ | __Comprehensive, industry-standard, fine-grained, data-centric security for *all VISTA data*.__ <br> Currently VISTA provides security for only a small fraction of its data, and does this through highly nonstandard, complex, opaque, and unmaintainable methods. Data-centric, attribute-based security is the foundation for all other security levels and technologies, because without knowledge of the data and its attributes, it will not be possible to provide the appropriate security measures on the data. Through metadata enrichment of the VISTA Data Model, VISTA will know *what categories of data it is managing* and thus allow, for the first time, comprehensive, data-centric, attribute-based security "on-the-data" for all VISTA data, permitting the secure exchange of data. See [Data-Centric Security](https://en.wikipedia.org/wiki/Data-centric_security),  [Logical Security](http://www.mdpi.com/1999-5903/4/4/929/htm#fig_body_display_futureinternet-04-00929-f001), [Semantic Security](https://www.google.com/search?q=semantic+data+security&sa=X&biw=1154&bih=1062&tbm=isch&tbo=u&source=univ&ved=0ahUKEwi_14b--JXLAhWKOz4KHWghAVEQsAQIgwE) and [Attribute-Based Access Control (ABAC)](http://csrc.nist.gov/projects/abac)


*Note: As a side-effect of establishing a single comprehensive mechanism for data management for VISTA data, a large portion of VISTA's legacy code (its thousands of data interfacing routines) may be retired.*



## Objective

__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all adminstrative, financial, and clinical information management to efficiently run over 1200 hospitals and clinics throughout the U.S., and thus provide veterans the highest quality of care, everywhere.  

> There are over 131 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 131. As a result, VA cannot share any computable data across or between any of the other VISTA systems.

__Why?__

> The mission of the Veterans Health Administration (VHA) is to provide comprehensive lifelong healthcare services to veterans everywhere. To support this, VA must have a seamless, comprehensive, nationally integrated healthcare information system to provide all relevant VISTA data in real-time in computable form at the bedside at all 1200 facilities.  In addition, in order to support the needs of veterans in today's mobile web-oriented world, VA needs to create new web-based clients and services to VISTA data to provide all necessary information to providers and veterans at the point of care using mobile, tablet, and web browser based interfaces to support truly ubiquitous access to healthcare services.

> VA thus needs a single, consistent, web-standard mechanism for real-time read-write transactions to all of the 131 local, unique VISTA systems as one, national master VISTA system.  This reduces the complexity of development, deployment, and maintenance for any new nationwide data service from any of the 131 distinct local VISTA systems to that of only one standardized computable Master VISTA system.

__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1


