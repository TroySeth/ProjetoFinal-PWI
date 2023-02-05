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
router.route('/signin').get((req, res) => res.sendFile(path.join(__dirname + '../../login.html')))
router.route('/signin').post((req, res) => userController.signin(req, res))
router.route('/signout').get((req, res) => userController.signout(req, res))
//router.route('/perfil').get((req, res) => res.sendFile(path.join(__dirname + '../../perfil.html')))
router.route('/profile', userController.isAuthenticated).get((req, res) => res.sendFile(path.join(__dirname + '../../perfil.html')))

/*router.route('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id

    const user = await userModel.findById(id, '-password')

    if(!user){
        return res.status(404).json('Usuário não encontrado')
    }
    res.status(200).json(user)
}).get*/

function checkToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        return res.status(401).json('Acesso negado!')
    }

    try{
        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()

    } catch(error){
        res.status(400).json('Token inválido!')
    }
}
module.exports = router;