const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//CREATE
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        console.log(error);
    } 
});

//UPDATE
router.put("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("successfully updated");
        }
        else{
            res.status(401).json("you can update only your post!");
        }
    } catch (error) {
        console.log(error);
    }
});

//DELETE
router.delete("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("successfully deleted.");
        }
        else{
            res.status(401).json("you can delete only your post!");
        }
    } catch (error) {
        console.log(error);
    }
});

//LIKE-DISLIKE
router.put("/:id/like", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("liked");
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("disliked");
        }
    } catch (error) {
        console.log(error);
    }
});

//GET POST
router.get("/:id", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
    }
});

//GET TIMELINE POSTS
router.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(currentUser.followings.map((friendId)=>{
            return Post.find({userId:friendId});
        }));
        res.json(userPosts.concat(...friendPosts));
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;