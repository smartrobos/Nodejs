process.on('beforeExit', function (code) {
    /*Do not call any Asynchronus call such as below "SetTimeout" related function call in this - This will result in infinite Loop to send "beforeExit" event to trigger every time.
setTimeout(function () {
console.log("Do not have a Function like this here ");
},0);
*/
    console.log('Before Exit Event Received ...Code - ');
});
process.on('exit', function (code) {
    setTimeout(function () {
        console.log("This call cannot prevent from code to exit... Hence this will not get executed");
    }, 0);
    console.log('About to exit with code:' + code);
});
console.log("Last Line of the Program. 'BeforeExit' and 'Exit' event will be triggered after this");





