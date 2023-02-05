const express = require('express')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')

// Routes do post
router.get('/post', userController.isAuthenticated, (req, res) => res.sendFile(path.join(__dirname + '../../post.html')))
router.post('/post', postController.create)
router.put('/update', postController.editPost)
router.delete('/delete', postController.destroyPost)

// Routes do comment
router.get('/comment', commentController.findAll)
router.post('/comment', commentController.create)
router.put('updateComment', commentController.editComment)
router.delete('/deleteComment', commentController.destroyComment)


// Routes do user
router.get('/register', (req, res) => res.sendFile(path.join(__dirname + '../../registro.html')))
router.post('/register', userController.create)
router.get('/signin', (req, res) => res.sendFile(path.join(__dirname + '../../login.html')))
router.post('/signin', userController.signin)
router.get('/signout', userController.signout)
router.get('/profile', userController.isAuthenticated, (req, res) => res.sendFile(path.join(__dirname + '../../perfil.html')))

module.exports = router;