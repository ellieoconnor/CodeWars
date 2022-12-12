//CALCULATE BMI
/*
Write a function bmi that calculates body mass index (bmi = weight / height**2)
if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//My solutions
function bmi(weight, height) {
    let bmiTotal = weight / Math.pow(height, 2);
    if(bmiTotal <= 18.5){
      return "Underweight";
    }else if(bmiTotal <= 25.0){
      return "Normal";
    }else if(bmiTotal <= 30.0){
      return "Overweight"
    }else if(bmiTotal > 30){
      return "Obese";
    }
  
  }