var express = require('express');
var router = express.Router();

//let i;


router.get('/', function(req, res, next) {
    res.send('GET HTTP method on a resource');
  });
  
  router.post('/', (req, res) => {
    return res.send('POST HTTP method on a resource');
  });
  
  router.put('/', (req, res) => {
    return res.send('PUT HTTP method on a resource');
  });
  
  router.delete('/', (req, res) => {
    return res.send('DELETE HTTP method on a resource');
  });
  
  module.exports = router;
  