export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = '/discover/movie?sort_by=popularity.desc';

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if (!response.ok)
        throw new Error('Failed to fetch movies', response.statusText);

    const data = await response.json();
    return data.results;
}


// const url = 'https://api.themoviedb.org/3/account/22399049/lists?page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzQ5ZDM0ZjQ4YWE3NmU5ZDVkZTBhOGUwYmYyMzVhNiIsIm5iZiI6MTc2MDk2ODM5NC4zODksInN1YiI6IjY4ZjYzZWNhYmI3YmEyMjYzNGNkMGU1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jPjO4dM2i2_nnHe3oKJw6_TFCi7IQATLUu_zw19jhnM'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));