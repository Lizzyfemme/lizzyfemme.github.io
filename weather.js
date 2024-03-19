
 
fetch("https://services.grassriots.io/")
.then(response => {return response.json()})
.then(locationData => {
    let locationMarkup = `
<h1>${locationData.data.city}</h1>
    `
    document.getElementById('location').insertAdjacentHTML('beforeend',locationMarkup);
     let url = `https://api.open-meteo.com/v1/forecast?latitude=${locationData.data.lat}&longitude=${locationData.data.lng}&daily=weather_code,temperature_2m_max,precipitation_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max&forecast_days=1`

     fetch(url)
     .then(response => {return response.json()})
     .then(weatherData => {
        
         let markup = `
                             <p>Time: ${weatherData.daily.time}</p>
                             <p>Precipitation: ${weatherData.daily.precipitation_sum}mm</p>
                             <p>Precipitation Probability: ${weatherData.daily.precipitation_probability_max}%</p>
                             <p>Temperature: ${weatherData.daily.temperature_2m_max}&#8451;</p>
                             <p>Wind Speed: ${weatherData.daily.wind_speed_10m_max}kmh</p>
                             <p>Weather Code:${weatherData.daily.weather_code}</p>
         `
         document.getElementById('weather').insertAdjacentHTML('beforeend',markup);    
        })
})

.catch(error => { throw error });


window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

})