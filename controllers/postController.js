const {post: postModel, post} = require('../models/Post');
const {user: userModel, user} = require('../models/User');
const db = require('../db/db')

// Função de criar assunto
async function create (req, res){
    try{
        new postModel({
            title: req.body.title,
            content: req.body.content,
            author: req.session.user.username,
            date: postModel.date
        }).save().then(async function (){
            await userModel.updateOne({_id: req.session.user._id},{point: req.session.user.point += 10});
            res.redirect('/');
        })
    } catch(error){
        console.log('Erro ao criar assunto:' + error);
    }
};

// Função de pegar todos os assuntos do fórum no banco
async function findAll (req, res){
    const postAll = await postModel.find().lean();
    res.render('partials/posts/initialPosts', ({layout:'posts', Posts: postAll}));
};

async function editPost (req, res){
    try{
        await postModel.updateOne({_id: req.body.id},{title: req.body.title, content: req.body.content}
        ).then(res.status(201).json('post do ID: ' + req.body.id + ' foi modificado'));
    } catch(error){
        console.log('Falha ao editar a postagem: ' + error)
    }
};

async function destroyPost (req, res){
    await postModel.deleteOne({_id: req.body.id}).then(res.status(200).json('post do ID: ' + req.body.id + ' foi deletado')
    .then(async function (){
        await userModel.updateOne({_id: req.session.user._id},{point: req.session.user.point -= 10});
        res.redirect('/profile');
    })
    ).catch((error) => {
        console.log('Erro ao deletar a postagem.' + error);
    })
};

module.exports = {create, findAll, editPost, destroyPost}