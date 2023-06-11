const typing = document.querySelectorAll(".typing");
const typing2 = document.querySelectorAll(".typing2");
// 클래스명으로 typing을 붙여준, 각 문장을 담은 변수!

let sum = 0;
// 각 문장의 글자수를 합산한 값을 담을 변수!

let speed = 0.15;
// 딜레이 속도
// 0.1 = 1/10, 즉, 나누어주므로, 값이 작을수록 빠르게 되겠지요!



/* ---------- typing의 개수만큼, 첫 번째 반복 시작! ---------- */
for( let i = 0; i < typing.length; i = i + 1 ) {
    const currentText = typing[i].innerText;
    // 현재( i번째 ) 문장의 텍스트를 담은 변수!

    let temp = "";
    // 타이핑되는 순번( j번째 )의 문자를 임시로(temporary) 기록해 둘 변수!



    /* ---------- 현재( i번째 ) 문장이 가진 '문자의 개수'만큼, 두 번째 반복 시작! ---------- */
    for(let j = 0; j < currentText.length; j = j + 1) {
        let time = (sum + j) * speed;
        temp += `<span style="animation-delay: ${time}s">${currentText[j]}</span>`;
    }
    /* ---------- 두 번째 반복 종료 ---------- */



    sum += currentText.length;
    // 두 번째 반복 종료시, 현재( i번째 ) 문장의 문자 수를 sum에 더해주기!

    typing[i].innerHTML = temp;
    // 만들어낸 <span>요소를, 현재( i번째 ) typing에 넣어주기!
}
/* ---------- 첫 번째 반복 종료 ---------- */














let sum2 = 0;
let speed2 = 0.15;

// 시작 딜레이 시간
let initialDelay = 25;

for (let i = 0; i < typing2.length; i++) {
  const currentText = typing2[i].innerText;
  let temp2 = "";

  for (let j = 0; j < currentText.length; j++) {
    let time2 = (sum2 + j) * speed2 + initialDelay;
    temp2 += `<span style="animation-delay: ${time2}s">${currentText[j]}</span>`;
  }

  sum2 += currentText.length;
  typing2[i].innerHTML = temp2;
}


setTimeout(() => {
    const typingElements = document.querySelectorAll(".typing");
    // 텍스트가 사라지도록 함
    typingElements.forEach(element => {
      element.style.animation = "none";
      element.style.opacity = 1;
    });

    setTimeout(() => {       
        const typing2Element = document.querySelectorAll(".typing2");
        document.body.style.backgroundColor = "black";

        typingElements.forEach(element => {
            element.style.opacity = 0;
        }, 25000);

      },  25000);
    }, 0);