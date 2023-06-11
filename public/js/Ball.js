class Ball {
    constructor(x, y, size, other, theta, name, font, link) {
        this.id = other.length;
        this.x = x;
        this.y = y;
        this.size = size;
        this.other = other;
        this.theta = theta;
        this.name = name;
        this.font = font;
        this.link = link;

        this.angle = random(-45, 45);
        this.originPos = createVector(x, y);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.gravity = 0.5;
        this.friction = 0.5;

        this.isInter = false;
        this.offset = 0.525;
    }

    draw() {
        push();
            translate(this.pos.x, this.pos.y);
            if(this.isInter) {
                fill(255, 255, 255, 155);
            } else {
                fill(255, 255, 255);
            }
            rectMode(CENTER);
            rect(0, 0, this.size, this.size);

            if(this.isInter) {
                fill(0, 0, 0, 155);
            } else {
                fill(0);
            }
            textFont(this.font);

            textSize(this.size * 0.2);
            textAlign(LEFT, TOP);
            text(this.name, -this.size / 2, -this.size / 2);
        pop();

        this.update();
    }

    update() {
        this.theta += 1.0;

        this.vel.add(createVector(0, 0));
        this.pos.add(this.vel);

        this.checkCollisionWithBoundary();
        this.checkCollisionWithOthers();
    }

    checkCollisionWithBoundary() {
        if(
            this.pos.x - this.size / 2 <= 0 || 
            this.pos.x + this.size / 2 >= width
        ) {
            this.vel.x *= -1;
        }

        if(
            this.pos.y - this.size / 2 <= 0 || 
            this.pos.y + this.size / 2 >= height
        ) {
            this.vel.y *= -1;
        }
    }

    checkCollisionWithOthers() {
        for (let i = this.id + 1; i < this.other.length; i++) {
            const dx = this.other[i].pos.x - this.pos.x;
            const dy = this.other[i].pos.y - this.pos.y;
            const distance = sqrt(dx * dx + dy * dy);
            const minDistance = (this.other[i].size + this.size) * this.offset;

            if (distance < minDistance) {
                const angle = atan2(dy, dx);

                const target = createVector(
                    this.pos.x + cos(angle) * minDistance, 
                    this.pos.y + sin(angle) * minDistance
                );

                this.acc.set(
                    (target.x - this.other[i].pos.x),
                    (target.y - this.other[i].pos.y)
                );

                this.vel.sub(this.acc);
                this.vel.mult(this.friction);

                this.other[i].vel.add(this.acc);
                this.other[i].vel.mult(this.other[i].friction);
            }
        }
    }
}