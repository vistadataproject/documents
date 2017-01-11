# VISTA Data Project

The VISTA Data Project is a new data-centric, model-driven approach to VA VISTA master data management and interfacing.  This is in contrast to the current code-centric approach to interfacing VISTA's data which relies on a byzantine array of thousands hard-coded opaque, brittle, insecure remote procedure calls (RPCs) which have accumulated over three decades - none of which are audited, documented, or maintained.  Such a code-centric approach does not provide a coherent, comprehensive, maintainable approach to master data management, security, or interfacing to VISTA's data.

VISTA's master data model - the roadmap to all of VA's institutional, business process, and clinical know-how and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  Now, for the first time, VISTA's native transactional data model will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write, server-side interface to all VISTA data. This data model uniformly bridges all local VISTA data models (i.e.a master, cross-VISTA data model), allowing secure read-write across all 131 VISTA systems enterprise-wide with a single Master VISTA Data Model (__MVDM__).

##  VISTA's new Secure Access Framework for the Enterprise (SAFE) Interface

Current VISTA interfaces wrap legacy MUMPS remote procedure calls (RPCs) within various mid-tier object models  __above the RPCs__ (figure below, left). This dependency on and encapsulation of legacy RPCs within the mid-tier model not only fails to remediate, but propagates forward all the problems inherent to MUMPS RPCs - most notably lack of auditing and security. 

In contrast, leveraging the native, server-side transactional Master VISTA Data Model which is __under the RPCs__ (figure below, right), not only provides a single, standard, secure, server-side interface to all VISTA data for all new clients, but is also backwards compatible and remediates, audits, and secures all legacy RPCs within the RPC Locker.

This transition of VISTA's interfaces to the Secure Access Framework for the Enterprise (SAFE) Interface is summarized in the figure below.

![VISTA-SAFE](https://github.com/vistadataproject/documents/blob/master/images/VISTA-SAFE2.png)



