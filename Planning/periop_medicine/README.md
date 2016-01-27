# VA Perioperative Medicine Reporting
VA Anesthesiology, Surgery, and Critical Care Medicine analytical, operational, and qualilty reporting based on the VISTA Data Project tools and infrastructure. These reports will reflect the real live data from a local production clone system of an VA VISTA system. 

This is a collaboration of the VISTA Data Program with the Palo Alto VA Medical Center to create real-time web-based operational reports based on the VISTA Data Model.  This will leverage nodeVISTA, the VISTA Query Service (VQS), and Javascript libraries.  No legacy M code, RPCs, Fileman knowledge, nor any additional software will be required.

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
