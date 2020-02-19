const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Movie = require('../models/Movie');
const Contract = require('../models/Contract');
const Wallet = require('../models/Wallet');

// @route   GET api/wallet
// @desc    Get all wallets
// @access  Private
router.get('/', async (req, res) => {
  try {
    const wallet = await Wallet.find({});
    res.json(wallet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route   GET api/wallet/:id
// @desc    Get wallet
// @access  Public
router.get('/', (req, res) => {
  res.send('Get a specific event');
});
// @route   POST api/wallet
// @desc    Create a wallet
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
      const newWallet = new Wallet({
        title,
        description,
        location,
        interested,
        user,
        tags,
        session
      });
      const wallet = await newWallet.save();
      res.json(wallet);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error...');
    }
  }
);
// @route   PUT api/wallet/:id
// @desc    Update wallet details
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { title, description, location, interested } = req.body; // Build a Wallet object
  const walletFields = {};

  if (title) walletFields.title = title;
  if (description) walletFields.description = description;
  if (location) walletFields.location = location;
  if (interested) walletFields.interested = interested;
  try {
    let wallet = await Wallet.findById(req.params.id);
    if (!wallet) return res.status(404).json({ msg: 'Wallet not found' }); //Make sure user has access rights

    if (wallet.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' });
    }

    wallet = await Wallet.findByIdAndUpdate(
      req.params.id,
      { $set: walletFields },
      { new: true }
    );

    res.json(wallet);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error...');
  }
});
// @route   DELETE api/wallet/:id
// @desc    Delete wallet
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let wallet = await Wallet.findById(req.params.id);
    if (!wallet) return res.status(404).json({ msg: 'Wallet not found' });

    if (wallet.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' });
    }

    await Wallet.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Wallet Removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error...');
  }
});
// @route   GET api/wallet/search-wallet
// @desc    Filter wallets by name
// @access  Public
router.get('/search-wallet', function(req, res, next) {
  let q = req.query.q;
  console.debug('Query is ' + q);
  Wallet.find(
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

module.exports = router;
