var dns = require('dns');
let hostname = 'www.google.com';
let rrtype1 = 'A';
let rrtype2 = 'AAAA';
let printAddressCB = (err, address, type) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(type + ` Address:${JSON.stringify(address)}`);
    }
}
dns.resolve(hostname, rrtype1, (err, address) => {
    printAddressCB(err, address, "IPV4")
});
dns.resolve(hostname, rrtype2, (err, address) => {
    printAddressCB(err, address, "IPV6")
});
