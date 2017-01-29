# VISTA Data Project

The VISTA Data Project is a new data-centric, model-driven approach to VA VISTA master data management and interfacing.  VISTA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.   

Now, for the first time, VISTA's true, native, transactional data model - the **VISTA Data Model** - will be comprehensively exposed, enriched, and operationalized as a secure, symmetric (bidirectional), server-side interface to all VISTA data.  

The VISTA Data Model (VDM) is in turn normalized across all local VISTA systems creating an enterprise __Master VISTA Data Model (MVDM__), which allows secure read-write transactions to all 131 VISTA systems throughout the enterprise with one single, standard, secure mechanism.


##  VISTA's new SAFE Interface
Current VISTA interfaces, both new and old, wrap legacy code and remote procedure calls (RPCs) within various __mid-tier__ object models  __above the RPCs__ (figure below, left). This dependency on and encapsulation of RPCs within the mid-tier model not only fails to remediate, but propagates forward all the problems inherent with the legacy MUMPS code and RPCs - most notably lack of auditing and security.

In contrast,the Master VISTA Data Model (MVDM) is __server-side__ and __below the RPCs__ (figure below, right), thus allowing parallel interface paths. For legacy clients, this supports a backwards compatible interface that audits, isolates, and secures legacy RPCs above the MVDM within the __RPC Locker__. For  new clients, __MVDM Services__ provide modern secure interfacing services directly to MVDM, eliminating the need for any legacy code or infrastructure, and allows rapid new client creation with the most current tools and technologies.

The transition of VISTA's interface to the MVDM-based __Secure Access Framework for the Enterprise (SAFE)__ is summarized in the figure below.


![VISTA-SAFE](https://github.com/vistadataproject/documents/blob/master/images/VISTA-SAFE-20170115.png)
<br><br><br>

For a technical overview of the VISTA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background)


