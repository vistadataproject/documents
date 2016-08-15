# VISTA  Architecture
Baseline VISTA Architecture as of January 2016.

Links | Notes
--- | ---
[System Overview]( https://www.osehra.org/wiki/osehra-system-architecture) | System overview, with commentary by the original VISTA data architect, Tom Munneke 
[Component Map](http://architecture.osehra.org) | Interactive map of VISTA components: 


![vista baseline](http://www.osehra.org/sites/default/files/2011_system_architecture_baseline_0.jpg)



### Technology Layers

Layer | Technology | Notes
---|:---:|--- 
CPRS | Delphi | Thick client
Network | TCP/IP | 
RPC Broker | M | Interface to external systems
Applications (176) | M | Namespaced applications. Also known as Packages.
Application Framework | M | Kernel/Tools. Provides common services:  Security, Menu Management, Taskman, Mailman (SMTP), Package Manager and Distribution (KIDS)
DBMS | M | Fileman. Set of APIs, utility functions, search/edit/inquire/print, and data dictionary utilities. Provides a data-dictionary-driven hierarchical file storage mechanism
Database | M | Global namespaces, data dictionary, hierarchical files
Global Storage | M | multidimensional key-value storage engine (GTm, Cache)
OS | Linux/Win | Operating System

M code is interpreted real-time (not compiled or linked), thus allowing an incredible degree of integration across all applications and across all data.


Comparison of Technology Stacks:

Version | Stack | Data Access
---|---|---
VISTA baseline | M/FM/ {APIs, HL7, M procedural code, interface code} | fixed, narrow data slices (code-locked)
NodeVISTA | M / FM /NodeM/ {RPC wrappers} / Javascript | fixed, narrow data slices (rpc code-locked)
VDM |  M / FM / NodeM / VDM {JSON-LD} / Javascript | Comprehensive access to all VISTA data via one mechanism (data-centric) (read-only)
VDMN |  M / FM / NodeM / VDMN {JSON-LD} / Javascript | Consistent read / write across VISTA instances



### Questions:

* What layers and logic does data pass through during one read/write operation from CPRS to the Global Storage?  
* Where and how is security enforced? 
* Where is the busines logic?


### Security
What are the current security layers, features, issues, vulnerabilities?

System | Security Layers and Issues
--- | ---
VISTA/CPRS | Security depends on privileges to execute menu items from the legacy roll-and-scroll interface, which is based on the Kernel module. It is not based on menus that current users have any access to (i.e. obfuscated), nor is it based on any current user interface, which are all graphical (CPRS, MDWS, JLV, HMP).  Fundamentally, this is an 'action-based' model.  Is agnostic to *what* the data is.  Vulnerability:  If an end-user is allowed to execute any menu item, he can exeute that menu item for *all 8 million veteran patients*. It is not patient- nor provider-specific.  There is no Role-based security.  There is no two-factor security.  There is no 'on-the-data security'.  The cypher that VISTA and CPRS share is hidden deep in each system, but is not encrypted.  This is 'security through obfuscation'. It would be easy to find where this cypher file is. Security should be through encryption, not obfuscation.   
MDWS | Based on CPRS security.
JLV | Based on CPRS security.
VPR | Based on CPRS security.
eHMP | Based on CPRS security.


### Read/Write
What are the current read/write capabilities 

System | Read/Write | Notes
---|---|---
VISTA /CPRS | read/write | CPRS RPC-based
MDWS | read-only | wraps CPRS RPCs
JLV | read-only | wraps CPRS RPCs
VPR | read-only | bundles CPRS RPCs
eHMP | read-only; limited to code-based, RPC-based stateless write | based on VPR RPCs


### Transaction Processing
What are the current network latency for Reading any data to VISTA? Writing? Transaction processing? 

System |  Functionality | Latency / Throughput
---|---|---
VISTA /CPRS | READ/WRITE |   < 0.2 sec for all transactions <br> This is the gold standard
MDWS | READ | Depends on wrapped CPRS RPCs + mid-tier Java code
JLV | READ|  Depends on wrapped CPRS RPCs + mid-tier Java code
VPR | READ|  Depends on wrapped CPRS RPCs + mid-tier Java code
eHMP | READ |  Depends wrapped CPRS RPCs  + new RPCs +  mid-tier Javascript and Java code + External Sync services

