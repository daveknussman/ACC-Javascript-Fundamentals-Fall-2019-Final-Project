(() => {
    // private
    // const myPrivateVar = 'hidden';

    const displayMovieResults = () => {
  
        leftObject.innerText = 'Status=' + movieSearchResults.status + ' Number of Results ' + movieSearchResults.data.total_results;

        let nameArray = [] ; 
        (tvSearchResults.data.results).forEach((val)=>{nameArray.push(val.original_name)}) ;
          console.log(nameArray);
        }
        
        // Public
      window.displayMovieResults = displayMovieResults;
    })(); 