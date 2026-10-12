const button = document.getElementById("messageButton");
const message = document.getElementById("message");
const countDisplay = document.getElementById("count");

let count = 0;
let darkMode = true;

button.addEventListener("click", function() {
    count++;

    countDisplay.textContent = count;

    if (darkMode) {
        document.body.style.backgroundColor = "#f3f4f6";
        document.body.style.color = "#111827";
        message.textContent = "New look, new possibilities!";
    } else {
        document.body.style.backgroundColor = "#111827";
        document.body.style.color = "#f9fafb";
        message.textContent = "Welcome back to dark mode!";
    }

    darkMode = !darkMode;
});