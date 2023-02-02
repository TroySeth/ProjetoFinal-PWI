const mongoose = require('mongoose');
const {Schema} = mongoose;
const date = new Date();

// Definindo o model das notas
const authorSchema = mongoose.Schema({
    name: String,
    user: String,
    email: String,
});

/*noteSchema.index(
    { title: 'text', content: 'text'}, { weights: { title: 2, content: 1}}
)*/

// Definindo a collection
const author = mongoose.model('author', authorSchema);

module.exports = {author};