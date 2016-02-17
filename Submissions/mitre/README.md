### VISTA Data Project: Performance Metrics

__The VISTA Data Project features can only be measured relative to the existing architecture, not in a vacuum__.

### Security
What are the current security layers, features, issues, vulnerabilities?

System | Security Layers and Issues
--- | ---
VISTA/CPRS | 
MDWS | ??
JLV | ??
VPR | ??
eHMP | ??
VDP | On-the-data, Patient-centric security; Model-based security.


### Read/Write
What are the current read/write capabilities 

System | Read/Write | Notes
---|---|---
VISTA /CPRS | read/write | CPRS RPC-based
MDWS | read-only | NA
JLV | read-only | NA
VPR | read-only | NA
eHMP | read-only | CPRS RPC-based
VDP | READ/WRITE, SYMMETRIC | Data model based



### Transaction Processing
What are the current network latency for Reading any data to VISTA? Writing? Transaction processing? 

System |  Functionality | Latency / Throughput
---|---|---
VISTA /CPRS | READ/WRITE |   < 0.2 sec for all transactions <br> This is the gold standard
MDWS | READ | Depends on wrapped CPRS RPCs + mid-tier Java code
JLV | READ|  Depends on wrapped CPRS RPCs + mid-tier Java code
VPR | READ|  Depends on wrapped CPRS RPCs + mid-tier Java code
HMP | READ |  Depends wrapped CPRS RPCs  + new RPCs +  mid-tier Javascript and Java code + External Sync services
eHMP | READ |  ???



MITRE Team:

* Castleberry, John E. [jcastleberry@mitre.org] - LEAD
* Shaw, Kevin R. [kshaw@mitre.org]
* Esfarjani, Maryam [mesfarjani@mitre.org]
* Pulvermacher, Mary K. [pulver@mitre.org]
* Grayeli, Parisa [pgrayeli@mitre.org]
