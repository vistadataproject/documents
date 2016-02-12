## MPOG Data Model

**Multicenter Perioperative Outcomes Group (MPOG)** is a consortium of 20+ Academic Medical Centers that wish to pool their data to do outocmes research.  As of 2015 they have collected over 1 million anesthesia records, with an associated 7 billion vital signs. The model is operationally an RDBMS model (PDF above) and comprised of 1992 concepts within 24 types. The model is published as a spreadsheet (above).

* **View the [CSV Model](https://github.com/healthschema/anesthesia/blob/master/edu-MPOG/MPOG_Concepts_and_Types_rmr.csv)**
* https://www.mpogresearch.org/
* https://www.mpogresearch.org/technical
* https://www.mpogresearch.org/mpog-suite
* https://www.mpogresearch.org/faq-technical
* https://www.mpogresearch.org/downloads-1

***
### Model Concepts and Types (1992 / 24)
concept_type_description | type_id |	count
--------- | ---------- | -----------
Unknown Concept	| 0 |	0
Units of Measure	| 1	| 57
Routes of Administration	| 2 | 	34
Physiologic Observations	| 3 | 	152
Races and Ethnicities	| 4 | 	11
Laboratory or Testing Observations	| 5 | 	116
Staffing Types	| 6	| 15
Preoperative Observations	| 7 | 	280
Procedure Room Types  | 8  | 25
Outcome Observations  |9 | 99
Intraoperative Medications (Administered Mixtures)	| 10	| 524
Intraoperative Events, Interventions, and Observations	| 11	| 437
Administrative Admission Type	| 12	| 6
Access Location	| 13	| 32
Access Size	| 14	| 39
Access Type	| 15	| 21
Access Side	| 16	| 3
Surgical Services	| 17	| 34
Extraction Preferences	| 18	| 6
PHI Dictionary Type - Do Remove	| 19	| 15
PHI Dictionary Type - Do NOT Remove	| 20	| 6
Charge capture	| 21	| 13
Intraoperative Fluids In (Excluding Blood Products)	| 22	| 37
Intraoperative Blood Products In	| 23	| 8
Intraoperative Outputs	| 24	| 19

***
### REBMS Tables (15)
* **IntraopCaseInfo**
* PhiDictionary
* Sites
* Patients
* LabValues
* Preop
* 	PreopDetails
* IntraopStaff
* IntraopPhysiologic
* ItraopInputOutput
* 	IntraopInputOutputTotals
* IntraopMedications
* IntraopNotes
* 	IntraopNoteDetails
* Outcomes


