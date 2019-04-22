var express = require('express');
var router  = express.Router();
var braintree = require('braintree');
var gateway = require('../routes/gateway');

router.post('/', function(req, res){
    //transID pulled from ajax call in index
    var transID = req.body.refundID;
    console.log('Transaction ID ' + transID);
    gateway.transaction.refund(transID, function(err, result){
        console.log('refund Result: ' + result);
        res.send(result);
    });
});
module.exports = router;