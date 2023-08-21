
//used openweather api

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form= document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");


const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    var cel = data.main.temp;
    var cToFahr = (cel * 9 / 5 + 32).toFixed(2);
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h2>${cToFahr} F</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}


document.getElementById("searchbtn").addEventListener("click", function (event) {
    getWeather(search.value);
    event.preventDefault();
})



