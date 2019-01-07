var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'message': 'The request has been processed succesfully with 200 status'})
});

module.exports = router;
