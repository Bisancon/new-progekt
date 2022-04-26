const puppyteer = require('puppeteer');

(async () => {
    const browser = await puppyteer.launch();
    const page = await browser.newPage();
    await page.goto('https://gulayaka-edu.ru/login/index.php');

    await page.$eval('#username', (elem) => {
        elem.value = 'id215650909'
    });

    await page.$eval('#password', (elem) => {
        elem.value = 'Kyr10&64r'
    });

    await page.click('#loginbtn');
    await page.waitForNavigation();

    await page.goto('https://gulayaka-edu.ru/grade/report/grader/index.php?id=152')

    //await page.$$eval('gradereport-grader-table', (elements) => {

    //});

    await page.screenshot({ path: 'example.png' });


    await browser.close();
})();