var firstNumber;
do {
  firstNumber = +prompt("ввести первое число?", 0);
} while (firstNumber <= 0 && firstNumber != null);

var secondNumber;
do {
  secondNumber = +prompt("ввести второе число?", 0);
} while (secondNumber <= 0 && secondNumber != null);

var sign = prompt('ввести символ -,+,*,/', '');
var result;
switch (sign) {
  case "-":
    result = firstNumber - secondNumber;;
    break;
  case "+":
    result = firstNumber + secondNumber;;
    break;
  case "*":
    result = firstNumber * secondNumber;;
    break;
  case "/":
    result = firstNumber / secondNumber;;
    break;
  default:
    alert( 'Я таких значений не знаю' );
}
alert (result);





//var firstNumber = +prompt('ввести число', '');
//if (firstNumber <= 100) {
//} else {
//  alert( 'А вот и неправильно!' );
//}
//var secondNumber = +prompt('ввести второе число', '');
//if (secondNumber <= 100) {
//} else {
//  alert( 'А вот и неправильно!' );
//}
//var sign = prompt('ввести символ -,+,*,/', '');
//  if (sign === "-") {
//  var a = firstNumber - secondNumber;
//  alert(a);
//} else if (sign === "+") {
//  var b = firstNumber + secondNumber;
//  alert(a);
//} else if (sign === "*") {
//  var c = firstNumber * secondNumber;
//  alert(a);
//} else if (sign === "/") {
//  var d = firstNumber / secondNumber;
//  alert(a);
//} else {
//  alert( 'Да, точно в этом году!' );
//}
//
//
//
//
//
//
//
//var firstNumber = +prompt('ввести число', '');
//
//var secondNumber = +prompt('ввести второе число', '');
//
//var sign = prompt('ввести символ -,+,*,/', '');
//var result;
//switch (sign) {
//  case "-":
//    result = firstNumber - secondNumber;;
//    break;
//  case "+":
//    result = firstNumber + secondNumber;;
//    break;
//  case "*":
//    result = firstNumber * secondNumber;;
//    break;
//  case "/":
//    result = firstNumber / secondNumber;;
//    break;
//  default:
//    alert( 'Я таких значений не знаю' );
//}
//alert (result);
//
//
//
//
//
//

//
//
//
//
//
//
//
//function getRandomNumber(min, max) {
//    return Math.floor(Math.random()*(max + 1 - min)) + min;
//}
//
//function getRandomArray(length, min, max) {
//    var arr = [];
//    for (var i = 0; i < length; i++) {
//        arr[i] = getRandomNumber(min, max);
//    }
//    return arr;
//}
//var a = getRandomArray(20, -50, 50);
//for (var i = 0; i < a.length; i++) {
//  if (i % 2 == 0);
//    alert( a[i] );
//}


