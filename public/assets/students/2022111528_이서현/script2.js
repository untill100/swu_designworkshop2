const entropy = document.querySelector("#entropy");
const text203 = document.querySelector(".text203");
// entropy.textContent = input.value;
entropy.addEventListener("input", (event) => {
  // console.log(event.target.value);
  text203.style.color = `rgb(62,90,255,${event.target.value * 0.01})`;
})

const buttton_2 = document.querySelector("#button_2");
const full_2 = document.querySelector("#full_2");
const cont_button = document.querySelector("#cont_button");

buttton_2.addEventListener("click", function() {
    full_2.classList.add("active");
    cont_button.classList.add("a");
});