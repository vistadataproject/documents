# Migrating from MS Word to AsciiDoc

Source: https://asciidoctor.org/docs/migrating-from-msword/


## Prerequisites

__Install pandoc:__

``brew install pandoc``

__Install Visual Studio Code__

https://code.visualstudio.com/

__Set up VSCode for command line use on Mac__

https://code.visualstudio.com/docs/setup/mac

__Install Asciidoc viewer for Visual Studio Code__

https://marketplace.visualstudio.com/items?itemName=joaompinto.asciidoctor-vscode


## Example

__Download source Word.docx file__

https://www.va.gov/VA_Monograph_2019.docx

__Convert from input.docx to output.adoc__

``pandoc --from=docx --to=asciidoc --wrap=none --atx-headers  --extract-media=extracted-media input.docx > output.adoc``


__open Asciidoc in Visual Studio Code and start editing__

``code VA_Monograph_2019.adoc``

__Resulting document displayed in Github__

https://github.com/vistadataproject/documents/blob/master/va-monograph-2019/va_monograph_2018a.adoc

## Reference: Asciidoctor User Manual
https://asciidoctor.org/docs/user-manual

