const Categories = require("./Categories")

const getAllCats = async (req, res) => {
    const data = await Categories.find()
    res.send({ data })
}

module.exports = { getAllCats }