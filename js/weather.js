const API_KEY = "fe1df1a05d62286e20412806dd38cb69";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherDiv = document.querySelector("#weather");
            const weather = weatherDiv.querySelector("span:first-of-type");
            const city = weatherDiv.querySelector("span:last-child");
            const weatherImg = weatherDiv.querySelector("img");
            const icon = data.weather[0].icon;
            const temp = Math.round(data.main.temp * 10) / 10;
            weatherImg.src =  `img/icons/${icon}.png`;
            weather.innerText = `${temp}˚C`;
            city.innerText = data.name;
        }); 
}

function onGeoError(){
    alert("어디신지 모르겠어용!😢");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);