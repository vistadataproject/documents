# VISTA Data Project

The Veterans Information System Technology Architecture (VISTA) is the integrated, comprehensive, longitudinal health information system of the U.S. Department of Veterans Affairs (VA). For the past thirty-five years, 131 VISTA systems have provided all clinical, financial, and administrative functions to support the operations of over 1200 VA hospitals and clinics throughout the United States. [ [VISTA Background](https://github.com/vistadataproject/documents/tree/master/Background/vista) ]


The VISTA Data Project is a new data-centric, model-driven approach to VA VISTA master data management and interfacing.  This is in contrast to the current code-centric approach to interfacing VISTA's data which relies on a byzantine array of thousands hard-coded opaque, brittle remote procedure calls (RPCs) which have accumulated over three decades - none of which are validated, documented, or maintained.  Such a code-centric approach does not provide a coherent, comprehensive, maintainable approach to master data management or interfacing to VISTA's data.

VISTA's master data model - the roadmap to all of VA's institutional, business process, and clinical know-how and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  Now, for the first time, VISTA's data model will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write, server-side interface to all VISTA data in all VISTA systems for external interfaces and integration. This data model uniformly bridges  all VISTA data models, allowing secure read-write access to all 131 VISTA systems enterprise-wide using a single Master VISTA Data Model (__MVDM__).

### Contrasting Interfacing Approaches
Current VISTA data interfaces wrap legacy MUMPS remote procedure calls (RPCs) within various mid-tier object models  __above the RPCs__ (figure below, left).  This dependency and encapsulation of legacy RPCs within the model not just fails to remediate, but propagates all the issues inherent to the MUMPS RPCs - most notably lack of testing, auditing and security. In contrast, the true, native, operational Master VISTA Data Model  __under the RPCs__ (figure below, right), not only provides a single, standardized, server-side interface to all VISTA data, but also remediates, documents, tests, audits, and secures all the legacy RPCs within the RPC Locker.

![vdp-model-above-below](https://github.com/vistadataproject/documents/blob/master/images/vdp-model-above-below-20170108e.png)

Examples of the mid-tier _RPC code wrapping frameworks_ include  Medical Domain Web Services (MDWS; C# wrapper), VISTA Integration Adapter (VIA; Java wrapper), VISTA Service Assembler (VSA; Java wrapper), and eHMP Resource Development Toolkit (RDK; Javascript wrapper). [[historical details](https://github.com/vistadataproject/documents/blob/master/README.md#current-mid-tier-mumps-rpc-code-wrapping-frameworks)]




#### Notes
Current Mid-tier MUMPS RPC code wrapping frameworks

Mid-tier Models | RPC code wrappers | TRM Approval| Links | Notes
--- | --- | --- | --- | ----
MDWS | C# |  [TRM](http://www.va.gov/TRM/ToolPage.asp?tid=7242) |  [guide](https://vacloud.us/groups/mdws)   [blog](https://robtweed.wordpress.com/2012/11/20/openmdws-transforming-vista-into-an-open-source-service-oriented-platform-for-healthcare) | SOAP/Java wrappers for RPCs.
VIA | Java  |  [TRM ](https://www.va.gov/TRM/ToolPage.asp?tid=8338#) |  [github](https://github.com/va-projects/year/tree/master/2016/VIA_API_specs) | SOAP/XML wrappers for RPCs.
VSA | Java|  NA | [slides](http://slideplayer.com/slide/6149872/) | RPC Wrapper generation backed by tooling.
RDK| Javascript | NA |[link](https://vacloud.us/groups/ehmp/revisions/cf5be/2/) | Hand-crafted wrappers for RPCs used by CPRS. Used by eHMP.

- Current interfacing to VISTA is through wrapping of legacy MUMPS remote procedure calls (RPCs) within some other language.
- The RPCs may be "wrapped" with any number of client languages or technologies, which complicates the maintenance of VISTA business logic as it is fragmented and embedded within within multiple different languages within different clients.  
- This creates a "babelized"  VISTA, where parts of its logic is written in one language, and other parts of the same transactional logic is written in another, fragmenting and decentralizing the integrity of its business logic. 
- This makes the system brittle and difficult to change because any changes to the system would require knowlege not just of MUMPS, but of the 'wrapping' language and technology as well, both changing over time.
- Security for all RPCs is based on the Terminal  (roll-and-scroll) interface and its Menu Actions. These Menus are hard-coded and exclusive to the terminal interface, and is not applicable to any generalized, external, web, or GUI-based interfaces.
- Many of the 3500 RPCs bypass the Fileman API and Data Dictionary, writing direct to MUMPS global storage. Bypassing the FM API means that Fileman security and auditing measures are bypassed, creating a significant security gap. 
- Bypassing the Fileman API also makes the data inaccessible to any other applications or by any other method other than by writing yet more custom MUMPS RPCs (The read and write RPCs are completely distinct from each other).  
- The only means to access or interface to new data is to write new MUMPS RPCs using the Terminal-based Actions-centric security, in addition to custom RPC MUMPS security code. 

