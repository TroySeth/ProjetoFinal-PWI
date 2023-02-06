const mongoose = require('mongoose');
const {Schema} = mongoose;
const hoje = new Date();
const dataAtual = hoje.toLocaleDateString();;
const horario = hoje.toLocaleTimeString();

// Definindo o model das notas
const postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: {type: String, default: dataAtual + " às " + horario}
});

// Definindo a collection
const post = mongoose.model('post', postSchema);

module.exports = {post};