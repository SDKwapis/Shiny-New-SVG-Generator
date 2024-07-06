class Shapes {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    logoText() {
        return `<text font-size="60px" font-weight="600" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shapes {
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }
    makeCircle() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${this.color}"/>
        ${super.logoText()} </svg>`
    }
}

class Triangle extends Shapes {
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }
    makeTriangle() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 10 10, 190 290, 190" fill="${this.color}"/>
         ${super.logoText()} </svg>`
    }
}

class Square extends Shapes {
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }
    makeSquare() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="100" height="100" fill="${this.color}"/>
        ${super.logoText()} </svg>`;
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
  };
