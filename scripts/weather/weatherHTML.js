const eventHub = document.querySelector(".container") 

export const weatherHTML = (weatherObj) => {
     return `  
    <div class="previewContent" id="previewWeather">
    <div class="day--${weatherObj.dt}">
        <div class="weatherDetail">${new Date(weatherObj.dt*1000).toLocaleDateString('en-US')}</div>
        <div class="weatherDetail">${weatherObj.weather[0].description}</div>
        <div class="weatherDetail">High ${Math.floor(weatherObj.temp.max)}°F</div>
        <div class="weatherDetail">Low ${Math.floor(weatherObj.temp.min)}°F</div>
    </div>
    </div>
    `
 }