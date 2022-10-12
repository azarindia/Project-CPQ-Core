const path = require('path');
const propertiesReader = require('properties-reader');
const moduleName = 'homePageLocators';
const fileName = `${moduleName}.properties`;
console.log("printing directory" + __dirname)
const filePath = path.join(__dirname, '../..', 'resources', 'locators', 'LandingPageLocators', fileName);
const properties = propertiesReader(filePath);
const CommonOperationPage = require("../commonoperations/CommonOperationPage")


class HomePage {
    async getLocators(locatorName) {
        let locators = await properties.get(locatorName);
        console.log("printing locators" + " " + locators)
        return locators
    }

    async searchOfferCase(offerCaseID) {
        await browser.pause(30000)
         let loc1= await this.getLocators("textSearchOffercase")
        CommonOperationPage.waitElementVisible(loc1)
        CommonOperationPage.setElementValue(loc1, offerCaseID)
        let loc2= await this.getLocators("btnOfferCaseSearch")
        CommonOperationPage.waitElementVisible(loc2)
        CommonOperationPage.clickElement(loc2)
        let loc3= await this.getLocators("linkOfferCase2")
        CommonOperationPage.waitElementVisible(loc3)
        CommonOperationPage.clickElement(loc3)

    }

    async CreateNewOffer() {
        await browser.pause(30000)
        let loc4= await this.getLocators("btnCreateOffer")
        CommonOperationPage.waitElementVisible(loc4)
        CommonOperationPage.clickElement(loc4)
        let loc5= await this.getLocators("optnCreateNewOffer")
        CommonOperationPage.waitElementVisible(loc5)
        CommonOperationPage.clickElement(loc5)
    }

    async searchforCRM(CRMID,OfferCaseName) {
        let loc6= await this.getLocators("textCRMOfferID")
        CommonOperationPage.waitElementVisible(loc6)
        CommonOperationPage.setElementValue(loc6,CRMID)
        await browser.pause(5000)
        let loc7= await this.getLocators("btnSerachCRMID")
        CommonOperationPage.waitElementVisible(loc7)
        CommonOperationPage.clickElement(loc7)
        CommonOperationPage.clickElement(loc7)
        var msg = await $("//div[contains(text(),'Offer fetched successfully')]").getText()
        console.log("msg is " +msg);

       
            const elem = await $("//input[@name='offerName']")
            await elem.waitUntil(async function () {
                return (await this.getAttribute("value")) === '5th. Submission - Sep 2019'
 }, {
                timeout: 50000,
                timeoutMsg: 'expected text to be different after 5s'
            });
        
        


   //     await browser.pause(1000)
        let loc16= await this.getLocators("textOfferCaseName")
        CommonOperationPage.waitElementVisible(loc16)
        // await browser.pause(4000)
        // CommonOperationPage.clearElementValue(loc16)
        // await browser.pause(5000)
        // CommonOperationPage.clearElementValue(loc16)
        // CommonOperationPage.clickElement(loc16)
        CommonOperationPage.setElementValue(loc16,OfferCaseName)
        
        // it is for offer case OK when we usw CRM
        // await browser.pause(5000)
        // let loc8= await this.getLocators("btnOfferCaseOK")
        // CommonOperationPage.waitElementVisible(loc8)
        // CommonOperationPage.clickElement(loc8)
  
    }

    async assignKeyRoles() {
        let loc9= await this.getLocators("btnOfferCaseTeam")
        CommonOperationPage.waitElementVisible(loc9)
        CommonOperationPage.clickElement(loc9)
        let loc10= await this.getLocators("btnAssignKeyRolesToMe")
        CommonOperationPage.waitElementVisible(loc10)
        CommonOperationPage.clickElement(loc10)
  //      await browser.pause(5000)
  //      let loc25= await this.getLocators("msgOfferCaseTeam")
 //       CommonOperationPage.waitUntill(loc25)
        let loc11= await this.getLocators("btnSaveOfferCaseTeam")
        CommonOperationPage.waitElementVisible(loc11)
    
        var msg2 = await $("//div[contains(text(),'Bid Manager,')]")
            await msg2.waitUntil(async function () {
                return (await this.getText()) === 'Bid Manager, Solution Manager (Lead) , Pricing Manager (Lead) , roles are successfully assigned to Shaik Azharuddin. Please Save to reflect your changes.'
        }, {
                timeout: 50000,
                timeoutMsg: 'expected text to be different after 5s'
            });
        CommonOperationPage.clickElement(loc11)
        CommonOperationPage.clickElement(loc11)
       

        // await browser.pause(7000)
        // let loc14= await this.getLocators("btnHome")
        // CommonOperationPage.waitElementVisible(loc14)
        // CommonOperationPage.clickElement(loc14)
        // await browser.pause(5000)
        // let loc15= await this.getLocators("linkOfferCase")
        // CommonOperationPage.waitElementVisible(loc15)
        // CommonOperationPage.clickElement(loc15)
        // let loc16= await this.getLocators("btnPrepareCustomerView")
        // CommonOperationPage.waitElementVisible(loc16)
        // CommonOperationPage.clickElement(loc16)
        console.log("Key roles are assigned ");
    } 

    async openExistingOfferCase() {
        // await browser.pause(7000)
        // let loc14= await this.getLocators("btnHome")
        // CommonOperationPage.waitElementVisible(loc14)
        // CommonOperationPage.clickElement(loc14)
        await browser.pause(5000)
        let loc15= await this.getLocators("linkOfferCase")
        CommonOperationPage.waitElementVisible(loc15)
        CommonOperationPage.clickElement(loc15)

    }
    async LoadOffer() {
        await browser.pause(30000)
        let loc12= await this.getLocators("btnCreateOffer")
        CommonOperationPage.waitElementVisible(loc12)
        CommonOperationPage.clickElement(loc12)
        let loc13= await this.getLocators("optnLoadOffer")
        CommonOperationPage.waitElementVisible(loc13)
        CommonOperationPage.clickElement(loc13)
        
        await browser.pause(5000)
        const inputDiv = await $("#boqTemplateContainer")
        const input = await $("#boqTemplateImport")
        const submitBtn = await $("//button[@class='chakra-button css-d65sxk']")
        const filePath1 = path.join('Test-6-UAT-Import-BOQ-File-MN-File.xlsx')  
        const remoteFilePath = await browser.uploadFile(filePath1)

       await browser.execute(function() {
        document.getElementById('boqTemplateContainer').style.display = 'block'
        document.getElementById('boqTemplateContainer').style.background = 'red'
        })
        await browser.pause(3000)
        inputDiv.waitForDisplayed()
        input.setValue(remoteFilePath)
        await browser.pause(2000)
        submitBtn.click()
        console.log("file uploaded successfully");
        await browser.pause(5000)
        let loc14= await this.getLocators("btncloseLoadoffer")
        CommonOperationPage.waitElementVisible(loc14)
        CommonOperationPage.clickElement(loc14)
    }


}
module.exports = new HomePage();
