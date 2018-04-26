import express from 'express'
import CVGenerator from './CVGenerator'

const router = express.Router()

const DATA = {
  firstname: 'John',
  lastname: 'Doe',
  position: 'CV generator',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat ipsum sed orci ornare mollis. Aliquam ac elit lectus. Duis est augue, pulvinar ut purus eu, varius vulputate nisi. Mauris pulvinar tellus a lorem vestibulum mattis nec in sem. Aliquam quis nibh nec odio luctus dictum eget pulvinar orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent venenatis nibh quis consequat efficitur. Praesent id ultricies urna, non efficitur nulla. Sed ultricies diam at sagittis euismod. Vestibulum magna sapien, tristique et ultricies eu, aliquet ut dui. Morbi at pretium elit, a maximus dui. Etiam augue mauris, lacinia vitae sagittis et, consectetur a quam. Donec at porta sapien.

'Etiam ac viverra massa, consectetur rhoncus nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin at sem porttitor tellus accumsan rutrum. Duis luctus sed lorem convallis posuere. Sed eget tempus dui. Aliquam pharetra magna nec elit malesuada dictum. Donec non nisl fermentum, accumsan turpis euismod, congue dui. Quisque sit amet tellus pellentesque, hendrerit justo vel, ullamcorper tortor.
`
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'})
})

router.post('/generate', function(req, res, next){
  const doc = CVGenerator.generateCVFromData(req.body);

  res.status(200)
  res.end(doc)
});

export default router
