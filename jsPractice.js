const money = 1000;
const bill = 700;
const back = money - bill ;
// console.log (back);

const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla = 99.50;
const sum = Mathematics + Biology + Chemistry + Physics + Bangla;
const avrg = sum / 5;
// console.log (avrg.toFixed(2));

const reminder = 119 % 5;
// console.log('the remainder', reminder);
let brgr = 450;
if (brgr > 500) {
//     console.log ('free Coke');
// }
// else{
//     console.log (' Else Coke: 30tk');
}


let weight  = 70;
let height = 1.70;

let BMI = weight  / (height)^2;
if (BMI < 18.5) {
    console.log('you are underweight.');
}
else if (BMI >= 18.5 && BMI <=24.9) {
    console.log('you are normal.');
} 
else if (BMI >=25 && BMI <= 29.9) {
    console.log('you are overweight.');
} 

else {
    console.log ('Otherwise, you are obese.');
}
