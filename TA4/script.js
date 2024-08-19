function sumAll(a, b) {
    let suma = 0;
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    for (let i = a; i <= b; i++) {
        suma += i;
    }
    console.log(suma);
}

sumAll(1, 5); 
