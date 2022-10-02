const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//Get back all the posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
})

//submits a Post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  })

  try {
    const savedPost = await post.save()

    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

//Gets a specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (error) {
    res.json({ message: error })
  }
})

//Delete a specific post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId })
    res.json(removedPost)
  } catch (error) {
    res.json({ message: error })
  }
})

//update a specific post

router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    )
    res.json(updatedPost)
  } catch (error) {
    res.json({ message: error })
  }
})
module.exports = router
