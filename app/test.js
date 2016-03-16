var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

var site = "http://www.juvo.com.br/juvoweb/login.html";
 
browser.get(site);
browser.findElement(webdriver.By.name("login")).sendKeys("eduardo.mizani");
browser.findElement(webdriver.By.name("password")).sendKeys("cargo5276");
browser.findElement(webdriver.By.css("input[type='submit']")).click();

browser.wait(function () {
    return webdriver.until.elementLocated(webdriver.By.name("login"));
}, 1000);

browser.findElement(webdriver.By.name("login")).sendKeys("eduardo.mizani");
browser.findElement(webdriver.By.name("password")).sendKeys("cargo5276");
browser.findElement(webdriver.By.css("input[type='submit']")).click();

browser.wait(function () {
    return webdriver.until.elementLocated(webdriver.By.name("main"));
}, 1000);

browser.get("http://www.juvo.com.br/juvoweb/lista-itens-lote-admin.exec");

browser.wait(function () {
    return webdriver.until.elementLocated(webdriver.By.name("idAssistencia"));
}, 1000);

browser.findElement(webdriver.By.name("idAssistencia")).sendKeys("22734147");
browser.findElement(webdriver.By.name("numeroServico")).sendKeys("1");
browser.findElement(webdriver.By.name("valor")).sendKeys("70,00");
browser.findElement(webdriver.By.css("input[type='button']")).click();

browser.findElement(webdriver.By.css("td[class='ex_campos']:last-child")).click();

browser.wait(function () {
    return webdriver.until.elementLocated(webdriver.By.name("ItemLoteFinancLancActionForm"));
}, 1000);

browser.wait(function () {
    return webdriver.until.elementLocated(webdriver.By.name("ItemLoteFinancLancActionForm"));
}, 1000);

var alert = browser.switchTo().alert();
alert.accept();

browser.wait(webdriver.until.alertIsPresent(),1000).then(function() {
        browser.switchTo().alert();
        console.log(browser.switchTo().alert().getText());
        browser.switchTo().alert().accept();
        browser.switchTo().defaultContent();
    });
 

var field = browser.findElement(webdriver.By.css(".ex_campos:nth-child(2)")).getText();
console.log(field);
        
// browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
//     console.log('Found', links.length, 'Wiki links.' )
//     browser.quit();
// });


// browser.get('http://www.google.com/ncr');
// browser.findElement(webdriver.By.name('q')).sendKeys('webdriver');
// browser.findElement(webdriver.By.name('btnG')).click();
// browser.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000);
// browser.quit();