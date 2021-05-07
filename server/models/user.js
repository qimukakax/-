/*
 * @Author: your name
 * @Date: 2021-04-26 16:38:06
 * @LastEditTime: 2021-04-26 18:06:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aiForm/server/model/user.js
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 声明一个数据集 对象
var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    age: Number,
    address: String,
    createAt: {
        type: Date,
        default : Date.now()
    }
});

module.exports = mongoose.model('users', userSchema);
