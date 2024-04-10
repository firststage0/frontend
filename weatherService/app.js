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
    setCityRequest();
});

var selectedCity;
var selectedElement = document.getElementById('cities');

const apiKey = "57f7df1e3063971e738d4e9c5af1bb15";


function setCityRequest() {
    selectedCity = selectedElement.value;
    executeResponse(selectedCity);
    console.log(selectedCity);
    return;
}

function executeResponse(cityForRequest) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityForRequest}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(res => {
            if (!res.ok) {
                throw new Error("Response is'nt ok");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setCardProps(data)
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}

function setCardProps(data) {
    const weatherDiv = document.getElementById("card-title").innerHTML = selectedCity + "  ";
    const tempOnCard = document.getElementById("temperature").innerHTML = "Температура " + data.main.temp + " \u2103";
    const feelsLike = document.getElementById("feels-like").innerHTML = "Ощущается как " + data.main.feels_like + " \u2103";
    const windSpeed = document.getElementById("wind-speed").innerHTML = "Скорость ветра " + data.wind.speed + " м/с";
}

