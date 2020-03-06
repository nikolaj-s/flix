const backend = async () => {

    const express = require('express');
    const server = express();
    const cors = require('cors')
    const fileUpload = require('express-fileupload')
    const errorHandler = require('errorhandler');
    
    const bodyparser = require('body-parser');
    const sqlite = require('sqlite3');
    const db = new sqlite.Database('./database.sqlite');
    const fs = require('fs');
    if (!fs.existsSync('./videos')) {
        fs.mkdirSync('./videos')
    }

    
    db.run("CREATE TABLE Videos (id INTEGER PRIMARY KEY, name TEXT NOT NULL)", error => {
        if (error) {
            console.log(error);
            return;
        }
    })

    const PORT = process.env.PORT || 3005;


    server.use(cors());

    server.use(fileUpload());


    const videoLocation = './videos/';
    

    server.use(bodyparser.json())

    server.use('/api/videos', express.static(videoLocation))

    
    
    server.get('/api/videos', (req, res, next) => {
        db.all("SELECT * FROM Videos", (error, rows) => {
            if (error) {
                next(error)
            }
            res.status(200).send(rows);
        })
        
    })
    
    
    server.post('/api/videos', (req, res, next) => {
        let file = req.files.video;
        let fileName = req.files.video.name;
        db.run("INSERT INTO Videos (name) VALUES ($name)",{$name: fileName}, function(error) {
            if (error) {
                next(error)
            }
            file.mv(videoLocation + fileName);
            db.get("SELECT * FROM Videos WHERE id=$id", {$id: this.lastID}, (error, row) => {
                if (error) {
                    next(error)
                }
                res.status(201).send(row);
            })
        })
        
    })
    
    

    server.listen(PORT, () => {
        console.log(`server is listening on ${PORT}`)
    })
}

module.exports = backend;