const router = require('express').Router();

const subjectController = require('../controllers/subjectController')

// Routes
router.route('/').get((req, res) => subjectController.findAll(req, res));
router.route('/').post((req, res) => subjectController.create(req, res));

module.exports = router;