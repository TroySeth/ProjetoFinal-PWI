const {user: userModel, user} = require('../models/User');
const db = require('../db/db')

// Função de criar user
async function create (req, res){
    try{
        new userModel({
            name: req.body.name,
            user: req.body.user,
            email: req.body.email,
        }).save();
        setTimeout(function() {
            res.status(201).json('subject criado')
        }, 2000);
    } catch(error){
        console.log('Erro ao criar assunto:' + error);
    }
};

async function login (req, res){
    try{
        await userModel.findOne({user: req.body.user})
        res.status(201).json('usuario entrou')
    } catch(error){
        console.log('usuário não cadastrado')
    }
}

module.exports = {create, login}