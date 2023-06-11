

const blink = document.querySelector("#blinkingText");
setInterval(() => {
  const dice = Math.floor(Math.random() * 2);
  if(dice === 0) {
    blink.style.opacity = 1;
  } else {
    blink.style.opacity = 0;
  }

  console.log(dice)
}, 100);


const blink1 = document.querySelector("#blinkingText1");
setInterval(() => {
  const dice = Math.floor(Math.random() * 2);
  if(dice === 0) {
    blink1.style.opacity = 1;
  } else {
    blink1.style.opacity = 0;
  }

  console.log(dice)
}, 100);

const blink2 = document.querySelector("#blinkingText2");
setInterval(() => {
  const dice = Math.floor(Math.random() * 2);
  if(dice === 0) {
    blink2.style.opacity = 1;
  } else {
    blink2.style.opacity = 0;
  }

  console.log(dice)
}, 100);


setTimeout(() => {
  const textElement = document.getElementById("fadeText"); // 텍스트 요소의 ID를 선택합니다.
  textElement.classList.add("fadeOut"); // 애니메이션 클래스를 추가합니다.

  const textElement1 = document.getElementById("fadeText1"); // 텍스트 요소의 ID를 선택합니다.
  textElement1.classList.add("fadeOut"); // 애니메이션 클래스를 추가합니다.

  const textElement2 = document.getElementById("fadeText2"); // 텍스트 요소의 ID를 선택합니다.
  textElement2.classList.add("fadeOut"); // 애니메이션 클래스를 추가합니다.
}, 4000);