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

router.get('/search', async (req, res) => {
    const searchTerm = req.query.term;
    let page = parseInt(req.query.page) || 1;
    page = Math.max(1, Math.min(page, 500));

    if (!searchTerm) {
        res.redirect('/');
        return;
    }

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}&page=${page}`);
        const totalPages = Math.min(response.data.total_pages, 500);

        res.render('search-results', {
            searchResults: response.data.results,
            searchTerm,
            currentPage: page,
            totalPages: totalPages
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error performing search.');
    }
});


module.exports = router;