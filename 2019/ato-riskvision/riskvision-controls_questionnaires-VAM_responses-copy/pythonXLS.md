## Python tools and libraries for MS Excel file processing

References:
* https://www.pyxll.com/blog/tools-for-working-with-excel-and-python
* http://www.python-excel.org/
* https://www.quora.com/What-python-libraries-are-best-for-working-with-Microsoft-Excel


### The Packages
There are python packages available to work with Excel files that will run on any Python platform 
and that do not require either Windows or Excel to be used. They are fast, reliable and open source:


* __openpyxl__
The recommended package for reading and writing Excel 2010 files (ie: .xlsx)
  * Download: http://pypi.python.org/pypi/openpyxl
  * Docs:  https://openpyxl.readthedocs.org/
  * Github: https://bitbucket.org/openpyxl/openpyxl


* __xlsxwriter__
An alternative package for writing data, formatting information and, in particular, charts in the Excel 2010 format (ie: .xlsx)
  * Download: https://pypi.python.org/pypi/XlsxWriter
  * Docs: https://xlsxwriter.readthedocs.org/
  * Github: https://github.com/jmcnamara/XlsxWriter


* __xlrd__
This package is for *__reading__* data and formatting information from older Excel files (ie: .xls)
  * Download: http://pypi.python.org/pypi/xlrd
  * Docs: http://xlrd.readthedocs.io/en/latest/
  * Github: https://github.com/python-excel/xlrd


* __xlwt__
This package is for *__writing__* data and formatting information to older Excel files (ie: .xls)
  * Download: http://pypi.python.org/pypi/xlwt
  * Docs: http://xlwt.readthedocs.io/en/latest/
  * Github: https://github.com/python-excel/xlwt
  * Examples: https://github.com/python-excel/xlwt/tree/master/examples



* __xlutils__
This package collects utilities that require both xlrd and xlwt, including the ability to copy and modify or filter existing excel files.   NB: In general, these use cases are now covered by openpyxl!
  * Download: http://pypi.python.org/pypi/xlutils
  * Docs: http://xlutils.readthedocs.io/en/latest/
  * Github: https://github.com/python-excel/xlutils
  

  *__Pandas__*
If you don’t need much in the way of formatting and just care about getting data into or out of Excel workbooks then the pandas functions “read_excel” and “to_excel” may be just what you need. Its nicely integrated with matplotlib for graphics, and there are plenty of other graphics libs you can use with it if you want more powerful/sexy charts. Even better, you can do all your analysis in python/pandas and forget about excel :-)
  * Homepage: https://pandas.pydata.org/


*__XLTable__*
XLTable is a higher level library for building Excel reports from pandas DataFrames. Rather than writing the workbook cell by cell or row by row, whole tables are added and can include formulas that reference other tables without having to know ahead of time where those tables will be. For more complex reports involving formulas xltable can be very useful.
  * Download: [http://pypi.python.org/pypi/xlutils
  * Docs: http://xltable.readthedocs.io/