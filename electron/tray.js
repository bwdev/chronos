const tray = {
  CreateTray: createTray(appWindow)
};

function createTray(appWindow) {
  tray = new Tray(path.join(__dirname, 'src/assets/img/icons/hourglass_white.png'));
  const openWindowMenuItem = {
    label: 'Dashboard',
    type: 'normal',
    click: () => {
      if (!appWindow) initWindow();
      appWindow.show();
    }
  }
  const contextMenu = Menu.buildFromTemplate([
    openWindowMenuItem
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
}

module.exports = { ...createTray };
