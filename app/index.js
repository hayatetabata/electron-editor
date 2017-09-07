const {app, BrowserWindow} = require('electron');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({window: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
