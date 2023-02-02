const router = require('express').Router();

const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')

// Routes do post
router.route('/posts').get((req, res) => postController.findAll(req, res));
router.route('/').post((req, res) => postController.create(req, res));
router.route('/update').put((req, res) => postController.editPost(req , res));
router.route('/delete').delete((req, res) => postController.destroyPost(req, res));

// Routes do comment
router.route('/comments').get((req, res) => commentController.findAll(req, res));
router.route('/').post((req, res) => commentController.create(req, res));
router.route('/updateComment').put((req, res) => commentController.editComment(req , res));
router.route('/deleteComment').delete((req, res) => commentController.destroyComment(req, res));

// Routes do user
router.route('/cadastrar').post((req, res) => userController.create(req, res));

module.exports = router;
