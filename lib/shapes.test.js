const { Circle, Triangle, Square } = require("../lib/shapes.js");

describe("Circle", () => {
    test("should create a new Circle class", () => {
        const circle = new Circle("#0000FF", "#FFFFFF", "SDK");
        expect(circle.color).toBe("#0000FF");
        expect(circle.text).toBe("SDK");
        expect(circle.textColor).toBe("#FFFFFF");
    });

    test("should create a circle with the inputs provided", () => {
        const circle = new Circle("#0000FF", "#FFFFFF", "SDK");
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="#0000FF"/>
            <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="600" fill="#FFFFFF">SDK</text>
        </svg>`;

        const cleanSvg = svg => svg.replace;

        expect(cleanSvg(circle.makeCircle())).toBe(cleanSvg(expectedSvg));
    });
});

describe("Triangle", () => {
    test("should create a new Triangle class", () => {
        const triangle = new Triangle("#0000FF", "#FFFFFF", "SDK");
        expect(triangle.color).toBe("#0000FF");
        expect(triangle.text).toBe("SDK");
        expect(triangle.textColor).toBe("#FFFFFF");
    });

    test("should create a triangle with the inputs provided", () => {
        const triangle = new Triangle("#0000FF", "#FFFFFF", "SDK");
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 0 0, 200 300, 200" fill="#0000FF"/>
            <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="600" fill="#FFFFFF">SDK</text>
        </svg>`;

        const cleanSvg = svg => svg.replace;

        expect(cleanSvg(triangle.makeTriangle())).toBe(cleanSvg(expectedSvg));
    });
});

describe("Square", () => {
    test("should create a new Square class", () => {
        const square = new Square("#0000FF", "#FFFFFF", "SDK");
        expect(square.color).toBe("#0000FF");
        expect(square.text).toBe("SDK");
        expect(square.textColor).toBe("#FFFFFF");
    });

    test("should create a square with the inputs provided", () => {
        const square = new Square("#0000FF", "#FFFFFF", "SDK");
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="0" width="200" height="200" fill="#0000FF"/>
            <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="600" fill="#FFFFFF">SDK</text>
        </svg>`;

        const cleanSvg = svg => svg.replace;

        expect(cleanSvg(square.makeSquare())).toBe(cleanSvg(expectedSvg));
    });
});