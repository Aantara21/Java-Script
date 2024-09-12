function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0  || income < expenses) {
    return "Invalid Input";
  }

  const difference = income - expenses;
  const tax = difference * .20;
  return tax;
}

function sendNotification(email) {
    let validCheck = email.indexOf("@");
    if (validCheck===-1) {
        return "Invalid Email";
    }
    const first = email.split("@");
    const userName = first[0];
    const domainName= first[1];
    const result = userName+' sent you an email from '+domainName;   
    return result;
}

function checkDigitsInName(text) {
    if(typeof text !== 'string') {
        return "Invalid Input";
    }
 
    for(let i=0; i<text.length; i++) {
        const c = text[i];
        if(c >= '0' && c <= '9') {
            return true;
        }
    }
    return false;
}
function calculateFinalScore(obj) {
  if (typeof obj !== 'object'){
   return 'Invalid Input';
  }
 
  let testScore = obj.testScore;
  let grade = obj.schoolGrade;
  let quota = 0;
  if(obj.isFFamily===true){
   quota=20;
  }
 
 let total = testScore+grade + quota ; 
 if (total>=80){
   return true;
   }
 else{
   return false;
 }
 }


function  waitingTime(waitingTimes  , serialNumber) {
  if ( Array.isArray(waitingTimes)===false || typeof serialNumber !== "number" ){
return 'Invalid Input';
  }
  
  let sum = 0; 
  for (const add of waitingTimes){
    sum = sum + add;
  }

  const people = waitingTimes.length;
  const aveTime = sum / people ; 
  const roundNumber = Math.round(aveTime);

const remaining = serialNumber - 1;
const newPeople = remaining - people;

const myTime = newPeople * roundNumber;
return myTime;

}
console.log(waitingTime([12,4,12,16,8]  , 7))