### VISTA and Derivative Systems: Baseline Function


### Security
What are the current security layers, features, issues, vulnerabilities?

System | Security Layers and Issues
--- | ---
VISTA/CPRS | Security depends on privileges to execute menu items from the roll-and-scroll interface, which is based on the Kernel module. An 'action-based' model.  Is agnostic to *what* the data is.  Vulnerability:  If an end-user is allowed to execute any menu item, he can exeute that menu item for all 8 million veteran patients. It is not patient- nor provider-specific.  There is no Role-based security.  There is no two-factor security.  There is no 'on-the-data security'. There is no encryption.
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

