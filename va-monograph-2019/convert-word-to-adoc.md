# Migrating from MS Word to AsciiDoc

Source: https://asciidoctor.org/docs/migrating-from-msword/


## Prerequisites

1. __Install pandoc:__

    ``brew install pandoc``

2. __Install Visual Studio Code__

    https://code.visualstudio.com/

3. __Set up VSCode for command line use on Mac__

    https://code.visualstudio.com/docs/setup/mac

4. __Install Asciidoc viewer for Visual Studio Code__

    https://marketplace.visualstudio.com/items?itemName=joaompinto.asciidoctor-vscode


## Example

1. __Download source Word.docx file__

    https://www.va.gov/VA_Monograph_2019.docx

2. __Convert from input.docx to output.adoc__

    ``pandoc --from=docx --to=asciidoc --wrap=none --atx-headers  --extract-media=extracted-media input.docx > output.adoc``

3. __open Asciidoc in Visual Studio Code and start editing__

    ``code VA_Monograph_2019.adoc``

4. __Resulting document displayed in Github__

    https://github.com/vistadataproject/documents/blob/master/va-monograph-2019/va_monograph_2018a.adoc
    
 ### Key Asciidoc features: Section numbering and TOC
For section numbering and table of contents to be auto-generated,  you will need to make sure sections are tagged at the appropriate level (=Title ==Section ===SubSection ====SubSubSection...)  then put at the top of the document:
 
 ``
:toc:

:sectnums:
``


## Reference: Asciidoctor User Manual
https://asciidoctor.org/docs/user-manual

