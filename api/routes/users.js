const router = require("express").Router();
const User = require("../models/User");
const bcyrpt = require("bcrypt");

//UPDATE USER
router.put("/:id", async (req,res)=>{
    
    try {
        //check if id that clients enter is the same id with user id
        if(req.body.userId === req.params.id){
            //if the user wants to update password then firstly hash it
            if(req.body.password){
                const salt = await bcyrpt.genSalt(10);
                req.body.password = await bcyrpt.hash(req.body.password, salt);
            }
            //find the user from db and update it
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                },
                {new:true}
                );
                res.status(200).json("successfully updated");
                console.log(updatedUser);
        }
        else{
            res.status(400).json("you can update only your account!")
        }
    } catch (error) {

    console.log(error);
    }
   
});

//DELETE USER
router.delete("/:id", async (req,res)=>{
    if(req.params.id === req.body.userId || req.body.isAdmin){
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user has been deleted");
        } catch (error) {
            console.log(error);
        }
    }
    else{
        res.status(401).json("you can delete only your account!");
    }
});

//GET USER
router.get("/:id", async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (error) {
        console.log(error);
    }
});

//FOLLOW USER
router.put("/:id/follow", async (req,res)=>{
    if(req.params.id !== req.body.userId){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.params.id}});
                res.status(200).json("user has been followed");
            }
            else{
                res.status(403).json("you already follow this user");
            }
        } catch (error) {
            console.log(error);
        }
    }
    else{
        res.status(403).json("you can't follow yourself!");
    }
});

//UNFOLLOW USER
router.put("/:id/unfollow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                res.status(200).json("user has been unfollowed");
            }
            else{
                res.status(403).json("you dont follow this user!");
            }
        } catch (error) {
            console.log(error);
        }
    }
    else{
        res.status(403).json("you can't unfollow yourself!");
    }

})



module.exports = router;