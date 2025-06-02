// Placeholder JS functionality
document.querySelectorAll("#options li").forEach(option => {
  option.addEventListener("click", () => {
    if (option.textContent === "Facial nerve") {
      option.style.backgroundColor = "lightgreen";
    } else {
      option.style.backgroundColor = "lightcoral";
    }
  });
});
