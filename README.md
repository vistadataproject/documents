
# VISTA Data Project

The Veterans Information Systems Technology Architecture (VISTA) is the U.S. Department of Veterans Affairs comprehensive integrated  clinical, business, and administrative information system that supports the operations of over 1200 VA hospitals and clinics nationwide.  

The VISTA Data Project is a new data-centric, model-driven approach to VISTA master data management, interfacing, and security.  VISTA's data model - the roadmap to all of VA's institutional, business, and clinical processes and data - has evolved organically over the past 35 years, but has not been surfaced and leveraged in computable form. 

Now, for the first time, VISTA's native data model - the __VISTA Data Model__ (VDM) - will be comprehensively exposed, enriched, and operationalized as a single, secure, symmetric read-write, server-side interface to all clinical operational VISTA data.   The VISTA Data Model is in turn normalized across all local VISTA models creating a national, standardized __Master VISTA Data Model__ (MVDM), alowing transactions across all 100+ VISTA systems enterprise-wide using a single, standard, secure mechanism. 

### New, Secure Client Interfaces

Current VISTA interfaces, both new and old, wrap legacy code and remote procedure calls (RPCs) within various __mid-tier__  models __above the RPCs__ (figure below, left). This dependency on and encapsulation of RPCs within a mid-tier model not only fails to remediate, but propagates forward all the problems inherent with the legacy MUMPS code and RPCs - most notably lack of auditing and security.


### VISTA Data Project Overview

![vdp-transition](https://github.com/vistadataproject/documents/blob/master/images/vdp-transition-20170312.png)

<br><br><br>

For a technical overview of the VISTA Data Project, [click here](https://github.com/vistadataproject/documents/tree/master/Background)


