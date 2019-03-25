## RiskVision Schema translation to YAML

In this repository is a sample of a RiskVision-generated spreadsheet of controls assessment questions and responses.

```
rv-qna-vam
```

All  questions and responses need to be extracted from the spreadsheet into a structured text file as YAML.  A few python-excel tools are here [python-excel-tools](python-excel-tools.md)



## Example RiskVision Assessment

### Response types
* Text:  Free text.
* Single Option:  Several options are provided; a minium (and maximum) of one must be selected
* Multi-Option:   Several options are provided; a minumum of one must be selected

### Validation:
* These three responses are REQUIRED and may not be NULL. 
* All other response fields are OPIONAL and are allowed to be NULL.



#### Survey Header
```
Survey Name:	1-2 System Information
Asset Name:     VistA Adaptive Maintenance (VAM) Assessing
Asset Type:     System
Asset Subtype:  Assessing
Asset Owner:    Robert Disko
Due Date:       2018-04-13
```

#### Question-Reponse Section

```
QuestionNumber      {Number}
ControlReference    {Text}
QuestionTitle       {Text}
Queston             {Text}
ResponseType        Text
    Text            {Text; NULL}        REQUIRED
    Flag?           [Y / N; NULL}       OPTIONAL
    Comments        {Text; NULL}        OPTIONAL
    MyNewComments   {Text; NULL}        OPTIONAL
    Implementation  {Text; NULL}        OPTIONAL
    RemediationPlan {Text; NULL}        OPTIONAL


QuestionNumber:     3
ControlReference    AC-02.E04
QuestionTitle:      Operational Status
Queston:            What is the system operational status?
ResponseType        Single Option
    SingleOption    #2            REQUIRED (MIN=1, MAX=1 response)
        Option#1     Unassigned
        Option#2     Acquisitions/Development
        Option#3     Operations/Maintenance
        Option#4     Disposition
        ...
    Flag?           [Y / N; NULL}       OPTIONAL
    Comments        {Text; NULL}        OPTIONAL
    MyNewComments   {Text; NULL}        OPTIONAL
    Implementation  {Text; NULL}        OPTIONAL
    RemediationPlan {Text; NULL}        OPTIONAL 

QuestionNumber      5
ControlReference    AC-02.E04
QuesitonTitle       Ensure Documentation Attached
Question            Ensure you have attached the following documentation, 
                    or appropriate evidence for each area
ResponseType        MultiOption
    MultiOption     #1,....           REQUIRED (MIN=1; MAX=none response)
                #1      System Security Plan
                #2      Risk Assessment
                #3      Configuration Management Plan
                #4      Disaster Recovery Plan
                #5      Incident Response Plan
                #6      IS Contingency Plan
                #7      Interconnection Security Agreement
                #8      Memorandum of Understanding (MOU)
                #9      Privacy Impact Assessment (PIA)
                #10     ISCP Testing Results (ISCP TR)
                #11     DRP Testing Results (DRP TR)
    Flag?           [Y / N; NULL}       OPTIONAL
    Comments        {Text; NULL}        OPTIONAL
    MyNewComments   {Text; NULL}        OPTIONAL
    Implementation  {Text; NULL}        OPTIONAL
    RemediationPlan {Text; NULL}        OPTIONAL

```



