const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//REGISTER

router.post("/register", async (req, res)=>{

    try {

        //make password hashed with bcyrpt
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        //create new user with a hashed password
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        //save new user to database
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error);
    }

 
});

//LOGIN

router.post("/login", async (req,res)=>{

    try {
        //find the user from db
        const user = await User.findOne({email: req.body.email});

        if(!user){
            console.log("wrong email");;
        }
        
        //compare the passwords
        const validatePass = await bcrypt.compare(req.body.password, user.password);

        if(!validatePass){
            console.log("wrong password");
        }
        else{
            const {password, ...others} = user._doc;
            res.status(200).json(others);
            console.log("successful login");
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;