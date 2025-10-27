const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3001

// http://localhost:PORT/jokes
router.get('/', (req,res) => {
    res.send('This works')
})



module.exports = router