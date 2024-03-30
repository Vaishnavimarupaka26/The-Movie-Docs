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

// Function to fetch movies by genre
async function fetchMoviesByGenre(genreId, page = 1) {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`);
    return response.data;
}

// Function to fetch movie details
async function fetchMovieDetails(movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
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

// Route for genre-based filtering
app.get('/genre/:genreId', async (req, res) => {
    const { genreId } = req.params;
    const page = parseInt(req.query.page) || 1;
    try {
        const data = await fetchMoviesByGenre(genreId, page);
        res.render('category', {
            items: data.results,
            currentPage: page,
            totalPages: data.total_pages,
            category: 'Genre'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to fetch movies by genre.');
    }
});

// Route for movie details
app.get('/movie/:movieId', async (req, res) => {
    const { movieId } = req.params;
    try {
        const movieDetails = await fetchMovieDetails(movieId);
        res.render('movie-details', { movie: movieDetails });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching movie details.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));