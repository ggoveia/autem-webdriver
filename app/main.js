 // app/main.js

// Module to control application life.
var app = require('app'); 
var fs = require('fs');
var driverRegister = require('../app/driver.js');
const ipc = require('electron').ipcMain;



// Module to create native browser window.
var BrowserWindow = require('browser-window');
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {

  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Open the devtools.
  // mainWindow.openDevTools();
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  ipc.on('process-itens', function(event, arg) {
      
      var files = [];
      var errorList = [];
      
      if (arg.length >0){
        for(var i = 0; i<=arg.length; i++)
        {
          if(arg[i].id != undefined){
            files.push(arg[i])
          }else{
            i = arg.length;
          }
        }
      driverRegister.register(files,errorList);
      }
      
      var file = fs.createWriteStream('error.txt');
      file.on('error', function(err) { /* error handling */ });
      errorList.forEach(function(v) { file.write(v.join(', ') + '\n'); });
          file.end();
      });
});

