const express = require("express")
const router = express.Router()
const Categories = require('./Categories')
const { getAllCats } = require('./controller')
router.get('/api/category', getAllCats
)

module.exports = router