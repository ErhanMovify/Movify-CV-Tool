import express from 'express'
import CVGenerator from './CVGenerator'

const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index')
})

router.post('/generate', function(req, res, next){
  const doc = CVGenerator.generateCVFromData(req.body);

  res.status(200)
  res.end(doc)
});

export default router
