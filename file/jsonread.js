const fs = require('fs-extra');

function handleFile(err, data) {
    if (err) throw err
    const obj = JSON.parse(data)
    console.log(obj)
}

fs.readFile('data.json', handleFile)