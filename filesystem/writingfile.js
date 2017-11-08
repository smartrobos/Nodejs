var fs = require("fs");
console.log("Going to write into existing file");
fs.writeFile('output.txt', 'welcome to SmartCodeLab', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('ouput.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
})
