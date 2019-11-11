$(document).ready(function() {
  let city = 'chicago'
  const apiKey = '76ceaebf5a55c4ff1b10640296da45b9';
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    $.ajax({
      url: weatherURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      $('#city').html(response.name);
      $('#temp').html('Current Temperature: ' + response.main.temp + '&deg F');
      $('#humidity').html('Humidity: ' + response.main.humidity + '%');
      $('#windSpeed').html('Wind: ' + response.wind.speed + 'MPH');

  
    });

  //Current Time - Moment.js
  let update = function() {
    document.getElementById('date')
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
  }
  setInterval(update, 1000);

  //Current City - Chicago Initially changes with user input



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
