 export const weatherHTML = (weatherObj) => {
     return `
    <div class="day--${weatherObj.dt}">
        <div>${newDate(weatherObj.dt).toLocaleDateString('en-US')}</div>
        <div>${weatherObj.weather[0].description}</div>
        <div>Temperature High ${weatherObj.temp.max}</div>
        <div>Temperature Low ${weatherObj.temp.min}</div>
    </div>
    `
 }