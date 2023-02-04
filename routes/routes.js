const router = require('express').Router();
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')

// Routes do post
router.route('/post').get((req, res) => {
    //postController.findAll
    res.sendFile(path.join(__dirname + '../../post.html'))
});
router.route('/post').post((req, res) => postController.create(req, res));
router.route('/update').put((req, res) => postController.editPost(req , res));
router.route('/delete').delete((req, res) => postController.destroyPost(req, res));

// Routes do comment
router.route('/comments').get((req, res) => commentController.findAll(req, res));
router.route('/comment').post((req, res) => commentController.create(req, res));
router.route('/updateComment').put((req, res) => commentController.editComment(req , res));
router.route('/deleteComment').delete((req, res) => commentController.destroyComment(req, res));

// Routes do user
router.route('/register').get((req, res) => res.sendFile(path.join(__dirname + '../../registro.html')));
router.route('/register').post((req, res) => userController.create(req, res));
router.route('/login').get((req, res) => res.sendFile(path.join(__dirname + '../../login.html')))
router.route('/login').post((req, res) => userController.login)
router.route('/perfil').get((req, res) => res.sendFile(path.join(__dirname + '../../perfil.html')))

module.exports = router;