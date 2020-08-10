const eventHub = document.querySelector(".container")

export const showEateryDetails = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("eatDetailButton--")) {
      const buttonId = clickEvent.target.id.split("--")[1]
      const contentTarget = document.querySelector(`.eatery--${buttonId}`)
      contentTarget.showModal()
    } else if (clickEvent.target.id.startsWith("close-button-block--")) {
      const [closeWindow, id] = clickEvent.target.id.split("--")
      const contentTarget = document.querySelector(`#eateryDialog--${id}`)
      contentTarget.close()
    }
  })
}
