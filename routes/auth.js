const router = require('express').Router()
const User = require('../models/Invetory');
const jwt = require('jsonwebtoken')

router.post('/login', async(req, res) => {
    if(req.body.username == process.env.USERNAME && req.body.password==process.env.PASSWORD){
        const token = jwt.sign({
            _id:1
        },process.env.TOKEN_SECRET)
        res.json({token:token})
    }
    else{
        return res.status(400).send("Wrong Email or Password")
    }
    //check email if exits
    // const findEmail = await User.findOne({
    //     email: req.body.email
    // });
    // if (!findEmail) return res.status(400).send('Email or password is wrong');
    // //check if password is correct
    // const userfind = await bcrypt.compare(req.body.password, findEmail.password);
    // if (!userfind) return res.status(400).send("password is invalid")
    // const token = jwt.sign({
    //         _id: findEmail._id
    //     }, process.env.TOKEN_SECRET)
    //     //res.header('auth-token', token).send({ token: token })
    // res.json({ token: token })

})

module.exports = router