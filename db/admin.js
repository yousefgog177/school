
const mongoose = require("mongoose")

const admins = new mongoose.Schema({

            "teachers": { type: Array, default: [] },

            "account": { type: Object },

            "students": { type: Array, default: [] },

});

module.exports = mongoose.model('Admins', admins, 'admins')
