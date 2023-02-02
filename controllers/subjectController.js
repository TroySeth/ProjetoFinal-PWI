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

// Função de pegar todos os assuntos do fórum no banco
async function findAll (req, res){
    const subjectAll = await subjectModel.find()
    res.json(subjectAll)
};

async function editSubject (req, res){
    try{
        await subjectModel.updateOne({_id: req.body.id},{title: req.body.title, content: req.body.content});
        setTimeout(function() {
            res.status(201).json('subject do ID: ' + req.body.id + ' foi modificado')
            }, 1000);
    } catch(error){
        console.log('Falha ao editar assunto: ' + error)
    }
};

async function destroySubject (req, res){
    await subjectModel.deleteOne({_id: req.body.id}).then(() => {
        setTimeout(function() {
            res.status(200).json('subject do ID: ' + req.body.id + ' foi deletado')
        }, 500);
    }).catch((error) => {
        console.log('Erro ao deletar assunto.' + error);
    })
};

module.exports = {create, findAll, editSubject, destroySubject}