// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.end("hey whas up from express")
// })

// app.listen(8100);

const fs = require('fs');
const fileName = "target.txt";

fs.readFile(fileName, (err, data) => {
    if(err) {
        console.log(err)
    }
});