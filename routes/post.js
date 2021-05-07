const router = require('express').Router()
const protect = require('./verifyToken')
const mongoose = require('mongoose')


router.get('/', protect, (req, res) => {
  res.json({
    posts: {
      title: "my first post",
      des: "random data you should'nt access"
    }
  })
  res.send(req.User)

})
//this routes will be used for listing all invetory item
router.get('/invetory',protect,(req, res)=>{
  
})
//this routes will be used for adding new item
router.post('/invetory/add',protect,(req, res)=>{

})
//this routes will be used for deleting a single item
//this routes will be used for deleteing a single item
//using multer i will add image for each item we have
router.delete('/invetory/:id',protect,(req, res)={

})

module.exports = router;
