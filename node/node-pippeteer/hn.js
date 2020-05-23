// const puppeteer = require('puppeteer');

// (async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.baidu.com/', { waitUntil: 'networkidle2' });
//     await page.pdf({ path: 'hn.pdf', format: 'A4' });

//     await browser.close();
// })();



const puppeteer = require('puppeteer');
// 没有界面浏览器，人操作不了
// 代码： 命令我们浏览器执行某某行为，自动
// 代码，一劳永逸的，自动化
(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com/');
    let input = await page.$('#kw'); //获取搜索框组件
    await input.focus(); //将焦点聚焦到搜索框处
    await page.keyboard.type('大众点评'); //在输入框里面加入搜索数据
    let btn = await page.$('#su'); //选择搜索标签
    await btn.click(); //点击执行搜索
    // 内容不是立马出来的
    // 等一会
    setTimeout(async() => { //搜索需要等待数据加载（服务器请求）
        await page.pdf({ path: 'hn.pdf', format: 'A4' }); //等到数据加载完成截图为pdf
        await browser.close(); //关闭
    }, 3000);
})();