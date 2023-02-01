const mongoose = require('mongoose');
const {Schema} = mongoose;
const date = new Date();

// Definindo o model dos Tópicos
const topicSchema = mongoose.Schema({
    name: String,
    date: {type: Date, default: date},
});


// Definindo a collection
const topic = mongoose.model('topic', topicSchema);

module.exports = {topic};