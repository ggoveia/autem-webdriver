var webdriver = require('selenium-webdriver');
var config    = require('../app/config.js');;
const EventEmitter = require('events').EventEmitter;
const myEE = new EventEmitter();
var fs = require('fs');
var error = false;

exports.register = register;

var file = fs.createWriteStream('error.txt');

myEE.on("Erro", function (err) {
    
    file.write(err);
    // errorListTest.forEach(function(v) { file.write(v.join(', ') + '\n'); });
    file.end();
});

function register (itens,errorList){
    var webdriver = require('selenium-webdriver');
    var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

    var site = config.url;
    var user = config.login;
    var password = config.password;
    
    browser.get(site);
    browser.findElement(webdriver.By.name("login")).sendKeys(config.login);
    browser.findElement(webdriver.By.name("password")).sendKeys(password);
    browser.findElement(webdriver.By.css("input[type='submit']")).click();

    browser.wait(function () {
        return webdriver.until.elementLocated(webdriver.By.name("login"));
    }, 1000);

    browser.findElement(webdriver.By.name("login")).sendKeys("eduardo.mizani");
    browser.findElement(webdriver.By.name("password")).sendKeys("cargo5191");
    browser.findElement(webdriver.By.css("input[type='submit']")).click();


    browser.wait(function () {
        return webdriver.until.elementLocated(webdriver.By.name("main"));
    }, 1000);

    browser.get("http://www.juvo.com.br/juvoweb/lista-itens-lote-admin.exec");

    browser.wait(function () {
        return webdriver.until.elementLocated(webdriver.By.name("idAssistencia"));
    }, 1000);

    itens.forEach(function(element) {
    
        browser.findElement(webdriver.By.name("idAssistencia")).sendKeys(element.id);
        browser.findElement(webdriver.By.name("numeroServico")).sendKeys(element.numServico);
        browser.findElement(webdriver.By.name("valor")).sendKeys(element.valor);
    
        browser.findElement(webdriver.By.css("input[type='button']")).click();
        
        browser.switchTo().alert().then(function (alert) {
            var error = ""
            alert.getText().then(function (text) {
                error = text;
                errorList.push(element.id + " - " +text);
                alert.accept();
            });
            myEE.emit("erro", error);
          }, function (err) {
            return;
        });

        browser.switchTo().alert().then(function (alert) {
        alert.getText().then(function (text) {
            console.log(text);
            errorList.push(element.id + " - " +text);
            alert.accept();
        });
        }, function (err) {
            return;
        });
        
        browser.executeScript("document.getElementById('idAssistencia').value =''");
        browser.executeScript("document.getElementById('numeroServico').value =''");
        browser.executeScript("document.getElementsByName('valor')[0].value =''"); 
    
    
        browser.wait(function () {
            console.log("waaaiting");
            return webdriver.until.elementLocated(webdriver.By.name("ItemLoteFinancLancActionForm"));
        }, 1000);
    
        }, this);

    browser.wait(function () {
        return webdriver.until.elementLocated(webdriver.By.css("td[width='720']"));
    },1000);
    
   browser.findElement(webdriver.By.id("consistirLote")).click(function(){},function(err){
       errorList.push("Verifique o log de erro");
   });
    
    // browser.findElement(webdriver.By.name("consistirLote")).then(function(){
    //     browser.findElement(webdriver.By.id("consistirLote")).click();
    // }, function(err) {
    //     if (err.state && err.state === 'no such element') {
    //         console.log('Element not found');
    //     } else {
    //         webdriver.promise.rejected(err);
    //     }
    //     browser.quit();
    // });
            
    browser.wait(function () {
        return webdriver.until.elementLocated(webdriver.By.css("td[class='ex_campos_vermelho']"));
    },1000).then(function(){
        
        var teste = webdriver.until.elementLocated(webdriver.By.css("td[class='ex_campos_vermelho']"));
        // teste.forEach(function(element){
            // errorList.push(teste);
        // });
        
    });
     
                
     browser.findElement(webdriver.By.css("td[class='ex_campos_vermelho']")).getAttribute("innerHTML").then(
        function(text) {
            errorList.push(text);
            console.log(text);
    });
   
    browser.findElement(webdriver.By.name("idAssistencia")).then(function(){
        
        errorList.forEach(function(v) { file.write(v += "\r\n"); });
        file.end();
        
    })
   
    
};

