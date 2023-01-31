const mongoose = require('mongoose');
const {Schema} = mongoose;
const date = new Date();

// Definindo o model dos comentários
const commentSchema = mongoose.Schema({
    content: String,
    date: {type: Date, default: date},
});


// Definindo a collection
const comment = mongoose.model('comment', subjectSchema);

module.exports = {comment};