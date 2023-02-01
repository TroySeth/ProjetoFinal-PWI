const router = require('express').Router();

const subjectController = require('../controllers/subjectController')

// Routes
router.route('/').get((req, res) => subjectController.findAll(req, res));
router.route('/').post((req, res) => subjectController.create(req, res));
router.route('/update').put((req, res) => subjectController.editSubject(req , res));
route.route('/delete').delete((req, res) => subjectController.destroySubject(req, res));

module.exports = router;