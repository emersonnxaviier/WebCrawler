const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function robo(){

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const moedaBase =  readlineSync.question('Informe uma moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('Informe a moeda desejada: ') || 'real';
    const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C1FCXM_pt-PTBR960BR960&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0i10l6j0i22i30l3.3991j1j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(url);
    //await page.screenshot({ path: 'example.png' });

    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);
    await browser.close();
}

robo();
