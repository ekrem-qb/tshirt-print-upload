#!/usr/bin/env node

import fs from 'fs';
import http from "http";
import formidable from "formidable";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

http.createServer(function (req, res) {
    if (req.url == '/image-upload') {
        const form = formidable({
            keepExtensions: true,
            allowEmptyFiles: false,
        })
        form.parse(req, (err, fields, files) => {
            console.log(files.image.filepath);
        });
    }
    fs.readFile(path.join(__dirname, './index.html'), function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data.toString());
        return res.end();
    });
}).listen(80);
