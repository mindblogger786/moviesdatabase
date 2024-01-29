document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies-container');

    // Fetch movie data from the OMDB API
    fetch('https://www.omdbapi.com/?s=batman&apikey=8bb54f1')
        .then(response => response.json())
        .then(data => {
            if (data.Search) {
                data.Search.forEach(movie => {
                    const movieCard = createMovieCard(movie);
                    moviesContainer.appendChild(movieCard);
                });
            } else {
                moviesContainer.innerHTML = '<p>No movies found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            moviesContainer.innerHTML = '<p>Error fetching data</p>';
        });

    // Function to create a movie card
    function createMovieCard(movie) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const poster = document.createElement('img');
        poster.classList.add('movie-poster');
        poster.src = movie.Poster;
        poster.alt = movie.Title;

        const details = document.createElement('div');
        details.classList.add('movie-details');
        details.innerHTML = `
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
            <p>Type: ${movie.Type}</p>
        `;

        movieCard.appendChild(poster);
        movieCard.appendChild(details);

        return movieCard;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const popularContainer = document.getElementById('popular-container');

    // Fetch movie data from the OMDB API
    fetch('https://www.omdbapi.com/?s=batman&apikey=8bb54f1')
        .then(response => response.json())
        .then(data => {
            if (data.Search) {
                data.Search.forEach(movie => {
                    const popularCard = createMovieCard(movie);
                    popularContainer.appendChild(popularCard);
                });
            } else {
                popularContainer.innerHTML = '<p>No movies found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            popularContainer.innerHTML = '<p>Error fetching data</p>';
        });

    // Function to create a movie card
    function createMovieCard(movie) {
        const popularCard = document.createElement('div');
        popularCard.classList.add('popular-card');

        const poster = document.createElement('img');
        poster.classList.add('popular-poster');
        poster.src = movie.Poster;
        poster.alt = movie.Title;

        const details = document.createElement('div');
        details.classList.add('popular-details');
        details.innerHTML = `
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
            <p>Type: ${movie.Type}</p>
        `;

        popularCard.appendChild(poster);
        popularCard.appendChild(details);

        return popularCard;
    }
});
