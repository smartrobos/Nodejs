function printHelloWorld() {
    console.log("Hello, welcome to the World of global objects in Node.js!");
}
// Now call above function after 3 seconds
var time = setTimeout(printHelloWorld, 3000);
//To clear the timer
clearTimeout(time);
