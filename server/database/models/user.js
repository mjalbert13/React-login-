const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    } ,
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

UserSchema.methods ={
    checkPassword: function(inputPassword){
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: function(plainTextPassword) {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

UserSchema.pre('save', function(next){
    if(!this.password){
        console.log('=====No Password provided=======')
        next();
    } else {
        console.log('models/user.js hashPassword in pre save')

        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;