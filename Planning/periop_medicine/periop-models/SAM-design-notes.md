Direct, secure, provider-to-provider electronic exchange of the anesthesia record containing all data in both machine computable form and in human readable form within the single, self-contained document. This will support the timely information delivery at the bedside to support patient care as well as local and national quality initiatives in the aggregate.


 **USE CASES**
 
**1. Computable exchange of all structured data comprising a standard anesthesia record** (Machine-Machine). This exchange of the anesthesia record will be **direct, bi-directional, system-to-system** in machine processable structured form. This will use modern, open, universal web standards and technology with **no cost, no licenses, no middleware, no moving parts, and no middleman**. This will support the **rapid, unlimited, automated, point-to-point** exchange of high volumes of structured anesthesia information with minimal latency directly between the **primary, authoritative source** of the information - the provider (AIMS) and all secondary users  (AIMS <-> AIMS /  EHR / Institution / Agency) to enable aggregation, analytics, clinical research, compliance, and national quality initiatives. 

**2. Visual Record (Human-Machine):**  View of entire digital anesthesia record on a single page in a standard web browser. This will provide anesthesiologists the most convenient, accessible, and rapid review of the digital anesthesia record - or a digitally exchanged one - from any device with a modern web browser at the bedside, such as mobile devices. To accomodate viewing all data efficiently in mobile web browsers, the best practices in high density information display will be used, incorporating [sparklines](https://en.wikipedia.org/wiki/Sparkline) and motifs from [trading platforms](https://www.tdameritrade.com/tools-and-platforms/mobile-trading/td-ameritrade-mobile.page). This will allow anesthesiologists to review all past, present, or exchanged records rapidly and easily with a single ubiquitous viewer (including the one in their pocket) supporting  clinical decision support at the bedside,  enhancing patient safety and care. 



***
**KEY CHARACTERISTICS OF ANESTHESIA DATA**

A notable feature of anesthesia practice and data is the volume and velocity of information that must be acquired, processed, analyzed, and acted upon in real-time during the course of a surgical procedure.  This is because the anesthesiologist must measure all physiology from all organ systems and intervene to keep these within safe limits, while at the same time the patient is undergoing considerable physiologic derangements (general anesthesia, surgery, blood loss, pain, etc.). In the extreme case (such as aortic arch replacement) the patient must be placed in extreme hypothermic circculatory arrest (EKG and all vitals zero) with induced barbiturate coma (EEG zero) and fully exsanginated (cardiac bypass) to prevent rapid and complete blood loss. This is a similar physiologic state of a person who drowned and froze in Antartica.

Every organ system has very different markers for physiologic status, and the measurement of these comes from a wide range of sources, each with thier own ranges, frequencies, units, timescales, data validity period, and method of representation.    The problem in this case is: How do we display such large heterogeneous data in such a small space?

**The importance of trends: Accurate interpretation**
One way to parse this problem is to look at the temporal qualities of observationsand facts about the patient.  This is important because in medicine (and finance, and most things) it is not the absolute value of any data, but the context and the trend over time.  For any observation or fact, what is the trend? Has it changed recently? And if so, in what direction? Is it better, worse, or the same? 

**The importance of timeliness: Relevancy for patient care**
All data has varying effective periods for use, after which the meaningful use of this to institute an intervention for the patient loses its value and it becomes "stale". While a lab reading that is three months old may be valid for outpatient care, the same lab measurement over one day old would be of little to no value in the inpatient or critical care setting (and would have been already repeated on a daily bassis).  (Note that while "stale" lab data is of little value for current clinical decision making, it still is important to retain in order to create context and historical trends in order to interpret the current value.)

**The period of time that defines validity and relevancy of data varies by specialty**.  For *outpatient* primary care doctors it is measured in **months to years**; for *inpatient* physicians it is in **hours to days**, and for critical care physicians it is in **seconds to minutes**.   


**Measured date/time is different than Effective date/time**
Some measurements are transient and valid for only a very specific period of time.  Other measurements are valid for a much longer and different periods of time. In other words, the "refresh rate" of certain facts needs to be on different schedules. 

**Lifecycle of clinical data:** (mandating different refresh rates)
* lifetime (DOB)
* years (chronic conditions)
* months (history of present illness)
* weeks (semi-acute)
* days (a bruised ankle)
* hours (a BP for a floor patient)
* minutes (noninvasive BP reading in the ICU)
* seconds (invasive BP measured in the OR). 

=> The anesthesia record records the bottom three, given the context of the top five. 

**Temporal qualifiers on measurements / observations:**
* continuous / intermittent
* permanent / non-permanent 
* active / inactive
* acquired / congenital (genetic)
* chronic / acute  / acute on chronic
* resolved (past date) / resolveable (future date)  
NB: "Cure" applies to very few conditions in western medicine; however is a term is used extensively in marketing brochures for alternative, homepathic,  non-FDA studied or approved substances and supplements.

**Measurements are valid only in a specifc clinical context**  (i.e the patient was on high dose chemotherapy, and therefore had low platelet count; outside of this context a low platelet count woud be considered abnormal).

**What this all means for the data model**
Partitioning data up into segments of data that have different expiration dates is key to keep data quality intact.  The refresh rate is different depending on the observation and context.  Thus the split on the relatively static patient and procedure data, from the dynamic (disposable) data of the interop period.

=> Key is to develop metadata standards and develop a vocabularly to describe all of these continuously collected data (vitals, ventiation, etc.)  so we can consicely summarize the whole "chunk" of vitals data. This is a "first-pass" filter and classification system that no machine can do today.

=> Benefits of this is that we can do cohort selection on this metadata, rather than sifting through billions of vital sign numbers (which have so much artifacts that you can effectively call them 'junk' and dispose of them.  Probably not worth persisting in VIsTA). 

***

**MetaVitals:  A new vocabulary for decribing and sharing Vitals precisely, with nuance**
* Nuance: Qualitative, human description of entire trend (monotonic up/down; "smooth", within 20% baseline, spike/wave). This may have several enumerations of encoding, as well as provide free text.
* Precision: Objective, machine description of entire trend (descriptive statistics: N, Tstart, Tend, median, mode)
* Objective comparison (of mode or median) with baseline, chronic value preoperatively
* Context information: who, what, when, where
* Quality info: measured date, expiration date, etc.


=> Analogy: the Cardiologists have developed a rich vocabulary for describing the EKG waveform, some using objective measures (mechine calculated: ST elevation/deprression, RR intervale, QRS width)  and some using qualitative measures (human assessment of overall patterns, such as atrial fibrillation, VTach, etc).



***

Note that most of today's EHRs are built around the worflow of primary/chronic care, not critical/acute care. 

For several reasons it is critical for the Anesthesia Record to be in computable form and fully integrated with the primary EHR system. The first is that without integration in the longitudinal record, the AIMS data will lose its context, meaning, and interpretability.  Secondly, for any benefit to accrue to the patient for digitally collecting this data, it must be available to all physicians downstream taking care of the patient at all points in the future. Thirdly, it needs to be incorporated in the longitudinal record to support long term outcomes improvement and quality initiatives years into the future. [**Note**: The approach VA has taken thus far is to deploy independent, standablone AIMS systems completely separate and silo'd from the VA enterprise EHR. This makes this AIMS data inaccessible for VA doctors, to veterans, and for any national quality initiatives].

***

**MODEL CHARACTERISTICS**

The model will be constrained initially to a small set of **core concepts** required to support the **basic universal practice of anesthesia**  in order to **establish a baseline high quality model** and encourage **widespread adoption and feedback**.  Only if there is community demand will the model expand beyond this initial scope.  Purely operational, financial, or specialist use cases (all which are region specific) are not accomodated in this core model. However, the model it will be structured with enumerations to allow local extension for all of the subspecialties.

The model will be a **self-contained**  and **fully functional**  with **no dependencies** on external proprietary technologies or terminologies. This will be licensed under Creative Commons for **universal and free use without any restriction** other than attribution.  There will be slots in the model with SameAs links  to  external controlled terminology (which is region and country-specific)  as desired. 

This model shall be **continuously published**  and made **universally accessible**  in **machine processable form**  through direct URL dereferncing through a  **RESTful endpoint** to be compatible with standard W3C web technologies such that web developers can incorporate this model directly in their web applications.


**QUALITY ASSURANCE**

To keep this small and high quality the following approach will be taken:

* **Accountability**: Proposers of each term will be the "owner" of the term in order to field all questions regarding it. Proposers must include their email address (using non-machine readable form, such as myaddress AT domain dot com), and supporting information with their proposal (context, usage, frequency, impact, literature links) to initiate peer review.
* **Context**: Explanation of anticipated context and use of term in workflow (preop, intraop, postop, etc.)
* **Practice-driven**: Is the term rarely used, or used only by subspecialists, or is it used by most anesthesiologists in most cases and contexts?  Provide information on frequency of term usage as a % of cases or contexts covered (100%, >90%, >50%, <25%, <10%, or <1%). Provide URL to pubmed or other openly available literature to support its usage in practice.
* **Impact**: How will digitally recording this concept impact patient care or outcomes? Provide URL to pubmed or other openly available literature to support its impact factor.
* **Peer review**: The term, its location in the hierarchy, and all supporting information will have independent validation through peer review on Github.
* **Continuous review**: All terms will be continously reviewed.  If there are considerably more than 100 in the list (say over 150) then the less frequently used ones (<10% or <1%) will be deprecated to make space for other terms with more general applicability.


## PARTICPATION

Participation is open to the public. No membership to any governing body, association, or orgainzation is required. 


**SIGN UP** for a free account on:

* [WebProtege](http://webprotege.stanford.edu/#Edit:projectId=6e850880-fed9-4b75-bbb0-8c57119cca1a): Stanford's web-based collaborative model development platform.  Then you may review and contribute to the [Anesthesia Model](http://webprotege.stanford.edu/#Edit:projectId=6e850880-fed9-4b75-bbb0-8c57119cca1a) that is hosted there.
* [Github](https://github.com/): Our collaboration and communication platform.  To submit or review model recomendations, or to join our online conversations, use our [Anesthesia Model Forum](https://github.com/healthschema/anesthesia/issues)


**CONTRIBUTE**

1. Open the [Issues tab](https://github.com/healthschema/anesthesia/issues) 
2. Create a new issue ticket labelled with your new term ([see example: "Mallampati Score"](https://github.com/healthschema/anesthesia/issues/8))
3. Label issue as "proposed term"
4. In the body of the issue ticket include your name and email address (yourname AT domain DOT com), context of use, frequency of use, impact on patient care, and literature links.
5. Support reasons for your term inclusion with literature links to [Pubmed search](http://www.ncbi.nlm.nih.gov/pubmed) or other freely accessible literature source.
6. Peers will review this submission and provide feedback, comments, recommendations; and will further tag the proposal. In the example "Mallampati Score" it was flagged as "peer reviewed: incomplete" because it was lacking any literature citations.


Any questions?  Create a new Issue!


## The Anesthesia Model

Review model online:
* [**Open Anesthesia Model**](http://webprotege.stanford.edu/#Edit:projectId=6e850880-fed9-4b75-bbb0-8c57119cca1a)


Foundation Model Classes:

* **PATIENT** : patient preop history, assessments, and risk factors; **static data**
* **PROCEDURE**:  details about the surgeon and surgery; **static data**
* **CHARTING**: all observations, administrations, procedures; **flow data**

Where:

**static data** = enter once and leave alone; historical info; doesn't change; no timestamp required

**flow data** =  continously changing set of events, observations, administrations, procedures. These are all temporally changing and interdependent and therefore require continuous charting with timestamps.  (Example: observation BP is low -- 1min--> administer medication --2min--> observation BP is normal)



***
**BACKGROUND **

What this model is based on:

* Common sense search: Google image search for "preop assessment form", "anesthesia record", "postop recovery forms" and contributed PDF copies of these forms.
* Patient-centric: Pubmed search on "most frequently used anesthesia data elements", "preop assessment", "risk stratification", "anesthesia chart", etc.
* Outcomes-driven: Pubmed search on "anesthesia outcomes" to catalog risk factors with supporting evidence.
* Patient Safety: Review of papers from the Anesthesia Patient Safety Foundation (APSF) on quality and safety parameters.
* Data-driven: Review structured data output of ASA AQI initiative of *actually collected data*  (not the model)
* Systems-driven: Review of structured data generated by operational Periop, Surgery, or AIMS systems.
* [MPOG](https://www.mpogresearch.org/downloads-1) Registry Model.
* [ASA AQI](http://www.aqihq.org/AQISchDoc/default.html?url=http://www.aqihq.org/AQISchDoc/OutputEventType.html) Registry Model


**For the technically inclinded:**

1. [Why Github?](http://healthschema.github.io/page2/)
2. [Github and Government: A perfect match](http://healthschema.github.io/page3/)
3. [Git: The Simple Guide](http://rogerdudler.github.io/git-guide/)


**Getting Started with Github**

1. Review [Github Guide](https://guides.github.com/)
2. Review [Intro to Issues](https://guides.github.com/features/issues/) 
3. Review [Intro to Wikis](https://guides.github.com/features/wikis/)
