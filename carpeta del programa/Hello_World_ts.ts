import promptSync from 'prompt-sync';
const prompt = promptSync();

/// Functions

// Exersice 1

// Basic named function
function circleArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
}

const reqRadius = 5;
const resultArea = circleArea(reqRadius);
console.log(`This is the area ${resultArea} when the circle radius is ${reqRadius}`);

// Anonymous function
const perimeter = function(width: number, height: number): number {
    return (width * 2) + (height * 2);
};

const reqDimensions = [4, 6];
const resultPerimeter: number = perimeter(reqDimensions[0], reqDimensions[1]);
let messageToShow = `The perimeter of width ${reqDimensions[0]} and height ${reqDimensions[1]} is: ${resultPerimeter}`;
console.log(messageToShow)

// Arrow function
const cubeArea = (side: number): number => {
    return Math.pow(side, 3);
}

const reqSide = 7;
console.log(`The volume of a cube which side is ${reqSide} is: ${cubeArea(reqSide)}`);

const texto = 'texto';

