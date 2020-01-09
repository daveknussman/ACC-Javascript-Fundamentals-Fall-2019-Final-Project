// General 
const api_key='70051f2bccb99e60fb6d5cb964f8d1c6';
let movieSearchResults = {};
let tvSearchResults = {};
const initResultItems = () => { 
    leftObject.innerText = ' ';
    rightObject.innerText = ' ';
    time1.innerText = ' ';
    time2.innerText = ' ';
    image1.src = ' ';
    image1.classList.add('displaynone');
    image2.src = ' ';
    image2.classList.add('displaynone');
    dropdown1.innerText = ' ';
    dropdown1.value = ' ';
    dropdown1.classList.add('displaynone');
    dropdown2.innerText = ' ';
    dropdown2.value = ' ';
    dropdown2.classList.add('displaynone');
};

// Search
const txtSearch = document.querySelector("#searchWord");
txtSearch.value = ' '; // Blank this out in case of page refresh
const btnSearch = document.querySelector("#searchButton");
btnSearch.addEventListener("click",() => search(txtSearch.value));
document.addEventListener("keyup",(e) => {
    if (e.keyCode === 13) btnSearch.click();
});

// Initially hide result texts, dropdowns, item texts, and images (in case of page refresh)
initResultItems();

async function search(searchValue) {
    try {
        initResultItems();
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