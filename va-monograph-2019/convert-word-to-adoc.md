# Conversion of MS Word to AsciiDoc (and back)

Source: https://asciidoctor.org/docs/migrating-from-msword/



## Prerequisites

1. __Install pandoc:__

    ``brew install pandoc``

2. __Install Visual Studio Code__

    https://code.visualstudio.com/

3. __Set up VSCode for command line use on Mac__

    https://code.visualstudio.com/docs/setup/mac

4. __Install Asciidoc extension for Visual Studio Code__

    https://marketplace.visualstudio.com/items?itemName=joaompinto.asciidoctor-vscode



## Word to Asciidoc

1. __Download source Word.docx file__

    https://www.va.gov/VA_Monograph_2019.docx

2. __Convert from input.docx to output.adoc__

    ``pandoc --from=docx --to=asciidoc --wrap=none --atx-headers  --extract-media=extracted-media input.docx > output.adoc``

3. __open Asciidoc in Visual Studio Code and start editing__

    ``code VA_Monograph_2019.adoc``

4. __Enable section numbering and TOC generation__
For section numbering and table of contents to be auto-generated, sections must be marked at the appropriate level (=Title ==Section ===SubSection ====SubSubSection...) then at the top of the document place asciidoc markup  

        :toc:
        :sectnums:

5. __Resulting document displayed in Github__

    https://github.com/vistadataproject/documents/blob/master/va-monograph-2019/va_monograph_2018a.adoc
    


    
## Asciidoc to Word
References:
* https://docs-as-co.de/news/create-docx
* https://rmoff.net/2018/08/22/converting-from-asciidoc-to-ms-word

Bash script:

```
INPUT_ADOC=my_input_file.adoc
asciidoctor --backend docbook --out-file - $INPUT_ADOC|pandoc --from docbook --to docx --output $INPUT_ADOC.docx
# On the Mac, this will open the generated file in MS Word
open $INPUT_ADOC.docx
```


## Asciidoc Reference

1. Generating TOC for Jekyll-generated websites

    https://github.com/asciidoctor/jekyll-asciidoc#generating-a-table-of-contents

2. Asciidoctor User Manual

    https://asciidoctor.org/docs/user-manual

3. Asciidoctor Extensions
    
    https://asciidoctor.org/docs/extensions/

