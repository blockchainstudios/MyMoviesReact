const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Movie = require('../models/Movie');
const Contract = require('../models/Contract');

// @route   GET api/contracts
// @desc    Get all contract-types
// @access  Public
router.get('/', async (req, res) => {
  try {
    const contract = await Conrract.find({});
    res.json(contract);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/contracts
// @desc    Create an new contract agreement
// @access  Private
router.post('/', async (req, res) => {
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
    const newContact = new Contract({
      title,
      description,
      location,
      interested,
      user,
      tags,
      session
    });
    const contract = await newContract.save();
    res.json(contract);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error...');
  }
});
// @route   PUT api/contracts/:id
// @desc    Update an contract
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { title, description, location, interested } = req.body; // Build a contract object
  const contractFields = {};
  if (title) contractFields.title = title;
  if (description) contractFields.description = description;
  if (location) contractFields.location = location;
  if (interested) contractFields.interested = interested;
  try {
    let contract = await Contract.findById(req.params.id);
    if (!contract) return res.status(404).json({ msg: 'Contract not found' }); //Make sure user organised event
    if (contract.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' });
    }
    contract = await Contract.findByIdAndUpdate(
      req.params.id,
      { $set: contractFields },
      { new: true }
    );
    res.json(contract);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error...');
  }
});
// @route   DELETE api/contracts/:id
// @desc    Delete contract
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contract = await Contract.findById(req.params.id);
    if (!contract) return res.status(404).json({ msg: 'Contract not found' }); //Make sure user organised Event
    if (contract.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' });
    }
    await Contract.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Contract Removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error...');
  }
});

// @route   GET api/contracts/search-contacts
// @desc    Filter contracts by contract name
// @access  Public
router.get('/search-contracts', function(req, res, next) {
  let q = req.query.q;
  console.debug('Query is ' + q);
  Contract.find(
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
// @route   Get api/contracts/search-tag
// @desc    Filter contracts by tag
// @access  Public
router.get('/search-tag/', function(req, res, next) {
  let q = req.query.q;
  console.debug('Query is ' + q);
  Contract.find(
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
