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
//second operation
var secondSymbol = "";
//result
var result = "";
//id in html of result
var resultScreen = document.getElementById("resultScreen");
//first number on html
var firstN = document.getElementById("firstN");
//symbol of operation on html
var oper = document.getElementById("oper");
//second number on html
var secondN = document.getElementById("secondN");

function readNumber(){
  //read the clicked number
  var clicked = this.textContent;
  //add the clicked number to the complete number converting it to string
  inputNumber = inputNumber + clicked.toString();
  //console.log(inputNumber);
  //if empty space is clicked not add to number
  if ($(this).hasClass("empty")){
    inputNumber = inputNumber - clicked.toString();
  } else if($(this).hasClass("operation")){
    symbol = this.textContent;
    //if click on operation don't add the operation symbol
    inputNumber = inputNumber.slice(0,inputNumber.length-1);
    //console.log("operacion "+ symbol);
    operations();
  }
}
$(".numpad").click(readNumber);
// fire the different operations between numbers
function operations(){
  if(!firstNumber && !secondNumber){
    firstNumber = Number(inputNumber);
    firstSymbol = symbol;
    inputNumber="";
    console.log("first number " + firstNumber + " first symbol " + firstSymbol);
  } else /*if(firstNumber && !secondNumber)*/{
    secondNumber = Number(inputNumber);
    console.log("secondNumber "+ secondNumber);
    result = Number(firstNumber);
    console.log("result as first Number "+ result);
    allOperations(firstSymbol);
    console.log("result of operation " + result);
    firstNumber = Number(result);
    console.log("first number as result again "+ firstNumber);
    firstSymbol = symbol;
    inputNumber="";
  }

}
function allOperations(symbol){
  switch (symbol) {
    case "+":
      result = Number(result) + Number(secondNumber);
      writeResult();
      console.log("resultado es: "+ result);
      break;
    case "-":
      result = Number(result) - Number(secondNumber);
      writeResult();
      console.log("resultado es: "+ result);
      break;
      case "x":
        result = Number(result) * Number(secondNumber);
        writeResult();
        console.log("resultado es: "+ result);
        break;
      case "÷":
        result = Number(result) / Number(secondNumber);
        writeResult();
        console.log("resultado es: "+ result);
        break;
      case "=":
        console.log("resultado es: "+ result);
        writeResult();
        break;
  }
}

function writeResult(){
  resultScreen.innerHTML = result;
}
//guardar en memoria el primer operando y el signo de operacion
//cuando se da otro signo de operacion se ejecuta la opearcion
//cuando
