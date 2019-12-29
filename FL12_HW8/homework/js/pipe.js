function pipe(value) {
    for (let i = 1; i < arguments.length; i++) {
        value = arguments[i](value);
    }
    return value;
}
pipe(1);