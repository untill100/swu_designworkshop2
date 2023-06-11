// const text = document.querySelector("#text");

// text.addEventListener("click", function() {
//     text.classList.remove("anim");

//     const innerText = text.innerText;

//     let temp = "";
    
//     for(let i = 0; i < innerText.length; i = i + 1) {
//         if( innerText[i] === "그" ) { 
//             temp += "<span>" + "-" + "</span>";
//             temp += "<span>" + "ㅣ" + "</span>";
//             temp += "<span>" + "ㅡ" + "</span>";
//         } else if( innerText[i] === "이" ) { 
//             temp += "<span>" + "ㅇ" + "</span>";
//             temp += "<span>" + "ㅣ" + "</span>";
//         } else if( innerText[i] === "다" ) { 
//             temp += "<span>" + "-" + "</span>";
//             temp += "<span>" + "ㅣ" + "</span>";
//             temp += "<span>" + "-" + "</span>";
//             temp += "<span>" + "ㅣ" + "</span>";
//             temp += "<span>" + "-" + "</span>";
//         } else {
//             temp += "<span>" + innerText[i] + "</span>"; 
//         }
//     }
    
//     text.innerHTML = temp;
// })


// var textElement = document.querySelector('#text');
// var class1Element = document.querySelector('.class1');

// textElement.addEventListener('click', function() {
//     if (class1Element.style.display === 'none') {
//         class1Element.style.display = 'block'; 
//     } else {
//         class1Element.style.display = 'none';
//         }
// });


// const textElement = document.querySelector('#text');
// const class1Element = document.querySelector('.class1');

// textElement.addEventListener('click', function() {
//   // 첫 번째 효과: 글자 변환
//   textElement.classList.remove('anim');

//   const innerText = textElement.innerText;
//   let temp = "";

//   for (let i = 0; i < innerText.length; i = i + 1) {
//     if (innerText[i] === "그") {
//       temp += "<span>" + "-" + "</span>";
//       temp += "<span>" + "ㅣ" + "</span>";
//       temp += "<span>" + "ㅡ" + "</span>";
//     } else if (innerText[i] === "이") {
//       temp += "<span>" + "ㅇ" + "</span>";
//       temp += "<span>" + "ㅣ" + "</span>";
//     } else if (innerText[i] === "다") {
//       temp += "<span>" + "-" + "</span>";
//       temp += "<span>" + "ㅣ" + "</span>";
//       temp += "<span>" + "-" + "</span>";
//       temp += "<span>" + "ㅣ" + "</span>";
//       temp += "<span>" + "-" + "</span>";
//     } else {
//       temp += "<span>" + innerText[i] + "</span>";
//     }
//   }

//   textElement.innerHTML = temp;

//   // 두 번째 효과: 요소 숨김/표시 토글

  
//   if (class1Element.style.display === 'none') {
//     class1Element.style.display = 'block';
//   } else {
//     class1Element.style.display = 'none';
//   }
// });





const textElement = document.querySelector('#text');
const class1Element = document.querySelector('.class1');
const class2Element = document.querySelector('.class2');

textElement.addEventListener('click', function() {
  // 첫 번째 효과: 글자 변환
  textElement.classList.remove('anim');

  const innerText = textElement.innerText;
  let temp = "";

  for (let i = 0; i < innerText.length; i = i + 1) {
    if (innerText[i] === "그") {
      temp += "<span>" + "-" + "</span>";
      temp += "<span>" + "ㅣ" + "</span>";
      temp += "<span>" + "ㅡ" + "</span>";
    } else if (innerText[i] === "이") {
      temp += "<span>" + "ㅇ" + "</span>";
      temp += "<span>" + "ㅣ" + "</span>";
    } else if (innerText[i] === "다") {
      temp += "<span>" + "-" + "</span>";
      temp += "<span>" + "ㅣ" + "</span>";
      temp += "<span>" + "-" + "</span>";
      temp += "<span>" + "ㅣ" + "</span>";
      temp += "<span>" + "-" + "</span>";
    } else {
      temp += "<span>" + innerText[i] + "</span>";
    }
  }

  textElement.innerHTML = temp;

  // 두 번째 효과: class1 표시/숨김 토글
  if (class1Element.style.display === 'none') {
    class1Element.style.display = 'block';
  } else {
    class1Element.style.display = 'none';
  }
});

class1Element.addEventListener('click', function() {
  // 세 번째 효과: class2 표시/숨김 토글
  if (class2Element.style.display === 'none') {
    class2Element.style.display = 'block';
  } else {
    class2Element.style.display = 'none';
  }
});

class2Element.addEventListener('click', function() {
  // 네 번째 효과: class2 표시/숨김 토글
  if (class2Element.style.display === 'none') {
    class2Element.style.display = 'block';
  } else {
    class2Element.style.display = 'none';
  }
});











