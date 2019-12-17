(() => {
    // private
    // const myPrivateVar = 'hidden';

    const displayMovieResults = () => {
        console.log(movieSearchResults);
        leftObject.innerText = 'Status=' + movieSearchResults.status + ' Number of Results ' + movieSearchResults.data.total_results;
        }
        
        // Public
      window.displayMovieResults = displayMovieResults;
    })(); 