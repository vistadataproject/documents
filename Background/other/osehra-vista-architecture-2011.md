###  OSEHRA VISTA Architecture and Planning  (2011)

OSEHRA was created in 2011 as the custodial agent of VA's VISTA architecture and artifacts (26K MUMPS routines)  to enable its evolution with the open-source and commercial community outside VA.   These are some of the intial planning and tasks OSEHRA set out to accomplish.

https://www.osehra.org/comment/1758#comment-1758

* The initial 2011-baseline OSEHRA System Architecture is available in the Architects-Group Documents-Tab. There is also an HTML browser viewable version.  
* Please suggest features, which will improve the architecture; otherwise, the following work is planned between now and December:

#### OSEHRA Tasks for December 2011:
* Define future-state architecture Software Development Kit (SDK)
* De-conflict duplicate namespaces and duplicate modules
* Add master list of Namespaces and Numberspaces, based on VA internal feedback.
* Investigate modules without documentation
* Harmonize ICRs (aka DBIAs) across SA, based on VA internal documentation
* Add missing APIs, RPCs and Component Diagrams
* Add patchs to module-diagrams and map patches-to-modules
* Map Namespaces-to-modules and visa-versa
* Incorporate Xindex mapping of modules-to-routines and modules-to-data files
* Create/Obtain GT.M and Cache build
  * Map namespaces-to-files
  * Map namespaces-to-routines
* Verify OSEHRA versus VA Research Group architecture artifacts


__ISSUE: How should OSEHR's System Architecture deal with the 26k+ Routines in the VistA codebase?__

SITUATION: We have XINDEX results for each of the 168 VistA custodial packages, including
* Overall list of routines (26k+)
* List of Routines included in each custodial package
* List of Routines called by each custodial package
* List of Data files used by each custodial package
* Routines and their dependencies are an important part of the architecture; but, there are 26,000+ routines and I am not sure how to include this mass of information in the architecture. As an example, should we create a separate Excel or Access "database"? . Maybe, simple is good; the simplest approach is to attach the XINDEX results to each package's description in the architecture or create a Package XINDEX Results attachment or appendix for the architecture.

REQUESTED ACTION: Please comment on your suggestions on how to deal with and organize VistA Routines and their dependencies in the architecture.


__Response by Tom Munnecke on 4 years ago (2012)__

https://www.osehra.org/comment/1758#comment-1758

I suggest we incorporate Semantic Web/Metadata concepts

VistA uses a metadata-directed approach which in modern terminology would be called a Semantic Web.  Caregraph has analyzed the data dictionary (of the various VistAs and RPMS) and turned it into a semantic web graph they call "Semantic VistA" http://www.caregraf.org/semanticvista  These vocabularies can be browsed at http://vista.caregraf.org/vocabs

I think that this is an extremely important perspective on the VistA architecture, well worth study by any software architects examing VistA or its future evolution as part of the Semantic Web, Linked Data, or for advanced medical informatics applications in social network analysis, genomic data, or data mining against the VA's unique, massive database (and growing with the Million Veterans project).  The semantic approach gives us new tools and opportunities to deal with privacy - both direct and inferred through semantic graph relationships.

It also allows seamless integration between different semantic graphs: for example, someone might query at the Federal Enterprise Architecture level via RDF graphs, then merge this information down to the Clinic_location levels at the VistA RDF level, then query to the nearest public transportation service point, all from a semantic "mashup" of information expressed in standard RDF formats.

Representing VistA information in RDF format also simplifies VA/DoD/IHS integration.  Rather than using hard-coded APIs for predetermined access, a Semantic model would allow simple queries to express the shared information in a common semantic graph.  If certain information is sensitive (say, soldier location in a theater of war), this protection could be established at a granular level of an individual triplet in the triple store and embedded into the query processor.

Overlaying a semantic model on top of the existing VistA implementation could provide a giant step forward, both on today's system, as well as tomorrow's.  It would give us tools to "recompose" the system at a metalevel, which is a different way of thinking than just "refactoring" at the static source code level.  

