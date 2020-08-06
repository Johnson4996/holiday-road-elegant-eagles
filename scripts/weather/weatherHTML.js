 export const weatherHTML = (weatherObj) => {
     return `
    <article class="weatherForecast">
    <div class="day--${weatherObj.dt}">
        <div>${weatherObj.dt}</div>
        <div>${weatherObj.weather.description}</div>
        <div>Temperature High${weatherObj.temp.max}</div>
        <div>Temperature Low${weatherObj.temp.min}</div>
    </div>
</article>
    `
 }