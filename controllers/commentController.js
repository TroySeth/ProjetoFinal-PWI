const {comment: commentModel, comment} = require('../models/Comment');
const db = require('../db/db')

// Função de criar assunto
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