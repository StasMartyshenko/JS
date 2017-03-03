"use strict"
function sort(a, b) {
  var a = a.toLowerCase();
  var b = b.toLowerCase();
    if (a > b)
      return 1;
    if (a < b)
      return -1;
    else
      return 0;
  }

var array = ["яблоко", "11", "английский", "груша", "ворона", "ананас", "4", "апельсин", "ворон", "а", "Япония", "Англия", "255"];
alert(array.sort(sort));


var a = ["яблоко", "11", "английский", "груша", "ворона", "ананас", "4", "апельсин", "ворон", "а", "Япония", "Англия", "255"];
a.sort(function(a, b) { return a - b; });
alert(a);