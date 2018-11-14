const Joi = require("joi");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  release: { type: Date, default: Date.now() },
  mainActor: {
    type: String,
    minlength: 1
  }
});

const Movie = mongoose.model("Movie", movieSchema);

function validateMovie(movie) {
  const Schema = {
    title: Joi.string()
      .max(255)
      .min(3)
      .required(),
    release:Joi.date(),
    mainActor: Joi.string().min(1)
  };
  return Joi.validate(movie, Schema);
}

exports.MovieSchema = movieSchema;
exports.Movie = Movie;
exports.Validate = validateMovie;
