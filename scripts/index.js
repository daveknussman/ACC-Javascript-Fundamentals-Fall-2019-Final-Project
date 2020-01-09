// General 
const api_key='70051f2bccb99e60fb6d5cb964f8d1c6';
let movieSearchResults = {};
let tvSearchResults = {};

// Search
const txtSearch = document.querySelector("#searchWord");
txtSearch.value = ' '; // Blank this out in case of page refresh
const btnSearch = document.querySelector("#searchButton");
btnSearch.addEventListener("click",() => search(txtSearch.value));

// Initially hide result texts, dropdowns, item texts, and images (in case of page refresh)
//  call functions to do it

async function search(searchValue) {
    try {
        // New search so hide result texts, dropdowns, item texts, and images
        //  call same functions as above to hide result stuff 
        movieSearchResults = {};
        tvSearchResults = {};
        const rootMovieSearch = 'https://api.themoviedb.org/3/search/movie?';
        const rootTVSearch = 'https://api.themoviedb.org/3/search/tv?';
        const keyParm = 'api_key=' + api_key;
        const queryParm = '&query=' + searchValue;
        movieSearchResults = await axios.get(rootMovieSearch + keyParm + queryParm);
        tvSearchResults = await axios.get(rootTVSearch + keyParm + queryParm);
        displayMovieResults();
        displayTVResults();
    } catch (err) {
       console.error('Error:', err);
    }    
};


// Display Search Results
// const displayMovieResults = () => {
//     console.log(movieSearchResults);
//     leftObject.innerText = 'Status=' + movieSearchResults.status + ' Number of Results ' + movieSearchResults.data.total_results;
// };

// const displayTVResults = () => {
//     console.log(tvSearchResults);
//     rightObject.innerText = 'Status=' + tvSearchResults.status + ' Number of Results ' + tvSearchResults.data.total_results;
// };

// // With Webpack
// import config from "./config.json";
// console.log(config.API_KEY);

// Without Webpack
// (async () => {
//   const config = await fetch("config.json").then(response => response.json());
//   console.log(config.API_KEY);
// })();