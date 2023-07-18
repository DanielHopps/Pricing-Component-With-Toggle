const toggle = document.querySelector("#toggle");
const annualPrice = document.querySelectorAll(".pricing-annual");
const monthPrice = document.querySelectorAll(".pricing-monthly");

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    annualPrice.forEach((price) => (price.style.display = "none"));
    monthPrice.forEach((price) => (price.style.display = "flex"));
    console.log("checked?");
  } else {
    annualPrice.forEach((price) => (price.style.display = "flex"));
    monthPrice.forEach((price) => (price.style.display = "none"));
    console.log("unchecked");
  }
});
