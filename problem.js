function mileToKm(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const result = (mileToKm(2));
// console.log(result);

function inchToFeet(inch) {
    const feet = inch * 0.0833333;
    return feet;
}
// console.log(inchToFeet(5));


function money(dollar) {
    const bdTk = dollar * 120;
    return bdTk;
}

console.log(money(200));