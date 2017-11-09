// Command to import OS Module in Node.js.    
var os = require("os");
//1. Use of os.hostname () method.    
console.log('OS hostname is : ' + os.hostname());
//2. Use of os.type () method.    
console.log('OS type is : ' + os.type());
//3. Use of os.platform () method.    
console.log('OS platform is : ' + os.platform());
//4. Use of os.release () method.    
console.log('OS release is : ' + os.release());
//5. Use of os.arch () method.    
console.log('OS Architecture is : ' + JSON.stringify(os.arch()));
//6. Use of os.cpus () method.    
console.log('OS cpus is : ' + JSON.stringify(os.cpus()));
//7. Use of os.endianness () method.    
console.log('OS Endianness of CPU is : ' + os.endianness());
//8. Use of os.totalmem () method.    
console.log('OS total memory is : ' + os.totalmem());
//9. Use of os.freemem () method.    
console.log('OS free memory  is : ' + os.freemem());
//10. Use of os.tmpdir () method.    
console.log('OS tmp dir for files is : ' + os.tmpdir());
//11. Use of os.loadavg () method.    
console.log('OS load average array  is : ' + os.loadavg());
//12. Use of os.uptime () method.    
console.log('OS uptime is : ' + os.uptime());
//13. Use of os.networkInterfaces () method.    
console.log('List of network Interfaces are : ' + JSON.stringify(os.networkInterfaces()));
