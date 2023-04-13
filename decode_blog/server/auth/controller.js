const User = require("./User")
const bcrypt = require("bcrypt")
const signUp = async (req, res) => {
    const findUser = await User.findOne({ email: req.body.email })
    if (req.body.email.length <= 0 ||
        req.body.fullname.length <= 0 ||
        req.body.password.length <= 0 ||
        req.body.repassword.length <= 0) {
        res.redirect("?error-1")
    } else if (req.body.password !== req.body.repassword) {
        res.redirect("?error-2")
    } else if (findUser) {
        console.log(findUser)
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, function (err, hash) {

            new User({
                email: req.body.email,
                fullname: req.body.fullname,
                password: hash,
                repassword: hash
            }).save()
        });
    })

    res.redirect("/login")
}

module.exports = { signUp }