# VISTA Data Project

The VISTA Data Project is a new data-centric, model-driven approach to VA VISTA master data management and interfacing.  VISTA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form.  

Now, for the first time, VISTA's native "on-the-metal" transactional data model will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric (bidirectional), server-side interface to all VISTA data. This  model is normalized across all VISTA data models creating a Master VISTA Data Model (__MVDM__), which allows secure read-write to all 131 VISTA systems enterprise-wide with one single, standard, secure mechanism .

##  VA VISTA's new SAFE Interface
Current VA VISTA interfaces, both new and legacy, wrap MUMPS remote procedure calls (RPCs) within various __mid-tier__ object models  __above the RPCs__ (figure below, left). This dependency on and encapsulation of RPCs within the mid-tier model not only fail to remediate, but propagates forward all the problems inherent with the legacy MUMPS code and RPCs - most notably lack of auditing and security.

In contrast, the operational Master VISTA Data Model (MVDM) is __server-side__ and __below the RPCs__ (figure below, right) which enables auditing, isolation, and emulation of the legacy RPCs within the RPC Locker above the MVDM.   MVDM provides a modern, industry-standard, secure, service-based interface across all VISTA systems for all clients, both old and new.  For the legacy clients, MVDM provides a backwards compatible interface that audits, isolates, and secures all legacy RPCs above the MVDM within the RPC Locker. For the new clients, MVDM services provides transactions through the MVDM with modern secure web services, allowing new clients to be developed with all of the most current tools and technologies.

The transition of VISTA's interface to the MVDM-based __Secure Access Framework for the Enterprise (SAFE)__ is summarized in the figure below.


![VISTA-SAFE](https://github.com/vistadataproject/documents/blob/master/images/VISTA-SAFE-10.png)
<br><br><br>

For a technical overview of the VISTA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background)


