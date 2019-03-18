# Word to AsciiDoc (and back)

Source: https://asciidoctor.org/docs/migrating-from-msword/

Comparison
http://hyperpolyglot.org/lightweight-markup



## Prerequisites (Mac)

1. __Install pandoc and asciidoctor:__

    ``brew install pandoc, asciidoctor``
    
2. __Install Visual Studio Code (VSCode)__

    https://code.visualstudio.com/

3. __Set up VSCode for command line use on Mac__

    https://code.visualstudio.com/docs/setup/mac

4. __Install Asciidoc extension for VSCode__

    https://marketplace.visualstudio.com/items?itemName=joaompinto.asciidoctor-vscode



## Word to Asciidoc Conversion

1. __Download source Word.docx file__

    https://www.va.gov/VA_Monograph_2019.docx

2. __Convert from input.docx to output.adoc__

    ``pandoc --from=docx --to=asciidoc --wrap=none --atx-headers  --extract-media=extracted-media input.docx > output.adoc``

3. __open Asciidoc in VSCode and start editing__

    ``code VA_Monograph_2019.adoc``

4. __Enable section numbering and TOC generation__
For section numbering and table of contents to be auto-generated, sections must be marked at the appropriate level (=Title ==Section ===SubSection ====SubSubSection...) then at the top of the document place asciidoc markup  

        :toc:
        :sectnums:

5. __Resulting document displayed in Github__

    https://github.com/vistadataproject/documents/blob/master/va-monograph-2019/va_monograph_2018a.adoc
    


    
## Asciidoc to Word Conversion
References:
* https://docs-as-co.de/news/create-docx
* https://rmoff.net/2018/08/22/converting-from-asciidoc-to-ms-word

Bash script:

```
#!/bin/bash 

# specify input document
INPUT_ADOC=va_monograph_2018a.adoc

# convert adoc to docx  (via docbook using pandoc)
asciidoctor --backend docbook --out-file - $INPUT_ADOC|pandoc --from docbook --to docx --output $INPUT_ADOC.docx

# Open the generated file in MS Word
open $INPUT_ADOC.docx
```


## Asciidoc Reference

1. Generating TOC for Jekyll-generated websites

    https://github.com/asciidoctor/jekyll-asciidoc#generating-a-table-of-contents

2. Asciidoctor User Manual

    https://asciidoctor.org/docs/user-manual

3. Asciidoctor Extensions
    
    https://asciidoctor.org/docs/extensions/

