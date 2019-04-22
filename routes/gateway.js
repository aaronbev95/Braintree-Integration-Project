var braintree = require('braintree');

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'q757d2y47nsyq238',
    publicKey:    'pnr37z99k3dqg89g',
    privateKey:   '635751aaecb1f15c4fc8ae93392ee0f9'
});
module.exports = gateway;