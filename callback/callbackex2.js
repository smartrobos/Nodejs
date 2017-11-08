console.log(Date(), "Before calling settime");
setTimeout(function () {
    console.log(Date(), "Hello I can be used as Call back in another function")
}, 3000);
