let tempresult = document.getElementById("result");
let result = 0;
let operatr = null;
let secondnum;
let decimalnum;

function add(num){
  tempresult.textContent += num;
if(operatr=== null){
result = Number(tempresult.textContent); }

else {
  secondnum = Number(tempresult.textContent);
}
}

function erase(){
tempresult.textContent = "";
result = 0;
operatr = null;
}

function minus(){
    result = Number(Number(result) * (-1));
    tempresult.textContent = `${result}`;
}

function percent(){
  result = result * 0.01;
  tempresult.textContent = `${result}`;
}

function decimal(){
  tempresult.textContent += ".";
  result = Number(tempresult.textContent);
}

function divide(){
operatr = "/";
tempresult.textContent = "";
}

function multiply(){
  operatr = "*";
  tempresult.textContent = "";
}

function subtract(){
  operatr = "-";
  tempresult.textContent = "";
}

function sum(){
  operatr ="+";
  tempresult.textContent = "";
}


function calc(){
  switch (operatr){
    case "/":
      result /= secondnum;
      break;
    
    case "+":
      result += secondnum;
      break;
    
    case "-":
      result -= secondnum;
      break;

    case "*":
      result *= secondnum;
      break;
  }
  tempresult.textContent = `${result}`;
  operatr = null;
}
