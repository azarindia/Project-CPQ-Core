const { log } = require('console');
const { LOADIPHLPAPI } = require('dns');
const path = require('path');
const propertiesReader = require('properties-reader');
const moduleName = 'cfeManagemenPageLocators';
const fileName = `${moduleName}.properties`;
console.log("printing directory" + __dirname)
const filePath = path.join(__dirname, '../..', 'resources', 'locators', 'LandingPageLocators', fileName);
const properties = propertiesReader(filePath);
const CommonOperationPage = require("../commonoperations/CommonOperationPage")

const fs = require('fs')
const { URL } = require('url')
const assert = require('assert');
const waitForFileExists = require('../../../util/waitForFileExists')

class CFEMangementPage {
    async getLocators(locatorName) {
        let locators = await properties.get(locatorName);
        console.log("printing locators" + " " + locators)
        return locators
    }

    async cfeManagementVerification(window_2) {
        await browser.pause(5000)
        let loc1 = await this.getLocators("btnCFEManagement")
        CommonOperationPage.waitElementVisible(loc1)
        CommonOperationPage.clickElement(loc1)
        console.log("Clicked on CfeManagementTab")
        await browser.pause(2000)
        var handles = await browser.getWindowHandles()
        console.log(handles)
        console.log("windowhandles After switching to window-2")
        browser.switchWindow('window_2')
        console.log("switched to another window")
    }

    async consoldatedViewVerification() {
        await browser.pause(2000)
        let loc2 = await this.getLocators("linkConfiguration_1")
        CommonOperationPage.waitElementVisible(loc2)
        CommonOperationPage.moveTo(loc2)
        console.log("mousehovered on cfe-1")
        await browser.pause(2000)
        let loc3 = await this.getLocators("btnViewCFEDetails")
        CommonOperationPage.waitElementVisible(loc3)
        CommonOperationPage.Rightclick(loc3)
        console.log("right click on element(CFE-1) has beeen performed to check Consolidated view")
        let currentHandle = await browser.getWindowHandle()
        console.log(currentHandle)
        console.log("windowhandle before switching to window")
        await browser.pause(3000)
        let loc4 = await this.getLocators("btnViewCfeEditDetails")
        CommonOperationPage.waitElementVisible(loc4)
        CommonOperationPage.clickElement(loc4)
        var handles = await browser.getWindowHandles()
        console.log(handles)
        console.log("windowhandles After switching to window")
        var newHandle
        for (var i = 0; i < handles.length; i++) {
            if (handles[i] != currentHandle) {
                newHandle = handles[i]
            }
        }
    }

    async verificationOfConsolidatedViewDetails(window_3) {
        await browser.pause(3000)
        browser.switchWindow('window_3')
        console.log("clicked on price")
        await browser.pause(3000)
        let loc5 = await this.getLocators("btnPriceDetailsTab")
        CommonOperationPage.waitElementVisible(loc5)
        CommonOperationPage.clickElement(loc5)
        console.log("clicked on pricedetails tab")      
    }

    async verificationOfPriceDetails() {
        await browser.pause(2000)
        let loc6 = await this.getLocators("textpsp")
        CommonOperationPage.waitElementVisible(loc6)
        CommonOperationPage.getValueOfElement(loc6)

        var PricestartingPoint = await $("//*[@id='cfeDetailsForm']/form/div/div[13]/input").getAttribute("value")
        console.log("Price Starting Point is: " + PricestartingPoint)
        var Phase = await $("//div[normalize-space()='Phase 1']").getText()
        console.log("Phase is " +Phase);
        var sellingCurrency = await $("//*[@col-id='sellingCurrency' and @role='gridcell']").getText()
        console.log("sellingCurrency: " + sellingCurrency)
        var Incoterm = await $("//*[@col-id='incoTerms' and @role='gridcell']").getText()
        console.log("Incoterm is: " + Incoterm)
        var ExistingCLP = await $("//*[@col-id='existingClp' and @role='gridcell' ]").getText()
        console.log("ExistingCLP is: " + ExistingCLP)
    }
    async verificationOfPriceDetailsAfterAddingPhases() {
        await browser.pause(2000)
        var PricestartingPoint = await $("//*[@id='cfeDetailsForm']/form/div/div[13]/input").getAttribute("value")
        console.log("Price Starting Point is: " + PricestartingPoint)
        var Phase1 = await $("//div[normalize-space()='Phase 1']").getText()
        console.log("for year-2022 Phase is: " + Phase1)
        await browser.pause(1000)
        var Phase2 = await $("//div[normalize-space()='Phase 2']").getText()
        console.log("for year-2022 Phase is: " + Phase2)
        var Phase3 = await $("//div[normalize-space()='Phase 3']").getText()
        console.log("for year-2022 Phase is: " + Phase3)
        var sellingCurrency = await $("//*[@col-id='sellingCurrency' and @role='gridcell']").getText()
        console.log("sellingCurrency: " + sellingCurrency)
        var Incoterm = await $("//*[@col-id='incoTerms' and @role='gridcell']").getText()
        console.log("Incoterm is: " + Incoterm)
        var ExistingCLP = await $("//*[@col-id='existingClp' and @role='gridcell' ]").getText()
        console.log("ExistingCLP is: " + ExistingCLP)
    }

