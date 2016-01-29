# VA Perioperative Medicine
VA Anesthesiology, Surgery, and Critical Care Medicine  real-time analytical, operational, and qualilty reporting

This is a collaboration of the VISTA Data Program with VA Medical Centers to create real-time web-based operational reports against live, production VISTA systems leveraging the VISTA Data Project infrastructure.  

This will rely in the VISTA Data Project deliverables including nodeVISTA, the VISTA Query Service (VQS), and Javascript visualization and infographics libraries such as D3.js.  

No legacy M code, RPCs, Fileman knowledge, nor any other software, service, or mid-tier moving parts are required.  This collaboration will demonstrate a use case of a new, embedded analytics and visualization" capability for production VISTA systems.


## Data Analytics and Operational Reporting


__Background:  Current tools and workflow for operational reporting from VISTA__
* What is the current set of tools and methods used to analyze VISTA data?
* M data extractor tool: ETL mechanism from Fileman to a relational database. Commercial, proprietary. Specialized M knowledge required.
* SAS:  Used to query over 10 million patient records from ETL source.  Commercial, proprietary.  Specialized SAS knowlege required.
* Visualization tool: Commercial, proprietary, restricted use in TRM ($$)


##  Web-based Dashboard for real-time OR management
* Current tool is Protoviewer, a legacy thick client tool
* Shows OR utilization real time
* Shows statistics on on-time, delays, cancellations, ASA level
