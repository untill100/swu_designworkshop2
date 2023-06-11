// 1
const input_1 = document.querySelector("#input-1");
input_1.addEventListener("input", function(e) { // 값이 입력될 때마다, 이벤트 수신기를 연결
    const value = e.target.value; // 타겟target, 즉 input-1에 입력되는 값value


    const output_1 = document.querySelector("#output-1");
    output_1.style.position = "fixed";
    output_1.style.top = "50%";
    output_1.style.left = "50%";
    output_1.style.transform = "translate(-50%, -50%)";
    output_1.style.color = "blue";
    output_1.style.fontSize = "70px";
    output_1.style.fontWeight = "bold";
    output_1.innerText = value;

});

// 2
const input_2 = document.querySelector("#input-2");
input_2.addEventListener("input", function(e) { // 값이 입력될 때마다, 이벤트 수신기를 연결
    const value = e.target.value; // 타겟target, 즉 input-1에 입력되는 값value

    const output_2 = document.querySelector("#output-2");
    output_2.innerText = value;
    output_2.style.position = "fixed";
    output_2.style.top = "50%";
    output_2.style.left = "50%";
    output_2.style.transform = "translate(-50%, -50%)";
    output_2.style.color = "red";
    output_2.style.fontSize = "70px";
    output_2.style.fontWeight = "bold";

});