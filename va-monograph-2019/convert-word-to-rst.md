# Converting Microsoft Word Files (doc, docx) to reStructuredText (rst)

Source: 
* https://onap.readthedocs.io/en/amsterdam/guides/onap-developer/how-to-use-docs/converting-formats.html
* https://peintinger.com/?p=365



## Prerequisites

* Pandoc 
* ImageMagick
* Sphinx (pip install -U Sphinx)
* Visual Studio Code and reStructuredText plugins
* Python


1. __Install pandoc, imagemagick, sphinx:__

   ``brew install pandoc``

   ``brew install imagemagick``

   ``brew install sphinx``

2. __Install Visual Studio Code and configure for Mac__

   https://code.visualstudio.com/

   https://code.visualstudio.com/docs/setup/mac

3. __Install Visual Studio Code plugin for RestructuredText__

    https://marketplace.visualstudio.com/items?itemName=lextudio.restructuredtext
   



## Example

1. __Download source Word.docx file__

    https://www.va.gov/VA_Monograph_2019.docx

2. __Convert from input.docx to output.rst__

    ``pandoc --from=docx --to=asciidoc --wrap=none --atx-headers  --extract-media=extracted-media input.docx > output.adoc``

3. __open  in Visual Studio Code and start editing__

    ``code VA_Monograph_2019.adoc``

4. __Enable section numbering and TOC generation__


5. __Resulting document displayed in Github__

    


## Reference

1. Generating TOC


2. User Manual

