const Router = require('express')
const router = new Router()
const greetController = require('../controllers/GreetingController')


router.get('/',  greetController.getGreeting)
router.post('/',  greetController.setGreeting)



module.exports = router
