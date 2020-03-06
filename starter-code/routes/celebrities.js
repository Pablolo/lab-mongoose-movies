const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

/* GET /celebrities */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities', { celebrities });
  })
  .catch(err => console.log('Error while listing celebrities: ', err));
  console.log('listing celebrities');
});

module.exports = router;
