// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model')

// all your routes here
router.get('/', async (req, res) => {
    try{
        const allCelebrities = await Celebrity.find()
        console.log(allCelebrities)
        res.render('celebrities/celebrities', { allCelebrities })
    }
    catch (error){
        console.log(error)
    }
})

//create new celeb
router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
})

//POST new celeb
router.post('/create', async (req, res) => {
    
    const createCeleb = req.body;

    try{
        await Celebrity.create(createCeleb)
        console.log(createCeleb)

        res.redirect('/celebrities')
    }
    catch {
        res.render('/celebrities/new-celebrity')
    }
})

module.exports = router