# VISTA Data Project

The VISTA Data Project is a new data-centric, model-driven approach to VA VISTA master data management and interfacing.  VISTA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  

Now, for the first time, VISTA's native transactional data model will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric (bidirectional), server-side interface to all VISTA data. This is model is in turn normalized across all VISTA data models creating a Master VISTA Data Model (__MVDM__), which allows secure read-write to all 131 VISTA systems enterprise-wide with one single mechanism .

##  VISTA's new SAFE Interface
Current VISTA interfaces, both new and legacy, wrap MUMPS remote procedure calls (RPCs) within various __mid-tier__ object models  __above the RPCs__ (figure below, left). This dependency on and encapsulation of RPCs within the mid-tier model not only fails to remediate, but propagates forward all the problems inherent with the legacy MUMPS code and RPCs - most notably lack of auditing and security.

In contrast, the native, server-side transactional Master VISTA Data Model (MVDM) is __under the RPCs__ (figure below, right), thus eliminating all the issues of the legacy MUMPS code and RPCs.  The MVDM provides a single, standardized, secure, server-side interface to all VISTA data across all VISTA systems for all new clients, and is backwards compatible and remediates, audits, isolates, and secures all legacy RPCs above the MVDM within the RPC Locker.

The transition of VISTA's interface to the MVDM-based __Secure Access Framework for the Enterprise (SAFE)__ is summarized in the figure below.


![VISTA-SAFE](https://github.com/vistadataproject/documents/blob/master/images/VISTA-SAFE-10.png)
<br><br><br>

For a technical overview of the VISTA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background)


