# Migrating from MS Word to AsciiDoc

Source: https://asciidoctor.org/docs/migrating-from-msword/


## Prerequisites

* Install pandoc:
``brew install pandoc``

* Install Visual Studio Code
https://code.visualstudio.com/

* Set up VSCode for command line use on Mac:
https://code.visualstudio.com/docs/setup/mac

* Install Asciidoc viewer for Visual Studio Code:
https://marketplace.visualstudio.com/items?itemName=joaompinto.asciidoctor-vscode


## Example

* Download source Word.docx file:
https://www.va.gov/VA_Monograph_2019.docx

* Convert from input.docx to output.adoc:
``pandoc --from=docx --to=asciidoc --wrap=none --atx-headers  --extract-media=extracted-media input.docx > output.adoc``


* open Asciidoc in Visual Studio Code and start editing
``code VA_Monograph_2019.adoc``

* Resulting document displayed in Github
https://github.com/vistadataproject/documents/blob/master/va-monograph-2019/va_monograph_2018a.adoc

## Reference: Asciidoctor User Manual
https://asciidoctor.org/docs/user-manual

