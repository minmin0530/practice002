class Main {
    constructor() {
        this.header__logo = document.getElementById("header__logo");
        this.mainvisual1 = document.getElementById("mainvisual1");
        this.mainvisual2 = document.getElementById("mainvisual2");
        this.mainvisual1text = document.getElementById("mainvisual1text");
        this.mainvisual2text = document.getElementById("mainvisual2text");
        this.x1 = 400;
        this.x2 = -1400;
        this.waitTime = 0;
        this.onceFlag = true;
    }
    loop() {
        this.header__logo.style.marginRight = (window.innerWidth - 1024) / 20 + "px";

        if (this.waitTime >= 400) {
            this.onceFlag = true;
            this.x1 -= 20;
            this.x2 -= 20;
        }
        if (this.onceFlag && this.x1 == 400) {
            this.waitTime = 0;
            this.onceFlag = false;
            this.mainvisual2.style.opacity = 0.0;
        }
        if (this.onceFlag && this.x2 == -200) {
            this.waitTime = 0;
            this.onceFlag = false;
            this.mainvisual1.style.opacity = 0.0;
        }
        if (this.waitTime < 400) {
            this.waitTime += 1;
        }


        if (this.x1 < -800) {
            this.x1 = 1400;
            this.mainvisual1.style.opacity = 1.0;
        }
        if (this.x2 < -1400) {
            this.x2 = 800;
            this.mainvisual2.style.opacity = 1.0;
        }
        this.mainvisual1.style.left = this.x1 + "px";
        this.mainvisual2.style.left = this.x2 + "px";
        this.mainvisual1text.style.left = (this.x1 + 800) + "px";
        this.mainvisual2text.style.left = (this.x2 + 1400) + "px";
    }
}

const main = new Main();
mainloop();

function mainloop() {
    main.loop();
    requestAnimationFrame(mainloop);
}