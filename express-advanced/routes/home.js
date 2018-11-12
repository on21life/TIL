const express = require('express')
const router = express.Router();
const Joi = require('joi')



router.get('/', (req, res)=>{
  res.render('index',{
    title:'HappyHacking',
    greeting: 'May you'
  })
})
router.get('/:name', (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).required(),
  }
  return Joi.validate(movie, schema);
}

function getMovie(movies, id){
  return movies.find(movie => movie.id === id)
}

module.export = router;