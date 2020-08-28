//jshint esversion:6

// BMI Calculator
function calcBMI(metric) {
  metric = true;

  var weight = 100;
  var height = 4;
  var bmi = weight / height;

  if (metric == true) {
    // BMI = (Weight in Kilograms / (Height in Meters x Height in Meters))
    alert(bmi);
  } else {
    // BMI = (Weight in Pounds / (Height in inches x Height in inches)) x 703
  };
};
