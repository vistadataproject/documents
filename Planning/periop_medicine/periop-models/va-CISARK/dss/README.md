#### DSS CIS-Databridge (DSIH)

The CIS-DataBridge application contains the necessary components to send and receive Health Level Seven (HL7) messages to Intensive Care Unit (ICU) and Anesthesia Record Keeper (ARK) vendor applications and VistA extracts for Data Analytics. The secondary option contains all of the RPC‘s required to operate the CIS-DataBridge generic user interface (GUI) application.

Below are the five main components of the CIS-DataBridge application:

1. **HL7 message processing for ICU/ARK vendors:** HL7 messages are sent to, and received from, surgery vendor applications. In order to process HL7 messages, installation of one or more of the DSIH vendor "sub-builds" is required. The following sub-builds are available:

a. DSIHA v1.1 **Draeger ARK** vendor sub-build

b. DSIHB v1.1  **iMedSoft ARK and ICU** vendor sub-build

c. DSIHC v1.1 **Philips ARK and ICU** vendor sub-build

d. DSIHD v1.1 **PICIS ARK / ICU** vendor sub-build

e. DSIHE v1.1 **G.E. ARK** vendor sub-build

f. DSIHF v1.1 **Clinicomp ICU** vendor sub-build

g. DSIHXv1.0 **Data Analytic VistA extracts**

2. **CIS-DataBridge Monitor GUI for HL7 message support:** The GUI allows sites to verify parameters and HL7 configurations as well as view messages for any of the DSIH* logical links.

3. **VistA extracts for Data Analytic reporting:** CIS-DataBridge extracts surgery, pharmacy administration, visit and PTF data to text files to be uploaded to a Data Analytics reporting system. The extracts can be run manually but are designed to be queued automatically to update the Analytics system with current information.

4. **DSS VistA Gateway:** Remote Procedure Call (RPC) Broker application that allows the ICU/ARK vendor access to VistA that is not available via HL7.

5. **DSS Enterprise Manager "Watchdog":** RPC Broker application that will provide 24/7 HL7 queue and error trap monitoring and support (future development).


This package contains M routines, HL7 components and RPCs used by the DSS Inc. CIS-DataBridge application in the DSIH namespace. The software interfaces with VistA and the surgical package in order to assist the Anesthesiology Department document and process cases performed in the Operation Room. It interfaces with CIS (ICU) and Anesthesia Record Keeping (ARK) vendor applications via HL7.

#### Namespaces  and Logical Links
There is a 'DSIH’ Logical Link View that provides all of the CIS/ARK vendor-specific CIS-DataBridge link names. Using the HL MONITOR option, enter a ‘V’ – Views, at the ‘Select a Command:’ prompt and then type ‘DSIH’ to view the DSIH logical links. The links are namespaced according to the following rule:

**DSIHEAapp**
* E = Vendor specific character (E =G.E. MEDICAL)
* A = ARK
* app = VistA application for messages (ADT=ADT, AL1=Allergies, PS=Pharmacy, etc)

**CIS/ARK Vendors**
* A: Draeger  (ARK)
* B: IMDSoft  (ARK and ICU)
* C: PHILIPS (ARK and ICU)
* D: PICIS (ARK and ICU)
* E: GE MEDICAL (ARK)
* F: Clinicomp (ARK)

**Manuals**
* DSIH_xxx_tm: Technical Manuals
* DSIH_xxx_ig: Installation Guides

**Functionality**
Transfers ADT messages generated in VistA to vendor partner applications via DSIH logical links.

* Transfers Allergy messages via VDEF to vendor applications.
* Transfers lab and radiology messages from VistA on verified results to vendor partner applications.
* Transfers surgery SIU and ORU messages from VistA to vendor partner applications.
* Transfers order ORM messages from VistA to vendor partner applications.
* Transfers vital sign and allergy messages from VistA to vendor partner applications.
* Transfers surgery ORU messages from the vendor application to VistA to update the surgical cases.
* Displays HL7 messages and configuration data.
