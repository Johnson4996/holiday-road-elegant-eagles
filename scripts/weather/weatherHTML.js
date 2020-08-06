 export const weatherHTML = (weatherObj) => {
     return `
    <article class="weatherForecast">
    <div class="day--">
        <div>${weatherObj.weather.description}</div>
        <div>${weatherObj.main.}</div>
        <div>Temperature High${weatherObj.main.}</div>
        <div>Temperature Low${weatherObj.main.}</div>
    </div>
    <div class="day--">
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
    </div>
    <div class="day--">
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
    </div>
    <div class="day--">
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
    </div>
    <div class="day--">
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
        <div>${weatherObj}</div>
    </div>
</article>
    `
 }