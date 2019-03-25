# https://dzone.com/articles/using-python-to-extract-excel-spreadsheet-into-csv

from xlrd import open_workbook
import csv
wb = open_workbook('Road-Accident-Safety-Data-Guide-1979-2004.xls')
for i in range(2, wb.nsheets):
    sheet = wb.sheet_by_index(i)
    print sheet.name
    with open("data/%s.csv" %(sheet.name.replace(" ","")), "w") as file:
        writer = csv.writer(file, delimiter = ",")
        print sheet, sheet.name, sheet.ncols, sheet.nrows
        header = [cell.value for cell in sheet.row(0)]
        writer.writerow(header)
        for row_idx in range(1, sheet.nrows):
            row = [int(cell.value) if isinstance(cell.value, float) else cell.value
                   for cell in sheet.row(row_idx)]
            writer.writerow(row)