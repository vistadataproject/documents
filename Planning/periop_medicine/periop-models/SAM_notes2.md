## Open Anesthesia Information Model

**OBJECTIVE**: Create the **smallest practical model**  of **real, operational, structured data**  that will have the most **universal application** and be fully and  **continuously quality controlled** through web-based  **crowdsourcing**  of domain experts **worldwide** using  modern **web-based, industry standard, open-source revision control** (the same tools that  Google, Yahoo, Facebook, etc. uses for all their code development ).   There will be no "design by committee", but rather a **fully transparent process open to the public**.  

It will be constrained initially to a  **maximum size of 200**  concepts or terms that  impact **patient safety and outcomes**.  Operational, billing, and subspecialties / special use cases which comprise only a small percentage of anesthesia practice are excluded from this model. Rather, this will be an evidence-based,  empirical,  statistically derived model (not a decibel-driven model by a few with special interests who speak the loudest).

This will be a **self-contained**  and **fully functional** model with **no dependencies** on external proprietary terminologies. Rather,  this will be licensed under Creative Commons for **universal and free use worldwide without any restriction** other than attribution.  There will be slots in the model with SameAs links  to  external controlled terminology (which is region and country-specific)  as desired. 

This model shall be **continuously published**  and made **universally accessible**  in **machine processable form**  through direct URL dereferncing through a  **RESTful endpoint** to be compatible with standard W3C web technologies such that web developers can incorporate this model directly in their web applications.

 **USE CASES**
1. Full machine processable interoperability of all structured data in the anesthesia record using standard free and open-source web technologies with zero dependence on any proprietary technology or restrictive licensing of any aspect (particularly terminology). This will support free and unlimited use for sharing, aggregation, exchange, collaboration on research, and patient care. An essential feature of this that is necessary for adoption is  (1) no licensing restrictions or limitations (2) no permissions required from any agency or governing body, (3) fully self contained and works "out of the box" with no dependencies and  (4) zero cost for unlimited use.

2. Full web-based sharing and viewing of all structured data in the patient record using standard, modern, free and open-source web technologies (HTML5, CSS3, JS). This will provide a single page view of all data, similar to that of a traditional paper record (but much better).  This will require use of libraries (D3.js and other)  with capability for displaying  high data density  (sparklines, timelines). 


**METHOD**: An empirical evidence-based approach will be taken through literature and surveys to assure quality and utility of all data elements, and to add or eliminate terms.  Online collaboration and crowdsourcing will be through Github using its "Issues" feature.  Every artifact that a decision was based upon will be referenced by URL for peer review of the decision-making process.

**INITIAL MODEL** will be created from:
1.  Google image search for "preop assessment form", "anesthesia record", "postop recovery forms" and contributed PDF copies of these forms. 
2. Pubmed search on "most frequently used anesthesia data elements",  "preop assessment", "risk stratification", "anesthesia chart", etc.
3. Pubmed search for papers on "anesthesia outcomes" to catalog risk factors that are of value
4. Review of papers from the Anesthesia Patient Safety Foundation (APSF) on quality and safety
5. Review of the APSF  IOTA model
6. Review of the ASA AQI model
7. Review of data elements **actually collected*  by AQI  (i.e. the "real" data)

**SURVEYS**: To minimize cognitive overload, survey all VA anesthesia departments/providers to rate data elements as (a) essential,  (b) good to have, or (c) not essential to care or decision making in the model.  This was the approach at Mayo by Vitaly Heresvich:
http://www.biomedcentral.com/1472-6947/14/92

***
Anesthesia care is divided in three phases:
1. Preop Assessment/Risk stratification (planning)
2. Intraop management - airway/vitals/meds  (execution: preflight, takeoff, cruse, landing)
3. Postop assessment/management (recovery)

***
APSF:  mixed reviews on quality of data in AIMS
http://www.apsf.org/newsletters/html/2015/June/03_AIMS.htm

Franlin Dexter: Many studies on operations and quality 
http://www.franklindexter.net/bibliography_AIMS.htm
http://www.franklindexter.net/Lectures/AIMSbibliography.pdf

AIMS vs Handwritten: any benefit?
http://www.ncbi.nlm.nih.gov/pubmed/23934747
***
Preop Assessment

https://www.google.com/search?q=preoperative+anesthesia+assessment+form&espv=2&biw=1426&bih=1380&source=lnms&tbm=isch&sa=X&ved=0CAcQ_AUoAWoVChMI7sPqy6W-xwIVAR4-Ch2rbwp6&dpr=0.75#imgrc=zDoI_c3mUsNa4M%3A

***
Intraop Record
https://www.google.com/search?espv=2&biw=1426&bih=1380&tbm=isch&sa=1&q=anesthesia+record&oq=anesthesia+record&gs_l=img.3..0l5j0i30l2j0i5i30l3.487183.489914.0.490236.17.16.0.1.1.0.108.925.15j1.16.0....0...1c.1.64.img..0.17.930.Xzym_2qFq_c



***
Postop Assessment/Management

