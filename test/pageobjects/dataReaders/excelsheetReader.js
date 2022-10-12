const path = require('path');
const propertiesReader = require('properties-reader');
const { command } = require('yargs');
const moduleName = 'loginLocators';
const fileName = `${moduleName}.properties`;
console.log("printing directory" + __dirname)
//const filePath = path.join(__dirname, '../..', 'resources', 'locators', 'LandingPageLocators', fileName);
const properties = propertiesReader(filePath);
const CommonOperationPage = require("../commonoperations/CommonOperationPage")


let Excel = require("exceljs");
const wb = new Excel.Workbook();
const filePathInLocal = "C:/Users/sazharuddin/Downloads/20.AU.902097.01.248.01_Version5.xlsx";
// const filePath = filepath.resolve(__dirname, "./", filePathInLocal);
// const destTemplate = fs.readFileSync(filepath.resolve(__dirname, "./file2.txt"),"utf8");
// log.info("filePath in destTemplate local:", destTemplate);
return wb.xlsx.readFile(filePath).then(function () {
    //const sh = wb.getWorksheet("Sheet1");

    workbook.eachSheet(function (worksheet, sheetId) {  // ...});// fetch sheet by nameconst worksheet = workbook.getWorksheet('My Sheet');
        const worksheet = workbook.getWorksheet('My Sheet');
        let startIndex;
        let endIndex;
        let fieldName;
        let ddName;
        let i;

        for (i = 3; i < sh.rowCount - 1; i += 1) {
            fieldNumber = sh.getRow(i).getCell(1).value;
            startIndex = Number.parseInt(sh.getRow(i).getCell(3).value, 10) - 1;
            endIndex = Number.parseInt(sh.getRow(i).getCell(4).value, 10);
            LengthOfField = Number.parseInt(sh.getRow(i).getCell(5).value, 10);
            fieldName = sh.getRow(i).getCell(6).value;

            ddName = sh
                .getRow(i)
                .getCell(9)
                .value.toString()
                .trim()
                .replace(/\./g, "_");
            let expectedInputField = destTemplate
                .toString()
                .substring(startIndex, endIndex)
                .trim();
            let actualResDataField = jsonResponseData[ddName];
            if (actualResDataField !== undefined) {
                if (actualResDataField.toString().includes("-")) {
                    actualResDataField = actualResDataField
                        .toString()
                        .trim()
                        .replace(/-/g, "");
                    expectedInputField = expectedInputField
                        .toString()
                        .trim()
                        .replace(/-/g, "");
                }
            }
        }
        
        
    })
})
