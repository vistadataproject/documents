## RiskVision Schema translation to YAML

In this repository is a sample RiskVision-generated spreadsheet of controls questions and answers:

```
rv-qna-vam.xls
```

All questions and responses need to be extracted from the spreadsheet and translated to a strucutured YAML file, with full fidelity of all information preserved.  To aid in creating python script to do this, a documentation on[python-excel-tools](python-excel-tools.md) are in this repository. 



## Example RiskVision Assessment
The structure of the RiskVision spreadsheet is outlined below. 

### Response types
* Text:  Text of any length.
* Single Option:  Several options are provided; a minium (and maximum) of one must be selected
* Multi-Option:   Several options are provided; a minumum of one must be selected

### Validation:
* These three responses are REQUIRED and may not be NULL. 
* All other response fields are OPIONAL and are allowed to be NULL.


#### Survey Header
```
Survey Name:	1-2 System Information
Asset Name:     VA software project X Assessing
Asset Type:     System
Asset Subtype:  Assessing
Asset Owner:    John Doe
Due Date:       2018-04-13
```

#### Question-Reponse Section


__Text Response__
```
QuestionNumber      {Number}          REQUIRED
ControlReference    {Text}            REQUIURED
QuestionTitle       {Text}            REQUIRED
Queston             {Text}            REQUIRED
ResponseType        Text
    Text            {Text}              REQUIRED
    Flag?           [Y / N}             OPTIONAL; NULL is valid
    Comments        {Text}              OPTIONAL; NULL is valid
    MyNewComments   {Text}              OPTIONAL; NULL is valid
    Implementation  {Text}              OPTIONAL; NULL is valid
    RemediationPlan {Text}              OPTIONAL; NULL is valid
```

__Single Option Response___

```
QuestionNumber:     3
ControlReference    AC-02.E04
QuestionTitle:      Operational Status
Queston:            What is the system operational status?
ResponseType        Single Option
    SingleOption    #2                  REQUIRED (MIN=1, MAX=1)
        Option#1     Unassigned
        Option#2     Acquisitions/Development
        Option#3     Operations/Maintenance
        Option#4     Disposition
        ...
```

__Multi-option Response__
```
QuestionNumber      5
ControlReference    AC-02.E04
QuesitonTitle       Ensure Documentation Attached
Question            Ensure you have attached the following documentation, 
                    or appropriate evidence for each area
ResponseType        MultiOption
    MultiOption     #1,#2,#5...           REQUIRED (MIN=1; MAX=unlimited)
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


```



