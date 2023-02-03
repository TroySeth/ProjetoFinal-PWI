const mongoose = require('mongoose');
const {Schema} = mongoose;
const date = new Date();

// Definindo o model das notas
const userSchema = mongoose.Schema({
    name: String,
    user: String,
    email: String,
    photo: Buffer,
    point: Number
});

/*noteSchema.index(
    { title: 'text', content: 'text'}, { weights: { title: 2, content: 1}}
)*/

// Definindo a collection
const user = mongoose.model('user', userSchema);

module.exports = {user};