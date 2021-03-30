var requestUrl = 'https://api.openweathermap.org';
var fetchButton = document.getElementById('fetch-button');
var cityName = $('input[name="cityName"]').val();
let apiKey = "d466d46c54bd0adeec8e8694c4da4560"

// getApi(requestUrl);
fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&appid="+apiKey)

.then(response => 
    response.json())

.then(function(data){
    console.log(data);
})






//make form
//get form city input 

// I have a console log for a hard coded dallas api request



// I need to get a new city and store it in my city variable from my input in my HTML

// I can do this when the user presses submit

// and call my new api request for that searched city.



// get the lat long

// store lat long in variables for each city
// cityLat = city.lat
//cityLong = city.long



// fetchButton.addEventListener('click', getApi);

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     Storage.local()
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].url);
      
//     }
//   });