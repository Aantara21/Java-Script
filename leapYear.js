function leapYear(year) {
    if (year % 4 === 0) {
     return true;        
    }
    else{
        return false;
    }

}

// console.log(leapYear(2064));

function leapYear(year) {
    if (year % 100 !== 0 && year % 4) {
     return true;        
    }
    else{
        return false;
    }

}

console.log(leapYear(2044));
console.log(leapYear(2034));
console.log(leapYear(2084));
console.log(leapYear(2074));
console.log(leapYear(2064));