    async verificationOfPCEDetails() {

        var PCEEQCLPPHASE1EuroFCA = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[12]").getText()
        console.log("PCE EQ CLP PHASE-1 Euro FCA is: " + PCEEQCLPPHASE1EuroFCA)
        var PCEEQCUPPHASE1EuroFCA = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[13]").getText()
        console.log("PCE EQ CUP PHASE-1 Euro FCA is: " + PCEEQCUPPHASE1EuroFCA)
        var PCEExtendedIRP = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[7]").getText()
        console.log("PCE Extended IRP is: " + PCEExtendedIRP)
        var PCEExtendedSRP = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[9]").getText()
        console.log("PCE Extended SRP is: " + PCEExtendedSRP)
    }

    async verificationOfPCEDetailsAfterAddingPhases() {

        var PCEExtendedIRP = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[7]").getText()
        console.log("PCE Extended IRP is: " + PCEExtendedIRP)
        var PCEExtendedSRP = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[9]").getText()
        console.log("PCE Extended SRP is: " + PCEExtendedSRP)

        var EQCLPPhase1USDDDP = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[12]").getText()
        console.log("EQ CLP Phase-1 USD DDP is: " + EQCLPPhase1USDDDP)
        var PCEEQCLPPHASE2EuroFCA = await $("//*[@col-id='EQCLPPhase2USDDDP' and @role='gridcell']").getText()
        console.log("EQ CLP Phase-2 USD DDP is: " + PCEEQCLPPHASE2EuroFCA)
        var PCEEQCLPPHASE3EuroFCA = await $("//*[@col-id='EQCLPPhase3USDDDP' and @role='gridcell']").getText()
        console.log("EQ CLP Phase-3 USD DDP is: " + PCEEQCLPPHASE3EuroFCA)

        var EQCUPPhase1USDDDP = await $("//*[@col-id='EQCUPPhase1USDDDP' and @role='gridcell']").getText()
        console.log("EQ CUP Phase-1 USD DDP is: " + EQCUPPhase1USDDDP)
        var EQCUPPhase2USDDDP = await $("//*[@col-id='EQCUPPhase2USDDDP' and @role='gridcell']").getText()
        console.log("EQ CUP Phase-2 USD DDP is: " + EQCUPPhase2USDDDP)
        var EQCUPPhase3USDDDP = await $("//*[@col-id='EQCUPPhase3USDDDP' and @role='gridcell']").getText()
        console.log("EQ CUP Phase-3 USD DDP is: " + EQCUPPhase3USDDDP)
        

        
    }

    async verificationOfPCEDetailsForPhase_2() {

        var PCEEQCLPPHASE1EuroFCA = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[12]").getText()
        console.log("PCE EQ CLP PHASE-1 Euro FCA is: " + PCEEQCLPPHASE1EuroFCA)
        var PCEEQCUPPHASE1EuroFCA = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[13]").getText()
        console.log("PCE EQ CUP PHASE-1 Euro FCA is: " + PCEEQCUPPHASE1EuroFCA)
        
    }

