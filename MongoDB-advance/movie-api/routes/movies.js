
const { Movie, validate } = require('../models/movie')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Routes
router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("name");
  res.send(movies);
});

router.post("/", async (req, res) => {
  const { error } = validateGenre(req.body);
  console.log('dddddddddddddddddddddddd')
  console.log(error)
  if (error) return res.status(400).send(error.message);

  const gen

  let movie = new Movie({
    title:req.body.title,
    mainActor:req.body.mainActor
  });
  movie = await movie.save();

  res.send(movie)
});

router.get('/:id', async (req, res) =>{
  const movie = await Movie.findById(req.params.id);
  if(!movie) return res.status(404).send('The genre with the given ID was not found')
  res.send(movie);
})

router.patch('/:id',async(req, res) =>{
  const {error} = validateGenre(req.body);
  if (error) return res.status(400).send(error.message);

  const movie = await Movie.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  },{new:true})

  res.send(movie)
})

router.delete('/:id', async(res,req)=>{
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if(!movie) return res.status(404).send()

  res.send(movie)
})

module.exports = router;

require('./genre')