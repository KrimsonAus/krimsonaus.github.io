//login const's ------------------------------------------------
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

//-------------------------------------------------------------

const {print, saveToFile, readFile, sushi} = require('./Linoleum.js');

const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();


//Emitter and Reading testing
{
    eventEmitter.on("lunch", () => {
        console.log("lunch");
    })


    const {readFileSync} = require('fs');

    const file = readFileSync('./login.txt', 'utf8', (err, txt) => {
        if (err) {
            console.error(err)
        }
    });

    eventEmitter.emit("lunch");
    console.log(file);
}

//Linoleum Testing
{
    const linoleum = require(`./Linoleum.js`);
    print("text bench");
}

print(sushi(1))

//login stuff
{
    app.use(express.json());
    app.use(express.static(__dirname));

    app.post("/save", (req, res) => {
        const {text} = req.body;

        saveToFile("login.txt", text + "\n", (err) => {
            if (err) return res.status(500).send("Error writing to file");
            res.send("Saved!");
        });

        readFile('login.txt', (err, data) => {
            if (!err) console.log(data);
        });
    });

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}