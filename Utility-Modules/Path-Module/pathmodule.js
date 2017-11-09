// Command to import Path Module in Node.js.
var path = require("path");
//1. Use of path.normalize () method.
console.log('Path normalization is : ' + path.normalize('/test/test1//node/newfloder/tab/..'));
//2. Use of path.join () method.
console.log('joint path is : ' + path.join('/test', 'test1', 'node/newfloder/', 'tab', '..'));
//3. Use of path.resolve () method.
console.log('Path resolve is : ' + path.resolve('hello-nodejs.js'));
//4. Use of path.extname () method.
console.log('Path extension name is : ' + path.extname('helloworld.js'));
//5. Use of path.isAbsolute method.
console.log('Is Absolute path? : ' + path.isAbsolute('/pathModule/pathModule.js'));
//6. Use of path.dirname (p) method.
console.log('Path Directory name is : ' + path.dirname('/pathModule/pathModule.js'));
//7. Use of path.relative (from, to) method.
console.log('Relative Path is : ' + path.relative('/pathModule/subpath/subpath2/', '/pathModule/build.gradle'));
//8. Use of path.basename () method.
console.log('Path base name is : ' + path.basename('/pathModule/pathModule.js', '.js'));
//9. Use of path.parse (pathString) () method.
console.log('Parsed path string is : ' + JSON.stringify(path.parse('/pathModule/pathModule.js')));
//10. Use of path.format (pathObject) method.
console.log('Path format is : ' + path.format(path.parse('/pathModule/pathModule.js')));


