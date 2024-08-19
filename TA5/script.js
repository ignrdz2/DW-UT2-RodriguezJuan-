function leapYears(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

leapYears(2024);
leapYears(1900);
leapYears(2000);
