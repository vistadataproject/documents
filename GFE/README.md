## Government Furnished Equipment and Information (GFE / GFI)

As stated in the PWS, within 30 days of contract award the Government will provide access to:

### VISTA Systems

VISTA<br>System | DISA<br>Security | Notes
:---: | :---: | :---
Data Dictionary  | NA | Data Dictionary (DD) extracts from at least five current operational VISTA systems. These DD are automatically extracted from any VISTA instance and converted to the JSON-LD form using the "DDJLD Maker" routine, as seen on the architectural diagram [here](https://github.com/vistadataproject/documents/blob/master/README.md). These data dictionaries contain no patient data, PHI, or PII (i.e., no sensitive information).  
Master | NA | A copy of the current authoritative Master ("Platinum") version of VISTA as maintained internally by the VA. Metadata from this must be complete and without any alterations or redactions. The metadata does not contain any patient data, PHI, or PII (i.e., no sensitive information).
Test Patients  | NA | A copy of a VISTA with test patients used by VA for internal projects.
De-identified  | NA | A copy of VISTA with real but de-identified patient data. 
Production| SBU |An exact clone of at least one current operational VISTA ("Production Clone" or “Test VISTA”). This will be kept within the DoD NIPR network, as it will have non de-identified patient data.


In addition, the Project requests additional GFE and GFI be provided within 30 days of contract award to successfully execute the Project:

### VISTA Dependencies

Artifact(s) | Notes
:---  | :---
VPR RPC  |  A copy of the latest version of the VPR RPC software and documentation.
Fileman Namespaces Listing  | The latest copy of the FileMan namespace spreadsheet.
New Fileman Namespace  | A FileMan namespace exclusively for the Team to allow for the creation of Project files and fields in FileMan.
Integration Agreements | Access to the most up-to-date VISTA Integrations Agreements (sometimes called IAs), or Database Administrator Integration Agreements (DBIAs).
Cache Licenses  | Sufficient InterSystems Cache licenses to host FileMan Test VISTA systems.
Sandbox account  | VA VISTA Sandbox Account with full Linux VM.

In the absence of Government written disagreement as to the provision of the above stated GFE/GFI, the Team will understand that such GFE/GFI will be delivered within 30 days of contract award.


## Information Security

The Defense Information Services Agency (DISA) Data Services portfolio provides the most secure Internet Protocol (IP)-based services possible across the DoD enterprise, based on the classification level of the information accessible, including Sensitive but Unclassified (SBU), Secret and Top Secret/Sensitive Compartmented Information (TS/SCI).

SBU IP Data provides point-to-point connectivity to DISA mission partners. This unclassified IP data service for internet connectivity and information transfer supports Department of Defense (DoD) applications such as e-mail, web services, and file transfer. The SBU IP Data service also provides DoD customers with centralized and protected access to the public internet. 

__NIPRNet__ provides support to SBU IP Data telecommunication services for combat support applications to the DoD, Joint Chiefs of Staff (JCS), Military Departments (MILDEPS), Combatant Commands (COCOM), and senior leadership. It provides seamless, interoperable, common user IP services to customers with access data rates ranging from 56 kilobits per second (Kbps) to 2.4 gigabits per second (Gbps) via direct connections to a NIPRNet router, and services to the Tactical community via Integrated Tactical-Strategic Data Network /Standard Tactical Entry Point (ITSDN/STEP) sites. It also provides access to the internet through controlled Internet Access Points.

__The NIPRNet Hardening program__ is a Defense-in-Depth Information Assurance (IA) and Computer Network Defense (CND) effort designed by DISA to satisfy some, but not all, of the requirements specified by CJCSM 6510.0. The NIPRNet Hardening Program consists of several projects that together will improve the defensive posture of all unclassified DoD networks. The Web Content Filter (WCF) program is one of the associated NIPRNet hardening programs. WCF provides boundary protection at the application layer for web (HTTP/HTTPS) traffic and provides URL filtering for requests and malware filtering on responses. WCF program efforts will assure mission execution in the face of cyber-attack by reducing the NIPRNet attack surface and improving information to attack diagnosis, detection, and response (A2DR) systems. The WCF will provide uniform protections for clients against web vulnerabilities. This unclassified IP data service for internet connectivity and information transfer supports DoD applications such as email, web services, and file transfer. The SBU IP Data service also provides DoD mission partners with centralized and protected access to the public internet. This service supports up to and including SBU security classification.

In addition, the __NIPRNet Federated Gateway (NFG)__ architecture implements enterprise capabilities that support additional DoD-wide solutions that protect against dangerous protocols, secure DoD-wide Domain Name Service (DNS), and secure enterprise-wide support to the teleworking workforce. This creates a clear boundary between DoD and others; enables improved sharing with key partners; and focuses cyber-attack detection, diagnosis, and reaction on the most important DoD missions. This gives DoD some ability to maneuver at the boundary in response to cyber-attacks.


__DoD Data Security__
* [DISA](http://disa.mil/Network-Services/Data)
* [NIPRNET](https://en.wikipedia.org/wiki/NIPRNet)
* [NIPRNET vs SIPRNET](http://www.differencebetween.net/technology/protocols-formats/differences-between-niprnet-and-siprnet)
* [Sensitive but Unclassified IP Data](http://disa.mil/Network-Services/Data/SBU-IP#Section2)


## PJITC / ITEC

__The PJITC ITEC provides the highest level of information security available within the DoD network, including:__
* .COM
* NIPRNET
* Classified

#### PJITC
The Pacific JITC is the Military Health System's (MHS's) research center for joint concept technology development, prototyping, and piloting of IT products and services to support the Department of Defense (DoD) medical readiness requirements and IT modernization needs across the medical continuum of care. The Pacific JITC is composed of two major components: The Integrated Test and Evaluation Center (ITEC), and the Biotechnology Hui.  

Based in Hawaii, the mission of Pacific JITC is to rapidly research, test and develop warfighter medical solutions and products through pilots or prototypes that provide mission critical value and actionable information to the DoD, including the Services, Combatant Commanders, and the Department of Veterans Affairs (VA).

#### ITEC
Located in Kihei, HI, the Pacific JITC’s Integrated Test and Evaluation Center (ITEC) is the first DoD/VA integrated lab to virtualize  mission-critical enterprise systems. This center provides an agile computing environment that supports military health and interagency research & development, testing, and evaluation missions.  

The ITEC provides the infrastructure to support projects focused on piloting, prototyping, and proof of concept to refine requirements. This allows the customer to focus efforts on the applications rather than the necessary IT infrastructure/environment. Providing a rapidly deployable, least constrictive, yet secure, environment, the ITEC is capable of being the compute resource for both short- and long-term projects.

__Links:__
* [PJITC Main Website](http://health.mil/pjitc)
* [Pilots, Projects, and Initiatives](http://www.health.mil/About-MHS/Defense-Health-Agency/Health-IT/Health-IT-Innovation-and-Advanced-Technology-Development/Pacific-Joint-Information-Technology-Center)
* [Fact Sheet](https://github.com/vistadataproject/documents/blob/master/PJITC/PJITC-Overview-HIT_Research-Jan2015.pdf)
* [Services](http://deploytech.dhhq.health.mil/pacificjitc/services.aspx)
* [Overview and Computing Resources](http://www.health.mil/Military-Health-Topics/Technology/Support-Areas/Health-IT-Research-and-Innovation/Joint-Integrated-Test-and-Evaluation-Center)


![](/images/pjitc/itec_3.png)


