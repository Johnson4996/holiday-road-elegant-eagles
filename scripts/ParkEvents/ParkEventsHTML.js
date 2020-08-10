export const parkEventsHTML = (parkEventObj) =>{
return `

<div class="dialogTitle">Event Name: </div>
<div class="dialogContent">${parkEventObj.title}</div>
<div class="dialogTitle">Date: </div>
<div class="dialogContent">${parkEventObj.datestart}</div>
<div class="dialogTitle">Time: </div>
<div class="dialogContent">${parkEventObj.times.timestart} - ${parkEventObj.times.timeend}</div>
<div class="dialogTitle">Description: </div>
<div class="dialogContent">${parkEventObj.description}</div>
<div class="dialogTitle"> Fee: </div>
<div class="dialogContent">${parkEventObj.feeinfo}</div>

`
}