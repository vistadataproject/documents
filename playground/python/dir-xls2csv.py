import os
import pandas as pd

source = "C:/.../TestFolder"
output = "C:/.../OutputCSV"

dir_list = os.listdir(source)

os.chdir(source)

for i in range(len(dir_list)):
    filename = dir_list[i]
    book = pd.ExcelFile(filename)

    #writing to csv
    if filename.endswith('.xlsx') or filename.endswith('.xls'):
        for i in range(len(book.sheet_names)):
            df = pd.read_excel(book, book.sheet_names[i])

            os.chdir(output)

            new_name = filename.split('.')[0] + str(book.sheet_names[i])+'.csv'
            df.to_csv(new_name, index = False)

        os.chdir(source)

print "New files: ", os.listdir(output)