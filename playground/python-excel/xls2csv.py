# https://codereview.stackexchange.com/questions/187870/convert-excel-files-to-csv

import pandas as pd
import os

# set working directories for files
starting_folder=('Purchasing/unformatted/')
save_folder = ('Purchasing/')

#create list of excel file names from folder  
files = []
for file in os.listdir(starting_folder):
    filename = os.fsdecode(file)
    files.append(filename)

# create list for file names to be saved as csv
save_files = [w.replace('xlsx','csv') for w in files]

# create data frame of fiscal calendar
calendar = pd.read_excel('Purchasing/Fiscal Calendar 15-18.xlsx')
fiscal_calendar = pd.DataFrame([])
#create new data frame with only two columns
fiscal_calendar['InvoiceDate'] = calendar['Date']
fiscal_calendar['Week'] = calendar['Week.1']


#loop through csv files to format and save to new location
for i in range(len(files)):
    #reads unformatted excel file into dataframe
    df = pd.read_excel(starting_folder+files[i])
    #change dtype of dates in report to date time
    df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])
    #drop unwanted rows
    df = df.drop(df[df.Brand == 'NONPROD'].index)
    #add in fiscal week based on invoice date
    Sygma = pd.merge(df,fiscal_calendar, how = 'left', on = 'InvoiceDate')
    #save to csv for db loading
    Sygma.to_csv(save_folder+save_files[i],index = False)