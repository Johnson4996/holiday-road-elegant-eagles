const eventHub = document.querySelector(".container")

export const showEateryDetails = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.startsWith("detailButton--")) {
            const buttonId = clickEvent.target.dispatchEvent.split("--")[1]
            const contentTarget = document.querySelector(`.eatery--${buttonId}`)
            contentTarget.showModal()
        }
        else if(clickEvent.target.id === "closeWindow") {
            const theDialog = clickEvent.target.parentNode
            theDialog.close()
        }
    }) 
}