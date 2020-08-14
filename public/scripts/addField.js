// Search button
document.querySelector("#add-time")
// When button click
.addEventListener("click", cloneField)

// Execute a action
function cloneField() {
    // Duplicate the fields. Which field?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Get the fields. Which field?
    const fields = newFieldContainer.querySelectorAll("input")

    // Clear all fields. Which fields?
    fields.forEach(function(field) {
            // Pegar o field do momento e limpa
            field.value = ""
            
    })

    // Place on page. Where?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
} 