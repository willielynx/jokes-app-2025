const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 3001

// http://localhost:PORT/jokes
router.get('/', (req,res) => {
    const url = 'https://api.sampleapis.com/jokes/goodJokes'
    axios.get(url).then(resp => {
        res.render('pages/allJokes', {
            title: 'All Jokes',
            name: 'All Jokes',
            data: resp.data
        })
    })
})



module.exports = router