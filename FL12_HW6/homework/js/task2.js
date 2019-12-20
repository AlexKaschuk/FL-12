let a = parseInt(prompt('enter a'));
let b = parseInt(prompt('enter b'));
let c = parseInt(prompt('enter c'));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
    console.log('Triangle doesn’t exist');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
    console.log('Triangle doesn’t exist');
} else if (a + b <= c || a + c <= b || b + c <= a) {
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
} else if (a === b && b === c) {
    console.log('Equilateral triangle');
} else if (a === b || b === c || c === a) {
    console.log('Isosceles triangle');
} else if (a !== b && b !== c && a !== c) {
    console.log('Scalene triangle');
}