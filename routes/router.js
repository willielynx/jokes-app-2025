const express = require('express')
const router = express.Router()
const axios = require('axios')
const getJoke = require('../helpers/getJoke')

// Home Route http://localhost:PORT
router.get('/', (req, res) => {

    const url = 'https://api.sampleapis.com/jokes/goodJokes'


    axios.get(url).then(resp => {
        res.render('./pages/home', {
        title: 'Good Jokes',
        name: 'Good Jokes App',
        joke: getJoke(resp.data)
        })
    })
})

router.use('/jokes', require('./api/jokesRoutes'))




// error handling
router.use((req,res,next) => {
    res.status(404).render('pages/404', {
        title: '404 Error',
        name: '404 Error. Jokes on you! This page does not exist'
    })
    
})

module.exports = router