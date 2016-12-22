## vdmRead Prototype

Unlike most prototypes, this one addresses a deliverable (#25) all by itself and enables another (#33) which is implemented in the [VDM Query Server](https://github.com/vistadataproject/nodeVISTA/tree/master/interfaces/vdmQSS).

[issue](https://github.com/vistadataproject/VDM/issues/83)

Prototype query access to VISTA Data Against VDM (Deliverable #25)

```text
Provide query access to VISTA data against VDM to allow comprehensive, granular data access to all VISTA data with single common query access method and with common, open, industry- standard output formats. The output of this effort shall yield:
o A FileMan Query Service (“FQS”) specified, developed and maintained on the Project Github
o Query response /output options include hypertext markup language (HTML), extensible markup language (XML), java script object notation for linked data (JSON-LD), and in Excel spreadsheet compatible form.
o An output option to format output as HTML tables.
o Representational state transfer application programming interface (REST API) to VDM
o A VISTA FileMan, populated to allow testing of all service nuance (“FileMan Test VISTA”).
o A unit and regression test suite that runs against the test VISTA posted and maintained on the Project Github.
```

Prototype Web-Based Query Interface to FileMan Data (Deliverable #33)

```text
Prototype a web user interface to FileMan to make FileMan more usable and accessible. This shall demonstrate data query and review via web interface to FileMan and must use commodity, industry standard, vendor-agnostic, battle tested, secure TCP and HTTPS protocols, and vendor- agnostic JS framework.
```

Notes: 
  1. #33 is FMQL Query Client rewritten to use VDM query and run behind Node.js server.
  2. The VDM Model here is a __read only model__. Write support will be added to parts of the model, domain by domain (allergy, problem ...) in the per domain prototypes.