// var site = "http://www.juvo.com.br/juvoweb/login.html";
 
// browser.get(site);
// browser.findElement(webdriver.By.name("login")).sendKeys("eduardo.mizani");
// browser.findElement(webdriver.By.name("password")).sendKeys("cargo5276");
// browser.findElement(webdriver.By.css("input[type='submit']")).click();

// browser.wait(function () {
//     return webdriver.until.elementLocated(webdriver.By.name("login"));
// }, 1000);

// browser.findElement(webdriver.By.name("login")).sendKeys("eduardo.mizani");
// browser.findElement(webdriver.By.name("password")).sendKeys("cargo5276");
// browser.findElement(webdriver.By.css("input[type='submit']")).click();

// browser.wait(function () {
//     return webdriver.until.elementLocated(webdriver.By.name("main"));
// }, 1000);

// browser.get("http://www.juvo.com.br/juvoweb/lista-itens-lote-admin.exec");

// browser.wait(function () {
//     return webdriver.until.elementLocated(webdriver.By.name("idAssistencia"));
// }, 1000);

// browser.findElement(webdriver.By.name("idAssistencia")).sendKeys("22734147");
// browser.findElement(webdriver.By.name("numeroServico")).sendKeys("1");
// browser.findElement(webdriver.By.name("valor")).sendKeys("70,00");
// browser.findElement(webdriver.By.css("input[type='button']")).click();

// browser.switchTo().alert().then(function (alert) {
//     alert.getText().then(function (text) {
//         console.log(text);
//         alert.accept();
//     });
// }, function (err) {
//     return;
// });

// browser.switchTo().alert().then(function (alert) {
//     alert.getText().then(function (text) {
//         console.log(text);
//         alert.accept();
//     });
// }, function (err) {
//     return;
// });


// browser.findElement(webdriver.By.name("idAssistencia")).sendKeys("22730309");
// browser.findElement(webdriver.By.name("numeroServico")).sendKeys("1");
// browser.findElement(webdriver.By.name("valor")).sendKeys("71,00");
// browser.findElement(webdriver.By.css("input[type='button']")).click();

// browser.switchTo().alert().then(function (alert) {
//     alert.getText().then(function (text) {
//         console.log(text);
//         alert.accept();
//     });
// }, function (err) {
//     return;
// });

// browser.switchTo().alert().then(function (alert) {
//     alert.getText().then(function (text) {
//         console.log(text);
//         alert.accept();
//     });
// }, function (err) {
//     return;
// });

// browser.wait(function () {
//      return webdriver.until.elementLocated(webdriver.By.name("ItemLoteFinancLancActionForm"));
// }, 1000);

// // browser.switchTo().alert().getText().then(
// //     function(text) {
// //         console.log("alert detected");
// //         console.log(text);
// //     },
// //     C
// // .then(function() {
// //     console.log("quitting...");
// //     browser.quit();
// // });

//   browser.wait(function () {
//     return webdriver.until.elementLocated(webdriver.By.css("td[width='720']"));
//   },1000);
 
// // browser.findElement(webdriver.By.css("input[class='input_acao_item']")).click();
 
//   browser.findElement(webdriver.By.id("consistirLote")).click();
        
//   browser.wait(function () {
//     return webdriver.until.elementLocated(webdriver.By.css("td[class='ex_campos_vermelho']"));
//   },1000);
        
//   browser.findElement(webdriver.By.css("td[class='ex_campos_vermelho']")).getAttribute("innerHTML").then(
//     function(text) {
//         console.log(text);
//     });
        
// // browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
//    //  console.log('Found', links.length, 'Wiki links.' )
// //     browser.quit();
// // });


// // browser.get('http://www.google.com/ncr');
// // browser.findElement(webdriver.By.name('q')).sendKeys('webdriver');
// // browser.findElement(webdriver.By.name('btnG')).click();
// // browser.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000);
// // browser.quit();