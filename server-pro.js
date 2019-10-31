const http = require("http");
const path = require("path");
const express = require("express");

// const config = require('./config/config')

const app = express();
// const port = process.env.PORT || config.webport || 3000
const port = 6789;
/**
 * 用于指定URL路径和服务器路径的映射
 */
const publicDir = path.resolve(__dirname, "./dist");
app.use("/", express.static(publicDir));

app.use("/base", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

// app.use('/mz', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './dist/mz-static/index.html'));
// })

http.createServer(app).listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(
            "==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.",
            port,
            port
        );
    }
});
