function getMin() {
    let minNum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (minNum > arguments[i]) {
            minNum = arguments[i];
        }
    }
    return minNum;
}

getMin(12, 13, 4, 5, 6, 7);