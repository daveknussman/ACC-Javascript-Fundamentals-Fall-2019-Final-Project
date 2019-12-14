// General 
const api_key='70051f2bccb99e60fb6d5cb964f8d1c6';
let movieSearchResults = {};
let tvSearchResults = {};

// Search
const btnSearch = document.querySelector("#searchButton");
const txtSearch = document.querySelector("#searchWord");
btnSearch.addEventListener("click",() => search(txtSearch.value));

async function search(searchValue) {
    try {
        const rootMovieSearch = 'https://api.themoviedb.org/3/search/movie?';
        const rootTVSearch = 'https://api.themoviedb.org/3/search/tv?';
        const keyParm = 'api_key=' + api_key;
        const queryParm = '&query=' + searchValue;
        movieSearchResults = await axios(rootMovieSearch + keyParm + queryParm);
        tvSearchResults = await axios(rootTVSearch + keyParm + queryParm);
        displayMovieResults();
        displayTVResults();
    } catch (err) {
       console.error('Error:', err);
    }
};

// Display Search Results
const displayMovieResults = () => {
    console.log(movieSearchResults);
};

const displayTVResults = () => {
    console.log(tvSearchResults);
};