# Migrating from MS Word to RestructuredText (rst)

Source: https://onap.readthedocs.io/en/amsterdam/guides/onap-developer/how-to-use-docs/converting-formats.html


## Prerequisites

1. __Install pandoc:__

    ``brew install pandoc``

2. __Install Visual Studio Code__

    https://code.visualstudio.com/

3. __Set up VSCode for command line use on Mac__

    https://code.visualstudio.com/docs/setup/mac

4. __Install RestructuredText viewer for Visual Studio Code__

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

