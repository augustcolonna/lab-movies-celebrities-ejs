// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

const Movie = require('../models/Movie.model')

// all your routes here
router.get('/', async (req, res) => {
    try{
        const allMovies = await Movie.find()
        console.log(allMovies)
        res.render('movies/movies')
    }
    catch (error) {
        console.log(error)
    }
});

//create new movie
router.get('/create', (req, res) => {
    res.render('movies/new-movie')
})

//POST new movie
router.post('/create', async (req, res) => {
    
    const createMovie = req.body;

    try{
        await Movie.create(createMovie)
        console.log(createMovie)

        res.redirect('/movies')
    }
    catch {
        res.render('/movies/new-movie')
    }
})

module.exports = router
