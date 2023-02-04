const {user: userModel, user} = require('../models/User');
const db = require('../db/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Função de criar user
async function create (req, res){
    
    const {name, username, email, password} = req.body

    const emailExists = await userModel.findOne({email : email})
    const userExists = await userModel.findOne({username: username})

    if(emailExists){
        return res.status(422).json('email já cadastrado, tente com outro email!')
    }
    if(userExists){
        return res.status(422).json('usuário já existe, tente outro usuário')
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    try{
        new userModel({
            name,
            username,
            email,
            password: passwordHash
        }).save();
        setTimeout(function() {
            res.status(201).json('usuário criado')
        }, 2000);
    } catch(error){
        console.log('Erro ao criar usuário:' + error);
    }
};

async function login (req, res){

    const {username, password} = req.body

    const user = await userModel.findOne({username: username})
    if(!user){
        return res.status(422).json('usuário não encontrado!')
    } 

    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword){
        return res.status(422).json('Senha inválida!')
    }

    try{
        const secret = process.env.SECRET
        const token = jwt.sign({
            id: user._id,
        },
        secret,
    )
        res.status(200).json('Autenticação realizada com sucesso! '+ token)
    } catch(error){
        res.status(422).json('autenticacao n funcionou')
    }
}

module.exports = {create, login}