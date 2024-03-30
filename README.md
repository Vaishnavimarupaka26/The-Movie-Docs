A simple multiple-page web app that displays information pulled from The Movie Data Base API.

# The Movie Docs

The Movie Docs is a dynamic web application that allows users to explore popular movies, search for movies by title, and filter movies by genre. Built with Express.js and EJS, this application serves as a gateway to the vast world of movies, utilizing The Movie Database (TMDB) API for up-to-date movie information.


## Features

- **Browse Popular Movies:** Discover the most popular movies right now.
- **Search Functionality:** Look up movies by title to find exactly what you're searching for.
- **Filter by Genre:** Narrow down your search by genre to find movies that fit your mood(Horror, Comedy, Action).
- **Responsive Design:** Responsive web app compatible on both desktop and mobile devices.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Ensure you have Node.js and npm installed on your machine. To verify, run:

```bash
node --version
npm --version

### Installation

1. Clone the repo (Commands In terminal)
    git clone https://github.com/yourusername/multi-page-web-app.git

2. Install NPM packages
    npm install

## API Key Configuration

This application uses The Movie Database (TMDB) API to fetch movie information. To use the application, you will need to obtain your own API key from TMDB.

### Obtaining a TMDB API Key

1. Go to [The Movie Database (TMDB)](https://www.themoviedb.org/) and sign up for an account if you haven't already.
2. After logging in, go to your account settings, and under the "API" section, click on "Request an API key."
3. Follow the instructions to obtain your API key.

### Setting Up Your API Key

Once you have your API key, you need to set it up with the application:

1. Create a file named `.env` in the root directory of the project.
2. Inside the `.env` file, add the following line, replacing `YOUR_API_KEY` with the API key you obtained from TMDB:
TMDB_API_KEY=YOUR_API_KEY


3. Start the application
    npm start

4. Visit 'http://localhost:3000' in your browser to start exploring movies.

Use the navigation bar to browse popular movies, search for specific titles, or filter by genre. Click on any movie card for more detailed information about the movie.


Running Tests
To run tests, execute the following command:
npm test

Built With
Express.js - The web framework used
EJS - Templating language
Axios - Promise based HTTP client
Jest - Testing Framework