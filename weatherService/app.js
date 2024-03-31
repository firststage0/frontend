const apiKey = "57f7df1e3063971e738d4e9c5af1bb15";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Voronezh&appid="+apiKey+"&units=metric";
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
        forWeather.innerHTML = "Current weather in this city is: " + data.main.temp;
    })
    .catch(error => {
        console.error("Error: ", error);
    })
