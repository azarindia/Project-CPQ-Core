const fs = require('fs');
const filepath = require('path');

const chai = require('chai');
const { argv } = require('yargs');

const chaiAssert = chai.assert;
class CommonOperationPage {
    async navApplication(url) {
   //     console.log(`Inside method CommonOperationPage navApplication.- ${url}`);
        await browser.url(url);
        await browser.setTimeout({ pageLoad: 30000, script: 30000, });
    }
    async staticWait(timeInMS) {
        await browser.pause(timeInMS);
    }
    async clickElement(locator) {
      console.log(`Clicking on the element. - ${locator} `);
        await this.staticWait(500);
        await this.waitElementVisible(locator);

        await $(locator).click();
        await this.staticWait(500);
    }
    async waitElementVisible(locator, time1 = 30000) {
       console.log(`Waiting for the visiblity of element. - ${locator} `);

        const element = $(locator);
        await element.waitForDisplayed({ timeout: time1 });
     await   this.staticWait(500);
    }
    async waitForExist(locator, time1 = 50000) {
        console.log(`Waiting for the existance of element. - ${locator} `);

        const element = $(locator);
        await element.waitForExist({ timeout: time1 });
     await   this.staticWait(500);
    }
    async waitForClickable(locator, time1 = 50000) {
        console.log(`Waiting for the clickable element. - ${locator} `);

        const element = $(locator);
        await element.waitForClickable({ timeout: time1 });
     await   this.staticWait(500);
    }
    async setElementValue(locator, value) {
        console.log(`Setting value for the element. - ${locator} `);
        await this.waitElementVisible(locator);
        await $(locator).setValue(value);
        await this.staticWait(500);
    }
    async  clearElementValue(locator) {
        console.log(`Inside method CommonOperationPage moveToElement. - ${locator} `);
        await this.waitElementVisible(locator);
        await $(locator).clearValue()
        await this.staticWait(500);
      } 
    async  moveTo(locator) {
 //       console.log(`Inside method CommonOperationPage moveToElement. - ${locator} `);
        await this.waitElementVisible(locator);
        await   $(locator).moveTo();
        await this.staticWait(500);
      }
      async  Rightclick(locator) {
 //       console.log(`Inside method CommonOperationPage moveToElement. - ${locator} `);
        await this.waitElementVisible(locator);
        await   $(locator).click({ button: 'right' })
        await this.staticWait(500);
      }

      async  waitUntill(locator) {
        //       console.log(`Inside method CommonOperationPage moveToElement. - ${locator} `);
        await $(locator).waitUntil(async function () {
          return (await this.getText()) === 'Bid Manager, Solution Manager (Lead) , Pricing Manager (Lead) , roles are successfully assigned to Shaik Azharuddin. Please Save to reflect your changes.'
        }, {
          timeout: 50000,
          timeoutMsg: 'expected text to be different after 5s'
        });         
      }

      async  getValueOfElement(locator) {
        //       console.log(`Inside method CommonOperationPage moveToElement. - ${locator} `);
               await this.waitElementVisible(locator);
               const value =  await  $(selector).getAttribute("value")
               console.log("Value is: " +value)
               await this.staticWait(500);
             }

}
//export default new CommonOperationPage();
module.exports = new CommonOperationPage();