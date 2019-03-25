This is the Readme file for Bar Code Med Admin (BCMA) V3
=============================================================================

Initial Setup
=============
The following setup MUST be done to run the BCMA software successfully.

Server Setup Items
------------------
-	RPC Broker XWB*1*26 must be installed on the server. 
-	The BCMA server software must be installed.  
-	A BrokerServer IP address and Port must be obtained from the server 
	administrator.  
-	Each BCMA user must have a valid VistA account on the BrokerServer 
  	and must have submenu, 'PSB GUI CONTEXT - USER', assigned to them.

Client Setup Items
------------------
-	XWB*1*29 must be installed on each PC.
-	The BCMA software should be INSTALLED on each PC.
	
-	A link must be established between the client and the server via the
	PC's Hosts file and the PC's Windows Registry.  The Hosts file 
	(no extension) is in:
		C:\WinNt\System32\Drivers\Etc  - Windows 2000 or Windows XP
				
	If the Hosts file does not exist it must be created.  (There may be a
	hosts.sam sample file already.)  Note that, if you create the file 
	with notepad, notepad automatically puts a .txt extension on it.  To 
	remove the extension, use Explorer to Rename it, leaving off the .txt.
	
	If the Hosts file exists already, don't delete anything.  Just add the
	new information on the end.
	
	There are several possible scenarios:
	
	1) If the user only needs to access ONE BCMA Server AND the ServerPort
	   is 9200, then, add one line to the Hosts file:

	        152.111.222.333 BrokerServer     

	   using the IP address provided by the server administrator.  (There
	   must be at least one space between the address and the name.  There
           can be no spaces in the name itself.)

	2) If the user only needs to access ONE BCMA Server AND the ServerPort
	   is NOT 9200, then, add one line to the Hosts file as shown in scenario
           1 and, either use the ServerList utility as in scenario 3) or use the
	   command line parameters shown below.

	3) If the user needs to access multiple BCMA Servers and/or the
	   ServerPort is not 9200, add the BCMA Server names to the Hosts 
	   file (The names can be anything you like):
			
		152.111.222.333 BrokerServer1    
		152.222.333.444 BrokerServer2
			
	   Then use the Optional Command Line Parameters outlined below.

Optional Command Line Parameters
================================
Note that each parameter must be continuous, with no spaces.  They may be 
in any order.  Parameters S and P are a set i.e., they must both be present or
they will be ignored.

Parameter     Example(Default)          Description
--------------------------------------------------------------------------
S=            S=BrokerServer            The name of the BCMA BrokerServer 
                                        as defined in the Hosts file.  The
					default is 'BrokerServer'.
																	 
P=            P=9200                    The serverport used by the BCMA 
                                        BrokerServer.  The default is 
					9200.
																				
L=            L=C:\Temp                 The DOS path location for the BCMA
	                                Error Log file.  Any legal DOS 
					path will work.  The default is 
					'C:\Temp'.

T=	      T=300			RPC TimeOut in seconds.  This is
					the amount of time BCMA will wait
					for a response from an RPC on VistA.
					If not defined, the default value is
					300 seconds.  If your VistA system's
					CPU utilization is near 100%  and you 
					frequently receive timeouts in 
					GUI BCMA, you can increase this value.
					However, keep in mind, the higher
					the value, the longer BCMA will
					appear to hang until the RPC 
					completes.  The minimum value is 
					30 seconds. 		
	   																		
																				
/NOLOGFILE                              This disables the Error Log.

/DEBUG                                  This turns on BrokerServer Debug
                                        screens.
/NOCCOW					Disables CCOW functionality


Silent Installation
===================
For information regarding a silent install of BCMA, see the BCMA help file
and search for 'Installation Command Line Parameters'
							