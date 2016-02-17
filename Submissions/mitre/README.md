### VDP Outcomes Review

MITRE Team

* Castleberry, John E. [jcastleberry@mitre.org] - LEAD
* Shaw, Kevin R. [kshaw@mitre.org]
* Esfarjani, Maryam [mesfarjani@mitre.org]
* Pulvermacher, Mary K. [pulver@mitre.org]
* Grayeli, Parisa [pgrayeli@mitre.org]


Key Tasks:  Performance Metrics for VDP __relative to the existing architecture__:


### Security
What are the current security layers, features, issues, vulnerabilities?

System | Security Layers and Issues
--- | ---
VISTA/CPRS | 
MDWS | 
JLV | 
VPR | 
eHMP | 


### Read/Write
What are the current read/write capabilities 

System | Read/Write | Notes
---|---|---
VISTA /CPRS | read/write | 
MDWS | read-only | 
JLV | read-only | 
VPR | read-only | 
eHMP | read-only | 



### Transaction Processing
What are the current network latency for Reading any data to VISTA? Writing? Transaction processing? 

System |  Functionality | Latancy
---|---|---
VISTA /CPRS | read/write |   < 0.2 sec for all transactions <br> This is the gold standard
MDWS | read-only | Restricted to a subset of CPRS RPCs
JLV | read-only |  Restricted to a subset of CPRS and VPR RPCs
VPR | read-only |  Restricted to the VPR RPCs
eHMP | read-only |  ???
