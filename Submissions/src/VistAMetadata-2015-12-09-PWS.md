## PERFORMANCE WORK STATEMENT

INTERAGENCY AGREEMENT
BETWEEN
VETERANS HEALTH AGENCY (VHA)<br>
AND
DEFENSE HEALTH AGENCY (DHA)

Agreement No.: VA118-15-IA

Part B Identifier: VA VISTA Metadata Program

Veterans Health Information Systems  and Technology Architecture (VISTA) Metadata Audit, Analytics, and Automation

Pacific Joint Information Technology Center

Date: 12/09/2015

### Contents
* Part 1: [General Information](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#part-1-general-information); and  [Data Rights](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#data-rights)
* Part 2: [Definitions and Acronyms](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#part-2--definitions--acronyms)
* Part 3: [Government Furnished Property, Equipment, and Services](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#part-3-government-furnished-property-equipment-and-services)
* Part 4: [Contractor Furnished Items](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#part-4-contractor-furnished-items-and-services)
* Part 5: [Specific Tasks](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#part-5--specific-tasks)
* Part 6: [Other Terms, Conditions, and Provisions](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#part-6-other-terms-conditions-and-provisions)
* Part 7: [Applicable Publications](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#part-7-applicable-publications)
* Part 8: [Technical Exhibits](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.md#part-8-technical-exhibits)






# PART 1: GENERAL INFORMATION

## 1.1 Objective

The objective of this performance work statement (PWS) is to prototype and demonstrate the exposure, analytics, and automation of VA VISTA metadata using modern, machine-processable, web-centric metadata standards, providing a single comprehensive security-enabled read/write data model for all VA VISTA data across all VA VISTA operational systems, establishing a common technical foundation for master data management and computable data representation and exchange between VA and DoD clinical information systems. 


## 1.2 Background

The Veterans Health Administration (VHA) is the largest integrated healthcare delivery system in the United States with over 1,700 sites of care serving 8.76 million Veterans. The mission of VHA is to honor America's Veterans by providing exceptional healthcare services lifelong for all veterans in need, and to provide the highest quality care, everywhere.

The Veterans Information Systems and Technology Architecture (VISTA)1 is a nationwide, comprehensive patient-centric integrated inpatient-outpatient Electronic Health Record (EHR) designed for and by VA clinicians to support all VHA clinical and business functions, and manages all veteran healthcare data and transactions. VISTA’s database is the Congressionally-designated authoritative data source for all Veterans health care delivery throughout the United States.  VISTA is production-proven for over thirty years, and is familiar to and has been used by 65% of all physicians in the United States.  VISTA is purpose-built for VHA and contains over three decades of institutional know-how of all business processes and patient care protocols of the VHA, in addition to over thirty years of patient data, and currently continues to grow at a rate of over one million additional lab tests, medication orders, imaging studies, and documents each day.  The cumulative knowledge and data stored in VISTA today is in the hundreds of billions of facts in structured, computable (but nonstandard) form. VISTA is also the evidence-based data engine that continuously validates all data and transactions (over 50 million real-time quality and safety checks on all patient care data and transactions each day) and is thus an essential tool in supporting VHA’s mission of consistently and reliably providing the safest, highest quality, lifelong care for all veterans, everywhere. VISTA has received Presidential awards for all these accomplishments, and continues today to consistently rank highly in national surveys by physicians for user satisfaction and for supporting high quality care2.

In order to meet changing clinical and regulatory requirements VA must continuously evolve VISTA.  The requirements of Public Law 113-066 (P.L. 113-066), SECTION 713 – “ELECTRONIC HEALTH RECORDS OF THE DEPARTMENT OF DEFENSE AND THE DEPARTMENT OF VETERANS AFFAIRS,” of the National Defense Authorization Act (NDAA) for Fiscal Year (FY) 2014 state that by December 31, 2016, VA must achieve an interoperable EHR with an integrated display of data with the Department of Defense (DoD) and private sector providers. The interoperable EHR must exchange all relevant health care data between DoD and VA computable in near real time.

This NDAA Congressional mandate for VA-DoD EHR interoperability is to a higher standard of interoperability than required for private sector EHRs under the U.S. Health and Human Services Health Information Technology (HIT) Meaningful Use (MU) incentive program. Meaningful Use Stage 3 certification3 (the latest version as of 2015) requires that a EHR shall be capable viewing, downloading, or transmitting a specially-formatted continuity of care document (CCD) from another EHR within four days of service for at least 50% of transitions of care4.  The information content of the CCDs, however, is inconsistent between implementations leading to unpredictable data quality 5, rendering the data non-computable. Meaningful Use standards thus provide only a fraction of the information in the EHR (only specific documents) only a fraction of the time (50% of transitions) and are not computable (viewable only) nor real-time (four days latency).  The VA and DOD are currently meet higher standard of interoperability than this Meaningful Use standard by virtue of use of the Joint Legacy Viewer (JLV).

To meet the more stringent Congressional NDAA mandate for the computable exchange of data, both VA and DoD require precise, granular, machine-computable definition of the data and metadata across all their authoritative primary source information systems at the data element level, not at the document-level.  VA and DoD therefore need to future-enable their EHR data by using modern, machine-processable metadata standards to express the data within all their existing diverse EHR systems. Such a metadata-centric approach was recommended by the President’s Council of Advisors on Science and Technology in their Report to the U.S. President to realize the full potential of Health Information Technology to improve healthcare for Americans6.

The DoD’s Defense Health Agency (DHA) has successfully demonstrated a modern metadata-centric approach to exposing and managing the data in DHA’s authoritative clinical information system, the Composite Health Care System (CHCS), which, like the VISTA database in VHA, contains virtually all of the health agencies’ structured clinical data. (DHA has a separate database for documents, which are all unstructured). This project was the Transition Application Plan Support (TAPS) and was carried out at the Pacific Joint Information Technology Center (PJITC). The objective of TAPS was to support the transition of all CHCS systems and data to an industry-standard, machine-processable metadata representation in support of migration of all CHCS data for their future architecture. The TAPS project successfully demonstrated translation of a live CHCS system and all its data and metadata in fully machine-processable form using the Linked Data standard. 

Linked Data7, also known as the Resource Description Framework (RDF), is the World Wide Web Consortium (W3C)8 Internet standard for representing machine-processable structured data and metadata on the web, and enables distributed, heterogeneous data query and integration at web scale. The world’s largest search engines all use a common RDF model to structure and index the data within the billions of web pages to support semantic search across all structured data on the web.9 Other Federal agencies have adopted Linked Data (RDF) to support master data management including the National Library of Congress to index and search all published works10, the U.S. National Library of Medicine to index and catalog the world’s largest collection of clinical and lifesciences publications11, and the U.S. HealthData.gov to publish thousands of public structured health datasets 12.  With this convergence of the federal health agencies on this common metadata standard, this means patient data can be linked across agencies and also to a wealth of health-related resources.

The VA VISTA Metadata Audit, Analytics, and Automation project intends to use the knowledge and expertise gained by DoD through the TAPS project as a springboard from which to prototype a new, common, shared interagency approach for machine-processable metadata management for current operational systems in VA and DoD using modern, international, web-standard, web-scale representation. 

VHA will be converging to the DHA TAPS approach in the ongoing efforts in Pacific JITC to support a common Linked Data (metadata) approach to enterprise metadata management, and support convergence on metadata standards and master data management between departments. The strategic advantage for VHA to collaborate with DHA at this close technical level is specifically to leverage the expertise of DHA in its TAPS work on DoD’s CHCS and to replicate this for VA’s VISTA.  This will allow VHA and DHA to converge on this metadata-centric approach, and enable the departments to use shared tooling and expertise going forward.

The objective of this project is to develop and demonstrate repeatable, scalable, automation of metadata management across all VA VISTA systems and between VA-DoD clinical systems. This project supports many other benefits and goals specific to each agency as they move in their respective directions. However, the need for first establishing enterprise automation of metadata and master data management within and between both organizations is a common requirement to achieve computable interoperability today and into the future.


## 1.3 Contract

This is a non-personnel services contract to provide Program Management, Software Architecture and Technology Support, and Application Development Assessment Support.  The Government shall not exercise any supervision or control over the contract service providers performing the services herein.  Such contract service providers shall be accountable solely to the Contractor who, in turn is responsible to the Government.  


## 1.4 Scope

The vendor shall provide all necessary personnel, program management, materials, hardware, software, licenses administrative support, travel, and technical services required to meet the performance objectives outlined in this Performance Work Statement (PWS) with primary emphasis in the areas of Program Management, Software Architecture and Technology Support, and Application Development Assessment.

## 1.5 Period of Performance

The period of performance shall be for one (1) Base Year of 12 months, starting from Date of Contract Award

## 1.6 General Information

#### 1.6.1 Quality Control (Deliverable #1B): 
The contractor shall develop and maintain an effective quality control program to ensure services are performed in accordance with this PWS.  The contractor shall develop and implement procedures to identify, prevent, and ensure non-recurrence of defective services.  The contractor’s quality control program is the means by which he assures himself that his work complies with the requirement of the contract.  The QCP is to be delivered within 30 days after contract award.  Three copies of a comprehensive written QCP shall be submitted to the KO and COR within 5 working days when changes are made thereafter. After acceptance of the quality control plan the contractor shall receive the contracting officer’s acceptance in writing of any proposed change to his QC system.  
Quality Control Plan (Deliverable #1B )

#### 1.6.2 Quality Assurance: 
The government shall evaluate the contractor’s performance under this contract in accordance with the Quality Assurance Surveillance Plan.  This plan is primarily focused on what the Government must do to ensure that the contractor has performed in accordance with the performance standards.  It defines how the performance standards will be applied, the frequency of surveillance, and the minimum acceptable defect rate(s).       

#### 1.6.3 Recognized Holidays
New Year’s Day				Labor Day
Martin Luther King Jr.’s Birthday		Columbus Day
President’s Day				Veteran’s Day
Memorial Day					Thanksgiving Day
Independence Day				Christmas Day

#### 1.6.4 Hours of Operation:  
The contractor is responsible for conducting business, between the hours of 0900 and 1700 Monday thru Friday in their respective time zone except Federal holidays or when the Government facility is closed due to local or national emergencies, administrative closings, or similar Government directed facility closings.  For other than firm fixed price contracts, the contractor will not be reimbursed when the government facility is closed for the above reasons.  The Contractor must at all times maintain an adequate workforce for the uninterrupted performance of all tasks defined within this PWS when the Government facility is not closed for the above reasons.  When hiring personnel, the Contractor shall keep in mind that the stability and continuity of the workforce are essential.    
1.6.5 Place of Performance: The work to be performed under this contract will be performed at the Contractor facility. 

#### 1.6.6   Type of Contract:  
The government will award a Firm Fixed Price contract.


#### 1.6.7   Security Requirements

1.6.7.1 Physical Security: The contractor shall be responsible for safeguarding all government equipment, information, and property provided for contractor use.  At the close of each work period, government facilities, equipment, and materials shall be secured.

1.6.7.2 Key Control: The Contractor shall establish and implement methods of making sure all keys/key cards issued to the Contractor by the Government are not lost or misplaced and are not used by unauthorized persons.  NOTE: All references to keys include key cards.  No keys issued to the Contractor by the Government shall be duplicated.  The Contractor shall develop procedures covering key control that shall be included in the Quality Control Plan.  Such procedures shall include turn-in of any issued keys by personnel who no longer require access to locked areas.  The Contractor shall immediately report any occurrences of lost or duplicate keys/key cards to the Contracting Officer.

1.6.7.2.1. In the event keys, other than master keys, are lost or duplicated, the Contractor shall, upon direction of the Contracting Officer, re-key or replace the affected lock or locks; however, the Government, at its option, may replace the affected lock or locks or perform re-keying.  When the replacement of locks or re-keying is performed by the Government, the total cost of re-keying or the replacement of the lock or locks shall be deducted from the monthly payment due the Contractor.  In the event a master key is lost or duplicated, all locks and keys for that system shall be replaced by the Government and the total cost deducted from the monthly payment due the Contractor.

1.6.7.2.2. The Contractor shall prohibit the use of Government issued keys/key cards by any persons other than the Contractor’s employees.  The Contractor shall prohibit the opening of locked areas by Contractor employees to permit entrance of persons other than Contractor employees engaged in the performance of assigned work in those areas, or personnel authorized entrance by the Contracting Officer.

#### 1.6.8   Special Qualifications: None.

#### 1.6.9 Post Award Conference/Periodic Progress Meetings
The Contractor agrees to attend any post award conference convened by the contracting activity or contract administration office in accordance with Federal Acquisition Regulation Subpart 42.5. The contracting officer, Contracting Officers Representative (COR), and other Government personnel, as appropriate, may meet periodically with the contractor to review the contractor's performance.  At these meetings the contracting officer will apprise the contractor of how the government views the contractor's performance and the contractor will apprise the Government of problems, if any, being experienced.  Appropriate action shall be taken to resolve outstanding issues.  These meetings shall be at no additional cost to the government.  

#####1.6.10 Contracting Officer Representative (COR): 
The COR will be identified by separate letter.  The COR monitors all technical aspects of the contract and assists in contract administration The COR is authorized to perform the following functions: assure that the Contractor performs the technical requirements of the contract: perform inspections necessary in connection with contract performance: maintain written and oral communications with the Contractor concerning technical aspects of the contract: issue written interpretations of technical requirements, including Government drawings, designs, specifications: monitor Contractor's performance and notifies both the Contracting Officer and Contractor of any deficiencies; coordinate availability of government furnished property, and provide site entry of Contractor personnel.  A letter of designation issued to the COR, a copy of which is sent to the Contractor, states the responsibilities and limitations of the COR, especially with regard to changes in cost or price, estimates or changes in delivery dates.  The COR is not authorized to change any of the terms and conditions of the resulting order. 

##### 1.6.11 Key Personnel:  
The contractor shall provide a contract manager who shall be responsible for the performance of the work.  The name of this person and an alternate who shall act for the contractor when the manager is absent shall be designated in writing to the contracting officer.  The contract manager or alternate shall have full authority to act for the contractor on all contract matters relating to daily operation of this contract.  The contract manager or alternate shall be available between 0900 to 1700 in their respective time zone except Monday thru Friday except Federal holidays or when the government facility is closed for administrative reasons.    

##### 1.6.12 Identification of Contractor Employees: 
All contract personnel attending meetings, answering Government telephones, and working in other situations where their contractor status is not obvious to third parties are required to identify themselves as such to avoid creating an impression in the minds of members of the public that they are Government officials.  They must also ensure that all documents or reports produced by contractors are suitably marked as contractor products or that contractor participation is appropriately disclosed.  

##### 1.6.13 Contractor Travel: 
Contractor will be required to travel during the performance of this contract to attend meetings, conferences, and training.  The contractor may be required to travel to off-site training locations and to ship training aids to these locations in support of this PWS.  Contractor will be authorized travel expenses consistent with the substantive provisions of the Joint Travel Regulation (JTR) and the limitation of funds specified in this contract.  All travel requires Government approval/authorization and notification to the COR.  Projected travel is listed below:

Origin
Destination
No. of Trips
No. of People
Duration of Stay
Maui, HI
Washington DC
2
3
5


#### 1.6.14 Other Direct Costs: 
There will be no Other Direct Costs in performance of this contract. 


# Data Rights

#### 1.6.15 Data Rights: 
The Government retains full and unlimited rights to all artifacts (code, documents, materials) produced under this contract.  All artifacts are the property of the Government with all rights and privileges of ownership/copyright belonging exclusively to the Government. 

__1.6.15.1 Artifact Repository: To facilitate the management, reporting, collaboration, and continuity of access of all government artifacts and deliverables produced under this contract as a single logical unit, all artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public-facing Github repository (“Project Repository”) with clearly designated and appropriate licenses.__  Upon commencement of the contract period, the contractor shall establish the Project Repository, and provide the publically accessible URL of the Project Repository to the project manager, contracting representative, and relevant government stakeholders.  (Deliverable #1)

The Project Repository shall contain the one and only authoritative version of all artifacts produced under this contract. The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times throughout the lifecycle of the contract to support real-time collaborative development, testing, project management, progress reporting, and oversight of all authoritative artifacts in one location. At the termination of the contract the government shall take ownership of the Project Repository and all contents through the transfer of administrator privileges of the repository, allowing bulk transfer of all artifacts, and assuring future availability of all artifacts to the public, future development, and continuity management. The artifacts in the Project Repository shall have the following properties and data rights:

__1.6.15.2 All data and metadata produced under this contract must be provided in nonproprietary industry-standard machine-processable, structured form on the Project Repository and carry a Creative Commons CC0 license.__  All data must include its corresponding, complete, correct, current operational metadata (schemes, data dictionaries) in machine-processable form, such that fully automated machine interpretation, extraction, translation, loading, and migration of all data to any future data storage system may be accomplished by a third party using industry-standard tools without any loss of information content or context.  If the data is tabular, CSV is required; for all other data structures JSON-LD is required. For metadata JSON-LD is required.

__1.6.15.3 All code (software) produced under this contract shall be developed, version-controlled, and delivered in source code form with associated documentation in the Project Repository, such that real-time, contemporaneous third-party review and validation of all code in progress is possible.__  The contractor shall clearly identify all source code as either original or derivative. All code that constitutes original works shall carry an Apache 2.0 license.  All code that constitutes derivative works must carry an [OSI-approved](https://opensource.org/licenses) free and open source license. 

All source code, dependent code, libraries, or third-party code shall be in portable, industry-standard languages. If the source code requires compiling or assembling, these shall be either industry-standard open-source compilers or assemblers, or shall be provided with the software under a free and open source license that has been approved by the [Open Source Initiative](https://opensource.org/licenses) (OSI). 

All code must have corresponding documentation, version-controlled in markdown in the same repository as the source code, and contain at minimum an Installation Guide and a User Guide for the final delivered source code such that a third party may download, install and make full functional use of the delivered code as specified and intended.  The Installation Guide must list all required third-party code, libraries or other dependencies. 

__1.6.15.4  All documentation and reports produced under this contract must be provided as machine-processable industry-standard markdown in version-controlled text files on the Project Repository and carry a Creative Commons CCO license.__  From the most recent version of the markdown source, contractor shall use a documentation generator to produce all documentation in required formats. At minimum contractor shall auto-generate HTML, Word, and PDF versions of all documentation from the markdown source.  All edits, updates, and amendments to any documentation must be through changing the markdown source (not by editing the generated files), and then the documentation shall be regenerated in all required formats. All generated documentation shall reflect the most recent version of the markdown source.  Approved markdown formats include Github Markdown and Docbook. 

#### 1.6.16 Organizational Conflict of Interest:  
Contractor and subcontractor personnel performing work under this contract may receive, have access to or participate in the development of proprietary or source selection information (e.g., cost or pricing information, budget information or analyses, specifications or work statements, etc.) or perform evaluation services which may create a current or subsequent Organizational Conflict of Interests (OCI) as defined in FAR Subpart 9.5.  The Contractor shall notify the Contracting Officer immediately whenever it becomes aware that such access or participation may result in any actual or potential OCI and shall promptly submit a plan to the Contracting Officer to avoid or mitigate any such OCI.  The Contractor’s mitigation plan will be determined to be acceptable solely at the discretion of the Contracting Officer and in the event the Contracting Officer unilaterally determines that any such OCI cannot be satisfactorily avoided or mitigated, the Contracting Officer may affect other remedies as he or she deems necessary, including prohibiting the Contractor from participation in subsequent contracted requirements which may be affected by the OCI.

#### 1.6.17 Phase In / Phase Out Period:  
To minimize any decreases in productivity and to prevent possible negative impacts on additional services, the Contractor shall have personnel on board, during the sixty day phase in/ phase out periods.  During the phase in period, the Contractor shall become familiar with performance requirements in order to commence full performance of services on the contract start date.  


The contractor shall perform transition planning activities to transition business and technical domain knowledge to Pacific JITC and/or its designees via the designated Project Repository.  The contractor shall generate a phase-out transition plan that elaborates the artifacts to be transitioned on the Project Repository, and a schedule for transition completion. 
Phase-Out Migration Plan (due 30 days after contract award)  (Deliverable #1C)


# PART 2:  DEFINITIONS & ACRONYMS

## 2.1.  DEFINITIONS

2.1.1.  CONTRACTOR.  A supplier or vendor awarded a contract to provide specific supplies or service to the government.  The term used in this contract refers to the prime.

2.1.2.  CONTRACTING OFFICER.   A person with authority to enter into, administer, and or terminate contracts, and make related determinations and findings on behalf of the government.  Note: The only individual who can legally bind the government.

2.1.3.  CONTRACTING OFFICER'S REPRESENTATIVE (COR).   An employee of the U.S. Government appointed by the contracting officer to administer the contract.  Such appointment shall be in writing and shall state the scope of authority and limitations.  This individual has authority to provide technical direction to the Contractor as long as that direction is within the scope of the contract, does not constitute a change, and has no funding implications.  This individual does NOT have authority to change the terms and conditions of the contract. 

2.1.4.  DEFECTIVE SERVICE.  A service output that does not meet the standard of performance associated with the Performance Work Statement.

2.1.5.  DELIVERABLE.  Any artifact that can be physically delivered (source code, data, metadata, documentation, reports) but may include non-manufactured things such as meeting minutes.

2.1.6.  KEY PERSONNEL.  Contractor personnel that are evaluated in a source selection process and that may be required to be used in the performance of a contract by the Key Personnel listed in the PWS.  When key personnel are used as an evaluation factor in best value procurement, an offer can be rejected if it does not have a firm commitment from the persons that are listed in the proposal.

2.1.7.  PHYSICAL SECURITY.  Actions that prevent the loss or damage of Government property.

2.1.8. PROJECT REPOSITORY.  A public github repository established by contractor on github.com. This shall be the authoritative repository for all artifacts and deliverables produced under this contract.  Full access shall be given to the government and public throughout the lifecycle of the contract, permitting continuous real-time assessment and verification of all artifacts and deliverables in-progress. 

2.1.9.  QUALITY ASSURANCE.  The government procedures to verify that services being performed by the Contractor are performed according to acceptable standards.

2.1.10.  QUALITY ASSURANCE Surveillance Plan (QASP).  An organized written document specifying the surveillance methodology to be used for surveillance of contractor performance.  

2.1.11.  QUALITY CONTROL.  All necessary measures taken by the Contractor to assure that the quality of an end product or service shall meet contract requirements.

2.1.12.  SUBCONTRACTOR.  One that enters into a contract with a prime contractor.  The Government does not have privity of contract with the subcontractor.

2.1.13.  WORK DAY / WORK WEEK.  The number of hours per day the Contractor provides services in accordance with the contract.  The work week is Monday through Friday, unless specified otherwise.


## 2.2.  ACRONYMS

Term | Definition
--- | ---
ACOR | Alternate Contracting Officer's Representative
CFR | Code of Federal Regulations
CONUS | Continental United States (excludes Alaska and Hawaii)
COR | Contracting Officer Representative
COTR | Contracting Officer's Technical Representative
COTS | Commercial-Off-the-Shelf
DD254 | Department of Defense Contract Security Requirement List
DFARS | Defense Federal Acquisition Regulation Supplement
DMDC | Defense Manpower Data Center
DOD | Department of Defense
FAR | Federal Acquisition Regulation 	
HIPAA | Health Insurance Portability and Accountability Act of 1996
CO | Contracting Officer 
OCI | Organizational Conflict of Interest
OCONUS | Outside Continental United States (includes Alaska and Hawaii)
ODC  | Other Direct Costs 
PIPO | Phase In/Phase Out
POC | Point of Contact
PRS | Performance Requirements Summary
PWS | Performance Work Statement
QA | Quality Assurance
QAP | Quality Assurance Program
QASP | Quality Assurance Surveillance Plan
QC | Quality Control
QCP | Quality Control Program
TE | Technical Exhibit



# PART 3: GOVERNMENT FURNISHED PROPERTY, EQUIPMENT, AND SERVICES


## 3.1. System Access

Within 30 days of contract award the Government will provide contractor access to:

* Data Dictionary (^DD) extract from at least five current operational VISTAs. These data dictionaries contain no patient data, PHI, or PII  (i.e. no sensitive information). 
* Current authoritative Master ("Platinum") version of VISTA as maintained internally by the VA. Metadata from this must be complete and without any alterations or redactions.13  The metadata does not contain any patient data, PHI, or PII (i.e. no sensitive information). 
* Copy of a VISTA with test patients used by VA for internal projects
* Copy of at least one real operational VISTA ("Prod Clone" or “Test VISTA”) which would be kept within the NIPRed network, as it will have non de-identified patient data.
* A VISTA with real but de-identified patient data


## 3.2	Services
The Government will provide such services so as to enable timely Par.3.1 system access.

## 3.3	Facilities
The Government will provide Contractor access to the virtual resources at the Pacific JITC ITEC located in Kihei, HI to enable the Contractor to use the ITEC as a primary software development platform host and for testing for the applications. 

## 3.4 Utilities
The Government will provide such utilities to the ITEC to enable the Contractor to use the ITEC as a primary software development platform host and for testing for the applications. 

## 3.5 Equipment

The Government will provide such equipment and software at the ITEC so as to host the systems in Par. 3.1, to provide Contractor with efficient access to such systems and allow the data processing required in this project.



# PART 4: CONTRACTOR FURNISHED ITEMS AND SERVICES

## 4.1 General

The Contractor shall furnish all supplies, equipment, facilities and services required to perform work under this contract that are not listed under Section 3 of this PWS. 


## 4.2 Secret Facility Clearance:

 Not applicable



# PART 5:  SPECIFIC TASKS

## 5.0 Basic Services

The contractor shall provide all necessary personnel, program management, materials, administrative support, travel, and technical services required to meet the performance objectives outlined in this PWS with primary emphasis in the areas of Program Management, Software Architecture and Technology Support, and Application Development Assessment (Prototype Development).


## 5.1 Program Management (PM)

The contractor shall provide program management support to manage the cost, schedule, and performance of this PWS in accordance with industry best practices.  The contractor Program Manager shall be responsible for providing the status reports and other associated PM documents, and shall ensure that Program Management activities, tasks, milestones, documentation and artifacts, shall be consolidated and communicated as required. 

The contractor shall provide a Project Management Plan (PMP) to outline an overall plan/strategy to accomplish the tasks outlined in this PWS. At a minimum, the PMP shall include the risk, quality and technical management approach, work breakdown structure (WBS), schedule management approach, schedule, cost requirements, and proposed staffing plan. The PMP shall follow the format as agreed to by the Contracting Officer Representative (COR).

The contractor shall provide a quarterly strategic communications message in a mutually agreed format to report and articulate the functionality being prototyped (proof of concept) and the feasibility of transitioning the concept to a VA production setting. 
The contractor shall provide the following recurring program management activities: 

Develop, manage, and maintain a Project Schedule, and provide Monthly Updates
Ensure that all PWS requirements are performed and deliverables are submitted per agreed upon Project Schedule
Communicate regularly and effectively with the CO, Pacific JITC leadership and Stakeholder(s)
Effectively balance and schedule involvement of appropriate technical resources throughout the project lifecycle
Implement, manage, and execute a risk management process  
Provide project status reporting in monthly progress report
Develop and publish all artifacts, code, data, documentation, progress reports, and deliverables on single authoritative Project Repository  (defined in section 2.1.8) and provide unlimited access to this for all project management activities. 
Provide a quarterly strategic communications message regarding project progress and feasibility of transition to production
Perform financial management reporting, to be delivered with the monthly progress reports.. Financial reporting shall include costs to date, planned costs, variance of spend to plan and identification of any funding issues.

The lifecycle outputs of all task items produced: Software Architecture and Technology Support, Application Development Assessment, and Transition Support Planning and Phase-Out Migration and any corresponding subtasks shall be captured in fully documented, installable, and operational form on the Project Repository.  All software or code generated shall be developed on the Project Repository for continuous inspection and testing. The contractor shall post all documentation, source data, derived definitions, reports and documentation on the Project Repository for ongoing programmatic records retention.  

## 5.2 Software Architecture and Technology Support

The contractor shall provide a lead software architect for the project and engineering management support. This support includes managing and integrating a range of technical and support service disciplines.
Provide architecture and design (technical) governance across the program 
Enhance, implement, and manage the system and software engineering development processes in accordance with industry best practices, standard principals, patterns and practices 
Manage and monitor the technical execution of development activities required to enhance the project components
Conduct technical analysis and make recommendations on candidate architectural enhancements, new and enhanced solution capabilities, technologies, and standards

Throughout the lifecycle of this PWS, the contractor shall coordinate with the COR and VA Program Manager to ensure Subject Matter Expert (SME) integration at appropriate points within software architecture and engineering activities. 

Deliverables:
* Program Management Plan (Deliverable #2)
* Program Schedule and Monthly Updates (Deliverable #3)
* Monthly Progress Report (Deliverable #4)
* Quarterly Strategic Communications Message (Deliverable #5)


##  5.3 Application Development Assessment

Overview:

Foundation Metadata Support

This creates all the foundational tooling and approach for all other segments.  This provides all the raw metadata from VISTA systems for analytics, and provides the basis for the VISTA Data Model (VDM) and the enterprise, cross-VISTA normalized VISTA Data Model (VDMN).  This task is analyzing only VISTA metadata. The task is non-invasive, and leaves VISTA systems untouched and unaltered in any way.

Read/Write Enterprise Model Support

This provides the iterative steps to generate the VDMN, and steps to operationalize this with full, secure, read/write access to a VISTA instance against the VDMN, rather than a local model. This provides global enterprise read/write capability.

Operational Model Support

These tasks involve operationalizing the VDMN for specific VISTA Application models, for external Meta-models (VPR, MDWS), and for external Reference models (FHIR).  Note: at least one VDMN embedded Application model, and at least one Reference model map shall be delivered during the one-year project.


## 5.3.0 VISTA Metadata Extraction

This foundation task provides all the raw metadata from VISTA systems for analytics, and provides the basis of a normalized, enterprise data model. This creates all the foundational tooling and approach for all other segments.   

Deliverables:

Software Architecture Artifacts (VISTA Metadata) (Deliverable #6)

## 5.3.1 Comprehensive Model Exposure
The contractor shall provide comprehensive always-up-to-date, machine-processable exposure and definition of complete operational VISTA data model (VDM), based on all data dictionaries from all active VISTA instances in standard machine-processable, exchangeable form, supported by off-the-shelf tools.

In addition, the contractor shall provide an automated, triggered update of source data model to the model repository whenever Kernel Installation and Distribution System (KIDS), DIFROM.m  (M routine name; used by KIDS), or any other VISTA tools change the VISTA data dictionaries.

The expected results of these tasks shall permit analysis and enhancement of the true operational VISTA data model(s) and provide a data- and metadata-centric roadmap for auditing VISTA data. Full automation of this process allows this to be a sustainable, continuously repeatable process across all systems going forward rather than a single snapshot in time. (Note: since this is only metadata, no patient data is exposed or involved so is ‘safe’ from a patient data privacy perspective). 


The contractor shall:
Provide a native VISTA Data model (“VDM”) in a standard machine processable format that captures all the nuance in the model meta data, documented and maintained on the Project Github and usable in off-the-shelf tools
Provide date-stamped FileMan (FM) data model definitions from all active VISTAs: global definitions, dictionary code (triggers, transforms, indexes, computations), cross reference definitions (file .11) posted and maintained on Project Github. [REM: this information is meta-data and not specific patient or institutional data. As such, it can be housed in a standard github].
Document how “live VDM” is a maintainable item and can always represent the current state of the fielded VISTAs Support development of the Requirements Traceability Matrix (RTM) which shall link requirements to the desired functionality and the corresponding design, development, and testing artifacts
Deliverables: 
Machine Processable VISTA Data Model (VDM) (Deliverable #7)
Date-stamped FileMan Data Model Definitions (Deliverable #8)
Approach to “Live VDM” Maintenance of Current State (Deliverable #9)

## 5.3.2 Normalized Model
The contractor shall create a fully audited and normalized VISTA data model (VDMN) with no redundancy. 
The expected results of this task shall provide the foundation for enterprise-centric Master Data Management for VISTA. It shall provide exposure of hidden pointers and unstated references required to properly expose older, cruder models used for Scheduling and Orders. This is the foundation for code reduction and elimination of multiple overlapping extraction methods. Note: The initial VDMN will focus on only a subset of VISTA (a prototypical package such as Surgery, Scheduling, etc.) to provide a full end-to-end demonstration of the methodology.


The contractor shall:
* Provide a normalized VISTA Data Model (“VDMN”) derived from VDM, documented and maintained on the Project Github and usable in off-the-shelf tools
* Generate all heuristic code used to derive the normalized model published and maintained on the Project Github
* Provide reports on normalization and the model available on the Project Github (Wiki)
* Provide a self-contained website that visualizes every aspect of VDM, VDMN and other meta data. This output must be mainstream, d3.js-based, pure web graphics framework. 
* Provide a clear report on nuance exposed (not added but made clear) in older models such as scheduling that will aid interoperability of such data. 


Deliverables: 
Normalized VISTA Data Model (VDMN) (Deliverable #10)
Heuristic Code (Deliverable #11)
Normalization Reports (Deliverable #12)
Website that graphically depicts VDM, VDMN, and other metadata (Deliverable #13)
Report on Exposure of Older Models (Deliverable #14)


## 5.3.3 Common Repository
The contractor shall provide a centralized repository for machine processable definitions of all VISTA application metadata. This repository shall provide and store enterprise VISTA (Cross-VISTA) application metadata (lab test definitions, document template definitions, surgery meta-data, etc.) from all VA VISTA instances in one place for analysis and refinement to improve meta-data creation and applications with a focus on improving interoperability of patient data.


The contractor shall:
Provide date-stamped application meta data for lab, surgery, Text Integration Utility  (TIU) notes and other applications, in a VDMN compatible format, downloadable from the VA Metadata Github and processable using off-the-shelf tooling
Generate prototypes and documentation about meta data refinement on the VA Metadata Github
Produce documentation to detail how meta-data curation improves interoperability.
Deliverables: 
Date-stamped Metadata for lab, surgery, TIU notes and other applications in a VDMN compatible format (Deliverable #15)
Metadata Refinement Prototype with associated documentation (Deliverable #16)
White Paper on Interoperability Improvement due to Metadata Curation (Deliverable #17)

## 5.3.4 Metadata Enhancement and Linkage

FileMan is currently data-category agnostic. The contractor shall modify it reflect the broad categories of data it contains to allow management (query, security, read/write) of Patient, Institutional, Knowledge, and Systems data as distinct entities and enables patient-centric security. To this end, the contractor shall divide and tag files by usage category: Patient (P, Institution (I), Know-how (K) and System (S) information (PIKS categories).

In addition, the contractor shall support metadata linkage with at least one external Linked Data source including biological sciences, genotypes, and clinical research, examples of which shall be provided by VHA as government furnished information (GFI). For example, the contractor may use clinicaltrials.gov data to identify clinical trials on rare diseases that are planned, recruiting, under way, or completed, or linkage with Orphanet to provide insight about rare diseases, their prevalence, symptoms, treatments, and connect with rare disease experts.

The expected results of these efforts shall yield: a) Highly contextualized and personalized patient data enrichment; b) access to a broad array of drug-drug interactions mined from clinical trials, scientific literature, spontaneous adverse event reports, and molecular predictions; and c) access to the burgeoning amount of pharmacogenomics knowledge, whether curated from literature or mined from genome-wide association studies (GWAS).


The contractor shall:
Provide machine-processable annotations for data categories marking the data types of both VDM and VDMN files/classes
Develop code used to categorize the models documented and maintained on Github.
Deliverables: 
Machine-processable Annotations (Deliverable #18)
Software code (Deliverable #19)


## 5.3.5 Indexing Analytics and Search
The contractor shall develop indexing analytics for query scope improvement.  This effort shall allow full exploitation of current indexing in FileMan and suggests further indexing, all based on current FileMan facilities, to improve the range of queries supported by VISTA. This effort supports cross-patient, cross-system registries and population analytics. 
In addition, the contractor shall provide multi-column indexes to allow multi column, multi-field queries. For example, an index on State and Health Factor can quickly identify everyone who has a health factor of a particular type that is registered in a particular state.


The contractor shall:
Based on VDM exposure of VISTA indexing and data, document the range of current queries supported and suggestions regarding further indexing to allow cross-patient data analytics
Provide real-time population analytics on live operational data
Demonstrate real-time query on operational data
Verify scalability to >1 million patients.
Deliverables:
Queries & Indexing White Paper (Deliverable #20)
Operational Data Prototype (Deliverable #21)

## 5.4 Application Development Assessment (Prototypes)

## 5.4.1 Secure Read/Write Normalized VISTA Data Model
The contractor shall work with VA Program Director to prioritize the design, development, and test of a sequence of proof of concept models and functionality that can achieve all stated objectives feasible for execution during this effort.  As prioritized and agreed between VA Program Director and Pacific JITC, the contractor shall:
Make end-to-end example and demonstration of VISTA Data Model (VDM) and normalized VDM (VDMN) on subset of VISTA data, showing all steps, with components not yet implemented.


Provide meta-data driven export/import of VISTA data in industry-standard, machine-processable form to allow bulk read / extract / insert of data based on metadata in standard machine representation form and to allow bulk update of PIKS domains. 
All Data in the FileMan Test VISTA shall be captured in standard, portable machine-readable definitions that conform to VDM and VDMN.
Demonstrate use of FQS to export these definitions from the FileMan Test VISTA to Github. 
Github hosted prototype of importing these definitions directly into an empty VISTA with documentation on issues involved.
Fully document data insertion issues that are bypassed by VISTA current “direct to raw globals” programming style. These include triggered transformations, bi-directional pointers and inappropriate designations of mandatory and optional data types. The document should be based on the metadata exposed in the VDM and VDMN.


Provide query access to VISTA data against VDM to allow comprehensive, granular data access to all VISTA data with single common query access method and with common, open, industry-standard output formats. The output of this effort shall yield:
A FileMan Query Service (“FQS”) specified, developed and maintained on the Project Github
Query response /output options include hypertext markup language (HTML), extensible markup language (XML), java script object notation for linked data (JSON-LD), and in Excel spreadsheet compatible form.
An output option to format output as HTML tables.

Representational state transfer application programming interface (REST API) to VDM
A VISTA FileMan, populated to allow testing of all service nuance (“FileMan Test VISTA”).
A unit and regression test suite that runs against the test VISTA posted and maintained on the Project Github.
Enable Standardized Meta Data Version Control. Define and add a set of standard version control fields to all knowledge (terminology and meta data) files in VISTA. These shall include “created”, “last update”, “deprecated”, “replaced by”, and “dataset version.” Distinguish metadata (“K”) files from other VISTA files. DHA shall reuse both standard (w3c) approaches and the best version control approaches already used in some places in VISTA. This will allow standardized metadata version control and auditing of all VISTA metadata and is a prelude to providing one mechanism for metadata synchronization across VISTAs. The output of this effort shall yield:

Identification of all Knowledge/Meta data (“K”) files in VISTA distinguishing VA-wide, standard (ex/Logical Observation Identifiers Names and Codes (LOINC)), local VISTA files.
Addition of version control fields to the data dictionary of all K files and synchronization using transforms of current custom version control fields with new standard fields.
Clear identification of all K files whose update mechanisms need to be updated to populate the new version control fields. 
Specify and implement a standard metadata (“K file”) import-export format to provide one mechanism for defining VISTA metadata files as a prelude to one standard import-export mechanism for all VISTA meta-data. The output of this effort shall yield:
Format specification
Implementation of a serializer and import mechanism for transferring between meta data in this format and appropriate files in VISTA
A capability that fits with new standardized meta-data version control.
Provide working prototype of on-the-data patient-centric data security to enforce data-level patient-centric access control.  DHA shall provide:
Specification of patient-centric, data security that leverages the PIKS designations on VDM
A github-hosted, self-contained, documented, any-VISTA-installable prototype
Documentation regarding how the Patient-centric Security can leverage VA "Enterprise Identity & Access Management Services (IAMS).”
Deliver model-based, continuous sync support to NoSQL (Not only Structured query language) stores to allow shadowing/mirroring (via triggers or journal updates) to alternative NoSQL stores. This shall support DoD plans for data migration and supports VA plans for secondary use of VISTA data. This effort shall provide:
A specification and prototype available on the Project Github. The prototype synchronization service shall be implemented on the FileMan Test VISTA but be installable on any VISTA.
Provide and validate read/write access for VISTA Application against VDMN. This effort shall provide the ability to:
Expose query service of FileMan non-compliant Lab data as if it were FM-compliant
Expose writeback service of FM non-compliant Lab data as if it were FM-compliant
Prototype collaborative web based translation rules hub to share translation rules. This will provide a sharable, crowdsource-able mechanism to exchange and grow a library of open, standards-based, validated, and exchangeable transformation rules to support the largest community adoption possible. All VDM -> VDMN translation rules and all VDMN -> FHIR translation rules shall be posted on Github or Translations Hub.
Prototype a web user interface to FileMan to make FileMan more usable and accessible. This shall demonstrate data query and review via web interface to FileMan and must use commodity, industry standard, vendor-agnostic, battle tested, secure TCP and HTTPS protocols, and vendor-agnostic JS framework.
Prototype a web dashboard for FileMan status, which shall allow quick visualization of the ‘health’ of a given VA FileMan system and up to the minute statistics and analysis with visualization.
Deliverables:
End-to-end Demonstration of VDM and normalized VDMN (Deliverable #23)
Prototype of Meta-data Driven Export/import of VISTA Data (Deliverable #24)
Prototype query access to VISTA Data Against VDM (Deliverable #25)
Prototype Standardized Metadata Version Control (Deliverable #26)
Prototype Standard Metadata Import-export Format (Deliverable #27)
Prototype Patient-centric Data Security (Deliverable #28)
Prototype Continuous Sync Support to NoSQL Store (Deliverable #30)
Validate Read/write access for VISTA Application against VDMN (Deliverable #31)
Prototype Web-Based Rules Hub (Deliverable #32)
Prototype Web-Based Query Interface to FileMan Data (Deliverable #33)
Prototype Web-Based Dashboard for FileMan Status (Deliverable #34)


## 5.4.2 Operationalizing the Normalized VISTA Data Model
The contractor shall provide at least one of each of the VISTA Application Models, External Meta-models, and Reference Models listed below.

VISTA Application Models
The contractor shall work with the COR and VA Program Manager to prioritize the design, development, and test of a series of application models to provide a self-contained and documented prototype of VDMN to demonstrate at least one of the following:
 Lab model inside FileMan
Pharmacy model inside FileMan
Scheduling model inside FileMan
Surgery model inside FileMan
Other VISTA Application models inside FileMan (TBD).
To this end, the contractor shall:
Define the triggers (transforms) and background tasks (if any) needed in the Application data dictionaries to automatically populate FileMan conformant data from current Application data. This creation shall NOT effect or demand any changes in current Application code.
Provide a github-hosted, self-contained, documented, any-VISTA-installable prototype of FileMan embedded VDMN Application data.
The result of this effort shall allow standard enterprise VDMN model-driven read/write access to any VISTA Application using single VDMN canonical model.
Deliverables:
VISTA Application model(s)/Prototype(s) (Deliverable #35)


Meta-Models
The contractor shall work with the COR and VA Program Director to prioritize the design, development, and test at least one meta-model that:
Maps the VDMN to the Medical Domain Web Services (MDWS) Model. Currently the MDWS model is hard-coded by a collection of Massachusetts General Hospital Utility Multi-Programming System (MUMPS) Remote Procedure Calls (RPCs), and requires custom MUMPS programming to access any other data from VISTA. The result of this effort shall allow migration from MDWS RPCs to direct full native VISTA Data Model read/write access while using the same MDWS convenience methods (getProblems, getMedications, getLabs... etc.). This will allow graceful extension of existing MDWS applications to access, read, and write to the full native operational VISTA Data Model and all VISTA data.
Maps the VDMN to the Virtual Patient Record (VPR) Model. Currently the VPR model is a hard-coded by a collection of MUMPS RPCs, and requires custom MUMPS programming to access any other data from VISTA. The result of this effort shall allow migration away from hard-coded VPR RPCs to direct full native VISTA Data Model read/write access while using the same VPR convenience methods (i.e., getProblems, getMedications, getLabs). This will allow graceful extension of existing VPR applications to access, read, and write to the full native operational VISTA Data Model and all VISTA data.
To accomplish these objectives, contractor shall:
Document VISTA-ese vs. MDWS
Provide all convenience methods of MDWS from VDMN.
Demonstrate same query results of VDMN query vs. MDWS query for all MDWS calls.
Document VISTA-ese vs. VPR
Provide all convenience methods of VPR.
Demonstrate same query results of VDMN query vs. VPR query for all VPR calls.
Deliverables:
Meta-model(s)/Prototype(s) (Deliverable #36)
Document VISTA-ese vs. MDWS (Deliverable #37)
Document VISTA-ese vs. VPR (Deliverable #38)

Reference Models

The contractor shall provide a reference model that maps the VDMN to FHIR Model to allow automated, largely in-FileMan standard patient record exposure. In doing so the contractor shall add mapping definitions to VDMN and document VISTA-ese vs. FHIR.

The result of this effort shall provide the foundation for external system data model alignment.
Deliverables:
Reference model(s)/Prototype(s) (Deliverable #39)
Document VISTA-ese vs. FHIR (Deliverable #40)


# PART 6: OTHER TERMS, CONDITIONS, AND PROVISIONS
For DHA-specific conditions see attachment.


# PART 7: APPLICABLE PUBLICATIONS
7.1. The Contractor must abide by all applicable regulations, publications, manuals, and local policies and procedures.  


# PART 8: TECHNICAL EXHIBITS
## 8.1 Technical Exhibit 1: Performance Requirements Summary

The contractor service requirements are summarized into performance objectives that relate directly to mission essential items.  The performance threshold briefly describes the minimum acceptable levels of service required for each requirement.  These thresholds are critical to mission success.

Performance Objective
(The Service required—usually a shall statement)
Standard
Performance Threshold (This is the maximum error rate.  It could possibly be “Zero deviation from standard”)

Method of Surveillance

PRS # 1.  
The contractor shall provide Program Management Support (See Section 5.2)
The contractor provided Program Management Plan; Program Schedule and Monthly Updates; Monthly Progress Reports and Quarterly Strategic Communications Message (Deliverables 2 to 5).

Final information must be accurate 95% of the time, and on time.
Observation and feedback from COR.
PRS # 2  
The contractor shall provide Software Architecture and Technology Support (See Section 5.3)
The contractor provided Deliverables 6 to 22.  
Final information must be accurate 95% of the time, and on time.
Observation and feedback from COR.
PRS # 3 
The contractor shall provide Application Development Assessment (See Section 5.4) 
The contractor provided Deliverables 23 to 40.  
Final information must be accurate 95% of the time, and on time.
Observation and feedback from COR.

General quality measures, as set forth below, will be applied to each work product received from the contractor.
Accuracy: Work Products shall be accurate in presentation, technical content, and adhere to accepted elements of style. 
 Clarity: Work Products shall be clear and concise. Any/All diagrams shall be easy to understand and be relevant to the supporting narrative.
Consistency to Requirements: All work products must satisfy the requirements of the PWS.
File Editing: All text and diagrammatic files shall be fully editable by the Requesting Agency in open document formats (ODF).
Format: All documentation and reports must be in nonproprietary fomats as text files in machine-processable form. Documents shall be in industry-standard markdown; from this source all other formats shall be generated (HTML, ODF, PDF).  Other presentation formats may be generated from the markdown as required by the COR.
Timeliness: Work Products shall be developed and version controlled on the Project Repository for continuous inspection during their development. The final version of any deliverable shall be available on the Project Repository on or before the due date specified in the PWS or submitted in accordance with a later scheduled date determined by the COR.

General work product standards, as set forth below, will be applied to each work product received from the contractor. Work products shall be accurate, and reflect a comprehensive synthesis of results and recommendations and include relevant stakeholder input. All reports shall be placed in the project github in markdown, as well as the final generated Word, PDF, or other formats.

Presentations - Presentations shall be clear, concise, executive-focused, and written in plain, clear English with minimal jargon, understandable by lay persons. 
Project Plan - Project Plan shall be comprehensive; recognize and address authority, perceptions, and concerns of stakeholders.
Reports - There shall be no omissions in the reports, documents or functional requirements. 
Publications and other documents - Deliverables shall be in formats appropriate to target audiences; user friendly, clear, thorough and comprehensive.
Meeting support - Pre-meeting preparations and logistics; smooth meeting operations; comprehensive post-meeting summaries to include but not limited to:  Minutes, Action Items, Attendees, Program Objectives and Milestones and major decision points. 
Analyses and Assessments - Analyses and assessments are performed with accuracy, completeness and adherence to industry best practices.
Obtain stakeholder input - Deliverables shall consist of the timely implementation of input mechanisms, and shall consist of an accurate and comprehensive synthesis of results and recommendations. Integration of relevant stakeholder input documented for deliverable.


# 8.2 Technical Exhibit 2: Deliverables and Schedule

PROJECT REPOSITORY: All artifacts delivered under this contract shall be developed, maintained, and version-controlled on an industry-standard public github repository to be established by contractor at github.com (the “Project Repository”).  The Project Repository shall be established by the contractor and the URL and access provided to the government and all stakeholders prior to work performance. All artifacts, source code, data, metadata, documentation, and reports shall be accessible for inspection, validation, and progress monitoring continuously and in real-time throughout the lifecycle of the project from this Project Repository.  Full read and download access to the contents of the entire Project Repository shall be provided to the government, public, and stakeholders throughout the project lifecycle to allow real-time collaborative development, testing, validation, deliverable assessment, and project management.

All deliverables shall be in compliance with all Data Rights requirements (section 1.6.15) using the appropriate formats and licenses:

Artifacts		Formats/Licenses

Data  			Format: CSV if tabular structure; JSON-LD for all other structures.  
License: Creative Commons CC0. 
Metadata 		Format: JSON-LD. 
License: Creative Commons CC0.
Documents		Format: Markdown (git Markdown or Docbook).
From this HTML and PDF shall be auto-generated.
			License: Creative Commons CC0.
Code (Software)	Source code, and all dependent code, with full version control history.
License: Apache 2.0.

Project Repository (Deliverable #1AA)




Deliverable
Timing
Medium/Format
Availability
CLIN 0001



Project Repository
(Deliverable #1AA)

Prior to Work Performance
Public Github repository
Send URL to COR and all stakeholders
Non-Disclosure/Non-Use Agreement
Deliverable #1A)
Prior to Work Performance
Document
Sent directly to COR
Quality Control Plan
(Deliverable #1B)
30 days after contract award
Document
Project Repository; Send URL to COR.
Phase-Out Migration Plan
(Deliverable #1C)
30 days prior to end of contract
Document

Project Repository; Send URL to COR.
CLIN 002



Program Management Plan
(Deliverable #2)
At contract award; and updated within 30 days after contract award
Document
Project Repository; Send URL to COR.

Program Schedule and Monthly Updates
(Deliverable #3)
Monthly, the 30th day of the following month
Document
Project Repository; Send URL to COR.
Monthly Progress Report
(Deliverable #4)
Monthly, the 30th day of the following month
Document
Project Repository; Send URL to COR.
Quarterly Strategic Communications Message
(Deliverable #5)
Quarterly, 5th day following end of each quarter
Document
Project Repository; Send URL to COR.
Software Architecture Artifacts (VISTA Metadata)
(Deliverable #6)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Metadata
Project Repository; Send URL to COR.
CLIN 0003



Machine Processable VISTA Data Model (VDM)
(Deliverable #7)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Metadata, Data, Code
Project Repository; Send URL to COR.
Date-stamped FileMan Data Model Definitions
(Deliverable #8)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Metadata, Data, Code
Project Repository; Send URL to COR.
Approach to “Live VDM” Maintenance of Current State
(Deliverable #9)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Code
Project Repository; Send URL to COR.
CLIN 0004



Normalized VISTA Data Model (VDMN)
(Deliverable #10)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Code
Project Repository; Send URL to COR.
Heuristic Code
(Deliverable #11)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Code
Project Repository; Send URL to COR.
Normalization Reports
(Deliverable #12)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Code
Project Repository; Send URL to COR.
Website that graphically depicts VDM, VDMN, and other metadata
(Deliverable #13)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Data, Code
Project Repository; Send URL to COR.
Report on Exposure of Older Models
(Deliverable #14)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
CLIN 0005



Date-stamped Metadata for lab, surgery, TIU notes and other applications in a VDMN compatible format
(Deliverable #15)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Metadata Refinement Prototype with associated documentation
(Deliverable #16
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
White Paper on Interoperability Improvement due to Metadata Curation
(Deliverable #17)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
CLIN 0006



Machine-processable Annotations
(Deliverable #18)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Software code
(Deliverable #19)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
CLIN 0007



Queries & Indexing White Paper
(Deliverable #20)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Operational Data Prototype
(Deliverable #21)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
CLIN 0008



End-to-end Demonstration of VDM and normalized VDMN
(Deliverable #23)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
 Prototype of Meta-data Driven Export/import of VISTA Data
(Deliverable #24)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Prototype query access to VISTA Data Against VDM
(Deliverable #25)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Prototype Standardized Metadata Version Control
(Deliverable #26)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Prototype Standard Metadata Import-export Format
(Deliverable #27)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Prototype Patient-centric Data Security
(Deliverable #28)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Prototype Continuous Sync Support to NoSQL Store 
(Deliverable #30)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Validate Read/write access for VISTA Application against VDMN (Deliverable #31)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Prototype Web-Based Rules Hub
(Deliverable #32)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Prototype Web-Based Query Interface to FileMan Data
(Deliverable #33)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Prototype Web-Based Dashboard for FileMan Status
(Deliverable #34)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
CLIN 0009



VISTA Application model(s)/Prototype(s)
(Deliverable #35)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Meta-model(s)/Prototype(s)
(Deliverable #36)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Document VISTA-ese vs. MDWS
(Deliverable #37)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Document VISTA-ese vs. VPR
(Deliverable #38)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Reference model(s)/Prototype(s)
(Deliverable #39)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.
Document VISTA-ese vs. FHIR
(Deliverable #40)
Per approved project schedule; with continuous, real-time delivery on the Project Repository as developed
Documentation, Data, Metadata, Code
Project Repository; Send URL to COR.

