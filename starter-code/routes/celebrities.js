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

/* GET /celebrities/new */
router.get('/new', (req, res, next) => {
  res.render('new');
  console.log('new celebrity page');
});

/* POST /celebrities/new */
router.post('/new', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.create({
		name, 
    occupation, 
    catchPhrase, 
	})
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(err => console.log('Error while adding celebrity: ', err));
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
