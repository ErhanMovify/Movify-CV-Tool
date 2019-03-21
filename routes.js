const express = require('express')
const CVGenerator = require('./CVGenerator')
const path = require('path')

const router = express.Router()

router.get('/', function (req, res, next) {
  res.sendfile(path.join(__dirname, 'app', 'dist', 'index.html'));
})

router.post('/generate', function(req, res, next){
  const doc = CVGenerator.generateCVFromData(req.body);

  res.status(200)
  res.end(doc)
});

module.exports = router
