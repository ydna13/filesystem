const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/list-files', (req, res) => {
    // List files and directories in a specific folder
    const folderPath = './files'; // Change to the directory you want to list
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(files);
    });
});

app.get('/read-file/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = `./files/${filename}`;
    // Read the contents of a file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`File Management System running on http://localhost:${port}`);
});
