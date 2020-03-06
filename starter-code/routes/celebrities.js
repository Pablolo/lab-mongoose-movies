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

/* GET /celebrities/:id */
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then(celebrities => {
    res.render('eachcelebrity', { celebrities });
  })
  .catch(err => console.log('Error while detailing celebrity: ', err));
  console.log('each celebrity details');
});

module.exports = router;
