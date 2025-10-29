const express = require('express')
const router = express.Router()
const axios = require('axios')
const {paginationResults, buildJokeArr} = require('../../helpers/pagination')
const PORT = process.env.PORT || 3001

// http://localhost:PORT/jokes
router.get('/', (req,res) => {
    const url = 'https://api.sampleapis.com/jokes/goodJokes'

    const pageData = paginationResults(req)

    let jokesArr = []

    axios.get(url)
    .then(resp => {

        const jokeArrData = buildJokeArr(resp.data, jokesArr, pageData.startIdx, pageData.endIdx, pageData.page)
        res.render('pages/allJokes', {
            title: 'All Jokes',
            name:'All Jokes',
            data: jokeArrData.arr,
            prev: jokeArrData.prev,
            next: jokeArrData.next
    })
        
    })

})

// Joke type
// localhost:3001/jokes/type/:type
router.get('/type/:type', (req, res) => {
    const type = req.params.type
    const url =`https://api.sampleapis.com/jokes/goodJokes`
    const pageData = paginationResults(req)
    // We will filter through resp.data and store in typeArr
    let typeArr = []
    let jokesArr = []

    axios.get(url)
    .then(resp => typeArr = resp.data.filter(item => item.type == type))
    .then(typeArr => {
        const jokeArrData = buildJokeArr(typeArr, jokesArr, pageData.startIdx, pageData.endIdx, pageData.page)

        res.render('pages/allJokes', {
            title: type,
            name: `${type} jokes`,
            data: jokeArrData.arr,
            prev: jokeArrData.prev,
            next: jokeArrData.next

        })
    })

})



module.exports = router