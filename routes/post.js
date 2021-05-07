const router = require('express').Router()
const protect = require('./verifyToken')
router.get('/', protect, (req, res) => {
  res.json({
    posts: {
      title: "my first post",
      des: "random data you should'nt access"
    }
  })
  res.send(req.User)

})

module.exports = router;
