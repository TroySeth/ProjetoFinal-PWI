const mongoose = require('mongoose');
const {Schema} = mongoose;
const date = new Date();

// Definindo o model das notas
const postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: {type: Date, default: date},
});

/*noteSchema.index(
    { title: 'text', content: 'text'}, { weights: { title: 2, content: 1}}
)*/

// Definindo a collection
const post = mongoose.model('post', postSchema);

module.exports = {post};