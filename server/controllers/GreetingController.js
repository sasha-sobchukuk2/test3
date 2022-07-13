const Greeting = require('../models/Greeting')

class FileController {

    async getGreeting(req, res) {
        try {
            const greeting = await Greeting.findOne()
            return  res.json(greeting)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: 'can not get files'})
        }
    }
    async setGreeting(req, res) {
        try {
            const greeting = new Greeting({greeting:'hello'})
            await greeting.save()
            return  res.json(greeting)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: 'can not get files'})
        }
    }


}

module.exports = new FileController()