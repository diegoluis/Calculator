//store the numbers as the user types them
var inputNumber = "";
//store the whole number the user typed
var firstNumber = "";
//store the second number
var secondNumber = "";
//store the symbol
var symbol = "";
//first operation
var firstSymbol = "";
//result
var result = "";
//id in html of result
var resultScreen = document.getElementById("resultScreen");


function readNumber(){
  //read the clicked number
  var clicked = this.textContent;
  //add the clicked number to the complete number converting it to string
  inputNumber = inputNumber + clicked.toString();
  //write what is clicked to the screen
  resultScreen.innerHTML = inputNumber;
  //console.log(inputNumber);
  //if empty space is clicked not add to number
  if ($(this).hasClass("empty")){
    inputNumber = inputNumber - clicked.toString();
    resultScreen.innerHTML = inputNumber;
  } else if($(this).hasClass("operation")){
    symbol = this.textContent;
    //if click on operation don't add the operation symbol
    inputNumber = inputNumber.slice(0,inputNumber.length-1);
    resultScreen.innerHTML = inputNumber;
    if($(this).is('#kPercent')){
      //percentage is a special case, that works with only one number
      result = Number(inputNumber) / 100;
      writeResult();
    }
    operations();
  } else if($(this).hasClass('delete')){
    //clear the screen
    inputNumber = "";
    resultScreen.innerHTML = "&nbsp;";
    //if is AC clear the variables
    if($(this).is('#kAc')){
      inputNumber = "";
      firstNumber = "";
      secondNumber = "";
      result = "";
      resultScreen.innerHTML = "&nbsp;";
    }
  }
}
$(".numpad").click(readNumber);
// fire the different operations between numbers
function operations(){
  //when clicking the first number
  if(!firstNumber && !secondNumber){
    //fill the first number
    firstNumber = Number(inputNumber);
    //store the operation
    firstSymbol = symbol;
    //clear the input
    inputNumber="";
  } else{
    //in the rest of the occasions
    //fill the second number
    secondNumber = Number(inputNumber);
    //the first number is the result
    result = Number(firstNumber);
    //execute the operation
    allOperations(firstSymbol);
    //update the first number
    firstNumber = Number(result);
    //store the operation
    firstSymbol = symbol;
    //clear the input
    inputNumber="";
  }

}
//execute the operations according to the symbol selected
function allOperations(symbol){
  switch (symbol) {
    case "+":
      result = Number(result) + Number(secondNumber);
      writeResult();
      break;
    case "-":
      result = Number(result) - Number(secondNumber);
      writeResult();
      break;
      case "x":
        result = Number(result) * Number(secondNumber);
        writeResult();
        break;
      case "÷":
        result = Number(result) / Number(secondNumber);
        writeResult();
        break;  
      case "%":
        result = Number(result) / 100;
        writeResult();
        break;
      case "=":
        writeResult();
        break;
  }
}

//write the result to the html
function writeResult(){
    resultScreen.innerHTML = result;
}

//falta porcentaje,
//limitar numero de decimales
