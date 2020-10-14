const { app, BrowserWindow, Menu, Tray } = require('electron');
const url = require('url');
const path = require('path');

let appWindow;
let tray;

function initWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    closable: true,
    modal: true
  });

  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/dist/index.html'),
      protocol: 'file',
      slashes: true
    })
  );

  appWindow.hide();

  // Initialize the DevTools.
  appWindow.webContents.openDevTools()

  tray = t.createTray(appWindow);

  appWindow.on('closed', function () {
    appWindow = null
  })

}



app.on('ready', initWindow);

app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) initWindow()
});

