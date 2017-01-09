## Objective and Method of Delivery

__What?__

> The VA Information Systems Technology Architecture (VISTA) is VA's an integrated EHR and resource management system which provides all adminstrative, financial, and clinical information management to efficiently run over 1200 hospitals and clinics throughout the U.S., and thus provide veterans the highest quality of care, everywhere.  

> There are over 131 instances of VISTA deployed nationwide, and each has evolved independently over the past thirty-five years. The result is that each VISTA system has its own distinct database and distinct data model.  There is no single "VA system". There are 131. As a result, VA cannot share any computable data across or between any of the other VISTA systems.

__Why?__

> The mission of the Veterans Health Administration (VHA) is to provide comprehensive lifelong healthcare services to veterans everywhere. To support this, VA must have a seamless, comprehensive, nationally integrated healthcare information system to provide all relevant VISTA data in real-time in computable form at the bedside at all 1200 facilities.  In addition, in order to support the needs of veterans in today's mobile web-oriented world, VA needs to create new web-based clients and services to VISTA data to provide all necessary information to providers and veterans at the point of care using mobile, tablet, and web browser based interfaces to support truly ubiquitous access to healthcare services.

> VA thus needs a single, consistent, web-standard mechanism for real-time read-write transactions to all of the 131 local, unique VISTA systems as one, national master VISTA system.  This reduces the complexity of development, deployment, and maintenance for any new nationwide data service from any of the 131 distinct local VISTA systems to that of only one standardized computable Master VISTA system.

__How?__

> All sources of available metadata and models (internal to VISTA as well as external) will be transformed to a single integrated web-standard machine-processable data model which is then annotated, normalized, and enriched. This enhanced model is in turn is embedded back in VISTA as a server-side, security-enabled, symmetric read/write (i.e. transactional) Master Data Model.   

__Where?__

