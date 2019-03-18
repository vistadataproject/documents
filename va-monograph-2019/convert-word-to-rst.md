# Converting Word Files (doc, docx) to reStructuredText (rst)

Source: 
* https://onap.readthedocs.io/en/amsterdam/guides/onap-developer/how-to-use-docs/converting-formats.html
* https://east.fm/posts/converting-ms-word-docx-document-to-restructuredtext/index.html
* https://peintinger.com/?p=365



## Prerequisites

Download and install the following:

1. __Pandoc, ImagemMagick, Sphinx:__

   ``brew install pandoc, imagemagick, sphinx``

2. __Visual Studio Code; Configure for Mac__

   https://code.visualstudio.com/

   https://code.visualstudio.com/docs/setup/mac

3. __RestructuredText plugin for Visual Studio Code__

    https://marketplace.visualstudio.com/items?itemName=lextudio.restructuredtext
   



## Example

1. __Download source Word.docx file__

    https://www.va.gov/VA_Monograph_2019.docx

2. __Convert from DOCNAME.docx to DOCNAME.rst__

    ``pandoc -f docx DOCNAME.docx -t rst -o DOCNAME.rst``

3. __open  in Visual Studio Code and start editing__

    ``code VA_Monograph_2019.rst``

4. __Enable section numbering and TOC generation__


5. __Resulting document displayed in Github__

    


## Reference

1. Generating TOC


2. User Manual

