const API_KEY = "fe1df1a05d62286e20412806dd38cb69";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let locationIcon = document.querySelector('.weather-icon');
            const {icon} = data.weather[0];
            locationIcon.innerHTML = `<img src="icons/${icon}.png">;`;
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        }); 
}

function onGeoError(){
    alert("어디신지 모르겠어용!😢");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);