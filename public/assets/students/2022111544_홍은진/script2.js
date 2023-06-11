const Return = document.getElementById("return");
const audio = document.getElementById("audio");

const Hip = document.querySelector("#hip");
const Hip2 = document.querySelector("#hip2");
const Hip3 = document.querySelector("#hip3");
const Hip4 = document.querySelector("#hip4");
const Hip5 = document.querySelector("#hip5");

const content = document.querySelector("#content");
const warning = document.querySelector("#warning");

//ReturnButton//
Return.addEventListener("click", function() {
    
    window.location.href = "index.html";
  });

//HipButton
  Hip.addEventListener("click", function() {
    
    window.location.href = "hip1.html";
  });

  Hip2.addEventListener("click", function() {
    
    window.location.href = "hip2.html";
  });

  Hip3.addEventListener("click", function() {
    
    window.location.href = "hip3.html";
  });

  Hip4.addEventListener("click", function() {
    
    window.location.href = "hip4.html";
  });

  Hip5.addEventListener("click", function() {
    
    window.location.href = "hip5.html";
  });

















warning.addEventListener("click", function() {
  content.classList.add("active");
    
  });
 
 


  //사운드//
  // window.addEventListener('DOMContentLoaded', () => {
  //   audio.play();
  // });


  