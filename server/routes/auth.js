const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authControllers');

router.route('/login')
  .post(authCtrl.login);

module.exports = router;