# phase-1-codechallenge
below is how i came up with prompt commands to solve my code challenge 
# questionone
```bash
#Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade

function gradeConverter(){
    let studentMarks = prompt("Input Your Marks");
    // 100 - 79 > Grade A
    //78 - 60 > Grade B
    //55 - 49 > Grade C
    //48 - 40 > Grade D
    //39 - 0 > Grade E
if(studentMarks > 79){
    return `A`
}else if (studentMarks >= 60){
    return `B`
}else if (studentMarks >= 49){
    return `C`
}else if (studentMarks >= 40){
    return `D`
}else if (studentMarks <= 39){
    return `E`
}else {
    console.log("Invalid student's mark");
}
}
console.log("Student  Marks is:"+ studentMarks);
gradeConverter();
```

# questiontwo
```bash
#Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed 
limit (70), it should give the driver one demerit point and print the total number of demerit points.

//Write a program that takes as input the speed of a car e.g 80.
//If the speed is less than 70, it should print “Ok”.
//Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.
const prompt = require("prompt-sync")();
var speed = prompt("Enter your speed");
//Speed below 70
if (speed < 70 && speed >= 0) {
  console.log("Ok");
}
//For speed above 70
else if (speed > 70) {
  //for a linsense to be suspended a driver should have 12 demerit points
  //one demerit point comes by if the driver has 5km/hr above 70
  //therefore 12 demerit points willcome by if the driver has 60km/hr and above more than 70
  // 70 +60 = 130
  if (speed >= 130) {
    console.log("License suspended");
  }
// for the speeeds to be awarded points
  if (speed > 70 && speed < 130) {
    let points = 0;
    for (let i = 0; i < speed % 70; i += 5) {
      points++;
    }
    console.log(points);
  }
}
//For speeds below 0
else {
  console.log("Invalid speed");
}

```
# questionthree
```bash
#Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee 
(i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

//Net saalary calculator
let prebasicSalary = prompt("input basic salary");
let benefits = prompt("Input benefits");
let basicSalary = prebasicSalary - benefits;
//PAYE
if (basicSalary <= 24000) {
    paye = basicSalary / 10;
} else if (basicSalary >=24001 && basicSalary <=32333) {
    paye = basicSalary / 4;
} else if ((basicSalary > 32, 333)) {
    paye = (basicSalary = 3) / 10;
}
console.log(`Paye:$(paye)`);

//NHIF deduction
if (basicSalary >= 5999) {
    deductionN = 150;
} else if (basicSalary >= 6000 && basicSalary <=7999) {
    deductionN = 300;
} else if (basicSalary >= 8000 && basicSalary <=11999) {
    deductionN = 400;
} else if (basicSalary >= 12000 && basicSalary <=14999) {
    deductionN = 500;
} else if (basicSalary >= 15000 && basicSalary <=19999) {
    deductionN = 600;
} else if (basicSalary >= 20000 && basicSalary <=24999) {
    deductionN = 750;
} else if (basicSalary >= 25000 && basicSalary <=29999) {
    deductionN = 850;
} else if (basicSalary >= 30000 && basicSalary <=34999) {
    deductionN = 900;
} else if (basicSalary >= 35000 && basicSalary <=39999) {
    deductionN = 950;
} else if (basicSalary >= 40000 && basicSalary <=44999) {
    deductionN = 1000;
}else if (basicSalary >= 45000 && basicSalary <=49999) {
    deductionN = 1100;
} else if (basicSalary >= 50000 && basicSalary <=59999) {
    deductionN = 1200;
} else if (basicSalary >= 60000 && basicSalary <=69999) {
    deductionN = 1300;
} else if (basicSalary >= 70000 && basicSalary <=79999) {
    deductionN = 1400;
} else if (basicSalary >= 80000 && basicSalary <=89999) {
    deductionN = 1500;
} else if (basicSalary >= 90000 && basicSalary <=99999) {
    deductionN = 1600;
} else if (basicSalary >= 100000) {
    deductionN = 1700;
}
console.log(`NHIF:$(deductionN)`);

//NSSF deductions
let nssf = (basicSalary * 6) / 100;
console.log(`NSSF:${nssf}`);

let netSalary = basicSalary - paye - deductionN;
console.log(`Net Salary:${netSalary}`);
```
