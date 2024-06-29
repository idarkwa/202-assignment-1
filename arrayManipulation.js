// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers)); // Output: [3, 4, 9, 16, 15]

// arrayManipulation.js

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
const strings = ["Hello", "World", "JavaScript"];
const processedNumbers = processArray([1, 2, 3]);
console.log(formatArrayStrings(strings, processedNumbers)); // Output: ["hello", "WORLD", "javascript"]
