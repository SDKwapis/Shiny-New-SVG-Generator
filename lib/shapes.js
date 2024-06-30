class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
}

class Square {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class Triangle {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }
}


module.exports = {
    Circle,
    Square,
    Triangle
  };
