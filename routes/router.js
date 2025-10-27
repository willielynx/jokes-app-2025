const express = require('express')
const router = express.Router()

// Home Route http://localhost:PORT
router.get('/', (req, res) => {

    res.render('./pages/home', {
        title: 'Good Jokes',
        name: 'Good Jokes App'
    })
})

router.use('/jokes', require('./api/jokesRoutes'))




// error handling
router.use((req,res,next) => {
    res.status(404).render('pages/404', {
        title: '404 Error',
        name: '404 Error. This page does not exist'
    })
    
})

module.exports = router