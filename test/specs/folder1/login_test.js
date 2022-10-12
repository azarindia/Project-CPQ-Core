//import loginData from "../../resources/test_data/td_logincredentials.json"
//import loginPage from "../../pageobjects/folder1/login"

const loginData = require('../../resources/test_data/td_logincredentials.json');
const LoginPage = require('../../pageobjects/folder1/login');
describe("suite1", () => {
  it("testcase", async () => {
    await browser.deleteCookies()
    await LoginPage.open(loginData.baseUrl);

    await browser.pause(10000)
    await LoginPage.setUsername(loginData.username)
    await LoginPage.clickNext()
    await browser.pause(10000)
    await LoginPage.setPassword(loginData.password)
    await LoginPage.clickOnSignIN()


    //   








  })



})






// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });


