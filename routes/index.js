const express = require('express'),
router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ART Database').sendStatus(200);
});

module.exports = router;
