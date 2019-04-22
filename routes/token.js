var express = require('express');
var router = express.Router();
var braintree = require('braintree');
var gateway = require('../routes/gateway');

router.get('/', function (req, res, ) {
  gateway.clientToken.generate({
    //uncomment below to display vaulted payment method for this customer
    //customerId: 616684176
  }, function (err, response) {
    var client_token = response.clientToken;
    //console.log(customerId);
    res.send(client_token);
  });
});
module.exports = router;
