## A Next Step for VA VISTA: Transformation with Node.js, Javascript and JSON-LD

### Demonstration comparing VA’s current VISTA and the new nodeVISTA

Rafael M Richards, MD MS1, Eric Prud'hommeax MS2,
David Booth, PhD3, Conor Dowling BS4


1Veterans Health Administration, U.S. Department of Veterans Affairs, Washington, DC;  2World Wide Web Consortium and Massachusetts Institute of Technology, Boston, MA; 3HL7 FHIR / RDF Chair, Boston, MA; 4Chief Architect, VISTA Data Project,  Santa Monica, CA; 



### Abstract
VA’s VISTA EHR is a combination of a server-side MUMPS database and a thick client called CPRS written in Delphi Pascal, and has remained in operation for over twenty years without any significant architectural change. Increasingly the web has become the primary if not exclusive means to access and use information resources. Three of the key technologies that enable this today are Node.js, Javascript, and JSON-LD. In this demonstration, these three key web technologies are used to transform VISTA into a Node.js-powered VISTA (nodeVISTA) running Javascript and JSON-LD, and will be compared with the current VISTA system.

### Description
The aim of this project is to validate the use of new web technologies to bring an existing, powerful large-scale health information system into the web age. Three of the key technologies identified are the following:

* Node.js is one of the most powerful server-side runtime engines for Javascript-based applications, supporting millions of concurrent users. This powers such websites as Netflix, New York Times, PayPal, LinkedIn, Walmart, Yahoo, and Uber. 
* Javascript is the most popular coding language in the world, and is the official W3C-endorsed language to create web-standard applications and runs in all web browsers. There is virtually no web-based application that does not run Javascript.
* JSON-LD enables a web-scale data model that spans all information resources published on the web, and is used by the largest web search companies (including Google, Yahoo, and Microsoft) to structure, index, and search all data on the web.  Its capability to access the worlds largest database far exceeds that of any man-made database.

At time of submission, Node.js has been certified and installed across the VA enterprise as part of the standard VISTA database installation. The Javascript and JSON-LD components that run on node/VISTA  remain under active development as prototypes. For more information and the current status on node/VISTA see: http://vistadataproject.info

### References

1. https://en.wikipedia.org/wiki/VistA
2. https://en.wikipedia.org/wiki/JavaScript
3. https://en.wikipedia.org/wiki/Node.js
4. https://en.wikipedia.org/wiki/JSON-LD
5. http://json-ld.org/