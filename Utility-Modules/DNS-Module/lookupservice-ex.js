const dns = require('dns');
dns.lookupService('8.8.8.8', 22, (err, hostname, service) => {
    console.log(hostname, service);
});
