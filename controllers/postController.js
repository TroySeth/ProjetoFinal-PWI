const {post: postModel, post} = require('../models/Post');
const db = require('../db/db')

// Função de criar assunto
async function create (req, res){
    try{
        new postModel({
            title: req.body.title,
            content: req.body.content,
            date: postModel.date,
        }).save();
        setTimeout(function() {
            res.status(201).json('subject criado')
        }, 2000);
    } catch(error){
        console.log('Erro ao criar assunto:' + error);
    }
};

// Função de pegar todos os assuntos do fórum no banco
async function findAll (req, res){
    const postAll = await postModel.find()
    res.json(postAll)
};

async function editPost (req, res){
    try{
        await postModel.updateOne({_id: req.body.id},{title: req.body.title, content: req.body.content});
        setTimeout(function() {
            res.status(201).json('post do ID: ' + req.body.id + ' foi modificado')
            }, 1000);
    } catch(error){
        console.log('Falha ao editar a postagem: ' + error)
    }
};

async function destroyPost (req, res){
    await postModel.deleteOne({_id: req.body.id}).then(() => {
        setTimeout(function() {
            res.status(200).json('post do ID: ' + req.body.id + ' foi deletado')
        }, 500);
    }).catch((error) => {
        console.log('Erro ao deletar a postagem.' + error);
    })
};

module.exports = {create, findAll, editPost, destroyPost}