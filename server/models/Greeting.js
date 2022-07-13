const {model, Schema} = require('mongoose')


const Greeting = new Schema({
    greeting: {type: String, required: true},
})

module.exports = model('Greeting',Greeting)