const express = require('express');
const router =express.Router();
const Post = require('../model/Post')

//To find all Post data from DB
router.get('/',async (req,res) => {
    try{
        const posts= await Post.find();
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
});

router.get('/specific', (req,res) => {
    res.send("we are on specific posts")
});

//post method
router.post('/', async (req,res) => {
    const post = new Post({
        title:req.body.title,
        des:req.body.des
    });
     try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
});

//Access a specific post 

router.get('/:postId', async (req,res) => {
    try
    {const post =  await Post.findById(req.params.postId);
    res.json(post);
    } catch(err){
        res.json({message: err})
    }
});

// delete specific post 

router.delete('/:postId',async (req,res) => {
    try{
        const removedPost = await Post.remove(
            {_id: req.params.postId});
        res.json(removedPost);
       }catch(err){
        res.json({message:err});
       }
});


//update a post
router.patch('/:postId', async (req,res) => {
    try{
        const updPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title:req.body.title}}
        );
        res.json(updPost);
    }catch(err){
        res.json({message:err});
    }
});



router.post('/', (req,res) => {
    console.log(req.body);
})


module.exports= router;
