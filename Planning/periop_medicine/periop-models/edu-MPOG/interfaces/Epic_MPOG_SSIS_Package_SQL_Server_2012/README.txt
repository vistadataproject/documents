
                           Epic to MPOG SSIS Package
                               SQL Server Version

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
Integration Services on the machine that will be running the package. This is
an optional component of SQL Server. To install SSIS, run the SQL Server
installer and check the "Integration Services" optional component.

Installing the package
----------------------

To install, first save all three attached files to the same directory, then
double click on the ClarityTransfer.SSISDeploymentManifest file. This will
launch the Package Installation Wizard that comes with SSIS. Choose the SQL
Server deployment option and fill in the relevant data. At the configure
packages screen, expand the property category. Change the following options:

	* \Package.Connections[Clarity].Properties[InitialCatalog]
		* Change this option to the name of the Clarity database.

	* \Package.Connections[Clarity].Properties[ServerName]
		* Change this option to the location of the Clarity server.

	* \Package.Connections[MPOG_MAS].Properties[InitialCatalog]
		* This has already been configured to MPOG_MAS. Change this
		  value if the name of the MPOG_MAS database is different.

	* \Package.Connections[MPOG_MAS].Properties[ServerName]
		* Change this option to the location of the MPOG server.

Running the package
-------------------

To run the package manually, run the Execute Package Utility (this comes with
SSIS). The package can also be run in a SQL Server job.

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
