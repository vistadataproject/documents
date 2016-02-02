####Observations on CIS/ARK Terminology:

**A-H all say the same thing: Done in isolation (own format, no map, no feedback loop == variable granularity)**


* A.*Very large. Total size of CIS/ARK terminology is 36,082 terms as of August 2015. The entirety of VA VISTA including all 160+  Applications is comprised of 65,000 data fields. CIS/ARK terminology is thus over 50% the size of VISTA's defined data capacity. This large size makes it  difficult to manage or do quality control, and leads to a variety of problems with mapping.
* B. Not mapped to standard terminology (LOINC, SNOMED, RxNORM) and therefore not interoperable outside VA.
* C. Not mapped to VISTA terminology and therefore not interoperable within VA (No compatibility with any VISTA application, including as VISTA Surgery).
* D. Highly variable granularity of definition for different domains.  Some concepts are hyper-defined (880+ defnitions for peripheral IVs), some are under-defined (only one term to describe a 12-lead EKG) and some terms are undefined (definitions for physiologic observables, vitals, and medications are absent). This  will lead to mappings either one-to-many (to the hyper-defined terms), many-to-one (to the under-defined terms), or unmappable (for undefined terms). In all three cases described - where there is no direct one-to-one mapping available - there will be information loss
* E. Vendor-specific terminology. If a vendor cannot map their terminology to the CIS/ARK terminology, they submit their own proprietary terminology for inclusion to the CIS/ARK teminology, so they can map to it.  However, this means that only that particular vendor can map to it.  This silo's the vendor's terminology within the CIS/ARK terminology. 
* F. Vendor mapping isolation. The vendors do their mappings independently and in isolation of each other, some using only their own vendor-supplied terms.  There is no coordination between vendors on how they are mapping thier concepts to other vendors' concepts. The result is no vendor-to-vendor correspondence in the mappings.
* G. Loss of essential clinical information. Given that the core function of an automated Anesthesia Record Keeping system is to record with high fidelity the intra-operative vital signs and medications administered during an operation, and that there is no terminology for these concepts, this information will be lost.
* H. Nonstandard tools and formats.  The creation and management of the CIS/ARK vocabulary is with brainstorming tool (Mindmap) rather than an industry-standard enterprise vocabulary management tool.  The resulting output of the brainstorming tool is a vocabulary hard-coded in precoordinated form, making for a combinatorial explosion of terms (i.e. 880+ ways to describe peripheral IVs). This explosion is exceedingly difficult to manage, maintain, or map to any other system.



####In Brief
* There is no coordination of terminology mapping across vendors; the vendors independently map their own systems to this terminology.
* Contains high redundancy and over-definition of terms (example:  880 definitions for peripheral IV)
* Contains procedures clinically irrelevant in VA and/or in the OR (pediatric anesthesia - sacral epidurals, etc.)
* Lacks any vocabulary for physiological observables or vital signs (leading to loss of this data)
* Lacks any vocabulary for medications (leading to loss of this data)
* **No direct one-to-one mapping between vendors** is the bottom line.




***

Currently VA has a large (>30,000 term) peri-operative / critical care terminology "rosetta vocabulary"  for all CIS/ARK systems.  This vocabulary is controlled and maintained in proprietary form by a vendor outside VA, who retains full control of this 'product'.  The vendor does not and will not publish this vocabulary to the public nor to VA to inspect or do quality control. Therefore, my access to this was exceptional (and the vendor would never have released if they knew a VA anesthsiologist was going to do a formal review).  However, in the interest of patient safety in VA, and to get at the root cause of VA's problems with integrating our CIS/ARK systems, I obtained a copy. 



* Created by a nurse over the course of two years; telcons weekly lead by two anesthesiologists, but virtually no other anesthesiologist attendance

* they used FreeMind (https://en.wikipedia.org/wiki/FreeMind), which is meant brainstorming and project management; then hacked a transformation of the output of FreeMind to a relational database tabbles (using a proprietary method, and which is not reversible or published).

*  By defnition, it does not use composable vocabulary tooling, making it incompatible with any KBS approach and tooling for enterprise vocabularly such as SOLR.
*  It is fully owned and operated by one vendor, who will not publish this for public nor peer review.  This vendor will only share  segments of it directly and privately vendor-to-vendor and only on an 'as needed' basis, such that this vendor retains full control, and keeps this out of the VA's or public oversight.  Because it is proprietary, closed, unpublished, and unpublishable, it precludes any quality control by VA, or by clinicians.

If one gave a high school student a large textbook of anesthesia and asked him to dump it into a spreadsheet, unfiltered, this is what one would get.  It is a laundry list of items with without filtering or ogranization containing erroneous and inapplicable information. It reflects no clinical insight of actual patient care, particularly in VA. 

If there is a reason for failure to integrate anesthesia information across VA,  we have one of the explanations.