    async verificationOfPCEDetailsForPhase_3() {

        var PCEEQCLPPHASE1EuroFCA = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[12]").getText()
        console.log("PCE EQ CLP PHASE-1 Euro FCA is: " + PCEEQCLPPHASE1EuroFCA)
        var PCEEQCUPPHASE1EuroFCA = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[13]").getText()
        console.log("PCE EQ CUP PHASE-1 Euro FCA is: " + PCEEQCUPPHASE1EuroFCA)
        
    }

    async verificationOfSIDetails() {

        var SI_1_IRP = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[4]/div/div/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div[1]/div[5]").getText()
        console.log("SI-1 IRP is: " + SI_1_IRP)
        var SI_2_IRP = await $("//*[@id='accordion-panel-18']/div[2]/div/div/div[2]/div[2]/div[3]/div[4]/div/div/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div[2]/div[5]").getText()
        console.log("SI-2 IRP is: " + SI_2_IRP)

    }
    async validationOfPSP(psp) {
        await browser.pause(2000)
        const PricestartingPoint = await $("//*[@id='cfeDetailsForm']/form/div/div[13]/input")
        await expect(PricestartingPoint).toHaveAttr('value',psp)
        console.log("psp is as expected");
    }
    async validationOfPriceDetails(phaseValue,sellingCurrency,incoterm,existingCLP) {
        await browser.pause(2000)
        var Phase = await $("//div[normalize-space()='Phase 1']")
        console.log( await expect(Phase).toHaveText(phaseValue));
    //    await expect(Phase).toHaveText(phaseValue)
        console.log("Phase is as expected");

        var SellingCurrency = await $("//*[@col-id='sellingCurrency' and @role='gridcell']")
        await expect(SellingCurrency).toHaveText(sellingCurrency)
        console.log("sellingCurrency as expected")
        var Incoterm = await $("//*[@col-id='incoTerms' and @role='gridcell']")
        await expect(Incoterm).toHaveText(incoterm)
        console.log("Incoterm is as expected")
        var ExistingCLP = await $("//*[@col-id='existingClp' and @role='gridcell' ]")
        await expect(ExistingCLP).toHaveText(existingCLP)
        console.log("ExistingCLP is as expected")


       
    }
    async validationOfPriceDetailsAfterCurrencyChange() {
        await browser.pause(5000)
        const PricestartingPoint = await $("//*[@id='cfeDetailsForm']/form/div/div[13]/input")
        await expect(PricestartingPoint).toHaveAttr('value', '21,870')
        console.log("psp is as expected");
       


        // var Phase = await $("//div[normalize-space()='Phase 1']").getText()
        // console.log("Phase is: " + Phase)
        // var sellingCurrency = await $("//div[normalize-space()='EUR']").getText()
        // console.log("sellingCurrency: " + sellingCurrency)
        // var Incoterm = await $("//div[normalize-space()='FCA']").getText()
        // console.log("Incoterm is: " + Incoterm)
        // var ExistingCLP = await $("//*[@id='accordion-panel-16']/div[2]/div/div/div[2]/div[2]/div[3]/div[2]/div/div/div/div[1]").getText()
        // console.log("ExistingCLP is: " + ExistingCLP)
    }

    async validationOfPriceDetailsAfterIncotermChange() {
        await browser.pause(5000)
        const PricestartingPoint = await $("//*[@id='cfeDetailsForm']/form/div/div[13]/input")
        await expect(PricestartingPoint).toHaveAttr('value', '22,963.5')
        console.log("psp is as expected");

    }

