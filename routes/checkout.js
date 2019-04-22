var express = require('express');
var router = express.Router();
var braintree = require('braintree');
var gateway = require('../routes/gateway');

router.post('/', function(req, res, next) {
  // Use the payment method nonce here
  var nonceFromTheClient = req.body.paymentMethodNonce;

  // Create a new transaction for $10
  var newTransaction = gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true,
      //vaults transaction method automatically
      storeInVaultOnSuccess: true
    }
  },function(error, result) {
    //settles payment for testing purposes
    gateway.testing.settle(result.transaction.id,function(err, settleResult){
      settleResult.success
    });
      if (result) {
        res.send(result);
        console.log("payment successful checkout.js");
      } else {
        res.status(500).send(error);
        console.log("payment failed checkout.js");
      }
  });
});

module.exports = router;
