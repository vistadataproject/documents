### VISTA Baseline Architecture


### Security
What are the current security layers, features, issues, vulnerabilities?

System | Security Layers and Issues
--- | ---
VISTA/CPRS | 
MDWS | ??
JLV | ??
VPR | ??
eHMP | ??


### Read/Write
What are the current read/write capabilities 

System | Read/Write | Notes
---|---|---
VISTA /CPRS | read/write | CPRS RPC-based
MDWS | read-only | NA
JLV | read-only | NA
VPR | read-only | NA
eHMP | read-only | CPRS RPC-based



### Transaction Processing
What are the current network latency for Reading any data to VISTA? Writing? Transaction processing? 

System |  Functionality | Latency / Throughput
---|---|---
VISTA /CPRS | READ/WRITE |   < 0.2 sec for all transactions <br> This is the gold standard
MDWS | READ | Depends on wrapped CPRS RPCs + mid-tier Java code
JLV | READ|  Depends on wrapped CPRS RPCs + mid-tier Java code
VPR | READ|  Depends on wrapped CPRS RPCs + mid-tier Java code
eHMP | READ |  Depends wrapped CPRS RPCs  + new RPCs +  mid-tier Javascript and Java code + External Sync services

