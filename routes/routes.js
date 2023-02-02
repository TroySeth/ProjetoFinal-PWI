const router = require('express').Router();

const subjectController = require('../controllers/subjectController')
const commentController = require('../controllers/commentController')
const topicController = require('../controllers/topicController')

// Routes
router.route('/buscar').get((req, res) => subjectController.findAll(req, res));
router.route('/').post((req, res) => subjectController.create(req, res));
router.route('/update').put((req, res) => subjectController.editSubject(req , res));
router.route('/delete').delete((req, res) => subjectController.destroySubject(req, res));
router.route('')

module.exports = router;
