function doGet(e) {
    const id = '1JpaqvHe36emeX8OzU5rCmQ4tYachPUeBxmCJMuDJ47I';
    const ss = SpreadsheetApp.openById(id);
    const sheet = ss.getSheetByName('Sheet1');
    const rows = sheet.getDataRange().getValues();
    const headers = rows[0];
    //Logger.log(headers);
    const questions = rows.slice(1);
    //Logger.log(questions);
    const holder = [];
    questions.forEach((ele, ind) => {
      const temp = {
        row: (ind + 2)
      };
      headers.forEach((header, index) => {
        header = header.toLowerCase();
        //Logger.log(header);
        //Logger.log(index);
        //Logger.log(ele);
        temp[header] = ele[index];
      })
      holder.push(temp);
    })
    const output = JSON.stringify({
      status: true,
      data: holder
    });
     
    return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
     
  }
