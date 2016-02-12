
                           Epic to MPOG SSIS Package
                                 Oracle Version

What this is
------------

This SQL Server Integration Services (SSIS) package will incrementally extract
data from the AIMS_* tables in Clarity to the AIMS_* tables in MPOG_MAS.

Tables affected
---------------

In Clarity, the following tables will be read:

	* AIMS_IntraopCaseInfo
	* AIMS_IntraopInputOutputs
	* AIMS_IntraopInputOutputTotals
	* AIMS_IntraopMedications
	* AIMS_IntraopNoteDetails
	* AIMS_IntraopNotes
	* AIMS_IntraopPhysiologic
	* AIMS_IntraopStaff
	* AIMS_LabValues
	* AIMS_Outcomes
	* AIMS_Patients
	* AIMS_Preop
	* AIMS_PreopDetails
	* AIMS_Sites
	* F_MPOG_EXTRACT

In MPOG_MAS, the following tables will be written to:

	* AIMS_IntraopCaseInfo
	* AIMS_IntraopInputOutputs
	* AIMS_IntraopInputOutputTotals
	* AIMS_IntraopMedications
	* AIMS_IntraopNoteDetails
	* AIMS_IntraopNotes
	* AIMS_IntraopPhysiologic
	* AIMS_IntraopStaff
	* AIMS_LabValues
	* AIMS_Outcomes
	* AIMS_Patients
	* AIMS_Preop
	* AIMS_PreopDetails
	* AIMS_Sites
	* SSIS_Date_Ranges
	* SSIS_Log
	* SSIS_Stage_Cases_Delete
	* SSIS_Stage_Cases_Update
	* SSIS_Stage_Patients

How it works
------------

The SSIS package first determines the last date and time the package completed
successfully. It then determines the date ranges extracted by the Epic ETL
since the last successful package run. Cases and associated patients and labs
are extracted for those date ranges, refreshing any data that already resides
in the MPOG_MAS database as well as adding new data and deleting old data.

Pre installation
----------------

Before installing the SSIS package, you'll need to install SQL Server
Integration Services and 32-bit Oracle Data Access Components with the optional
component Oracle Provider for OLE DB. These will both need to be installed on
the machine that will be running the package.

SQL Server Integration Services (SSIS)
--------------------------------------

This is an optional component of SQL Server. To install SSIS, run the SQL
Server installer and check the "Integration Services" optional component.

32-bit Oracle Data Access Components
------------------------------------

This install can be downloaded from the following webpage:

	http://www.oracle.com/technetwork/database/windows/downloads/utilsoft-087491.html

Choose the version that most closely matches your Oracle version. While
installing, check the "Oracle Provider for OLE DB" optional component.

Installing the package
----------------------

To install, first save all three attached files to the same directory, then
double click on the SSIS2008.SSISDeploymentManifest file. This will launch the
Package Installation Wizard that comes with SSIS. Choose the SQL Server
deployment option and fill in the relevant data. At the configure packages
screen, expand the property category. Change the following options:

	* \Package.Connections[Clarity].Properties[UserName]
		* Change this option to the username to be used to connect to Clarity.

	* \Package.Connections[Clarity].Properties[ServerName]
		* Change this option to the format <host>/<service_name> for the
		  Clarity instance. Alternatively, you can use a TNS alias here.

	* \Package.Connections[MPOG_MAS].Properties[InitialCatalog]
		* This has already been configured to MPOG_MAS. Change this value if
		  the name of the MPOG_MAS database is different.

	* \Package.Connections[MPOG_MAS].Properties[ServerName]
		* Change this option to the location of the MPOG server.

Running the package manually
----------------------------

To run the package, run the Execute Package Utility (this also comes with
SSIS). Before executing the package, select the "Connection Managers" option on
the left. Select the checkbox next to Clarity in order to edit the connection
string. Add "Password=<password for connecting to Clarity>;" to the end of the
connection string. Then click "Execute".

Running the package in a job
----------------------------

When creating a step in a job to run the package, the connection string will
need to be modified to include the password. Under the "Data Sources" tab,
select the checkbox next to Clarity. Add "Password=<password for connecting to
Clarity>;" to the end of the connection string.

Logging
-------

For your convenience, the SSIS package will log successes and failures
(including row counts) to the SSIS_Log table. To quickly view the last run's
(or current run's) log, execute the SSIS_LastLog stored procedure.

Contact
-------

Please contact MPOG/ASPIRE programmer Genevieve Bell at gkbell@med.umich.edu
with any questions.


Last updated 7/2/2015
