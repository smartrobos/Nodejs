function printHello() {
  console.log(Date(), "Hello I can be used as Call back in another function")
}
console.log(Date(), "Before calling settime");
/*Below inbuilt settimeout takes first argument as "printHello" (this is the call back function)
and second argument is time delay in milliseconds.
The settimeout calls the function asynchronously after the delay of 3000ms.
*/
setTimeout(printHello, 3000);