It would give us tools to deal with state management - being able to express the temporal semantics of health care - workflow, clinical protocols, reminder systems, etc. that are buried into the application logic of the current system. 

The semantic network crowd speak derisively of approaches that "babelize" a domain.  An example of this might be the ICD10 code "W59.83 Crushed by other nonvenomous reptiles" which attempts to build a self-contained, finite-state grammar to express things that could be expressed much more richly in a grammar.  For example, "tripping over a pet" could be part of an ontology, which could link to a Dog_breed semantic domain, giving us an opportunity to express which breeds caused what proportion of falls in the elderly.  But this is stored as a linked graph, which allows semantic integration as appropriate (including tripping over cats, or pet pythons).

The Semantic VistA work makes some important distinctions between ontologies and patient data that are a significant, if subtle, distinction in the more general notion of the "FileMan database".  These ontologies are futher broken down into local vs. national, which is a very important part the large-scale dynamics that VistA has lived with for 30 years. This gives us a metadata-driven model for dealing with localization of ontologies, patient data, routines, etc.

Adopting a Semantic model for VistA also answers the PCAST report calling for greater use of Metadata and a "universal exchange language"

 

PCAST has also concluded that to achieve these objectives it is crucial that the Federal Government facilitate the nationwide adoption of a universal exchange language for healthcare information and a digital infrastructure for locating patient records while strictly ensuring patient privacy. More specifically, PCAST recommends that the Office of the National Coordinator for Health Information Technology and the Centers for Medicare and Medicaid Services develop guidelines to spur adoption of such a language and to facilitate a transition from traditional electronic health records to the use of healthcare data tagged with privacy and security specifications."

The PCAST use of "tag" can be considered "RDF metadata".  The report continues with a ringing endorsement of a semantic metadata approach:
These individual pieces are called “tagged data elements,” because each unit of data is accompanied by a mandatory “meta­data tag” that describes the attributes, provenance, and required security protections of the data. Universal exchange languages for metadata­tagged data, called “extensible markup languages” are widely and successfully used. Indeed, ONC’s clinical document architecture standard (CDA) is such a markup language, and is an important step in the right direction. The indexing and retrieval of metadata­tagged data, across large numbers of geographically diverse locations, is an established, highly developed, technology—the basis of web search engines, for example. With ONC leadership, these technologies could rapidly be adapted and standardized for universal use in health IT. Innate, strong, privacy protection on all data, both at rest and in transit, with persistent patient­-controlled privacy preferences, is likewise achievable, and must be designed in from the start.
I have to smile a bit at this assertion, since I started with this kind of metadata approach 33 years ago, but it's good to see this popping up now, anyway. I think that it is critical that we understand the semantic web/metadata approach, and how far along VistA already is in implementing it.  If we don't, I fear that we will end up babelizing VistA into a brittle array of exploding complexity of standards, APIs, bureaucratic processes, and buzzwords that will fuel lots of contracts but with little value - or even a workable system.

 

__Response by conor dowling on 4 years ago (2012)__

Tom,

first off, thanks for the reference to Semantic VistA.

Let me add one other thing on structuring VistA data. Usually VistA is seen as a collection of packages and its data model is broken down by package too but as I wrote in VistA Goodness, you can view VistA data (FileMan data) as a pie with four pieces: Patient, Institution, Concepts and System. This is a lot more useful for people who are interested in all statements about a patient and not the packages behind those statements. Such people don't care that a "package" called "Surgery" was used to create the statements about procedures: they just want at the information.  

On PCAST - a while ago I mailed the following

In effect PCAST is calling for a "web of health data". They don't like the "document-motif", the use of big CCDs or CCRs - "any attempt to create a national health IT ecosystem based on standardized record formats is doomed to failure" - and they don't believe the SOA framework behind HIEs will work either - "in a sector as fragmented and rapidly evolving as healthcare, we believe it is impossible to build a national implementation of SOA solutions and directories that could be used and scaled indefinitely into the future". One other thing: they "have not assumed a national repository for storing health data": the proposal  is for a distributed web of data. Take away talk of "tagged data elements"/"xml" and what you have here is secured access to a large, provider-published webs-of-data.


