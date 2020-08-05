// Event to close dialog button

contentTarget.addEventListener("click", (event) => {
  if (event.target.id === "closeWindow") {
    const attractionDialogBox = document.querySelector.startsWith(".details--")
    attractionDialogBox.close()
  }
})
