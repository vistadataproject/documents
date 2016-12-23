/* Canned Queries for fmQueryMaker.html */
CANNEDQUERIES = [
	["SELECT 2 LIMIT 10", "List first 10 Patients"],
	["DESCRIBE 2-9", "DESCRIBE Patient 9"],
	["DESCRIBE 9000011 FILTER(.02=9000001-9)", "Problems of Patient 9"],
	["COUNT 120_5 FILTER(.02=2-9)", "How many Vitals for Patient 9?"],
	["DESCRIBE 120_5 FILTER(.02=2-9) LIMIT 100", "First 100 Vitals of Patient 9"],
	["DESCRIBE 120_5 FILTER(.02=2-9&.01>2008-04-01)", "Vitals of Patient 9 from April 2008 on"],
	["DESCRIBE 63_04 IN 63-4", "Labs of Patient 9"],
	["DESCRIBE 55-1", "Pharmacy Patient of Patient 9"],
	["SELECT 8925 FILTER(.02=2-9)", "List documents of Patient 9"],
	["DESCRIBE 8925 FILTER(.02=2-9) LIMIT 2", "First two documents of Patient 9"],
	["SELECT 8925 FILTER(.02=2-9&.07>2007-01-01)", "List documents of patient 9 from 2007 on"],
	["DESCRIBE 8925 FILTER(.02=2-9&.04=8925_1-569)", "Describe all discharge summaries"],
    ["SELECT 100 FILTER(.02=2-9)", "List all orders of patient 9"],
	["COUNT 50", "How many drugs can you dispense?"],
    ["DESCRIBE 50_67 FILTER(4>NEXIUM) LIMIT 10", "Describe all NDCs for Nexium"],
    ["SELECT 9_6 LIMIT 100", "List the first 100 builds"],
    ["COUNT 9_6", "How many builds?"],
    ["DESCRIBE 9_6-1", "Describe the first (Kernel) build (shows CSTOP)"]
];
