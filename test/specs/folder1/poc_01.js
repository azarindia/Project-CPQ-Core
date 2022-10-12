const chai = require('chai');
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const loginData = require('../../resources/test_data/td_logincredentials.json');
const LoginPage = require('../../pageobjects/folder1/login');
const CFEMangementPage = require('../../pageobjects/folder1/cfemanagement.page');
const HomePage = require('../../pageobjects/folder1/home.page');
const ConfigurationPoolPage = require('../../pageobjects/folder1/configpool.page');
const HomeData = require('../../resources/test_data/homePage.json');
const CFEManagementData = require('../../resources/test_data/cfeManagementPage.json');
const url = yargs.url || loginData.baseUrl
const username = yargs.username || loginData.username
const password = yargs.password || loginData.password
const CRMID = yargs.CRMID || loginData.CRMID
const offerCaseID = yargs.offerCaseID || HomeData.offerCaseID
const offerName = yargs.offerName || HomeData.offerName
const OfferCaseName = yargs.OfferCaseName || HomeData.OfferCaseName
const window_2 = yargs.window_2 || CFEManagementData.window_2
const window_3 = yargs.window_2 || CFEManagementData.window_3
const phaseValue = yargs.phaseValue || CFEManagementData.phaseValue
const sellingCurrency = yargs.sellingCurrency || CFEManagementData.sellingCurrency
const incoterm = yargs.incoterm || CFEManagementData.incoterm
const existingCLP = yargs.existingCLP || CFEManagementData.existingCLP
const psp = yargs.psp || CFEManagementData.psp
describe("Regression", () => {

  it("VreifyingApplicationLogin", async () => {

    await browser.deleteCookies()
    await LoginPage.open(url);
    await LoginPage.setUsername(username)
    await LoginPage.clickNext()
    await LoginPage.setPassword(password)
    await LoginPage.clickOnSignIN()

  })

  it("VreifyingCreateNewOffer", async () => {
//  await HomePage.searchOfferCase(offerCaseID,offerName)
    await HomePage.CreateNewOffer()
    await HomePage.searchforCRM(CRMID,OfferCaseName)
    await HomePage.assignKeyRoles()
  })

  it("VreifyingConfigurationsImport", async () => {
    await ConfigurationPoolPage.clickOnConfigpool()
    await ConfigurationPoolPage.importFile()
 //   await ConfigurationPoolPage.checkInConfigurations()
    await ConfigurationPoolPage.convertingConfigurations()

   })
  it("Verification CFE Details", async () => {
    await CFEMangementPage.cfeManagementVerification()
    await CFEMangementPage.consoldatedViewVerification()
    await CFEMangementPage.verificationOfConsolidatedViewDetails(window_3)
    await CFEMangementPage.verificationOfPriceDetails()
    await CFEMangementPage.verificationOfPCEDetails()
    await CFEMangementPage.validationOfPSP(psp)
    await CFEMangementPage.validationOfPriceDetails(phaseValue,sellingCurrency,incoterm,existingCLP)

   })
  it("Verification CFE Details after Currency Change", async () => {
  //  await CFEMangementPage.verificationOfSIDetails()
    await CFEMangementPage.switchingBackToMainPage()
    await CFEMangementPage.cfeManagementVerification()
    await CFEMangementPage.consoldatedViewVerification()
    await CFEMangementPage.verificationOfConsolidatedViewDetails()
    await CFEMangementPage.verificationOfPriceDetails()
    await CFEMangementPage.verificationOfPCEDetails()
    await CFEMangementPage.validationOfPriceDetailsAfterCurrencyChange()
  })

  it("Verification CFE Details after Incoterm Changes", async () => {
      await CFEMangementPage.switchingBackToMainPageForIncotermChanges()
      await CFEMangementPage.cfeManagementVerification()
      await CFEMangementPage.consoldatedViewVerification()
      await CFEMangementPage.verificationOfConsolidatedViewDetails()
      await CFEMangementPage.verificationOfPriceDetails()
      await CFEMangementPage.verificationOfPCEDetails()
      await CFEMangementPage.validationOfPriceDetailsAfterIncotermChange()
    })

    it("Verification CFE Details after adding new phases", async () => {
        await CFEMangementPage.switchingBackToMainPageForAddingNewPhases()
        await CFEMangementPage.cfeManagementVerification()
        await CFEMangementPage.consoldatedViewVerification()
        await CFEMangementPage.verificationOfConsolidatedViewDetails()
        await CFEMangementPage.verificationOfPriceDetailsAfterAddingPhases()
        await CFEMangementPage.verificationOfPCEDetailsAfterAddingPhases()
        await CFEMangementPage.validationOfPriceDetailsAfterIncotermChange()
      })

      it("Verification CFE Details after Applying Discounts", async () => {
        await CFEMangementPage.switchingBackToMainPageForApplyingDiscount()
        await CFEMangementPage.cfeManagementVerification()
        await CFEMangementPage.consoldatedViewVerification()
        await CFEMangementPage.verificationOfConsolidatedViewDetails()
        await CFEMangementPage.verificationOfPriceDetailsAfterAddingPhases()
        await CFEMangementPage.verificationOfPCEDetailsAfterAddingPhases()
        await CFEMangementPage.validationOfPriceDetailsAfterApplyingDiscounts()
      })

  it("Verification of BOQ Document", async () => {
    await CFEMangementPage.switchingBackToMainPageForBOQGenaration()

  })

})

