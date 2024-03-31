const request = new XMLHttpRequest();
request.open("GET", "/cities.json");
request.responseType = "json";
request.send();
var citiesJson;
request.onload = () => {
    citiesJson = request.response;
    return citiesJson;
}

console.log(citiesJson);
const apiKey = "57f7df1e3063971e738d4e9c5af1bb15";
const cityForRequest = "Saint Petersburg, RU";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityForRequest+"&appid="+apiKey+"&units=metric";
const weatherDiv = document.getElementById("forWeather");
fetch(apiURL)
    .then(res => {
        if(!res.ok){
            throw new Error("Response is'nt ok");
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        forWeather.innerHTML = "Current weather in " + cityForRequest + " is: " + data.main.temp;
    })
    .catch(error => {
        console.error("Error: ", error);
    })
