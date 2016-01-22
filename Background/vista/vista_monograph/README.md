# Veterans Information Systems and Technology Architecture (VISTA)

#### VISTA Information
* http://www.ehealth.va.gov/VISTA.asp

#### VISTA GUI (CPRS)
* http://www.ehealth.va.gov/CPRS_Demo.asp

#### VISTA Monograph
* http://www.ehealth.va.gov/VISTA_Monograph.asp
* Contact: OITPDProductSupportMonograph@va.gov

#### VISTA Document Library
* MAIN: http://www.va.gov/vdl/
* Clinical: http://www.va.gov/
* vdl/section.asp?secid=1
* Infrastructure: http://www.va.gov/vdl/section.asp?secid=2
* Finance-Admin: http://www.va.gov/vdl/section.asp?secid=3
* HealtheVet:http://www.va.gov/vdl/section.asp?secid=4



# VISTA Monograph

[logo]

October 2013

Veterans Health Administration, Office of Information and Analytics and <br>
Office of Information Technology, Office of Product Development



## Table of Contents
Name | Page
:--- | :---:
Table of Contents	| 2
Introduction to The VISTA Monograph	| 9
VISTA Development Historical Overview	| 9
Why a VISTA Monograph? 	| 10
What is different in this version of the VISTA Monograph? 	| 10
This version of the Monograph: 	| 10
Planned for future versions of the Monograph: 	| 11
What is in the VISTA Monograph…and what’s not? 	| 11
Where can I find the VISTA Monograph? 	| 12
How do I recommend changes to or ask questions about the VISTA Monograph? 	| 12
WHAT IS VISTA?	| 13
VISTA Brief Technical Overview 	| 13
Where is VISTA used within VHA? 	| 14
How do I request changes to VISTA? 	| 14
I am not in VHA…may I obtain VISTA for my use? 	| 14
How do I recommend changes to or ask questions about the VISTA Monograph? 	| 15
THE VISTA MODULES	| 18 - 261
INDEX of VISTA Modules by VHA Portfolio (alphabetical) 	| 263
INDEX of VISTA Modules by Functional Area <br> (Clinical Services, Administrative-Financial Services, Infrastructure & Repositories) 	| 267
Other Resources 	| 271




## Introduction to The VISTA Monograph 	

This Monograph provides an overview of the VETERANS HEALTH INFORMATION SYSTEMS AND TECHNOLOGY ARCHITECTURE information system—VISTA—used by the Veterans Health Administration (VHA) of the U.S. Department of Veterans Affairs (VA) in serving America’s veterans through the provision of quality health care which enhances our Veterans’ health and well-being.

VISTA Development Historical Overview
As Health Information Technology (HIT) adoption —particularly the implementation of Electronic Health Records (EHR) by providers and health systems—increases across America, VHA can proudly and rightfully claim to have pioneered many aspects of the enterprise-wide HIT/EHR discipline. VISTA’s patient-centric focus embodies the clinical workflow processes that support VA’s models of care, and VISTA has enabled measurable improvements in health outcomes.

VISTA had its origins in the collaboration of VA clinicians and HIT staff who capitalized on 1970’s and 1980’s emerging technology capabilities and created a better-informed way to serve Veterans and the Public’s Health. Groups of clinical and IT specialists deployed locally- developed computer applications to enhance patient care. Though developed in a geographically and organizationally diverse fashion, these applications were based in the MUMPS computer language. (MUMPS is an acronym for the Massachusetts General Hospital Utility Multi-Programming System; the language, also known as M, remains prevalent in the health care arena and is the backbone of VISTA and other well-known EHRs.) This decision to rely on MUMPS made it possible for these local development teams—often euphemistically known as “the Hard Hats”—to integrate these diverse applications, leading in 1982 to the forerunner to VISTA, the Decentralized Hospital Computer Program (DHCP.) DHCP evolved into VISTA commencing in 1996; a key element of this evolution was the development and deployment of the Computerized Patient Record System (CPRS)—a graphical user interface (GUI) that interacts with the VISTA kernel of common functions and integrated applications via reusable interfaces—which has been widely recognized as a premier, tightly-integrated Computerized Physician Order Entry (CPOE) system, reflecting the direct role of clinicians in the development of VISTA and its order management system.

