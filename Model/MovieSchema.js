const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  country: {
    type: String,
    required: [true, "country is required"],
  },
  releaseYear: {
    type: Number,
    required: [true, "Release year is required"],
  },
  genre: [String],
  lang: {
    type: String,
    required: [true, "language is required"],
  },
  duration: {
    type: String,
    required: [true, "dureation is required"],
  },
  watched: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: [true, "movie url is required"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
