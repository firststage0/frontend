// const request = new XMLHttpRequest();
// request.open("GET", "/cities.json");
// request.responseType = "json";
// request.send();
// var citiesJson;
// request.onload = () => {
//     citiesJson = request.response;
//     return citiesJson;
// }
window.addEventListener('load', () => {
    executeResponse(selectedElement.value);
});
const apiKey = "57f7df1e3063971e738d4e9c5af1bb15";
var selectedElement = document.getElementById('cities');
// const citiesData = {
//     "Москва": "Moscow, RU",
//     "Санкт-петербург": "Saint Petersburg, RU",
//     "Воронеж": "Voronezh, RU",
//     "Самара": "Samara, RU"
// }

function setCityRequest() {
    const selectedCity = selectedElement.value;
    executeResponse(selectedCity);
    console.log(selectedCity);
    return;
}

function executeResponse(cityForRequest) {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityForRequest + "&appid=" + apiKey + "&units=metric";
    const weatherDiv = document.getElementById("forWeather");
    fetch(apiURL)
        .then(res => {
            if (!res.ok) {
                throw new Error("Response is'nt ok");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            weatherDiv.innerHTML = "Current temperature in " + cityForRequest + " is: " + data.main.temp;
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}