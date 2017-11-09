// Printing to console
process.stdout.write("Hello World!");
// Reading passed parameter
process.argv.forEach(function (val, index, array) {
    console.log("Input Argument Index : " + index + ' Argument Value: ' + val);
});
// Getting executable path
console.log("Executable Path: " + process.execPath);
// Platform Information
console.log("Platform Program Executing: " + process.platform);
