const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys');
const User = require('../../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/test', (req, res) => res.json({ msg: 'This is the users route' }));
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'A user is already registered with that email' })
    } else {
      
    }
  })
})

module.exports = router;
