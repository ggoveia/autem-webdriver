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

browser.findElement(webdriver.By.name("idAssistencia")).sendKeys("22730309");
browser.findElement(webdriver.By.name("numeroServico")).sendKeys("1");
browser.findElement(webdriver.By.name("valor")).sendKeys("70,00");
browser.findElement(webdriver.By.css("input[type='button']")).click();

browser.findElement(webdriver.By.css("td[class='ex_campos']:last-child")).click();


 browser.wait(function () {
     return webdriver.until.elementLocated(webdriver.By.name("ItemLoteFinancLancActionForm"));
 }, 1000);

// browser.switchTo().alert().getText().then(
//     function(text) {
//         console.log("alert detected");
//         console.log(text);
//     },
//     C
// .then(function() {
//     console.log("quitting...");
//     browser.quit();
// });

  browser.wait(function () {
    return webdriver.until.elementLocated(webdriver.By.css("td[width='720']"));
  },1000);
 
// browser.findElement(webdriver.By.css("input[class='input_acao_item']")).click();
 
  browser.findElement(webdriver.By.xpath("//*[@id='Layer2']/table[8]/tbody/tr[5]/td/table/tbody/tr/td[3]")).getAttribute("innerHTML").then(
    function(textstring) {
         console.log(textstring);
  });

// browser.quit();