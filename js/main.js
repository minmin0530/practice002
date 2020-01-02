class Main {
    constructor() {
        this.mask_left = document.getElementById("header__mask_left");
        this.mask_right = document.getElementById("header__mask_right");
        this.header__logo = document.getElementById("header__logo");
        this.mainvisual1 = document.getElementById("mainvisual1");
        this.mainvisual2 = document.getElementById("mainvisual2");
        this.mainvisual1text = document.getElementById("mainvisual1text");
        this.mainvisual2text = document.getElementById("mainvisual2text");
        if (window.innerWidth > 1170) {
            this.x1origin = window.innerWidth / 2 - (570 / 2);
            this.x1       = window.innerWidth / 2 - (570 / 2);
            this.x2origin = window.innerWidth / 2 + (1366 / 2) + 200;
            this.x2       = -570;//window.innerWidth / 2 + (1366 / 2);

            this.mask_left.style.width = (window.innerWidth - 1366) / 2 + "px";
            this.mask_right.style.width = (window.innerWidth - 1366) / 2 + "px";
            this.mask_right.style.left = (window.innerWidth + 1366) / 2 + "px";
        } else {
            this.x1origin = window.innerWidth / 2 - (340 / 2);
            this.x1       = window.innerWidth / 2 - (340 / 2);
            this.x2origin = window.innerWidth / 2 + (414 / 2);
            this.x2       = -340;//window.innerWidth / 2 + (414 / 2);

            this.mask_left.style.width = (window.innerWidth - 414) / 2 + "px";
            this.mask_right.style.width = (window.innerWidth - 414) / 2 + "px";
            this.mask_right.style.left = (window.innerWidth + 414) / 2 + "px";
        }
        this.waitTime = 0;
        this.onceFlag = true;

        this.x1speed = 5;
        this.x2speed = 5;
    }
    loop() {
        if (window.innerWidth > 1170) {
            this.mask_left.style.width = (window.innerWidth - 1366) / 2 + "px";
            this.mask_right.style.width = (window.innerWidth - 1366) / 2 + "px";
            this.mask_right.style.left = (window.innerWidth + 1366) / 2 + "px";
        } else {
            this.mask_left.style.width = (window.innerWidth - 414) / 2 + "px";
            this.mask_right.style.width = (window.innerWidth - 414) / 2 + "px";
            this.mask_right.style.left = (window.innerWidth + 414) / 2 + "px";
        }
        this.header__logo.style.marginRight = (window.innerWidth - 1024) / 20 + "px";

        if (this.waitTime == 400) {
            if (this.x1 <= this.x1origin && this.x1 + this.x1speed > this.x1origin) {
                this.x2 = this.x2origin;
                this.mainvisual2.style.opacity = 1.0;
            }
            if (this.x2 < this.x1origin && this.x2 + this.x2speed > this.x1origin) {
                this.x1 = this.x2origin;
                this.mainvisual1.style.opacity = 1.0;
            }
        }
        if (this.waitTime > 400) {
            this.onceFlag = true;
            this.x1 -= this.x1speed;
            this.x2 -= this.x2speed;
        }
        if (this.onceFlag && this.x1 < this.x1origin && this.x1 + this.x1speed > this.x1origin) {
            this.waitTime = 0;
            this.onceFlag = false;
            this.mainvisual2.style.opacity = 0.0;
        }
        if (this.onceFlag && this.x2 < this.x1origin && this.x2 + this.x2speed > this.x1origin) {
            this.waitTime = 0;
            this.onceFlag = false;
            this.mainvisual1.style.opacity = 0.0;
        }
        if (this.waitTime <= 400) {
            this.waitTime += 1;
        }

        this.mainvisual1.style.left = this.x1 + "px";
        this.mainvisual2.style.left = this.x2 + "px";
    }
}

const main = new Main();
mainloop();

function mainloop() {
    main.loop();
    requestAnimationFrame(mainloop);
}