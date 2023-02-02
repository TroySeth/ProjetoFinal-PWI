const {topic: topicModel, topic} = require('../models/Topic');
const db = require('../db/db')

// Função de criar assunto
async function create (req, res){
    try{
        new subjectModel({
            name: req.body.name,
            date: topicModel.date
        }).save();
        setTimeout(function() {
            res.status(201).json('topic criado')
        }, 2000);
    } catch(error){
        console.log('Erro ao criar topic:' + error);
    }
};