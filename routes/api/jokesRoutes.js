const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 3001

// http://localhost:PORT/jokes
router.get('/', (req,res) => {
    const url = 'https://api.sampleapis.com/jokes/goodJokes'
    // **pagination
    const query = req.query ? req.query : {}

    // get page and limit
    let page = parseInt(query.page) || 1
    let limit = parseInt(query.limit) || 12

    console.log(`page:${page}, limit:${limit}`)

    const startIdx = (page - 1) * limit
    const endIdx = page * limit
    let jokesArr = []

    axios.get(url).then(resp => {
        for (let i = startIdx; i < endIdx; i++) {
            jokesArr.push(resp.data[i])
        }

        const prev = page > 1 ? page - 1 : null
        const next = endIdx >= resp.data.length ? null : page + 1

        res.render('pages/allJokes', {
            title: 'All Jokes',
            name:'All Jokes',
            data: jokesArr,
            prev: prev,
            next: next 
    })
        
    })

})

// Joke type
// localhost:3001/jokes/type/:type
router.get('/type/:type', (req, res) => {
    const type = req.params.type
    const url =`https://api.sampleapis.com/jokes/goodJokes`

    // We will filter through resp.data and store in typeArr
    let typeArr = []

    axios.get(url).then(resp => typeArr = resp.data.filter(item => item.type == type))
    .then(typeArr => {
        res.render('pages/allJokes', {
            title: type,
            name: `${type} jokes`,
            data: typeArr

        })
    })

})



module.exports = router