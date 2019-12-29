function makeNumber(text) {
    let myNumber = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 0 || text[i] <= 9) {
            myNumber = myNumber + text[i];
        }
    }
    return myNumber;
}

makeNumber('l1k2h1p24');