# Gsheet-API

![Build Status](https://img.shields.io/badge/Build-Pass-green)
![commit status](https://img.shields.io/github/last-commit/rahul-gothwal/Gsheet-api)
***


By using this script in google app script editor you can use the data present in spreadsheet as a data endpoint for webapplicaitons.
---


To use the script open [google spreadsheet](https://sheets.new) and fill the data you want to serve.
  - Click on tools and navigate to script editor
  - paste the script and change the following:
     - the id with your spreadsheet id

    ```js
    const id = 'Your spreadsheet id';
    ```
     - and name of the sheet so that it knows where to look at 
    ```js
    const sheet = ss.getSheetByName('Name of sheet goes here');
    ```
  
Now we are all set just deploy the script as web app, once it is finished you will get an [web app](https://script.googleusercontent.com/macros/echo?user_content_key=9VcHC4m3q-qGmhQTu_NzOYxuV40bcLzUcnJOuXoDWIupq4w5UJeJg-TP4C1B4UPGJUzbGREt8uUgMCvBwl1umf2Cr1sEbP60m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDrE13DIN5bDPDWhn3njEJsy4rObM9ivQY85ytloB4BMyMeEjkZOU85ap7IC4_CYTdFTBULFYn7TvJsw0wqpxiI&lib=MsmznvUTDA5lVEATZ1hVIx9P6dG-8FV_X) url to use for.
![gif](https://gmd.netlify.app/script.gif)
    

![image](https://gmd.netlify.app/sheetapi.png)


***
#### NOTE: for now it is serving only static api so you cannot update the table but will update the script soon to use it as REST API.
