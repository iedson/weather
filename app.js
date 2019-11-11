$(document).ready(function() {
  var city = 'chicago'
  var apiKey = "76ceaebf5a55c4ff1b10640296da45b9"
  var weatherURL = "api.openweathermap.org/data/2.5/weather?q=London";
    $.ajax({
      url: weatherURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
  
    });



  // Call api with user input

});

/* db */
/* raw weather object from api */



/* variables */
/* parsed weather object */

/* utility functions */
/* get raw data */
/* parse raw data */
/* render parsed data */

/* event functions */
  /* search button click */
  /* have city name  */
  /* send city name to a openweather api */
  /* set the weather info to the object returned (see raw data) */

/* init */
  /* check local storage for history of cities and render */
