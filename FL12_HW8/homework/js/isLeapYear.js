function isLeapYear(date) {
    let myDate = new Date(date);
    let year = myDate.getFullYear();
    const HANDRED_LEAP_YERS = 400;
    const HANDRED_NOT_LEAP_YERS = 100;
    const SIMPLE_LEAP = 4;
    if (isNaN(year)) {
        console.log('invalid Date');
    } else if (
        year % HANDRED_LEAP_YERS === 0 ||
        (year % SIMPLE_LEAP === 0 && year % HANDRED_NOT_LEAP_YERS !== 0)
    ) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

isLeapYear(12312444);