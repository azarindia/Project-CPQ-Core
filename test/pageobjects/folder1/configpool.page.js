const path = require('path');
const propertiesReader = require('properties-reader');
const moduleName = 'configurationPoolLocators';
const fileName = `${moduleName}.properties`;
console.log("printing directory" + __dirname)
const filePath = path.join(__dirname, '../..', 'resources', 'locators', 'LandingPageLocators', fileName);
const properties = propertiesReader(filePath);
const CommonOperationPage = require("../commonoperations/CommonOperationPage")

class ConfigurationPoolPage {
    async getLocators(locatorName) {
        let locators = await properties.get(locatorName);
        console.log("printing locators" + " " + locators)
        return locators
    }


    async clickOnConfigpool() {
        await browser.pause(5000)
        let loc1 = await this.getLocators("btnConfigPool")
        CommonOperationPage.waitElementVisible(loc1)
        CommonOperationPage.clickElement(loc1)

    }

    async importFile() {
        await browser.pause(2000)
        let loc2 = await this.getLocators("btnImport")
        CommonOperationPage.waitElementVisible(loc2)
        CommonOperationPage.clickElement(loc2)
        let loc3 = await this.getLocators("btnImportOption")
        CommonOperationPage.waitElementVisible(loc3)
        CommonOperationPage.clickElement(loc3)
        await browser.pause(2000)
        const inputDiv = await $("#configPoolImportContainer")
        const input = await $("#configPoolImport")
        const submitBtn = await $("//div[@class='import-config-dialog css-gmuwbf']//button[3]")
        const filePath1 = path.join('Azaru.xlsx')  
        const remoteFilePath = await browser.uploadFile(filePath1)

       await browser.execute(function() {
        document.getElementById('configPoolImportContainer').style.display = 'block'
        document.getElementById('configPoolImportContainer').style.background = 'red'
        })
        await browser.pause(2000)
        inputDiv.waitForDisplayed()
        input.setValue(remoteFilePath)
        submitBtn.click()
        console.log("file uploaded successfully");
    }
    async checkInConfigurations() {
        await browser.pause(2000)
        await $("//*[@id='ag-3037-input']").click()
        let loc4 = await this.getLocators("checkBoxConfig-1")
        CommonOperationPage.waitElementVisible(loc4)
        CommonOperationPage.clickElement(loc4)
        console.log("clicked on config-1 checkbox")
        let loc5 = await this.getLocators("btnCheckIn")
        CommonOperationPage.waitElementVisible(loc5)
        CommonOperationPage.clickElement(loc5)
        console.log("checked in Configurations")
    }
    async convertingConfigurations() {
        await browser.pause(2000)
      //  await $("//*[@id='ag-3037-input']").click()
        let loc6 = await this.getLocators("checkBoxConfig-1")
        CommonOperationPage.waitElementVisible(loc6)
        CommonOperationPage.clickElement(loc6)
        console.log("selected configbutton-1")
        await browser.pause(2000)
        let loc7 = await this.getLocators("btnTurnIntoCFE")
        CommonOperationPage.waitElementVisible(loc7)
        CommonOperationPage.clickElement(loc7)
        console.log("clicked on turnInto cfe")
        await browser.pause(2000)
        let loc8 = await this.getLocators("optionOneToOne")
        CommonOperationPage.waitElementVisible(loc8)
        CommonOperationPage.clickElement(loc8)
        console.log("Selected one to one")
        await browser.pause(2000)
        let loc9 = await this.getLocators("btnCloseConfigPoolWindow")
        CommonOperationPage.waitElementVisible(loc9)
        CommonOperationPage.clickElement(loc9)
        let currentHandle = await browser.getWindowHandle()
        console.log(currentHandle)
        console.log("windowhandle before switching to window")
        
    }
}
module.exports = new ConfigurationPoolPage();
