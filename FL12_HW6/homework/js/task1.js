let a = parseFloat(prompt('enter a'));
let b = parseFloat(prompt('enter b'));
let c = parseFloat(prompt('enter c'));
const coefficient_4 = 4;
const coefficient_2 = 2;
if (isNaN(a) || a === 0 || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    let D = b * b - coefficient_4 * a * c;
    if (D < 0) {
        console.log('no solution');
    } else if (D === 0) {
        console.log(`x=${-b / (coefficient_2 * a)}`);
    } else {
        console.log(
            `x1=${(-b + Math.sqrt(D)) / (coefficient_2 * a)} and x2=${(-b -
        Math.sqrt(D)) /
        (coefficient_2 * a)}`
        );
    }
}