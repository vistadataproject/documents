#!/bin/bash 

# specify input document
INPUT_ADOC=tables.adoc

# convert adoc to docx  (via docbook using pandoc)
asciidoctor --backend docbook --out-file - $INPUT_ADOC|pandoc --from docbook --to docx --output $INPUT_ADOC.docx
