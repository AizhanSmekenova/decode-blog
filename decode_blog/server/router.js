const express = require("express")
const router = express.Router();
const writeDataToCat = require('./Categories/seed')
const Categories = require("./Categories/Categories")
router.get("/", async (req, res) => {
    const allCats = await Categories.find()
    res.render("index", { categories: allCats })
})

router.get("/login", (req, res) => {
    res.render("login")
})
router.get("/register", (req, res) => {
    res.render("register")
})
router.get("/profile", (req, res) => {
    res.render("profile")
})
router.get("/edit", async (req, res) => {
    const allCats = await Categories.find()
    res.render("edit-blog", { categories: allCats })
})
router.get("/new", async (req, res) => {
    const allCats = await Categories.find()
    res.render("new-blog", { categories: allCats })
})
writeDataToCat()

module.exports = router