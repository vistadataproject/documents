# VA Perioperative Medicine
VA Anesthesiology, Surgery, and Critical Care Medicine  real-time analytical, operational, and qualilty reporting

This is a collaboration of the VISTA Data Program with VA Anesthesiology and Critical Care  VISTA data analysts to create real-time web-based operational reports against live, production VISTA systems leveraging the VISTA Data Project infrastructure.  

This will rely in the VISTA Data Project deliverables including nodeVISTA, the VISTA Query Service (VQS), and Javascript visualization and infographics libraries such as D3.js.  

No legacy M code, RPCs, Fileman knowledge, nor any other software, service, or mid-tier moving parts are required.  This collaboration will demonstrate a use case of a new, embedded analytics and visualization capability for production VISTA systems.


## Data Analytics and Operational Reporting

__Background:  Current tools and workflow for operational reporting from VISTA__
* What is the current set of tools and methods used to analyze VISTA data?
* M data extractor tool: ETL mechanism from Fileman to a relational database. Commercial, proprietary. Specialized M knowledge required.
* SAS:  Used to query over 10 million patient records from ETL source.  Commercial, proprietary.  Specialized SAS knowlege required.
* Visualization tool: Commercial, proprietary, restricted use in TRM ($$)


##  Real-time OR Management: Web-based Dashboard
* Provides real-time dashboard view of OR schedule, utilization and planning
  * includes statistics on on-time, delays, cancellations, surgery/surgeon information, anesthesia/anesthesiologist information, patient demographics / ASA
* Current tool is Protoviewer, a legacy thick client tool
  * Difficult and expensive to deploy because is a thick client application
  * Source code of Protoviewer is not available to VA, therefore it cannot be modified, updated, nor maintained
  * Will not recieve VA enterprise support because it is a Class-3 software
  * Is not an enterprise product
  * Is not integrated to CPRS or any other existing client, and will require separate expertise, budget, and technology to support

