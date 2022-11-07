const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/signup', async (req, res) => {
  const { fullName, userName, email, password } = req.body;
  console.log('line 12 routers.js >>>', fullName, userName, email, password);

  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(password, saltPassword);
  
  const signedUpUser = new signUpTemplateCopy({
    fullName: fullName,
    userName: userName,
    email: email,
    password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
