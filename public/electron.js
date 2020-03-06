const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const remote = electron.remote;
const backend = require(__dirname+"\\server.js");

const sqlite = require('sqlite3');

let mainWindow;


backend().then(() => {
    function createWindow() {
    
    
   

   
        mainWindow = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true,
                nodeIntegrationInWorker: true
            },
            width: 1600,
            height: 900,
            backgroundColor: 'black',
            show: false
        });
        mainWindow.loadURL(
            isDev ?
            "http://localhost:3000" :
            `file://${path.join(__dirname, "../build/index.html")}`
        );
        mainWindow.once('ready-to-show', () => {
            
            mainWindow.show();
        })
        mainWindow.on("closed", () => (mainWindow = null));
    
        
    }
    app.on("ready", createWindow);
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit();
        }
    });
    app.on("activate", () => {
        if (mainWindow === null) {
            createWindow();
        }
    });
})



