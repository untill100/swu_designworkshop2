const button = document.getElementById("myButton");
const audio = document.getElementById("audio");

let isMusicPlaying = false;


//화면이동//
button.addEventListener("click", function() {
    
    window.location.href = "index2.html";
   
  });

//사운드//
  window.addEventListener('DOMContentLoaded', () => {
    audio.play();
  });

// window.addEventListener('scroll', () => {
//   if (!isMusicPlaying) {
//     audio.play();
//     isMusicPlaying = true;
//   }
// });

 