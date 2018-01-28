//Global variables to use
var url = "https://fcc-weather-api.glitch.me/api/current?";
var lat;
var long;
var buttonFahrText = "Change the temperature unit to Fahrreneinheit"
var buttonCelText = "Change the temperature unit to Celsius"
var tempUnit = "Celsius"
var temperature;

//function to work when website has loaded
$(document).ready(function(){
  //if else satement to get location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude =  position.coords.latitude;
      longitude = position.coords.longitude
      getWeather(latitude, longitude);
    });
  }
  else{
    console.log("The current location is not avalaible");
  }

  // /x/implement the Wetaher API request
  function getWeather(lat, long) {
    //build the website url
    lat = "lat="+lat;
    long ="lon="+long;
    url = url+lat+"&"+long;
    console.log(url);

    //make the API request
    $.getJSON(url, function(data){
      //variables to store important data of the API
      var actualweather = data.weather[0].main;
      console.log(actualweather);
      var iconwebsite = data.weather[0].icon;
      console.log(iconwebsite);
      var city = data.name;
      console.log(city);
      temperature = data.main.temp;
      console.log(temperature);
      setCity(city);
      setWeather(actualweather);
      setTemperature(temperature, tempUnit);
      setBackround(iconwebsite);
    });
  }

  //function to get the state of the button
  $("#tempUnitButton").click(function(){
    if (tempUnit == "Celsius") {
      tempUnit = "Fahrreneinheit";
      $("#tempUnitButton").text(buttonCelText);
      setTemperature(temperature, tempUnit);
    }
    else{
      tempUnit = "Celsius";
      $("#tempUnitButton").text(buttonFahrText);
      setTemperature(temperature, tempUnit);
    }



  });


});


//function to set the city where the weather belongs to
function setCity(city) {
  $("#city").html(city);
}

//function to set the actual weather
function setWeather(weather){
  $("#weather").html(weather);
}

//function to set the temperature
function setTemperature(temp) {
  // convert celsius in Fahrreneinheit
  if(tempUnit == "Celsius"){
    temp = temp+" degrees Celsius";
    $("#temperature").html(temp);
  }
  else{
    temp = temp * (9/5) + 32;
    temp = temp+" Fahrreneinheit";
    $("#temperature").text(temp);
  }
}


//function to set the backround image
function setBackround(img){
  $("#weatherImage").attr("src", img);
}
