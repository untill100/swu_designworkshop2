const home = document.querySelector("#home");
const pg2 = document.querySelector("#pg2");
const pg3 = document.querySelector("#pg3");

document.getElementById("home").addEventListener("click", function() {
    document.getElementById("pg2").style.transform = "translateX(5300px)";
    document.getElementById("pg3").style.transform = "translateX(5300px)";
});