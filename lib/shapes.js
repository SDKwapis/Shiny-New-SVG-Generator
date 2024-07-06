class Shapes {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    logoText(x, y) {
        return `<text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="600" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shapes {
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }
    makeCircle() {
        const centerX = 150;
        const centerY = 100;
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${centerX}" cy="${centerY}" r="100" fill="${this.color}"/>
            ${super.logoText(centerX, centerY)} 
        </svg>`;
    }
}


class Triangle extends Shapes {
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }
    makeTriangle() {
        const centerX = 150;
        const centerY = 110; // Adjust as needed for visual centering
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 0 0, 200 300, 200" fill="${this.color}"/>
            ${super.logoText(centerX, centerY)} 
        </svg>`;
    }
}


class Square extends Shapes {
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }
    makeSquare() {
        const centerX = 150;
        const centerY = 100;
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="0" width="200" height="200" fill="${this.color}"/>
            ${super.logoText(centerX, centerY)} 
        </svg>`;
    }
}


module.exports = {
    Circle,
    Square,
    Triangle
  };
