var dns = require('dns');
dns.lookup('www.google.com', (err, address, family) => {
  console.log('address:', address);
});
