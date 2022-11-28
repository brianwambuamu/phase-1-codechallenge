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