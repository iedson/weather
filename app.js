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
    .innerHTML = moment().format('MMMM Do, YYYY');
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
    //temperatures
    $('#dayoneT').html(response.list[0].main.temp + '&deg F');
    $('#daytwoT').html(response.list[1].main.temp + '&deg F');
    $('#daythreeT').html(response.list[2].main.temp + '&deg F');
    $('#dayfourT').html(response.list[3].main.temp + '&deg F');
    $('#dayfiveT').html(response.list[4].main.temp + '&deg F');

    //humidity
    $('#dayoneH').html(response.list[0].main.humidity + '%');
    $('#daytwoH').html(response.list[1].main.humidity + '%');
    $('#daythreeH').html(response.list[2].main.humidity + '%');
    $('#dayfourH').html(response.list[3].main.humidity + '%');
    $('#dayfiveH').html(response.list[4].main.humidity + '%');
    
    


    //weather images

  });
//Update Forecast Days
  //Day One
  let doneD = function() {
    document.getElementById('dayoneD')
    .innerHTML = moment().format('MM/D/YY');
  }
  setInterval(doneD, 1000);
  //Day Two
  let dtwoD = function() {
    document.getElementById('daytwoD')
    .innerHTML = moment().add(1,'days').format('MM/D/YY');
  }
  setInterval(dtwoD, 1000);

  //Day Three
  let dthreeD = function() {
    document.getElementById('daythreeD')
    .innerHTML = moment().add(1,'days').format('MM/D/YY');
  }
  setInterval(dthreeD, 1000);
  //Day Four
  let dfourD = function() {
    document.getElementById('dayfourD')
    .innerHTML = moment().add(1,'days').format('MM/D/YY');
  }
  setInterval(dfourD, 1000);

  //Day Five
  let dfiveD = function() {
    document.getElementById('dayfiveD')
    .innerHTML = moment().add(1,'days').format('MM/D/YY');
  }
  setInterval(dfiveD, 1000);

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
