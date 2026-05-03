const button = document.getElementById("messageBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Nice. Your JavaScript is working!";
});