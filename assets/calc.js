//jshint esversion:6

function createOutput(){
  //h2
  //body
  //definition
  //value

};

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

function poundsToKilograms(pounds) {
  // 1 pound = 2.2046 kg
  var result = pounds / 2.2046;
};
