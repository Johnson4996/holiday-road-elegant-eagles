export const eateryHTMLConverter = (eateryObject) => {
    return `
        <div>
            <h4>${eateryObject.businessName}</h4>
        </div>
        <button id="eatDetailButton--${eateryObject.id}">Details</button>
        <dialog id="eateryDialog" class="eatery--${eateryObject.id}">
       
            <div  class="wrapper">
                <a id="closeWindow" href="#" class="close-button">
                    <div class="in">
                    <div class="close-button-block"></div>
                    <div class="close-button-block"></div>
            </div>
            <div  class="out">
                <div class="close-button-block"></div>
                <div class="close-button-block"></div>
            </div>
                </a>
            </div>
           
            <div class="dialogTitle">Description: </div>
            <div class="dialogContent">${eateryObject.description}</div>
            <div class="dialogTitle">Location: </div>
            <div class="dialogContent">${eateryObject.city}, ${eateryObject.state}</div>
        </dialog>
    `
}

//what it will look like in the preview window