> All artifacts and deliverables shall be developed, version-controlled, stored, and delivered on an industry-standard public Github repository (“Project Repository”). ... The Project Repository shall contain the one and only authoritative version of all artifacts produced ... The government, all necessary stakeholders, and the public shall have full read and download access of all artifacts on the Project Repository at all times --- See [PWS](https://github.com/vistadataproject/documents/blob/master/Submissions/src/VistAMetadata-2015-12-09-PWS.pdf) Section 1.6.15.1



## Technologies
The VISTA Data Project is based on the following [Web Technologies](https://github.com/vistadataproject/documents/tree/master/Background#technologies) and  [Web Standards](https://github.com/vistadataproject/documents/tree/master/Background#standards):

![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/node-js.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/js5.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/html5.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/css3.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/rdf.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/jsonld.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/json.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/markdown.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/github.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/git.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/vagrant.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/CC.jpg)
![](https://github.com/vistadataproject/documents/blob/master/images/logos/logos-tech/square/60h/asf.jpg)  

* Detailed review of these and other foundation technologies is contained in the [Background](https://github.com/vistadataproject/documents/tree/master/Background) section.


## Technical Background

Technical decisions by the VA and in mainstream software industry that framed the approach taken here

1. By virtue of VA's technical review and approval of Node.js in the VA Technical Reference Model ([TRM](http://www.va.gov/TRM/ToolPage.asp?tid=6716)), VA endorses the use of server-side Javascript/Node in the  VA enterprise architecture. See [TRM-Node](http://www.va.gov/TRM/ToolPage.asp?tid=6716).
1. By virtue of VA's Enterprise Health Management Platform being rewritten almost entirely in Javascript and Node.js, the VA has decided that Node.js is essential for the success of enterprise projects.  The backdrop to this decision was the conspicuous failure of numerous mid-tier Java wrappers for VISTA, starting with MyHealtheVet and the others since then. See [reference](http://www.openhealthnews.com/story/2014-07-27/vista-evolution-whats-wrong-picture).
1.  By virtue of VA's large, multi-year [contract](https://www.fbo.gov/index?s=opportunity&mode=form&tab=core&id=2a9bd7f10699f046bd284a2ac28ccf9e&_cview=0) (and [see](https://www.google.com/search?q=%22Control%20Number%2015-038%22&rct=j)) for Node.js, the VA has decided that Node-enabled Javascript on MUMPs is productive and practical.
1. By virtue of inclusion of the Node in all official releases of Cache, Intersystems views in-process Javascript coding on Cache as practical, maintainable, and essential for their commercial customers, particularly VA. See Intersystems documentation on [Cache/Node](http://docs.intersystems.com/ens20141/csp/docbook/DocBook.UI.Page.cls?KEY=BXJS_intro) and [PDF](http://docs.intersystems.com/documentation/cache/20122/pdfs/BXJS.pdf).
1. Node.js adoption continues to grow for mainstream production projects, including Netflix, New York Times, PayPal, LinkedIn, Walmart, Yahoo, and Uber.
1. Javascript is the most popular coding language in the world, as  measured by number of projects, coders, and new code on Github, and by the number of companies developing and deploying enterprise software for consumption on the web.
1. By virtue of VA's technical review and approval in the VA Technical Reference Model of the Resource Description Framework ([RDF](https://www.w3.org/standards/techs/rdf#w3c_all)), VA  endorses the RDF data model for use in the VA enterprise architecture. See [TRM-RDF](http://www.va.gov/TRM/StandardPage.asp?tid=6405).
1. JSON-LD is the most commonly used form of RDF deployed in production settings. It is used by Google, Yahoo, and Microsoft as a common mechanism to structure and index all the data on the web by their search engines, and by the U.S. National Library of Congress and U.S. National Library of Medicine to structure and search all published books and medical journals, respectively.  See [JSON-LD](http://json-ld.org).




# Credits
This project builds on the efforts of many.


### Architecture and Design
<img src="http://yosemiteproject.org/images/100/steering-rafael-richards_100.jpg" height=60>
<img src="http://yosemiteproject.org/images/100/steering-conor-dowling-square_100.jpg" height=60>


Who | Design | Description
:--- | :--- | :---
[Rafael&nbsp;Richards](https://www.linkedin.com/in/rafaelrichardsmd) |![](/images/logos/logos-presentations/60h/linkedVISTA.jpg) | [__Linked VISTA__ (PDF)](https://github.com/vistadataproject/documents/blob/master/Background/presentations/Linked_VISTA-Rafael%20Richards-2015.pdf) This describes the design and features of an enterprise cross-linked Master VISTA Data Model (MVDM) to provide master data management across all VA VISTA systems. (2015)
[Conor&nbsp;Dowling](https://www.linkedin.com/in/conor-dowling-4306832b) | ![](/images/logos/logos-presentations/60h/fmql.jpg) |  [__FMQL__ (PDF)](https://github.com/vistadataproject/documents/blob/master/Background/presentations/FMQL-Conor_Dowling-2014.pdf) This describes the Open Source FileMan Query Language (FMQL) which provides a uniform mechanism for comprehensively exposing all of VISTA's data as well as its native data model. (2014).


### VISTA Overview
An executive overview of the current 'as is' VISTA and its data-integrated architecture:
* [VISTA Overview](https://github.com/vistadataproject/documents/tree/master/Background/vista)
* [VISTA Architecture](https://github.com/vistadataproject/documents/blob/master/Background/vista/vista-architecture.md)
* [VISTA Popularity](https://github.com/vistadataproject/documents/blob/master/Background/vista/medscape2014.md). A 2014 survey of 18,000 physicians rate VISTA the #1 EHR in the U.S.


###  Outside Technology and Advocacy 
<img src ="http://www.hardhats.org/images/vol_Bella.jpg" height=60>
<img src="http://farm3.static.flickr.com/2742/4442022846_9510a5c265_m.jpg" height=60>
<img src="http://worldvista.org/WorldVistA/davidwhitten.jpg" height=60>
<img src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fworldvista.org%2FWorldVistA%2FAnthracite_Nancy.jpg&f=1" height=60>
<img src="https://lh6.googleusercontent.com/-_VbNuZFu5jY/TnSkJph4RqI/AAAAAAAAADA/H4JrGWh7JEAfW7uVgHaf0dK7cIddXAu9wCL0B/w452-h449-no/KSBhaskarUndergroundRR20110524.jpg" height=60>
<img src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fblogcdn.uber.com%2Fwp-content%2Fuploads%2F2014%2F07%2Fperson-icon.png&f=1" height=60>
<img src="https://www.vxvista.org/download/thumbnails/8061163/PH3.JPG?version=1&modificationDate=1338915701253&api=v2" height=60>
<img src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.openhealthnews.com%2Fsites%2Fopenhealthnews.com%2Ffiles%2Frob_sm.png&f=1" height=60>
<img src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fblogcdn.uber.com%2Fwp-content%2Fuploads%2F2014%2F07%2Fperson-icon.png&f=1" height=60>
<img src ="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Finnotribe.com%2Fwp-content%2Fuploads%2F2013%2F08%2FMSporny.jpg&f=1" height=60>




Who | Work | Comment
:---: | :---: | ---
<br>George&nbsp;Timson<br>[Tom Munneke](https://www.linkedin.com/in/tom-munnecke-b171)| [FileMan](https://en.wikipedia.org/wiki/FileMan) | The original designers of VISTA, who concieved and built VISTA on a metadata-centric architecture
David&nbsp;Whitten | [WorldVistA](http://worldvista.org) | Honing and packaging the first comprehensive open source VISTA, _WorldVistA_
Nancy&nbsp;Anthracite | [Opening up VISTA](http://worldvista.org) | Advocates tirelessly for in-the-open VISTA development
K.S.&nbsp;Bhaskar | [GT.M](https://www.fisglobal.com/Solutions/Services/Database-Engine) | Manages and directs the Open Source GT.M MUMPS Database Engine
[Kevin&nbsp;Meldrum](https://www.linkedin.com/in/kevin-meldrum-35a1a115)| [Virtual Patient Record (VPR)](http://www.va.gov/vdl/application.asp?appid=197) |  Created a mechanism for extracting a normalized form of VISTA's patient data
[Rob&nbsp;Tweed](https://www.linkedin.com/in/rob-tweed-a5419629)<br>[David&nbsp;Wicksell](https://www.linkedin.com/in/dlwicksell)| Node/M | Integrated node.js with MUMPS and VISTA.
Chris&nbsp;Edwards | [Vagrant Installer](https://www.osehra.org/blog/automated-vista-installation-and-testing-using-vagrant) | Built OSEHRA's Automated installation of VISTA environment
[Manu&nbsp;Sporny](https://www.linkedin.com/in/manusporny) | [JSON-LD](http://json-ld.org/) |  Created and promoted the JSON-LD standard


### Technologies
![](/images/logos/logos-tech/square/60h/m-tech.fw.jpg)
![](/images/logos/logos-tech/square/60h/js5.jpg)
![](/images/logos/logos-tech/square/60h/node-js.jpg)
![](/images/logos/logos-tech/square/60h/npm.jpg)
![](/images/logos/logos-tech/square/60h/d3-js.jpg)
![](/images/logos/logos-tech/square/60h/webstorm.jpg)
![](/images/logos/logos-tech/square/60h/vagrant.jpg)
![](/images/logos/logos-tech/square/60h/python.jpg)
![](/images/logos/logos-tech/square/60h/git.jpg)
![](/images/logos/logos-tech/square/60h/github.jpg)


Name | VA TRM  | Reference
:--- | :--- | :--- 
__M-Technology__	| [6402](http://www.va.gov/TRM/StandardPage.asp?tid=6402) | https://en.wikipedia.org/wiki/M_technology
(Cache M)| [10](http://www.va.gov/TRM/ToolPage.asp?tid=10) | http://www.intersystems.com/our-products/cache/cache-overview <br> http://www.intersystems.com/our-products/cache/tech-guide/chapter-2/#integrated-database-access <br> http://docs.intersystems.com/cache20152/csp/docbook/featuremapCache.csp
(Fidelity M) | [6632](http://www.va.gov/TRM/ToolPage.asp?tid=6632) | https://en.wikipedia.org/wiki/GT.M <br> http://www.fisglobal.com/Solutions/Services/Database-Engine <br> http://www.fisglobal.com/Solutions/Services/Database-Engine/User-Documentation
Javascript      | [5061](http://www.va.gov/TRM/StandardPage.asp?tid=5061) | https://en.wikipedia.org/wiki/JavaScript
Node.js			| [6716](http://www.va.gov/TRM/ToolPage.asp?tid=6716)	| https://en.wikipedia.org/wiki/Node.js <br> https://nodejs.org/en
Node Package Manager (NPM)             | 	| https://en.wikipedia.org/wiki/Npm_%28software%29 <br> https://www.npmjs.com/
Express.js		| [7729](http://www.va.gov/TRM/ToolPage.asp?tid=7729) | http://expressjs.com/
D3.js           | [8059](http://www.va.gov/TRM/ToolPage.asp?tid=8059) | https://en.wikipedia.org/wiki/D3.js <br> http://d3js.org
WebStorm		| [7774](http://www.va.gov/TRM/ToolPage.asp?tid=7774) | http://www.jetbrains.com/webstorm/
Vagrant			| [7306](http://www.va.gov/TRM/ToolPage.asp?tid=7306) | https://www.vagrantup.com
Python          | [5702](http://www.va.gov/TRM/StandardPage.asp?tid=5702) | https://en.wikipedia.org/wiki/Python_programming_language <br> https://www.python.org
git             |	| https://en.wikipedia.org/wiki/Git_software<br>http://www.git-scm.com
Github          | 	| https://en.wikipedia.org/wiki/GitHub <br> https://github.com <br> https://government.github.com



### Standards
![](/images/logos/logos-tech/square/60h/html5.jpg)
![](/images/logos/logos-tech/square/60h/js5.jpg)
![](/images/logos/logos-tech/square/60h/css3.jpg)
![](/images/logos/logos-tech/square/60h/json.jpg)
![](/images/logos/logos-tech/square/60h/jsonld.jpg)
![](/images/logos/logos-tech/square/60h/rdf.jpg)
![](/images/logos/logos-tech/square/60h/markdown.jpg)
![](/images/logos/logos-tech/square/60h/CC.jpg)
![](/images/logos/logos-tech/square/60h/asf.jpg)



Name | VA TRM  | Reference
:--- | :--- | :---
M-Standard | [7404](http://www.va.gov/TRM/VAStandardPage.asp?tid=7404) | http://www.va.gov/TRM/files/SACC_2008.pdf <br> http://71.174.62.16/Demo/AnnoStd
HTML 5           | [5201](http://www.va.gov/TRM/StandardPage.asp?tid=5201) | https://en.wikipedia.org/wiki/HTML5
Javascript 5      | [5061](http://www.va.gov/TRM/StandardPage.asp?tid=5061) | https://en.wikipedia.org/wiki/JavaScript
CSS 3			| [5194](http://www.va.gov/TRM/StandardPage.asp?tid=5194) | https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3
JSON			| [7349](http://www.va.gov/TRM/StandardPage.asp?tid=7349 )| https://en.wikipedia.org/wiki/JSON <br> http://json.org/
JSON-LD         | 	| https://en.wikipedia.org/wiki/JSON-LD <br> http://json-ld.org
RDF			| [6405](http://www.va.gov/TRM/StandardPage.asp?tid=6405) | https://en.wikipedia.org/wiki/Resource_Description_Framework <br> https://www.w3.org/RDF/
Markdown        | 	| https://en.wikipedia.org/wiki/Markdown
Creative Commons | 	| https://en.wikipedia.org/wiki/Creative_Commons <br> https://creativecommons.org/about/
Apache Software Foundation        | 	| https://en.wikipedia.org/wiki/Apache_License <br> https://www.apache.org/licenses/





####VISTA
* https://en.wikipedia.org/wiki/VistA
* https://en.wikipedia.org/wiki/WorldVistA
* http://www.hardhats.org/index.html
* http://nist.gov/healthcare/upload/NIST-Siegel-PART-1.pdf
* http://worldvista.org/

#### Fileman
* https://en.wikipedia.org/wiki/FileMan
* http://www.hardhats.org/fileman/FMmain.html
* http://munnecke.com/blog/?cat=120

#### NodeVISTA
* [Intersystems](https://www.google.com/search?q=intersystems+cache+node.js+VISTA&espv=2&biw=1025&bih=666&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiLtN7gmqjKAhUELaYKHaoODKAQ_AUICCgD&dpr=1.25#imgrc=_)
* https://robtweed.wordpress.com/2014/07/24/vista-evolution-whats-wrong-with-this-picture
* https://github.com/dlwicksell/nodem
* https://github.com/robtweed/node-mdb


#### VISTA Installation
* VISTA installation using vagrant (Screencast):  https://www.youtube.com/watch?v=eogchJncTlc
* VISTA on GTM Windows (cygwin):  https://www.youtube.com/watch?v=WU2kYDWQmc0



<a href="http://www.w3.org/html/logo/">
<img src="https://www.w3.org/html/logo/badge/html5-badge-h-css3-graphics-semantics.png" width="197" height="64" alt="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, and Semantics" title="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, and Semantics">
</a>
