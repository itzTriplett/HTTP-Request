// function getWeather(){
//
//   var zipCode = $('#zip').val();
//   var apiCall = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&appid=507f966dcde5f544014f5b4b2ab6fd43&units=imperial';
// apiCall = 'http://api.openweathermap.org/data/2.5/weather?zip=90305,us&appid=507f966dcde5f544014f5b4b2ab6fd43&units=imperial';
// function weatherCallback(weatherData){
//
//   var zipCode = weatherData.name;
//   var country = weatherData.sys.country;
//   var temp = weatherData.weather [0].temp;
//   alert(temp);
//     $('.weatherResponse').append("The weather in" + zipCode + " " + country + " is currently " + temp);
//
// }
//
//   // $.getJSON(apiCall, weatherCallback);
//
//  $.getJSON(apiCall, function(data) {
//    alert(data);
//  });
// }
/*
$(document).ready(function(){

    $('#send').click(function(){
      // alert("testing");
      var zipCode = $('#zip').val();
      // var apiCall = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&units=imperial&appid=507f966dcde5f544014f5b4b2ab6fd43';
      var apiCall = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&units=imperial&appid=507f966dcde5f544014f5b4b2ab6fd43';

           // $.getJSON(apiCall, {}, function(data) {
           //   console.log(JSON.stringify(data));
           // });

      // apiCall = 'api.openweathermap.org/data/2.5/weather?id=2172797&appid=507f966dcde5f544014f5b4b2ab6fd43';
      function weatherCallback(weatherData){
          var zipCode = weatherData.name;
          var country = weatherData.sys.country;
          var temp = weatherData.main.temp;
          $('.weatherResponse').append("The weather in " + zipCode + " " + country + " is currently " + temp );
      }

      $.getJSON(apiCall, weatherCallback);

   });

});

        // var zip = $("#zip").val();
        // var url = "http://api.openweathermap.org/data/2.5/weather?zip=90305,us&appid=507f966dcde5f544014f5b4b2ab6fd43&units=imperial";
        //
        //
        // if(zip != ''){
        //   $.getJSON(
        //
        //   url:"http://api.openweathermap.org/data/2.5/weather?zip=90305,us&appid=507f966dcde5f544014f5b4b2ab6fd43&units=imperial"
        //     function(result){
        //         console.log(data)
        //     }
        //
        //   )
        // }
        // else { $("#error").html ('Field cannot be empty')}

*/

var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?zip='
//var zip ='90305'
var apiKey = 'us&appid=507f966dcde5f544014f5b4b2ab6fd43'
var units = '&units=imperial'
var input;
//var apiCall = 'http://api.openweathermap.org/data/2.5/weather?zip=' + input.value() + ',us&appid=507f966dcde5f544014f5b4b2ab6fd43&units=imperial';
function setup(){

var button = select('#send');
button.mousePressed(weatherAsk);
input = select('#zip');
//alert(url);
}

function weatherAsk() {
  var apiCall = api + input.value() + apiKey + units;

  $.getJSON(apiCall, gotData,);
}

function gotData(data){
  var zipCode = weatherData.name;
  var country = weatherData.sys.country;
  var temp = weatherData.main.temp;
  $('.weatherResponse').append("The weather in " + zipCode + " " + country + " is currently " + temp );
}
/*
 function weatherCallback(weatherData){
    var zipCode = weatherData.name;
    var country = weatherData.sys.country;
    var temp = weatherData.main.temp;
    $('.weatherResponse').append("The weather in " + zipCode + " " + country + " is currently " + temp );
}

//$.getJSON(apiCall, weatherCallback);



/*
 window.onload = function(){
   document.getElementById('send').onclick = function(e){
     var str3 = document.getElementById("fname").value + ' ' +
     document.getElementById("lname").value + ' ' +
     document.getElementById("email").value + ' ' +
     document.getElementById("gender").value + ' ' +
     document.getElementById("subject").value + ' '
      alert(str3);

       document.getElementById("fname").value)
       (document.getElementById.value)("lname").value;
       alert(document.getElementById("email").value);
       alert(document.getElementById("gender").value);
       alert(document.getElementById("subject").value);
       return false;
       */
//   }
/*
 var weather;
   var api = 'http://api.openweathermap.org/data/2.5/weather?zip=90305';
   var apiKey = 'us&appid=507f966dcde5f544014f5b4b2ab6fd43'
  function setup(){

    var button = select('#send');
    button.mousePressed(weatherAsk);
   }

   function weatherAsk(){
     var url = api + apiKey;
     loadJSON(url, gotData);

   }

   function gotData (data) {
     weather = data
   }

 $.getJSON(apiURL, function(data){
         $("#weather-info").html(data.name + "<br>" + ( Math.round( parseFloat(data.main.temp) - 273.15 ) * ( 9 / 5 ) + 32 ) + "F")
         console.log(data)
         console.log( Math.round( parseFloat(data.main.temp) - 273.15 ) * ( 9 / 5 ) + 32 )
     });
 }
 */
//document.getElementById("fname").value + document.getElementById("email").value + document.getElementById("gender").value


//var str3 = document.getElementById("fname").value + document.getElementById("email").value + document.getElementById("gender").value
