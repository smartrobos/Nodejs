var buffer = new Buffer(26);
for (var index = 0; index < 26; index++) {
	buffer[index] = index + 97;
}
console.log(buffer.toString('ascii'));
console.log(buffer.toString('ascii', 23, 26));
console.log(buffer.toString('utf8', 0, 11));
console.log(buffer.toString('utf16le', 0, 11));
console.log(buffer.toString('ucs2', 0, 11));
console.log(buffer.toString('base64', 0, 11));
console.log(buffer.toString('hex', 0, 11));
console.log(buffer.toString(undefined, 0, 5)); // encoding will defaults to 'utf8'
