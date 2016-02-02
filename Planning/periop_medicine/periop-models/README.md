## [Perioperative Data Model](http://webprotege.stanford.edu/#Edit:projectId=6e850880-fed9-4b75-bbb0-8c57119cca1a) (PDM)


**The model** under development is available in WebProtege: [**here**](http://webprotege.stanford.edu/#Edit:projectId=6e850880-fed9-4b75-bbb0-8c57119cca1a) and current Issues [**here**](https://github.com/healthschema/anesthesia/issues)


***
**OBJECTIVE**

**A concise, modern, crowdsourced,  web-centric, high-quality, peer-reviewed, practice-driven, literature-linked, freely-licensed** anesthesia information model focused on pragmatism and simplicity to facilitate the adoption and use by the broadest base of anesthesiologists. This model must be easy to map, implement, and maintain for all existing systems.  Therefore, it must be small and easily understood, while providing sufficient content for secondary use.   The most essential feature is that this is **clinically relevant**.  To support this it will have the following attributes.


***
**UNIQUE FEATURES of ANESTHESIA DATA**

**Data density is correlated with care intensity.** Depending on patient acuity, medical care intensity and duration varies, generating corresponding data densities.  For example, primary care physicians treat stable patients in the outpatient setting for chronic conditions that change over the course of weeks, months, and years, thus generating low volumes of data. In contrast, Anesthesiologists treat unstable patients in the inpatient setting for acute conditions that change over the course of minutes and hours, and generate large volumes of data.  In addition, validity of any data is inversely related to the frequency of collection. Frequently collected data expires rapidly, as it is replaced by an update on a short schedule. This is summarized in the following table:

timeFrame |setting | condition | dataUpdate | %F2F contact | encounter
---- | ---- | ---- | ---- | ---- | ----
lifetime |outpt - clinic | permanent | NA | q5yr (0.001%) | 15 min
years | outpt -  clinic | chronic-stable | Yr | qYr (0.001%) | 15min
months | outpt -  clinic | chronic-variable | Mo | qMo (0.01%) | 15min
weeks | outpt -  clinic | acute on chronic | Wk | qWk ( 0.1%) | 15min
days | inpt - floor | acute - stable | Shift (8hr) | qD (<%) |30min
**hours** | inpt -  PACU/ICU | acute - unstable | 1 hr | 1:20 (5%) | 30min
**minutes** | inpt -  OR | acute-unstable | 5 min | continuous (100%) | 2-8 hours

%F2F contact = % time direct physician-patient contact required to manage the condition. 

For an anesthesia data model to be useful, it needs to **succintly summarize a high volume of rapidly changing data** collected over a relatively short period of time during the patients care in the OR, PACU, and ICU setting. This is **high-volume, low-variability** data, as much of it is repeated measurements on a frequent basis.

A few guidining principles for the schema are based on the [mHealth schema](http://www.openmhealth.org/documentation/#/schema-docs/schema-design-principles)



***
**ATTRIBUTES**

See also [schema design principles](http://www.openmhealth.org/documentation/#/schema-docs/schema-design-principles/)

* **Small:**  Efficient and concise. No redundancy. _Maximum size limit_.
* **Simple:** Easy to understand; appropriate, clinician-friendly level of abstraction.
* **Summative:** Emphasizes and encapsulates the trends and patterns of the data rather than the unfiltered, raw data. Much of the data in this domain is machine-generated and very granular, making interpretation difficult. The summary captured will be both (a) objective, automated descriptive statistical metrics (mean, mode, max, min, time within certain limits, etc.)  and (b) subjective clinically interpreted annotation of patterns of the same data. This provides a synergy of human-machine interpretation of data to improve conciseness, reliability, and readability of the dataset.
* **Standards-based:** linked to standard medical vocabularies where technically and semantically feasible. Technically feasible means the vocabulary has authoritative web-addressible URIs to link to. Semantically feasible means where there are unambiguous mappings. If there are ambiguous (one to many, many to one, or no) mapping this is annotated as such, with the most applicable relevant link (If one-to-many: to the topmost concept of a hierarchy).
* **Self-contained:** Has no dependencies on any external or proprietary technology or terminology; links out with sameAs to external identifiers where possible, but does not depend on them for functionality (see reasons under 'standards-based').
* **Interoperability:** Designed for machine processable exchange (Inter-agency, Private sector, National quality repositories)
* **Lightweight:** Simple, easy to implement; has no dependencies or 'moving parts'; fully self-contained and works 'out of the box'.
* **Modern:** Commodity, ubiquitous, free, open, web-standard technology.
* **High-quality:** Continuous peer-review via transparent web-based rating/voting system.
* **Practice-driven:** Informed from in-production clinical *operational systems* based on quantitative analysis of *frequency of use of terms*.
* **Literature-linked:** Must provide MeSH term(s) for each concept. Live link(s) to current literature (PubMed) must be provided, supporting evidence that the term has clinical relevance.
* **Open-licensed:** for universal distribution and use with Creative Commons licensing (same as Wikipedia).



**USE CASES**

To maximize efficient information transfer between providers in the critical care setting (which comprises high volumes of time-varying machine-generated multimodal data)  this will be **metadata-focused**. It will focus on **summary information** such as **totals** (from human-generated data: medications, fluids, I/O, blood products) and **trends**  (from machine-generated data: vitals and other discrete parameters) and **significant actions and events** (human judgement) rather than raw, unfiltered (generally highly artifact-laden) raw data prevalent in the automated data collection of AIMS systems). 

This will improve the succintness and "signal to noise" ratio that is prevalent in this kind of high data throughput practice using a human "first pass filter" to provide the annotation and metadata immediately after the end of the case (when all this data is available for review; and is fresh in the mind of the provider and primary source author of the data).

This will provide a consistent vocabulary for reliable clinical **handoff  document** for the (PACU, ICU, floor) teams for transitions of care on the day of surgery; as a  **follow-up  care** document for any special post-op care days in the days to  weeks after the procedure; as an **advisory alert** for anesthesiologists taking care of the patient months to years after the procedure to assure patient safety, and as an **outcomes  study enabler** for all time in the future, as this will contain key metadata for cohort selection allowing risk-adjusted comparison of anesthesia techniques intraop with the patients outcomes months to years later.


* **High reliability clinical handoffs** for the (PACU, ICU, floor) teams for transitions of care on the day of surgery
* **Consistent follow-up care** information for any special post-op care days in the days to weeks after the procedure
* **Advisory for anesthesiologists** taking care of the patient months to years after the procedure to assure patient safety
* **Outcomes research** enabler for all time in the future, as this will contain key metadata for cohort selection allowing risk-adjusted comparison of anesthesia techniques intraop with the patients outcomes months to years later.




**INFORMED BY**
* [EDU-MPOG model](https://github.com/healthschema/anesthesia/tree/master/edu-MPOG) (1992 concepts): source RDBMS /tables
* [ASA-AQI model](https://github.com/healthschema/anesthesia/tree/master/asa-AQI)(?? concepts); source  XSD
* [VA-Surgery model](https://github.com/healthschema/anesthesia/tree/master/va-SURG) (571 concepts):source RDF
* [open mHealth model](http://www.openmhealth.org/features/features-overview/)
* [Epic-registry](https://github.com/healthschema/anesthesia/tree/master/epic-registry) (80 concepts): source CSV


**MOTIVATION**

Currently VA has 130 AIMS systems deployed and requires the integration of all pertinent anesthesia information to provide national quality reporting.  Adoption of a lightweight national anesthesia vocabulary that is compatible with other national quality reporting efforts (including AQI) would be most beneficial to veterans receiving anesthesia care.

