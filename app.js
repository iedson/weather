$(document).ready(function() {

  //Start with Chicago 
  let city = 'chicago';
  const apiKey = '76ceaebf5a55c4ff1b10640296da45b9';
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    $.ajax({
      url: weatherURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      $('#city').html(response.name);
      let owIcon = response.weather[0].icon;
      $('#weathImg').attr('src',`http://openweathermap.org/img/wn/${owIcon}.png`);
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

  //5 Day Forecast
  let forecastCity = 'chicago,us';
  let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${forecastCity}&units=imperial&appid=${apiKey}`;

  $.ajax({
    url: forecastURL,
    method: 'GET'
  }).then(function(response){
    console.log(response);

    $('#dayone').html(response.list[0].main.temp + '&deg F');
    $('#daytwo').html(response.list[1].main.temp + '&deg F');
    $('#daythree').html(response.list[2].main.temp + '&deg F');
    $('#dayfour').html(response.list[3].main.temp + '&deg F');
    $('#dayfive').html(response.list[4].main.temp + '&deg F');


  });

  // Call api with user input - search (see Day Planner for local storage js)
    //user presses enter
  $('#userLoc').keypress(function(e) {
    if (e.which == 13) {
      $('#userSubmit').click(); 
    }
  });

  // make a call when the user searches (click search button)
  $('#userSubmit').on('click', function() {
    // save user's search value
    let userSearch = $('#userLoc').val();
    localStorage.setItem(userSearch);

    makeCall(userSearch);
  });



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
