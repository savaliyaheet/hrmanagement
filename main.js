const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");
const url = require("url");

let win;

app.on("ready", () => {

  //Creating New Brower Window
  win = new BrowserWindow({
    width: 1440,
    height: 1024,
    // resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.webContents.openDevTools();

  // win.loadURL(`file:/${__dirname}/src/index.html`);
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "src/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  win.once("ready-to-show", () => {
    win.show();
  });

  win.on("closed", () => {
    win = null;
    console.log("Window Closed");
  });
});
