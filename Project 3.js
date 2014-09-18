var b = require('bonescript');
var awValue = 0.01;
var awDirection = 1;
var awPin = "P8_13";

b.pinMode(awPin, b.OUTPUT);
b.pinMode('P8_19', b.INPUT);
b.pinMode('P9_14', b.INPUT);
setInterval(check,100);

function check(){
b.digitalRead('P8_19', checkButton);
b.digitalRead('P9_14', checkButton2);
}
function checkButton(x) {
    console.log (x.value);
    console.log (awValue);
        if(x.value == 0){
            b.analogWrite(awPin, awValue);
            awValue = awValue + (awDirection*0.01);
            if (awValue > 1) {
                awValue = 1 + (-1*0.01);
            }
        }       
  }
function checkButton2(x) {
    console.log ('test' + x.value);
    console.log (awValue);
        if(x.value == 0){
            awValue = awValue + (-1*0.01);
            b.analogWrite(awPin, awValue);
            if (awValue <= 0.01) {
                awValue = 0 + (1*0.01);
            }
    //        awValue = awValue + (awDirection*0.01);
        }
  }

