 export const weatherHTML = (weatherObj) => {
     return `
    <div class="day--${weatherObj.dt}">
        <div>${new Date(weatherObj.dt*1000).toLocaleDateString('en-US')}</div>
        <div>${weatherObj.weather[0].description}</div>
        <div>Temperature High ${weatherObj.temp.max}</div>
        <div>Temperature Low ${weatherObj.temp.min}</div>
    </div>
    `
 }