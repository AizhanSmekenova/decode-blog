const express = require("express")
const router = express.Router()
const { signUp } = require('./controller')
router.post('/api/user', signUp
)

module.exports = router