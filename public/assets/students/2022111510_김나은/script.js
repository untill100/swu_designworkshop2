// console.log("나폴리탄 괴담");

function printPage() {
    window.print();
  }

let isClicked = false;
const a4 = document.querySelector("#a4");
a4.addEventListener("click", function() {
    if(isClicked === false) {
        isClicked = true;
        a4.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        isClicked = false;
        a4.style.backgroundColor = "rgb(0, 0, 0)";
    }
});

const new_window = document.querySelector("#new-window");

new_window.addEventListener("click", function() {
    window.open('./index2.html', '책 접는 법', 'width=500px, height=500px, top=500px, left=500px');
    // 주소, 새로운 창 이름, 옵션(가로 너비, 세로 너비, y위치, x위치)
});
// const anim = document.querySelectorAll(".anim");
// const animSetting = [];

// for(let i = 0; i < anim.length; i = i + 1) {
//     let max = window.innerWidth / 2 + 200;
//     let min = window.innerWidth / 2 - 200;
//     const randomLeft = Math.random() * (max - min + 1) + min;

//     max = window.innerHeight / 2 + 200;
//     min = window.innerHeight / 2 - 200;
//     const randomTop = Math.random() * (max - min + 1) + min;

//     const velX = Math.random() * 2.0;
//     const velY = Math.random() * 2.0;

//     animSetting[i] = { 
//         x: randomLeft, y: randomTop, 
//         velX: velX, velY: velY 
//     };
// }





// let interval = 3; 

// setInterval(function() {
//     for(let i = 0; i < anim.length; i = i + 1) {
//         anim[i].style.left = animSetting[i].x + "px";
//         anim[i].style.top = animSetting[i].y + "px";
//     }

//     for(let i = 0; i < animSetting.length; i = i + 1) {
//         animSetting[i].x += animSetting[i].velX;
//         animSetting[i].y += animSetting[i].velY;

//         if(
//             animSetting[i].x <= 0 || animSetting[i].x >= window.innerWidth - 48
//         ) {
//             animSetting[i].velX *= -1;
//         }

//         if(
//             animSetting[i].y <= 0 || animSetting[i].y >= window.innerHeight - 48
//         ) {
//             animSetting[i].velY *= -1;
//         }
//     }
// }, interval);
