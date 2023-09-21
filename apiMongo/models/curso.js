const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cursoSchema = new Schema({
    codigo:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    estudiantes:[]
})

module.exports = mongoose.model('curso', cursoSchema)