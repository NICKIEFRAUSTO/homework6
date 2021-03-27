var requestUrl = 'https://api.openweathermap.org';
var fetchButton = document.getElementById('fetch-button');


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    Storage.local()
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].url);
      
    }
  });
