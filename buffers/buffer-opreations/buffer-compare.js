var buffer1 = new Buffer('ab');
var buffer2 = new Buffer('cd');
var result = buffer1.compare(buffer2);
console.log("Value returned is : " + result);
if (result < 0) {
    console.log(buffer1 + " comes before " + buffer2);
}
else if (result === 0) {
    console.log(buffer1 + " is same as " + buffer2);
}
else {
    console.log(buffer1 + " comes after " + buffer2);
}
