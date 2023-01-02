const dataValues = document.querySelectorAll(".data-value");

//trigger when web page loads
window.addEventListener("load", () => {
  dataValues.forEach((data, index) => {
    data.innerHTML =
      index === 3 ? randomNumber(10000, 100000) : randomNumber(10, 100);
  });
});
