var express = require('express');
var router  = express.Router();
var braintree = require('braintree');
var gateway = require('../routes/gateway');

router.post('/', function(req, res){
    var paymentToken = req.body.token;

    console.log('test token: ' + paymentToken);
    gateway.subscription.create({
        paymentMethodToken: paymentToken,
        //paymentMethodToken: req.body.token,
        planId: "plan1" //plan set up in merchant portal. this plan charges €10 p/m with 1st month up front
    }, function (err, result){
        console.log('Recurring Payment Result: ' + result);
        res.send(result);
    });
});

module.exports = router;