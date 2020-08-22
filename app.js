const { app, BrowserWindow, Menu, Tray } = require('electron');
const url = require('url');
const path = require('path');
const { Browser } = require('protractor');

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);

let appWindow;
let tray;

function initWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/dist/index.html'),
      protocol: 'file',
      slashes: true
    })
  );

  tray = new Tray(path.join(__dirname, 'src/assets/img/icons/hourglass_white.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: false },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)

  // Initialize the DevTools.
  appWindow.webContents.openDevTools()

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

