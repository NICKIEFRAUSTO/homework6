var requestUrl = 'https://api.openweathermap.org';
var fetchButton = document.getElementById('fetch-button');



// getApi(requestUrl);
let city = "dallas"
let apiKey = "d466d46c54bd0adeec8e8694c4da4560"
fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey)
.then(response => response.json())
.then(function(data){
    console.log(data);
})

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