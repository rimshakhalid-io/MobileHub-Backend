//mongoose ki help se schema bnayn gy or yehi schema mongodb k collection se collect rhy ga or jo bhi operation perform krny hain isi schema k through krny hain
const { required } = require('joi');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    data: {
        type: Array, default: []
    }
})
const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel;

