
const item_scroll = document.querySelectorAll(".item");

window.addEventListener("scroll", function() { // window에 scroll이벤트 수신기를 연결
    const current = window.pageYOffset; // 현재 scroll의 위치를 current 변수에 담기
    console.log( "현재 스크롤 위치: " + current ); // console창을 확인해보셔요.
    
    for(let i = 0; i < item_scroll.length; i = i + 1) {
        const limit = item_scroll[i].offsetTop - 20000; // i번째 .item-scroll의, top 위치에서, 100px 만큼을 뺀 값
        
        if( current > limit ) { // 현재 scroll의 위치가, i번째 limit 값을 넘어갔다면?
            item_scroll[i].classList.add("active"); // active 클래스를 붙이겠다.
        }
    }
});

const 아실기실에 = document.querySelector(".아실기실에");

아실기실에.addEventListener("click", function() {
    // 아실기실에.innerText = "으아아아ㅏㅇ아아아ㅏㄱ 날지 마!!!!날지마!!!!!!날지 말라고!!!!!!!!!!!!!";
    아실기실에.innerHTML = "<span class='new'>으아아아ㅏㅇ아아아ㅏㄱ 날지 마!!!!날지마!!!!!!날지 말라고!!!!!!!!!!!!!";
});


const new_window = document.querySelector("#소개글");

new_window.addEventListener("click", function() {
    window.open('./index_2.html', '사람 대 사람으로서의 포트폴리오가 있다면 어떨까요?', 'width=500px, height=500px, top=500px, left=500px');
    // 주소, 새로운 창 이름, 옵션(가로 너비, 세로 너비, y위치, x위치)
});

const 데스코어 = document.querySelector(".데스코어");


데스코어.addEventListener("click", function() {
    데스코어.innerHTML = 
    "<span class='드륵'>두두두두 드륵드륵 즁즁즁즁 구워어어어어어얽";

});

const 밴드티 = document.querySelector(".밴드티");

밴드티.addEventListener("click", function() {
 if(밴드티.innerText === '내가 좋아하는 밴드들의 그래픽은 썩 무시무시하지 않다.') {
        밴드티.innerText = '좋아하지 않지만 그래픽만 무시무시한 밴드의 티셔츠를 사입는건 가짜들이나 하는 짓이다.';
    } else 밴드티.innerText ='내가 좋아하는 밴드들의 그래픽은 썩 무시무시하지 않다.';
});

const img = document.querySelector(".햄버거");

햄버거.addEventListener("click", function() {
    햄버거.img.src =  "./011.gif";
});

