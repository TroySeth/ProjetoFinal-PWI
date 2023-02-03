const {comment: commentModel, comment} = require('../models/Comment');
const db = require('../db/db')

// Função de criar comentário
async function create (req, res){
    try{
        new commentModel({
            content: req.body.content,
            date: commentModel.date,
        }).save();
        setTimeout(function() {
            res.status(201).json('comment criado')
        }, 2000);
    } catch(error){
        console.log('Erro ao criar comnetário:' + error);
    }
};

async function findAll (req, res){
    const commentAll = await commentModel.find()
    res.json(commentAll)
};

async function editComment (req, res){
    try{
        await commentModel.updateOne({_id: req.body.id},{content: req.body.content});
        setTimeout(function() {
            res.status(201).json('comment do ID: ' + req.body.id + ' foi modificado')
            }, 1000);
    } catch(error){
        console.log('Falha ao editar o comentário: ' + error)
    }
};

async function destroyComment (req, res){
    await commentModel.deleteOne({_id: req.body.id}).then(() => {
        setTimeout(function() {
            res.status(200).json('comment do ID: ' + req.body.id + ' foi deletado')
        }, 500);
    }).catch((error) => {
        console.log('Erro ao deletar a postagem.' + error);
    })
};

module.exports = {create, findAll, editComment, destroyComment}