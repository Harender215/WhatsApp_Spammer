
const puppeteer = require("puppeteer");

async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("span[title ='Bhai log']")
    const target = await page.$("span[title ='Bhai log']")
    await target.click();
    const inp = await page.$(
        "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
    );


    for (let i = 0; i < 100; i++) {
        await inp.type("Manoj apna bhai hai")
        await page.keyboard.press("Enter")
    }

}


scrape("https://web.whatsapp.com/");

