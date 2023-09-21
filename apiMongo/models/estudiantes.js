const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const estudianteSchema = new Schema({
    email:{
        type: String, 
        require: true
    },
    firstName:{
        type: String, 
        require: true
    },
    lastName:{
        type: String, 
        require: true
    },
    birthDate:{
        type: Date, 
        require: false
    },
    phone:{
        type: String, 
        require: false
    },
    adress:{
        type: String, 
        require: false
    }
});

module.exports = mongoose.model("estudiante", estudianteSchema);