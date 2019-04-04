const express = require('express')
const CVGenerator = require('./CVGenerator')
const DropboxUploader = require('./DropboxUploader')
const path = require('path')

const router = express.Router()

router.get('/', function (req, res, next) {
  res.sendfile(path.join(__dirname, 'app', 'dist', 'index.html'));
})

router.post('/generate', async function(req, res, next){
  const doc = CVGenerator.generateCVFromData(req.body);
  var uploadError = false;
  if (!!doc) uploadError = await DropboxUploader.uploadDocToDropbox(doc, req.body);

  res.status(200)
  res.send({
    data: doc,
    dropboxError: !!uploadError
  })
});

module.exports = router
