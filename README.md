# VISTA Data Project

The VISTA Data Project is a new data-centric, model-driven approach to VA VISTA master data management and interfacing.  VISTA's master data model - the roadmap to all of VA's institutional, business, and clinical know-how and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  

Now, for the first time, VISTA's native transactional data model will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric (bidirectional), server-side interface to all VISTA data. This Master VISTA Data Model (__MVDM__) bridges all local VISTA models,  allowing secure read-write to all 131 VISTA systems enterprise-wide with a single mechanism .

##  VISTA's new SAFE Interface
Current VISTA interfaces, both new and legacy, wrap MUMPS remote procedure calls (RPCs) within various mid-tier object models  __above the RPCs__ (figure below, left). This dependency on and encapsulation of RPCs within the mid-tier model not only fails to remediate, but propagates forward all the problems inherent to MUMPS RPCs - most notably lack of auditing and security.

In contrast, the native, server-side transactional Master VISTA Data Model (MVDM) is __under the RPCs__ (figure below, right), and not only provides a single, standard, secure, server-side interface to all VISTA data for all new clients, but is backwards compatible and remediates, audits, and secures all legacy RPCs within the RPC Locker.

This transition of VISTA's interface to the MVDM-based Secure Access Framework for the Enterprise (SAFE) is summarized in the figure below.

![VISTA-SAFE](https://github.com/vistadataproject/documents/blob/master/images/VISTA-SAFE9a.png)
<br><br><br>

For a more detailed overview of the VISTA Data Project, [read here](https://github.com/vistadataproject/documents/tree/master/Background)


