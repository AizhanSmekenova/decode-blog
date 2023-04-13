const { urlencoded } = require("body-parser")
const express = require("express")
const app = express()
app.use(urlencoded())
require('./server/config/db')
app.use(require('./server/router'))
app.use(require('./server/Categories/router'))
app.use(require('./server/auth/router'))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))


const PORT = 8000
app.listen(PORT, () => {
    console.log(`server listening port ${PORT}`);
})