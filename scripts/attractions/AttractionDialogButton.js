// Event to close dialog button

contentTarget.addEventListener("click", (event) => {
  if (event.target.id === "closeAttractionDialogButton") {
    const attractionDialogBox = document.querySelector.startsWith(".details--")
    attractionDialogBox.close()
  }
})
