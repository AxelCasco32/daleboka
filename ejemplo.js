/*
var num = Number (prompt ("ingrese un numero")) 
if (num> 10
    10) {
    alert ("el numero que ingresaste es mayor a 10")
   }
   else {
      alert ("el numero que ingresaste es menor a 10")
   }
   */
  //ejemplo 2 
  /*
  var num = Number (prompt ("ingrese un numero"))
  if ( num % 2 === 0 )
  {
    alert ("el numero es par")
  }
  else {
    alert ("el numero es impar")
  }
*/

//EJEMPLO 3     

var divisa = prompt ("ingrese una divisa ")
var pesos = prompt ("ingrese los billetes")
var dolar = 750
var euro = 700
/*
if (divisa=== "dolar") {
    var res = Math.floor (pesos/dolar)
    alert ("tu cambio es " + res + "  USD")
} else { 
    if (divisa === "euros") {
    var res = Math.floor (pesos/euro)
    alert ("tu cambio es " + res + "  euros")
    } else {
        alert ("esa divisa no es valida")
    }

} */  
switch (divisa) {
    case "dolar":
      var res = Math.floor (pesos/dolar)
      alert ("tu cambio es " + res + "  USD")
      break;
    case "euro": 
     var res = Matheuro.floor (pesos/euro)
     alert ("tu cambio es " + res + " euros")
      break;

    default:
      alert ("esa divisa no es valida")
    break;
}