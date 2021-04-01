let cityArray=[];


let $searchFormEl = $('#searchForm')
let $searchButtonEl = $('#searchButton')
let inputEl = document.getElementById("city");
let recentSearchEL = document.getElementById("recentSearch");
let apiKey = "d466d46c54bd0adeec8e8694c4da4560"


function addNewCity(cityName) {
    cityArray.unshift(cityName);
    renderRecent()
    console.log(cityArray);
}



//add click event listener to the button and prevent the form from refreshing the page 
$searchButtonEl.on('click',function (event) {
    event.preventDefault()
    //use the value of the text input field
    let cityName = $('#city').val()
    inputEl.value="";
    addNewCity(cityName);
    
    //create variable values for the input of the api, name of the city and the api key 
    
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&appid="+apiKey)
    .then(response => 
        response.json())
        //return the latitude and longitude of the city name and store them in variables to use in the onecallApi
        .then(function(data){
            console.log(data)
            
            let cityLat =(data[0].lat);
            let cityLon =(data[0].lon);
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=imperial&exclude=minutely,hourly,alerts&appid=${apiKey}`)
            
            .then(response => 
                response.json())
                //append the data to the div 
                .then(function(data){
                    console.log(data);
                })
                
            })
})
//creating a list element of recent searches and appending them to the list.
function renderRecent() {
let liEl=document.createElement("li");
liEl.textContent=cityArray[0];
recentSearchEL.appendChild(liEl);

}

