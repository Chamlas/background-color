const buttons = document.querySelectorAll(".change-color");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.parentElement;
    const colorDisplay = section.querySelector(".color");

    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();

    section.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;

    if (section.style.backgroundColor === "000000") {
      colorDisplay.textContent = "FFFFFF";
    }
  });
});
