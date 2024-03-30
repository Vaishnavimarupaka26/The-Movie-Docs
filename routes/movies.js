const express = require('express');
const axios = require('axios');
const router = express.Router();


require('dotenv').config();

const API_KEY = process.env.TMDB_API_KEY;

router.get('/', async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`);
        res.render('index', {
            movies: response.data.results,
            currentPage: page,
            totalPages: response.data.total_pages
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching movies.');
    }
});

module.exports = router;