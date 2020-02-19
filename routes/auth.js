const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const { MoneyButtonClient } = require('@moneybutton/api-client');
const client = new MoneyButtonClient('436cf82c97a7497406d5ea1f70bdef13');
const User = require('../models/User');

// @route   POST api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    //MB Auth
    client.requestAuthorization(
      'auth.user_identity:read',
      'http://localhost:3000'
    );
    client.handleAuthorizationResponse();
    const refreshToken = client.getRefreshToken();
    client.authorizeWithAuthFlowResponse(
      receivedQueryParameters,
      expectedStateValue,
      redirectUri
    );

    //
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(error.message);
    res.status(500).send('Server Error...');
  }
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600
        },
        (err, token) => {
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error...');
    }
  }
);

module.exports = router;