As of this writing, the recently announced “VISTA Evolution” portends the migration of VISTA into an ever-more-capable HIT and EHR system for use not only “Intra-VHA” but with robust capabilities enhancing use “Inter-VHA,” most notably with the Department of Defense in the
advent of interoperable Electronic Health Record (iEHR) activities between the two Departments.

Why a VISTA Monograph?
Owing to the myriad capabilities of VISTA, and its ongoing evolution, VA deems it important to present and maintain the VISTA Monograph. Collaboratively reviewed by numerous program offices and subject matter experts across VA, the Monograph is jointly maintained by the VA Office of Information Technology’s Product Development office, and VHA’s Office of Information and Analytics.

The purpose of the Monograph is to present a succinct and user-friendly overview of VHA’s VISTA—most notably of the approximately 200 modules and applications comprising VISTA—in general purpose language that provides basic information on the capabilities of each module. The Monograph, commencing with this version, also provides additional resources for readers interested in acquiring additional technical information on VISTA, and identifies which offices within VA and VHA bear responsibility for maintaining VISTA Monograph application/module descriptions moving forward.



### What is different in this version of the VISTA Monograph?

__This version of the Monograph:__
Introduces a new template format intended to enhance the appearance of and information within each VISTA module’s description in the document.
Provides in each VISTA module’s description (where applicable) identification of the
relevant VHA Business Function Framework (BFF) “Line of Business” and “Function” allowing “line of sight” linkage between the respective modules and the BFF. Complete information on the BFF is available at http://vaww.esm.infoshare.va.gov/sites/ba/default.aspx
Provides new table of content and index presentations, allowing for locating
modules either alphabetically or by IT portfolio grouping (as was used in pre-2013 versions of the document) or primary functional area.
Identifies for each VISTA module the responsible business owner office, VHA Health
Systems Informatics or Strategic Investment Management Portfolio, and VA OIT Product Development section.
Includes external resource listing and depicts information sources used in the
preparation of the document.
Removes references to “HealtheVet VISTA:” the series of envisioned VISTA enhancements collectively referred to in previous editions of the Monograph as HealtheVet-VISTA will be subsumed as appropriate under the “VISTA Evolution” described above. (NOTE: Readers are encouraged to carefully differentiate “HealtheVet-VISTA from the Veteran-facing array of products and services called “My HealtheVet”—a series of increasing, and increasingly vital, products and services relied upon heavily by VHA—and by the Veterans VHA serves, and their caregivers.

__Planned for future versions of the Monograph__
Screen shots for selected modules.
Transition of the Monograph to a “live” searchable online presence, evolving from the current state “static” posting of a pdf of the document on a web site.
Inclusion of additional technical information for selected modules, presented as appendices.
Schedules for when and how future Monograph updates will occur.
Listings of emerging VISTA applications.
Listings of other widely-used/critical applications that are NOT VISTA modules per se but whose importance merits mention in this “service catalog.”
Descriptions of “VISTA Core” particularly as it relates to the iEHR.
Descriptions of the “Open Source” or “Platinum VISTA” builds.
Details on VISTA Evolution.
Further enhancements to the Module template.


__What is in the VISTA Monograph…and what’s not?__
WHAT’S IN? Thousands of programming components and millions of lines of computer code constitute VISTA’s approximately 200 modules. The Monograph provides information on those modules.

VA describes as “Class 1” software those items that are nationally supported by VA OIT and deployed enterprise-wide across all of VHAs Medical Centers (VAMC) and Community Based Outpatient Clinics (CBOC). It is these enterprise-wide modules comprising VISTA and deployed across the entire spectrum of VAMC and CBOC that are detailed in the Monograph.

WHAT’S NOT IN? There are many other software applications, some commercially-procured, some developed on either a regional level or VAMC/local level (known as “Class 2” and “Class  3” software) that are not nationally deployed and supported—and these items do not appear in
this version of the Monograph. Future editions of the Monograph will contain an appendix listing these important—but not VISTA, by definition—applications and programs.


__Where can I find the VISTA Monograph?__
The current edition of the VISTA Monograph is available at the following VA website:
http://www.va.gov/VISTA_monograph/


__How do I recommend changes to or ask questions about the VISTA Monograph?__
The Monograph is maintained jointly by VHA’s Office of Informatics and Analytics and by VA’s
Office of Information Technology. Comments and suggestions for changes to the Monograph are welcomed, and should be forwarded via email to the OIT PD Product Support Monograph mailgroup.
Other Resources



___VISTA Documentation Library__
This library contains a collection of available end-user documentation for all current applications (software packages), and also includes some tools not listed in the monograph. All documents can be viewed, downloaded, and printed. Some documents have links to a Web version, and may optionally have an archive file (.ZIP or .EXE) containing the Web pages for download.

http://www.va.gov/vdl


__VHA Enterprise Architecture:__
VHA developed an Enterprise Architecture that provides a technical framework to promote a one-technology vision across the Department so that all systems are interoperable.

http://www.ea.oit.va.gov/index.asp


__Corporate Database Monograph: __
The Corporate Database Monograph provides an overview of the active VHA national databases. Information contained in this monograph allows stakeholders to identify opportunities for database consolidations, determine authoritative data sources, and work with VHA Data Quality committees to implement data standardization and quality control processes for corporate databases.

http://vaww.va.gov/../nds/CorporateDatabasesMonograph.asp



VISTA Monograph on the Internet: http://www.va.gov/VISTA_monograph/







# What is VISTA?

The VETERANS INFORMATION SYSTEMS AND TECHNOLOGY ARCHITECTURE (VISTA) is an nationally deployed enterprise inforamtion system created and used by the Veterans Health Administration (VHA) of the U.S. Department of Veterans Affairs (VA) to support the delivery of healthcare and other benefits and services to veterans.


### VISTA Brief Technical Overview
VISTA is an integrated Electronic Health Record (EHR) information technology system with application packages that share a common data store and common internal services. The data store and VISTA kernel are implemented in the MUMPS (or M) computer language, and the Computerized Patient Record System (CPRS) graphical user interface (GUI) is implemented in Delphi.  Application clients use a highly-efficient proprietary protocol to access data. VISTA is highly configurable and customizable, and in addition to appropriate connectivity amongst  VISTA modules, VISTA supports the integration of best-of-breed applications at multiple levels, including MUMPS API (Application Programming Interface,) Remote Procedure Call (RPC), Medical Domain Web Services (MDWS), HL7 (Health Level 7,) and data exchange via Blue  Button or eHealth Exchanges. VISTA comprises nearly 200 distinct applications/modules, 15,000 routines, and millions of lines of computer code.

The backbone of VHA’s clinical and administrative information technology capability, VISTA has historically been built on a client-server architecture, which ties together workstations and personal computers with graphical user interfaces at VA facilities. The CPRS GUI is as well  highly customizable and runs on workstations, laptops, tablets including iPads, and smart phones. VISTA interoperates with numerous commercial-off-the shelf software applications and with selected information technology systems of other federal agencies and, increasingly,  health information exchange networks. At the time of publication of this edition of the Monograph, comprehensive proposed enhancements to VISTA were in the initial stages; referred to as “VISTA Evolution” these enhancements are will reflect development and architecture enhancements to allow greater interaction with data and greater efficiency for the VISTA system.

Additional detailed technical information on VISTA which exceeds the scope of this Monograph, is available at the VISTA Documentation Library website.
Where is VISTA used within VHA?
VISTA is deployed universally across VHA at more than 1,500 sites of care, including each Veterans Affairs Medical Center (VAMC), Community Based Outpatient Clinic (CBOC) and Community Living Center (CLC), as well as at nearly 300 VA Vet Centers.




# Appendix I:  Listing of VISTA Modules


VISTA MODULE(s)	| Page
:--- | :---:
Accounts Receivable	| 19
Admission, Discharge, Transfer (ADT)	| 21
Anticoagulation Management Tool (AMT)	| 23
Automated Information Collection System (AICS)	| 24
Automated Medical Information Exchange (AMIE)	| 26
Automated Safety Incident Surveillance Tracking System (ASISTS)	| 27
Bed Management Solution (BMS)	| 29
Beneficiary Travel	| 31
Blind Rehabilitation	| 32
Capacity Management Tools	| 34
Care Management	| 36
Clinical Context Object Workgroup (CCOW)	| 38
Clinical Information Support System (CISS) 	| 39
Clinical Monitoring System 	| 41
Clinical Procedures 	| 43
Compensation and Pension Record Interchange (CAPRI) 	| 45
Computerized Patient Record System (CPRS): Adverse Reaction Tracking (ART) 	| 47
Computerized Patient Record System (CPRS): Authorization/Subscription (ASU) 	| 48
Computerized Patient Record System (CPRS): Clinical Reminders (CR) 	| 49
Computerized Patient Record System (CPRS): Consult/Request Tracking 	| 50
Computerized Patient Record System (CPRS): Health Summary 	| 51
Computerized Patient Record System (CPRS): Problem List 	| 53
Computerized Patient Record System (CPRS): Text Integration Utilities (TIU) 	| 54
Computerized Patient Record System (CPRS): Text Integration Utilities (TIU) Group Notes 	| 56
Cross-Application Integration Protocol (CAIP) 	| 57
Decision Support System (DSS) Extracts 	| 58
Dental Record Manager (DRM) Plus 	| 60
Diagnostic Related Group (DRG) Grouper 	| 62
Duplicate Record Merge 	| 63
Electronic Error and Enhancement Reporting (E3R) 	| 64
Electronic Signature (Esig) 	| 65
Emergency Department Integration Software (EDIS) 	| 67
Engineering (Automated Engineering Management System/Medical Equipment Reporting System: AEMS/MERS) 	| 68
Enrollment Application System: 10-10EZ Application 	| 70
Enrollment Application System: Local Signed Means Test Application (ROSSIO 22) 	| 72
Enrollment Application System: Long Term Care (LTC) Copayment 	| 74
Enrollment System 	| 76
Enterprise Exception Log Service (EELS) 	| 77
Equipment /Turn-In Request 	| 78
Event Capture System 	| 80
Fee Basis 	| 82
FileMan Delphi Components (FMDC) 	| 84
Fugitive Felon Program (FFP) 	| 86
Functional Independence Measures (FIM) 	| 87
Generic Code Sheet 	| 88
Health Data Informatics 	| 89
Health Information Technology Sharing (HITS): Bi-Directional Health Information Exchange BHIE 	| 90
Health Information Technology Sharing (HITS): Federal Health Information Exchange (FHIE) 	| 92
Health Information Technology Sharing (HITS): Clinical Health Data Repository (CHDR) 	| 93
Health Information Technology Sharing (HITS): Global War on Terror 	| 94
Health Information Technology Sharing (HITS): Laboratory Data Sharing and Interoperability (LDSI) 	| 96
Health Level 7 (HL7) (VISTA Messaging) 	| 97
Health Level Seven Optimized (HLSO) (VISTA Messaging) 	| 99
Home Based Primary Care (HBPC) 	| 100
Home Telehealth 	| 102
Homeless Management Information System 	| 104
Hospital Inquiry (HINQ) 	| 105
Identity Management (IdM) Service 	| 107
Incident Reporting 	| 109
Income Verification Match (IVM) 	| 111
Incomplete Records Tracking (IRT) 	| 113
Insurance Capture Buffer 	| 114
Intake and Output 	| 116
Integrated Billing (IB) 	| 118
Integrated Funds Distribution, Control Point activity, Accounting and Procurement (IFCAP) 	| 120
Integrated Patient Funds 	| 122
Kernel 	| 123
Kernel Authentication & Authorization for Java 2 Enterprise Edition (KAAJEE) 	| 125
Kernel Toolkit 	| 126
Kernel Unwinder 	| 127
Laboratory 	| 128
Laboratory: Anatomic Pathology 	| 130
Laboratory: Blood Bank 	| 132
Laboratory: Electronic Data Interchange (LEDI) 	| 133
Laboratory: Emerging Pathogens Initiative (EPI) 	| 135
Laboratory: HOWDY Computerized Login Process 	| 136
Laboratory: National Laboratory Test (NLT) Documents and LOINC® Request Form 	| 137
Laboratory: Point of Care (POC) 	| 138
Laboratory: Universal Interface (UI) 	| 139
Laboratory: VISTA Blood Establishment Computer Software (VBECS) 	| 140
Lexicon Utility 	| 142
Library 	| 144
List Manager 	| 146
MailMan 	| 147
Master Veteran Index (MVI) 	| 148
Medical Domain Web Services (MDWS) 	| 150
Medicine 	| 151
Mental Health 	| 153
Messaging and Interface Services Program 	| 155
Methicillin Resistant Staphylococcus Aureus Program Tools (MRSA-PT) 	| 156
Mobile Electronic Documentation (MED) 	| 157
to-M Broker 	| 158
My HealtheVet 	| 159
National Patch Module (NPM) 	| 160
National Provider Identifier (NPI) 	| 161
National Utilization Management Integration (NUMI) 	| 163
Network Health Exchange (NHE) 	| 164
Nursing 	| 166
Nutrition and Food Service (N&FS) 	| 168
Occupational Health Recordkeeping System (OHRS) 	| 170
Occurrence Screen 	| 171
Oncology 	| 173
Patient Advocate Tracking System 	| 175
Patient Assessment Documentation Package (PADP) 	| 177
Patient Care Encounter (PCE) 	| 178
Patient Data Exchange (PDX) 	| 180
Patient Record Flags 	| 181
Patient Representative 	| 182
Personnel and Accounting Integrated Data (PAID): Education Tracking 	| 183
Personnel and Accounting Integrated Data (PAID): Enhanced Time and Attendance (ETA) 	| 184
Pharmacy: Automatic Replenishment/Ward Stock (AR/WS) 	| 185
Pharmacy: Bar Code Medication Administration (BCMA) 	| 187
Pharmacy: Bar Code Medication Administration (BCMA) Backup Utility (BCBU) 	| 189
Pharmacy: Consolidated Mail Outpatient Pharmacy (CMOP) 	| 190
Pharmacy: Controlled Substances 	| 192
Pharmacy: Drug Accountability/Inventory Interface 	| 194
Pharmacy: Electronic Claims Management Engine (ECME) 	| 196
Pharmacy:  Enterprise Customization System (PECS) 	| 198
Pharmacy: Inpatient Medications 	| 199
Pharmacy: Inpatient Medications—Intravenous (IV) 	| 201
Pharmacy: Inpatient Medications—Unit Dose (UD) 	| 202
Pharmacy: Medication Order Check Healthcare Application (MOCHA) 	| 203
Pharmacy: National Drug File (NDF) 	| 204
Pharmacy: Outpatient Pharmacy 	| 206
Pharmacy: Pharmacy Benefits Management (PBM) 	| 208
Pharmacy: Pharmacy Data Management (PDM) 	| 210
Pharmacy: Pharmacy Product System—National Registries (PPS-N) 	| 211
Prosthetics 	| 213
Quality Audiology and Speech Analysis and Reporting (QUASAR) 	| 215
Quality Management Integration Module 	| 216
Radiology/Nuclear Medicine 	| 217
Record Tracking 	| 219
Remote Order Entry System (ROES) 	| 221
Remote Procedure Call Broker (RPC) 	| 222
Repositories: Administrative Data Repository (ADR) 	| 223
Repositories: Clinical Data Repository/Health Data Repository (CHDR) 	| 224
Repositories: Health Data Repository (HDR) 	| 225
Resource Usage Monitor (RUM) 	| 226
Scheduling 	| 227
Shift Handoff Tool 	| 229
Single Sign On/User Context (SSO/UC) 	| 230
Social Work 	| 231
Spinal Cord Injury and Disorders Outcomes (SCIDO) 	| 233
Standards and Terminology Services (STS) 	| 234
Statistical Analysis of Global Growth (SAGG) 	| 235
Surgery 	| 236
Survey Generator 	| 238
VA FileMan 	| 239
Veterans Point of Service 	| 240
Veterans Identification Card (VIC) 	| 242
Veterans Personal Finance System (VPFS) 	| 244
Virtual Patient Record (VPR) 	| 245
VISTA Data Extraction Framework (VDEF) 	| 246
VISTA Imaging System 	| 247
VISTALink 	| 251
VISTAWeb 	| 252
Visual Impairment Service Team (VIST) 	| 253
Vitals/Measurements 	| 254
Voluntary Service System (VSS) 	| 256
Women’s Health 	| 257
Wounded Injured and Ill Warriors 	| 259



# Appendix II: Additional Information

__How do I request changes to VISTA?__
VA staff members wishing to propose enhancements to VISTA have several options—most notable among these being the submission of a “New Service Request” through the Innovation and Development Request Portal (IDRP).  


__I am not in VHA…may I obtain VISTA for my use?__
VISTA is available through several forums for interested parties not part of or affiliated with VA/VHA. VISTA software applications are releasable through the Freedom of Information Act (FOIA). Under FOIA, certain records may be withheld in whole or in part from the requestor if they fall within certain FOIA exemptions. Two of these exemptions form the basis for withholding software by the VA:
Protects certain records related solely to VA’s internal rules and practices.
Protects trade secrets and confidential commercial or financial information.
Also removed are any copyrighted dynamic link library (dll), mental health tests, CPT codes, and electronic signature hashing algorithms. (These are detailed in a Readme.txt file on the CDs.) 

Requests for agency records or additional information via FOIA should be directed to:
Department of Veterans Affairs
FOIA Services (10P2C1) 810 Vermont Avenue, NW Washington, DC 20420
Electronic requests can be sent to VACOFOIASERVICE@VA.GOV


VA is committed to the Open Source community and was instrumental in the establishment of the Open Source Electronic Health Record Agent (OSEHRA.)  As part of the Department’s pioneering activities in the OSEHRA community, VA has contributed VISTA code to the OSEHRA effort. 
VISTA is a comprehensive  Health Information System and Electronic Health Record. The software must be correctly configured to each healthcare setting by individuals knowledgeable about the software before the system is used to support healthcare delivery.


How do I recommend changes to or ask questions about the VISTA Monograph?
Comments and suggestions for changes to the Monograph are welcomed, and should be forwarded via email to the OIT PD Product Support Monograph mailgroup.Other Resources


__VISTA Documentation Library:__  This library contains a collection of available end-user documentation for all current applications (software packages), and also includes some tools not listed in the monograph. All documents can be viewed, downloaded, and printed. Some documents have links to a Web version, and may optionally have an archive file (.ZIP or .EXE) containing the Web pages for download.

http://www.va.gov/vdl


__VHA Enterprise Architecture:__  VHA developed an Enterprise Architecture that provides a technical framework to promote a one-technology vision across the Department so that all systems are interoperable.

http://www.ea.oit.va.gov/index.asp


__Corporate Database Monograph:__ The Corporate Database Monograph provides an overview of the active VHA national databases. Information contained in this monograph allows stakeholders to identify opportunities for database consolidations, determine authoritative data sources, and work with VHA Data Quality committees to implement data standardization and quality control processes for corporate databases.

http://vaww.va.gov/../nds/CorporateDatabasesMonograph.asp


VISTA Monograph on the Internet: http://www.va.gov/VISTA_monograph/