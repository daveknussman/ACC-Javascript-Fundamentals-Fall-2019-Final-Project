////////// start code here ////////////////////////////////////////

(() => {
    
  const displayTVResults = () => 
  {   rightObject.innerText = tvSearchResults.data.total_results + ' TV shows found that matches search criteria'  ;
      if(tvSearchResults.data.total_results > 0)
      {  
      dropdown2.classList.remove('displaynone') ; 
      let displayHEADING = document.createElement("OPTION") ;
      displayHEADING.innerText = "Select a TV show" ;
      displayHEADING.value = "" ;
      document.querySelector("#dropdown2").appendChild(displayHEADING) ;   
      }    
      (tvSearchResults.data.results).forEach((val)=>
      {
        let displayTITLE = document.createElement("OPTION") ;
        displayTITLE.innerText = (JSON.stringify(val.original_name)) ;
        displayTITLE.value = (JSON.stringify(val.original_name)) ;
        document.querySelector("#dropdown2").appendChild(displayTITLE) ;
      }) ;

  }
      
      // Public
      window.displayTVResults = displayTVResults;


//////////////// drop down has been filled /////////////////////////
/////////// code for selections from drop down /////////////////


////////////////  images -  start here /////////////////
///// gets add-on to url passed in
///// adjusts html src for image displayed
const getPICTURE = (pathAddendum) => 
{ ////////// getPICTURE  //////////////////
const baseURL = "https://image.tmdb.org/t/p/w500" ;
let tvPIC = document.querySelector("#image2") ;

if(pathAddendum === null)
{ tvPIC.src = "https://eatatpinkys.com/wp-content/uploads/2019/03/no-image-found.jpg" ;}
else
 {tvPIC.src = baseURL + pathAddendum ;} 
 tvPIC.classList.remove('displaynone') ; 
};  ////////end getPICTURE ////////////////
/////////// images - end here  //////////////////////////


////// receive api data for single tv show
/////  implement 'date' from data, pass data to image handler
const apply2html = (response) =>
{
let myTV = response.results[0] ;
   let timePERIOD = document.querySelector("#time2");
   let displayDATE = JSON.stringify(myTV.first_air_date);
   timePERIOD.innerText = "First aired: " + displayDATE;
 
   let getPICT = myTV.poster_path ;
   getPICTURE( getPICT );
};



//// API call for single tv selection data //////
///receive call string parameter from get_tv 
///pass response to be implemented in apply2html(response)
const api_call_func = (call_string)=>
{   
///////your API call goes here  - use call_string/////////////////////////////
/////// output 'response' in function call apply2html(response);  ////////// 
fetch(call_string , { method: 'GET'} )  
.then(response => response.json())
.then(response => 
 {  apply2html(response) ;   })
.catch(error =>
 {const badTIME = '<div class="text-danger">Sorry, ' +
          'but an unexpected error occurred in tv show search. '+error+'</div>';
  document.querySelector("#time2").insertAdjacentHTML('beforeend', badTIME);
 });  
////// end API call ////////////////////////////////////////////////////////// 
} ;
//// end API call function ////////////////////////

////// "tv" param passed from event listener, 
////// build api call string & pass to api call function
const get_tv = (searchValue) => 
{ ////////// get_tv  //////////////////
const api_url = 'https://api.themoviedb.org/3/search/tv?' ;
const api_key='70051f2bccb99e60fb6d5cb964f8d1c6';
const keyParm = 'api_key=' + api_key;
const queryParm = '&query=' + searchValue;
const api_call_string = api_url + keyParm + queryParm ;

api_call_func(api_call_string) ;
};  ////////end get_tv ////////////////



const selectTV = document.querySelector("#dropdown2") ;
selectTV.addEventListener("click", ()=>
{ if(selectTV.value) { get_tv(selectTV.value) ; }  
} ) ;  


//////////////////////////////////////////////////////


  })(); 

///////   end code here ///////////////////////////////////////////    