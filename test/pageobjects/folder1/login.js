const path = require('path');
const propertiesReader = require('properties-reader');
const { command } = require('yargs');
const moduleName = 'loginLocators';
const fileName = `${moduleName}.properties`;
console.log("printing directory" + __dirname)
const filePath = path.join(__dirname, '../..', 'resources', 'locators', 'LandingPageLocators', fileName);
const properties = propertiesReader(filePath);
const CommonOperationPage = require("../commonoperations/CommonOperationPage")
class LoginPage {


    async getLocators(locatorName) {
        let locators = await properties.get(locatorName);
        console.log("printing locators" + " " + locators)
        return locators

    }

    open(path) {
        return CommonOperationPage.navApplication(path)
    }
    async setUsername(userID) {
        await  browser.maximizeWindow()
        let loc1 = await this.getLocators("textUsername")
        CommonOperationPage.waitElementVisible(loc1)
        CommonOperationPage.setElementValue(loc1, userID)
        
    }
    async clickNext() {
        await browser.pause(5000)
        let loc2 = await this.getLocators("btnlogin")
        CommonOperationPage.waitElementVisible(loc2)
        CommonOperationPage.clickElement(loc2)
    }

    async setPassword(password) {
        let loc4 = await this.getLocators("textPassword")
        CommonOperationPage.waitElementVisible(loc4)
        await $(await this.getLocators("textPassword")).setValue(password)
    }

    async clickOnSignIN() {
        let loc5 = await this.getLocators("btnSignIn")
        CommonOperationPage.waitElementVisible(loc5)
        CommonOperationPage.clickElement(loc5)
        let loc6 = await this.getLocators("staySignedin")
        CommonOperationPage.waitElementVisible(loc6)
        CommonOperationPage.clickElement(loc6)
        console.log("clicked on stay signedIn")
    }

    async CreateNewOffer() {
        await $(await this.getLocators("btnCreateOffer")).click()
        await $(await this.getLocators("btnCreateNewOffer")).click()

    }
}
module.exports = new LoginPage();
