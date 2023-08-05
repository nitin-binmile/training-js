function calculatorBMI(weightKg, heightM) {
  if (isNaN(weightKg) || isNaN(heightM) || heightM <= 0 || weightKg <= 0) {
    return "Please enter valid values for weight and height";
  }
  const bmi = weightKg / (heightM * heightM);
  let result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result = "perfect";
  } else if (bmi >= 25 && bmi < 29.9) {
    result = "over weight";
  } else {
    result = "Obese";
  }
  return `you bmi ${bmi} and  you are ${result}`;
}

console.log(calculatorBMI(1,2));
