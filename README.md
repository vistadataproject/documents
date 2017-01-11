# VISTA Data Project

The VISTA Data Project is a new data-centric, model-driven approach to VA VISTA master data management and interfacing.  This is in contrast to the current code-centric approach to interfacing VISTA's data which relies on a byzantine array of thousands hard-coded opaque, brittle remote procedure calls (RPCs) which have accumulated over three decades - none of which are validated, documented, or maintained.  Such a code-centric approach does not provide a coherent, comprehensive, maintainable approach to master data management or interfacing to VISTA's data.

VISTA's master data model - the roadmap to all of VA's institutional, business process, and clinical know-how and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  Now, for the first time, VISTA's data model will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write, server-side interface to all VISTA data in all VISTA systems for external interfaces and integration. This data model uniformly bridges  all VISTA data models, allowing secure read-write access to all 131 VISTA systems enterprise-wide using a single Master VISTA Data Model (__MVDM__).

### Evolution in VISTA Interfacing
Current VISTA data interfaces wrap legacy MUMPS remote procedure calls (RPCs) within various mid-tier object models  __above the RPCs__ (figure below, left). This dependency on and encapsulation of legacy RPCs within the mid-tier model not only fails to remediate, but propagates all the issues inherent to the MUMPS RPCs - most notably lack of auditing and security. 

In contrast, leveraging the native transactional Master VISTA Data Model which is server-side and  __under the RPCs__ (figure below, right), not only provides a single, standardized, server-side "on the metal" interface to all VISTA data, but remediates, documents, audits, and secures all the legacy RPCs within the RPC Locker.


![VISTA-SAFE](https://github.com/vistadataproject/documents/blob/master/images/VISTA-SAFE.png)



