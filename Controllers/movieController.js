const Movie = require("../Model/MovieSchema");
const APIFeatures = require("../Utils/apiFeatures");
exports.getAllMovies = async (req, res, next) => {
  try {
    const features = new APIFeatures(Movie.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await features.query;

    res.status(201).json({
      status: "success",
      numOfMovies: doc.length,
      data: doc,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
    });
  }
};

exports.getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!movie) throw new Error("No movie found with that ID");
    res.status(200).json({
      status: "success",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) throw new Error("No Movie Found with that ID");
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.createMovie = async (req, res, next) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({
      status: "success",
      data: newMovie,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
    });
  }
};
