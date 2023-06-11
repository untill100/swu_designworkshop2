var class2Element = document.querySelector('.class2');
var class12Element = document.querySelector('.class12');

class2Element.addEventListener('click', function() {
    if (class12Element.style.display === 'none') {
        class12Element.style.display = 'block'; // 클래스 1을 클릭하여 클래스 2를 보이게 합니다.
    } else {
        class12Element.style.display = 'none'; // 클래스 1을 다시 클릭하여 클래스 2를 숨깁니다.
        }
});

var class12Element = document.querySelector('.class12');
var class13Element = document.querySelector('.class13');

class12Element.addEventListener('click', function() {
    if (class13Element.style.display === 'none') {
        class13Element.style.display = 'block'; // 클래스 1을 클릭하여 클래스 2를 보이게 합니다.
    } else {
        class13Element.style.display = 'none'; // 클래스 1을 다시 클릭하여 클래스 2를 숨깁니다.
    }
});

var class3Element = document.querySelector('.class3');
var class14Element = document.querySelector('.class14');

class3Element.addEventListener('click', function() {
    if (class14Element.style.display === 'none') {
        class14Element.style.display = 'block'; // 클래스 1을 클릭하여 클래스 2를 보이게 합니다.
    } else {
        class14Element.style.display = 'none'; // 클래스 1을 다시 클릭하여 클래스 2를 숨깁니다.
    }
});

var class14Element = document.querySelector('.class14');
var class141Element = document.querySelector('.class141');

class14Element.addEventListener('click', function() {
    if (class141Element.style.display === 'none') {
        class141Element.style.display = 'block'; // 클래스 1을 클릭하여 클래스 2를 보이게 합니다.
    } else {
        class141Element.style.display = 'none'; // 클래스 1을 다시 클릭하여 클래스 2를 숨깁니다.
    }
});

var class4Element = document.querySelector('.class4');
var class15Element = document.querySelector('.class15');

class4Element.addEventListener('click', function() {
    if (class15Element.style.display === 'none') {
        class15Element.style.display = 'block'; // 클래스 1을 클릭하여 클래스 2를 보이게 합니다.
    } else {
        class15Element.style.display = 'none'; // 클래스 1을 다시 클릭하여 클래스 2를 숨깁니다.
    }
});

var class15Element = document.querySelector('.class15');
var class151Element = document.querySelector('.class151');

class15Element.addEventListener('click', function() {
    if (class151Element.style.display === 'none') {
        class151Element.style.display = 'block';
    } else {
        class151Element.style.display = 'none';
    }
});

var class151Element = document.querySelector('.class151');
var itemElement = document.querySelectorAll('.item');
class151Element.addEventListener('click', function() {
    for(let i = 0; i < itemElement.length; i = i + 1) {
        if (itemElement[i].style.display === 'none') {
            itemElement[i].style.display = 'block';
        } else {
            itemElement[i].style.display = 'none'; 
        }
    }

});

// var class5Element = document.querySelector('.class5');
var mainElement = document.querySelectorAll('#main');

// class5Element.addEventListener('click', function() {
//     for(let i = 0; i < mainElement.length; i = i + 1) {
//         if (mainElement[i].style.display === 'none') {
//             mainElement[i].style.display = 'block';
//         } else {
//             mainElement[i].style.display = 'none'; 
//         }
//     }
// });



var class9Element = document.querySelector('.class9');
var textElement = document.querySelector('#text');

// class9Element.addEventListener('click', function() {
//     if (textElement.style.display === 'none') {
//         textElement.style.display = 'block';
//     } else {
//         textElement.style.display = 'none';
//     }
// });

// const text = document.querySelector("#text");

// text.addEventListener("click", function() {
//     const new_p = document.createElement("p"); // 새로운 <p></p> 요소를 createElement를 통해 만들기!
//     new_p.innerText = text.innerText // 기존 텍스트의 문자열을, 새로운 <p>요소에 담아줌.

//     const app = document.querySelector("#app");
//     app.appendChild(new_p); // app에 appendChild로, 새로 만든 <p>요소를 담아줌.
// });




