var dns = require('dns');
let hostname = 'www.google.com';
let printAddressCB = (err, address, type) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log(type + ` Address:${JSON.stringify(address)}`);
  }
}
dns.resolve4(hostname, (err, address) => {
  printAddressCB(err, address, "IPV4")
});
dns.resolve6(hostname, (err, address) => {
  printAddressCB(err, address, "IPV6")
});
