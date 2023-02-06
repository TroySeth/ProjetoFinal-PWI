const express = require('express');
const router = express.Router();
const path = require('path');

const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController');

// Routes do post
router.get('/', postController.findAll);
router.post('/post', userController.isAuthenticated, (req, res) => postController.create);
router.put('/update', postController.editPost);
router.delete('/delete', postController.destroyPost);

// Routes do comment
router.get('/comment', commentController.findAll);
router.post('/comment', commentController.create);
router.put('updateComment', commentController.editComment);
router.delete('/deleteComment', commentController.destroyComment);


// Routes do user
router.get('/register', (req, res) => res.render('partials/register'));
router.post('/register', userController.create);
router.get('/signin', (req, res) => res.render('partials/login'));
router.post('/signin', userController.signin);
router.get('/signout', userController.signout);
router.get('/profile', userController.isAuthenticated, (req, res) => res.render('partials/profile'));

module.exports = router;