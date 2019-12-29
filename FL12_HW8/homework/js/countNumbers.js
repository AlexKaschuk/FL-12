function makeNumber(text) {
    let myNumber = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 0 || text[i] <= 9) {
            myNumber = myNumber + text[i];
        }
    }
    return myNumber;
}

function countNumber(text) {
    let myString = makeNumber(text).split('');
    let myCounter = {};
    for (let i of myString) {
        myCounter[i] === undefined ? (myCounter[i] = 1) : myCounter[i]++;
    }
    console.log(myCounter);
}

countNumber('l1k2h1p24');