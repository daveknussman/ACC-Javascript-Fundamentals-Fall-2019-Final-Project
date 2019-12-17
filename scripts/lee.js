(() => {
    // private
    // const myPrivateVar = 'hidden';
    
    const displayTVResults = () => {
        console.log(tvSearchResults);
        rightObject.innerText = 'Status=' + tvSearchResults.status + ' Number of Results ' + tvSearchResults.data.total_results;
    };
    
    // Public
      window.displayTVResults = displayTVResults;
    })(); 