    async validationOfPriceDetailsAfterApplyingDiscounts() {
        await browser.pause(5000)
        const PricestartingPoint = await $("//*[@id='cfeDetailsForm']/form/div/div[13]/input")
        await expect(PricestartingPoint).toHaveAttr('value', '11,481.75')
        console.log("psp is as expected");

    }
        async switchingBackToMainPage() {
            await browser.pause(10000)
            await browser.closeWindow()
            browser.switchWindow('CDwindow-02F0B1169877615DA43261BC672FA2E5')
            console.log("Switched back to main Page");
            await browser.pause(10000)
            await $("//*[@id='dollar_Refresh']").click()
            await browser.pause(10000)
            console.log("clicked on refresh")
            await browser.closeWindow()
            browser.switchWindow('CDwindow-C3912CA4C39BE3B5CA3863B94CCBCB2D')
            await browser.pause(10000)
            await $("//*[@type='button' and @role='tab'][5]").click()
            console.log("clicked on offercase Properties")
            const dropdown = await $("//*[@name='defaultCurrency.sellingCurrency']") 
            await dropdown.selectByAttribute('value','USD')
            await $("//*[@name='defaultCurrency.exchangeRate']").setValue(".5")
            await browser.pause(5000)
            await $("//*[@class='css-11wumdv']//button").click()
            await browser.pause(3000)
            await $("//button[normalize-space()='Continue']").click()
            await $("//*[@id='root']/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/button[2]").click()
            await $("//*[@id='dollar_Refresh']").click()           
    
        }

        async switchingBackToMainPageForIncotermChanges() {
            await browser.pause(5000)
            await browser.closeWindow()
            browser.switchWindow('CDwindow-02F0B1169877615DA43261BC672FA2E5')
            console.log("Switched back to main Page");
            await browser.pause(5000)
            await $("//*[@id='dollar_Refresh']").click()
            console.log("clicked on refresh")
            await browser.closeWindow()
            await browser.pause(3000)
            browser.switchWindow('CDwindow-C3912CA4C39BE3B5CA3863B94CCBCB2D')
            await browser.pause(5000)
            await $("//*[@type='button' and @role='tab'][5]").click()
            console.log("clicked on offercase Properties")
            const dropdown = await $("//*[@class='new-form-input large']") 
            await dropdown.selectByAttribute('value','DDP')
            console.log("incoterm changed to DDP");
            await $("//input[@name='primary.hw']").setValue("5")
            await $("//input[@name='primary.sw']").setValue("2")
            await $("//input[@name='primary.services']").setValue("2")
            console.log("Impact of incoterm to changed tp HW-5%,SW-2% and Services-2%");
            await browser.pause(2000)
            await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[5]/div[5]/form[1]/button[1]").click()
            await browser.pause(3000)
      //    await $("//*[@class='chakra-modal__footer css-k0waxj']/div/button[2]").click()
            await $("//*[@id='root']/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/button[2]").click()
            await $("//*[@id='dollar_Refresh']").click()
            
    
        }

        async switchingBackToMainPageForAddingNewPhases() {
            await browser.pause(5000)
            await browser.closeWindow()
            browser.switchWindow('CDwindow-02F0B1169877615DA43261BC672FA2E5')
            console.log("Switched back to main Page");
            await browser.pause(5000)
            await $("//*[@id='dollar_Refresh']").click()
            console.log("clicked on refresh")
            await browser.closeWindow()
            browser.switchWindow('CDwindow-C3912CA4C39BE3B5CA3863B94CCBCB2D')
            await browser.pause(5000)
            await $("//button[@data-index='5' and @class='chakra-tabs__tab css-1svi9b6' ]").click()
            console.log("clicked on Phases Management")
            await $("//button[normalize-space()='Add New Phase']").click()
            await browser.pause(2000)
            console.log("clicked on new phase");
            await $("//button[normalize-space()='Add New Phase']").click()
            await browser.pause(2000)
            await $("//*[@id='root']/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/button[2]").click()
            await $("//*[@id='dollar_Refresh']").click()  
        }      
    
