const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Movie = require('../models/Movie');
const Contract = require('../models/Contract');

// @route   GET api/movies
// @desc    Get all movies
// @access  Public
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route   GET api/movies/:id
// @desc    Get movie
// @access  Public
router.get('/:id', (req, res) => {
   try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/movies
// @desc    Create a Movie
// @access  Private

router.post(
  '/',
  [
    //   auth,
    [
      check('title', 'title is required')
        .not()
        .isEmpty(),
      check('description', 'description is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      title,
      description,
      location,
      interested,
      user,
      tags,
      session
    } = req.body;
    try {
      const newMovie = new Movie({
        title,
        description,
        location,
        interested,
        user,
        tags,
        session
      });
      const movie = await newMovie.save();
      res.json(movie);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error...');
    }
  }
);
// @route   PUT api/movies/:id
// @desc    Update an movie
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { title, description, location, interested } = req.body; // Build a movie object
  const movieFields = {};
  if (title) movieFields.title = title;
  if (description) movieFields.description = description;
  if (location) movieFields.location = location;
  if (interested) movieFields.interested = interested;

  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ msg: 'Movie not found' }); //Make sure user organised event
    if (movie.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' });
    }
    movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: movieFields },
      { new: true }
    );
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error...');
  }
});
// @route   DELETE api/movies/:id
// @desc    Delete movie
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ msg: 'Event not found' }); //Make sure user organised Event
    if (movie.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' });
    }
    await Movie.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Movie Removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error...');
  }
});
// @route   GET api/movies/search-movies
// @desc    Filter movies by movie name
// @access  Public
router.get('/search-movies', function(req, res, next) {
  let q = req.query.q;
  console.debug('Query is ' + q);
  Movie.find(
    {
      title: {
        $regex: new RegExp(q)
      }
    },
    {
      _id: 0,
      __v: 0
    },
    function(err, data) {
      res.json(data);
    }
  ).limit(15);
});
// @route   Get api/movies/search-tag
// @desc    Filter movies by tag name
// @access  Public
router.get('/search-tag/', function(req, res, next) {
  let q = req.query.q;
  console.debug('Query is ' + q);
  Movie.find(
    {
      tags: {
        $regex: new RegExp(q)
      }
    },
    {
      _id: 0,
      __v: 0
    },
    function(err, data) {
      res.json(data);
    }
  ).limit(15);
});

module.exports = router;
