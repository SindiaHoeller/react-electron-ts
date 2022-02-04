import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as isDev from 'electron-is-dev';


let mainWindow: BrowserWindow;

function createWindow() {
    console.log('Create Window.');
    mainWindow = new BrowserWindow({
        title: 'react-electron-ts',
        width: 800,
        height: 600,
        icon: path.join(app.getAppPath(), '/public/assets/icon.png'),
        webPreferences: {
            nodeIntegration: true,
            nativeWindowOpen: true,
            // webSecurity: false,
            contextIsolation: false,
        },
    });

    if (isDev) {
        mainWindow.loadURL('http://localhost:3000/index.html').then(() => console.log('Main Window loaded.')).catch((ex) => console.log(ex));
    } else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, '../index.html'),
            protocol: 'file:',
            slashes: true,
        })).then(() => console.log('Main Window loaded.')).catch((ex) => console.log(ex));
    }
    if (isDev) {
        mainWindow.webContents.once('dom-ready', () => {
            mainWindow.webContents.openDevTools();
        });
    }
}

app.on('ready', function () {
    console.log('App ready.');
    createWindow();
    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });

    app.on('activate', function () {
        if (mainWindow === null) {
            console.log('Create Window');
            createWindow()
        }
    });
});