            async switchingBackToMainPageForApplyingDiscount() {
                await browser.pause(5000)
                await browser.closeWindow()
                browser.switchWindow('CDwindow-02F0B1169877615DA43261BC672FA2E5')
                console.log("Switched back to main Page");
                await browser.pause(5000)
                await $("//*[@id='dollar_Refresh']").click()
                console.log("clicked on refresh")
                await browser.closeWindow()
                browser.switchWindow('CDwindow-C3912CA4C39BE3B5CA3863B94CCBCB2D')
                 await browser.pause(5000)
                await $("//*[@class='chakra-tabs__tab css-1svi9b6'][3]").click()
                console.log("clicked on Commercial Strategy")
                await browser.pause(15000)
                await $("//div[@class='css-aecqdv']//div[@name='DropRightXS']//*[name()='svg']").click()
                console.log("clicked on initial discounts");
                await browser.pause(5000)
                //cmtd because editor is in disabled mode
           //     await $("//button[@aria-label='Edit']//div[@name='Edit']//*[name()='svg']").click()
          //      console.log("clicked on editor");
                await browser.pause(2000)
                await $("//div[@class='ag-theme-balham nokia-grid initial-discount css-pqbwa1']//div//div[@class='ag-body-horizontal-scroll-viewport']").scrollIntoView();
                await browser.pause(5000)
                await $("//div[@class='ag-theme-balham nokia-grid initial-discount css-pqbwa1']//div//div[@class='ag-body-horizontal-scroll-viewport']").dragAndDrop({ x: 500, y: 0 })
               
                console.log("Moved Scroll bar to Right");
                await browser.pause(5000)
               await $("//*[@col-id='irpDiscountPercentage' and @role='gridcell']").click() 
                console.log("Clicked on discounts Text Box");
                await browser.pause(2000)
                await $("//*[@col-id='irpDiscountPercentage' and @role='gridcell']").addValue("50")
                //cmtd because editor is in disabled mode
            //    await $("//button[@aria-label='Done']//div[@name='CompletedStep']//*[name()='svg']").click() 
                await browser.pause(2000)
                await $("//button[@class='chakra-button css-d65sxk'][normalize-space()='Save']").click() 
                await browser.pause(2000)
                await $("//*[@id='dollar_Refresh']").click()         

            }
                
            async switchingBackToMainPageForBOQGenaration() {
                await browser.pause(5000)
                await browser.closeWindow()
                browser.switchWindow('CDwindow-02F0B1169877615DA43261BC672FA2E5')
                console.log("Switched back to main Page");
                await browser.pause(5000)
                await $("//*[@id='dollar_Refresh']").click()
                console.log("clicked on refresh")
                await browser.closeWindow()
                browser.switchWindow('CDwindow-C3912CA4C39BE3B5CA3863B94CCBCB2D')
                 await browser.pause(5000)
                await $("//*[@id='root']/div/div[2]/div/div[2]/div[1]/a[3]/div/p").click()
                console.log("clicked on consolidate and validate")
                await browser.pause(5000)
                await $("//*[@id='summaryView']/div[4]/div[3]/button[2]").click()
                console.log("clicked on Boq Documents formatting");
                await $("//*[@class='chakra-button submit-button css-9j1g5g']").click()
                await browser.pause(5000)
                await $("//*[@id='summaryView']/div[4]/div[3]/button[3]").click()
                await browser.pause(7000)
                await $("//*[@id='root']/div/div[2]/div/div[2]/div[1]/a[4]/div/p").click()
                console.log("clicked on Submit and handover");
                await $("//*[@name='Save' and @class='jss1 jss3']").click()
                await browser.pause(5000)
                console.log("BOQ Document is downoaded");
                await browser.pause(10000)
            }
            async BOQDownloadAndValidation() {
                await browser.pause(5000)
                await $("//*[@id='root']/div/div[2]/div/div[2]/div[1]/a[4]/div/p").click()
                console.log("clicked on Submit and handover");
                // await $("//*[@name='Save' and @class='jss1 jss3']").click()
                // await browser.pause(5000)
                // console.log("BOQ Document is downoaded");
                // await browser.pause(10000)

                const downloadLink = $("//*[@name='Save' and @class='jss1 jss3']");

                await browser.pause(5000)
                downloadLink.click();
                await browser.pause(10000)
                
            
            
                const downloadHref = downloadLink.getAttribute('href');
                
            
             
                const downloadUrl = new URL(downloadHref);
            
                
                const fullPath = downloadUrl.pathname;
            
               
                const splitPath = fullPath.split('/')
            
                const fileName = splitPath.splice(-1)[0]
            
                
                const filePath = path.join(global.downloadDir, fileName)
            
                browser.call(function (){
                  return waitForFileExists(filePath, 60000)
                });
            
              
                const fileContents = fs.readFileSync(filePath, 'utf-8')
                assert.ok(fileContents.includes('asdf'))
              
            

                
            }
        }

module.exports = new CFEMangementPage();
