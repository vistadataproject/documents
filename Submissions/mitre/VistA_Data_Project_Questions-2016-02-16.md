### VistA Data Model – Related Questions
As of February 16, 2016

Note 

The MITRE team developed this list of questions as we reviewed the briefings provided by Dr. Richards and the materials on the VistA Data Project GitHub site.  We recognize that many of these questions address things beyond the scope of the current VistA Data Project effort.  However, we wanted to capture the questions that came to mind as we considered how to best leverage the results of this effort to advance VA outcomes.  One reason for sharing these questions is to tease out other thinking that would be of value but may not be captured in the existing artifacts.
The questions are grouped by category and, for each category, we attempted to note who we believe might be able to address the questions.  The targeted recipients for the questions are identified with <brackets>.


## VistA Data Project Questions 

### Measures of Success [VA, PJITC]
1. How do you plan to measure success?
2. What VA outcomes will this work advance?
3. Are there any Linked Data implementations that can be used as benchmarks for comparison?
a. For performance?
i. Note that VACAA CIO interviews found that response time of >2 seconds for any health IT application was considered unacceptable by physicians working directly with patients.
b. For return on investment?
c. For user satisfaction?
4. What are the implications for VA analytics?
a. Would the same models be used (e.g., would analytics specific tailoring be included in the model)?
b. Would the execution concept be for a different instantiation where less stringent performance and availability requirements could be acceptable?
5. Is a recommended VA integration approach included as part of the PJITC delivery?


### Overall Approach (PJTIC, VistA Evolution)
6. This effort is leveraging technology already developed for the DHA.  What DHA results are available?
7. What are the technical huddles in FileMan23 development?
8. How does the completely wide open RPC call made for eHMP work for you? 
9. What are the technical hurdles for eHMP integration? 
10. Are you developing layer in the architecture for future update business logic rules—enabled for cross-VistA “MDM”?


### Security Approach (PJITC)
1. What are the security/privacy holes in VistA that attribute-based security would fix? 
2. What is the planned security approach?
a. Notes (per deliverables schedule) on Patient-centric Data Security (due Q3 -> Q4)
i. Will show how PIKS-enabled annotations enable patient-centric secure queries
ii. Prototype will enhance FQS and have an example client
b. Is the conceptual approach already documented?
c. What is the end-to-end security approach – from user/client to query to federated access to display?
d. What changes in the security approach for write-back?
3. Will a standard REST security approach be used?
a. Will it use OAuth2 and OpenID Connect?
4. Will the MVDA and Fileman be expanded to accommodate fine-grained data access permissions and logging?
5. Where would data access rules reside?


### VistA Data Model (VDM) & Master VistA Data Model (MVDM) [PJITC]

Design / Development

7. What happens when model development exposes data inconsistencies?  How are the inconsistencies fixed?
7. How would making code changes to VistA “auto-generate” changes to the VDM? 
8. Can see why “auto-generating” an MVDM (even if possible) would be bad for configuration control, but would it also be bad in the VDM?
9. How did you do the schema matching between the DD and RPCs of the 5 Vista Instances?
10. Do you plan to engage with other external trading partners on the data models?

Business Logic

12. What is the plan for extracting and capturing business logic currently embedded in RPCs or CPRS?
12. What happens to these RPCs?


Maintenance / Model Evolution

14. What is the concept for maintenance of the models?
14. What is the concept for what happens when data inconsistencies are exposed during execution?
15. Will data management/governance considerations (e.g., who has authority to change data) be included in the VistA Data Project?


Operational Concept / Runtime nodeVistA [PJITC]

16. Where will the mapped instance data reside at runtime?
17. Will all data queries be dynamic or will some instantiations of mapped instance data be cached?  
18. If data is modified, what is the plan for ensuring enterprise wide data consistency?
19. How will federation across all VistA instances and other data repositories be handled?
20. How would the federation concept meet availability and performance requirements?

Testing [PJITC]

22. Use Case:  What use case will be used to test?
22. Test Data:  What is the source of test data?  How much test data?  From how many repositories?
23. Approach:  What is the planned test approach?
24. Performance:  
a. How will performance be measured?
b. Will there be end to end testing (e.g., from end user perspective)?



Fileman Notes (per brief)
NoSQL hierarchical data manager
VistA’s schema is self-documenting through data dictionaries in Fileman
VistA has a NoSQL database model

