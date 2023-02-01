const {subject: subjectModel, subject} = require('../models/Subject');
const db = require('../db/db')

// Função de criar assunto
async function create (req, res){
    try{
        new subjectModel({
            title: req.body.title,
            content: req.body.content,
            date: subjectModel.date,
        }).save();
        setTimeout(function() {
            res.status(201).json('subject criado')
        }, 2000);
    } catch(error){
        console.log('Erro ao criar assunto:' + error);
    }
};

async function findAll (req, res){
    const subjectAll = await subjectModel.find()
    res.send(subjectAll)
};

module.exports = {create, findAll}