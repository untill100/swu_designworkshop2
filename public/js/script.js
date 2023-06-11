const balls = [];
const students = [
    { name: "백선영", link: "./public/assets/students/2018111546_백선영/index.html" },
    { name: "김나영", link: "./public/assets/students/2019111533_김나영_영상/1.mp4" },
    { name: "김겸민", link: "./public/assets/students/2019120113_김겸민_영상/1.mp4" },
    { name: "이지원", link: "" },
    { name: "정시안", link: "./public/assets/students/2020111493_정시안/index.html" },
    { name: "유진희", link: "./public/assets/students/2021111539_유진희_영상/1.mp4" },
    { name: "김채린", link: "./public/assets/students/2021120113_김채린_영상/1.mp4" },
    { name: "윤희선", link: "./public/assets/students/2021120114_윤희선/index.html" },
    { name: "김나은", link: "./public/assets/students/2022111510_김나은/index.html" },
    { name: "김민서", link: "" },
    { name: "박혜민", link: "./public/assets/students/2022111518_박혜민/index.html" },
    { name: "안지영", link: "./public/assets/students/2022111521_안지영_영상/1.mp4" },
    { name: "유은혜", link: "./public/assets/students/2022111522_유은혜_영상/1.mp4" },
    { name: "유지현_중간", link: "./public/assets/students/2022111523_유지현/1/index.html" },
    { name: "유지현_기말", link: "./public/assets/students/2022111523_유지현/2/index.html" },
    { name: "이서현", link: "./public/assets/students/2022111528_이서현/index.html" },
    { name: "이아연", link: "./public/assets/students/2022111530_이아연/1.mp4" },
    { name: "이지현_531", link: "./public/assets/students/2022111531_이지현/1.mp4" },
    { name: "이지현_532", link: "./public/assets/students/2022111532_이지현/index.html" },
    { name: "장수현", link: "./public/assets/students/2022111533_장수현/index.html" },
    { name: "정선우", link: "./public/assets/students/2022111536_정선우/1.mp4" },
    { name: "지연지", link: "./public/assets/students/2022111539_지연지/index.html" },
    { name: "함희원", link: "" },
    { name: "홍은진", link: "./public/assets/students/2022111544_홍은진/index.html" },
];

console.log(students.length);

// preload
let font;

function preload() {
    font = loadFont("./public/assets/fonts/Pretendard-Medium.otf");
}

// setup
let r, g, b;
let gr, gg, gb;
let size;

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#app");

    initStudents();

    r = 0;
    g = 0;
    b = 0;

    gr = random(0, 255);
    gg = random(0, 255);
    gb = random(0, 255);
}

function initStudents() {
    balls.length = 0;
    size = window.innerWidth * 0.01 * 10.0;

    for(let i = 0; i < students.length; i++) {
        let x = random(width / 2 - size / 2, width / 2 + size / 2);
        let y = random(height / 2 - size / 2, height / 2 + size / 2);
        let name = students[i].name;
        let link = students[i].link;

        const _ball = new Ball(
            x, y, size, 
            balls, 
            random(-360, 360), 
            name, font, link
        );

        balls.push(_ball);
    }
}

// draw
function draw() {
    background(r, g, b);

    for(let i=0; i < balls.length; i++) {
        noStroke();
        strokeWeight(1);
        fill(0);
        
        balls[i].draw();
    }

    update();
}

// update
function update() {
    handleMagnet();
    checkInter();
    changeBG();
}

function handleMagnet() {
    for(let i=0; i < balls.length; i++) {
        const d = dist(balls[i].pos.x, balls[i].pos.y, mouseX, mouseY);
        const dx = Math.abs(balls[i].originPos.x - balls[i].pos.x);
        const dy = Math.abs(balls[i].originPos.y - balls[i].pos.y);

        if(d <= size) {
            if(balls[i].originPos.x - balls[i].pos.x > 0) {
                balls[i].pos.x += dx / size * 5.0;
            } else {
                balls[i].pos.x -= dx / size * 5.0;
            }

            if(balls[i].originPos.y - balls[i].pos.y > 0) {
                balls[i].pos.y += dy / size * 5.0;
            } else {
                balls[i].pos.y -= dy / size * 5.0;
            }
        }
    }
}

function checkInter() {
    for(let i=0; i < balls.length; i++) {
        const condition = mouseX >= balls[i].pos.x - balls[i].size / 2 && 
                          mouseX <= balls[i].pos.x + balls[i].size / 2 && 
                          mouseY >= balls[i].pos.y - balls[i].size / 2 && 
                          mouseY <= balls[i].pos.y + balls[i].size / 2;
                          
        if( condition ) {
            balls[i].isInter = true;
        } else {
            balls[i].isInter = false;
        }
    }

    // cusor
    if( balls.every(el => el.isInter === false) ) {
        document.body.style.cursor = "default";
    } else {
        document.body.style.cursor = "pointer";
    }
}

function changeBG() {
    if( frameCount % 500 === 0 ) {
        gr = random(0, 255);
        gg = random(0, 255);
        gb = random(0, 255);
    }

    if(r < gr) {
        r += 2;
    } else if(r > gr) {
        r -= 2;
    }

    if(g < gg) {
        g += 2;
    } else if(g > gg) {
        g -= 2;
    }

    if(b < gb) {
        b += 2;
    } else if(b > gb) {
        b -= 2;
    }
}

// mouse pressed event
let win;
function mousePressed() {
    for(let i=0; i < balls.length; i++) {
        const condition = mouseX >= balls[i].pos.x - balls[i].size / 2 && 
                          mouseX <= balls[i].pos.x + balls[i].size / 2 && 
                          mouseY >= balls[i].pos.y - balls[i].size / 2 && 
                          mouseY <= balls[i].pos.y + balls[i].size / 2;
                          
        if( condition ) {
            let minW = window.innerWidth * 0.5;
            let maxW = window.innerWidth * 1.0;
            let minH = window.innerHeight * 0.5;
            let maxH = window.innerHeight * 1.0;
            let w = Math.floor((Math.random() * (maxW - minW + 1)) + minW);
            let h = Math.floor((Math.random() * (maxH - minH + 1)) + minH);

            let minX = 0;
            let maxX = 3000; // screen.width - w;
            let minY = 0;
            let maxY = 3000; // screen.height - h;
            let x = Math.floor((Math.random() * (maxX - minX + 1)) + minX);
            let y = Math.floor((Math.random() * (maxY - minY + 1)) + minY);

            // console.log(x, y, w, h);

            w = (screen.width - screen.width * 0.01 * 10.0) * 0.9;
            h = w * 9 / 16;

            x = (screen.width - w) / 2;
            y = (screen.height - h) / 2;

            if(win !== undefined && win !== null) {
                win.close();
                win = window.open(
                    balls[i].link, `_blank`, `width=${w}px, height=${h}px, top=${y}px, left=${x}px, toolbar=no, menubar=no, location=no`
                );
            } else {
                win = window.open(
                    balls[i].link, `_blank`, `width=${w}px, height=${h}px, top=${y}px, left=${x}px, toolbar=no, menubar=no, location=no`
                );
            }
        }
    }
}

// window resize event
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    initStudents();
}