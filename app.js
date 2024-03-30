const axios = require('axios');
const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', moviesRouter);

const API_KEY = process.env.TMDB_API_KEY;

// Function to fetch popular movies
async function fetchPopularMovies(page = 1) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`);
    return response.data;
}


// Homepage route showing popular movies
app.get('/', async (req, res) => {
    let page = parseInt(req.query.page) || 1;
    page = Math.max(1, Math.min(page, 500));

    try {
        const data = await fetchPopularMovies(page);
        res.render('index', {
            movies: data.results,
            currentPage: page,
            totalPages: Math.min(data.total_pages, 500)
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to fetch movies.');
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));