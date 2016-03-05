### VISTA Data Project: MITRE Review

Note: VISTA Data Project can only be measured relative to the existing architecture, not in a vacuum.

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



## Assumptions

* By virtue of eHMP being largely coded in Javascript and node.js, the VA has decided that node.js is legitimate for production projects
* the backdrop to this decision was the conspicuous failure of numerous mid-tier Java wrappers for VISTA
* By virtue of its Florida contract for node.js, the VA has decided that co-resident MUMPs and node.js enabled Javascript is productive and practical
* By virtue of inclusion in all official releases for many years, Intersystems views in-process node.js coding with MUMPS as both practical and maintainable
* Javascript is the most popular coding language in the world and node.js adoption continues to grow for mainstream production projects
* Non-CPU bound, in process "fetch and insert" logic is ALWAYS faster than on-the-network equivalents. 

Endorsement:  2 x VA, 1 by MUMPS vendor, 1 about mainstream coding and 1 obvious...
