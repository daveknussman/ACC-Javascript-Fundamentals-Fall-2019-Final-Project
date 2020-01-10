////////// start code here ////////////////////////////////////////

(() => {
    
    const displayMovieResults = () => 
    {   leftObject.innerText = movieSearchResults.data.total_results + ' Movies found that matches search criteria' ;
        if(movieSearchResults.data.total_results > 0)
        {
        dropdown1.classList.remove('displaynone') ; 
        let displayHEADING = document.createElement("OPTION") ;
        displayHEADING.innerText = "Select a Movie" ;
        displayHEADING.value = "" ;
        document.querySelector("#dropdown1").appendChild(displayHEADING) ;  
        }   

        (movieSearchResults.data.results).forEach((val)=>
        { 
          let displayTITLE = document.createElement("OPTION") ;
          displayTITLE.innerText = (JSON.stringify(val.original_title)) ;
          displayTITLE.value = (JSON.stringify(val.original_title)) ;
          document.querySelector("#dropdown1").appendChild(displayTITLE) ;
        }) ;

    }
        
        // Public
      window.displayMovieResults = displayMovieResults;


//////////////// drop down has been filled /////////////////////////
/////////// code for selections from drop down /////////////////


////////////////  images -  start here /////////////////
///// gets add-on to url passed in
///// adjusts html src for image displayed
const getPICTURE = (pathAddendum) => 
{ ////////// getPICTURE  //////////////////
 const baseURL = "https://image.tmdb.org/t/p/w500" ;
 let moviePIC = document.querySelector("#image1") ;
 
 if(pathAddendum === null)
{ moviePIC.src = "https://eatatpinkys.com/wp-content/uploads/2019/03/no-image-found.jpg" ;}
 else
 {moviePIC.src = baseURL + pathAddendum ; }
 moviePIC.classList.remove('displaynone') ; 
};  ////////end getPICTURE ////////////////
/////////// images - end here  //////////////////////////


////// receive api data for single movie
/////  implement 'date' from data, pass data to image handler
const apply2html = (response) =>
{
let myMOVIE = response.results[0] ;
     let timePERIOD = document.querySelector("#time1");
     let displayDATE = JSON.stringify(myMOVIE.release_date);
     timePERIOD.innerText = "Released in theaters: " + displayDATE;
   
     let getPICT = myMOVIE.poster_path ;
     getPICTURE( getPICT );
};



//// API call for single movie selection data //////
///receive call string parameter from get_movie 
///pass response to be implemented in apply2html(response)
const api_call_func = (call_string)=>
{
  fetch(call_string , { method: 'GET'} )  
  .then(response => response.json())
  .then(response => 
   {  apply2html(response) ;   })
  .catch(error =>
   {const badTIME = '<div class="text-danger">Sorry, ' +
            'but an unexpected error occurred in movie search. '+error+'</div>';
    document.querySelector("#time1").insertAdjacentHTML('beforeend', badTIME);
   });
} ;
//// end API call function ////////////////////////

////// "movie" param passed from event listener, 
////// build api call string & pass to api call function
const get_movie = (searchValue) => 
{ ////////// get_movie  //////////////////
  const api_url = 'https://api.themoviedb.org/3/search/movie?' ;
  const api_key='70051f2bccb99e60fb6d5cb964f8d1c6';
  const keyParm = 'api_key=' + api_key;
  const queryParm = '&query=' + searchValue;
  const api_call_string = api_url + keyParm + queryParm ;

  api_call_func(api_call_string) ;
};  ////////end get_movie ////////////////



const selectMOVIE = document.querySelector("#dropdown1") ;
selectMOVIE.addEventListener("change", ()=>
{ if(selectMOVIE.value) { get_movie(selectMOVIE.value) ; }  
} ) ;  


//////////////////////////////////////////////////////


    })(); 

///////   end code here ///////////////////////////////////////////    