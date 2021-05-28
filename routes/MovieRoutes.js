const express = require("express");
const movieCotroller = require("../Controllers/movieController");
const app = express();
const router = express.Router();
const multer = require("multer");
module.exports = router;

let upload = multer({ dest: "public/uploads" });
////Creating Storage
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${req.body.title} -${Date.now()}.${ext}`);
  },
});

upload = multer({ storage: storage });

router
  .route("/")
  .get(movieCotroller.getAllMovies)
  .post(upload.single("movieImg"), movieCotroller.createMovie);

router
  .route("/:id")
  .get(movieCotroller.getMovie)
  .patch(movieCotroller.updateMovie)
  .delete(movieCotroller.deleteMovie);
