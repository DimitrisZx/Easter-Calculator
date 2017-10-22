function start(){ //Gets the year and returns the dates to the form
  document.getElementById("orthodox").innerHTML = "Ορθόδοξο Πάσχα:"; //Resets default Value
  document.getElementById("catholic").innerHTML = "Καθολικό Πάσχα:"; // ^
  
  var pasxa = οrthPasCalc(parseInt(document.getElementById("inputfield").value)); //Gets Date
  var cathpasxa = cathPasCalc(parseInt(document.getElementById("inputfield").value)); //^
  
  document.getElementById("orthodox").innerHTML += " " + pasxa[0] + " " + pasxa[1] + "."; // Returns Date
  document.getElementById("catholic").innerHTML += " " + cathpasxa[0] + " " + cathpasxa[1] + "."; //^
}



function οrthPasCalc(E){

  var a = E % 19;//a = position of the year in the 19 year cycle (0-18)
  var T = (8 +11 * a) % 30; // Julian Epact
  var month = "Μαρτίου"; //Sets the month to March
  var K = Math.floor((E / 100) - (E / 400) - 2);//Calculates K

  var iPanArx = 21 + (53 - T) % 30;//Calculates the Julian Full-Moon

  if (iPanArx > 31) { //if the number is bigger the total of days in March, it is converted to respective day in April
    var iPanArxM = iPanArx - 31;
    month = "Απριλίου"; //and the month is set to April
  } else {
    var iPanArxM = iPanArx;} //else it remains the same but it is assigned to another variable

  var iPanTel = iPanArxM + K; //calculates the iPanTel, not sure what it is...
  var Y = (E + Math.floor(E/4) + iPanArx) % 7; //calculates the position Y of iPanTel in the week days (0-Sunday,1-Monday κτλ)
  var iPas = iPanTel + (7-Y); //calculates the Orthodox Easter date

  if (iPas > 30 && month == "Απριλίου") { //if number of April days > 30, they are converted to May days.
    month = "Μαΐου"; // and month is set to May
    var iPas = iPas - 30;
  } else if (iPas > 31 && month == "Μαρτίου"){ //else if number of March days > 31, they are converted to April days.
    month = "Απριλίου"; // and month is to April
    var iPas = iPas - 31;
  }
  if (E > 2099){iPas++;}else if(E < 2000){iPas++} //corrects an error for dates bigger than 2099
  var arr = []; //creates array and pushes the values inside of it, so they can be transfered to the HTML form
  arr.push(iPas);
  arr.push(month);
  return arr;
  

}
  
  

  
function cathPasCalc(E){
  
  var a = E % 19; //a = position of the year in the 19 year cycle (0-18)
  var Τ = (8 +11 * a) % 30;  // calculates the Epact
  var month = "Μαρτίου"; //Sets the month to March
  var Κ = Math.floor((E / 100) - (E / 400) - 2); //calculates K
  var v = [E/100];
  if (E >= 1800 && E <= 2099){
    var θ = 4;
  } else if (E > 2099){
    var θ = 5;
  }
  
  // ---- Γρηγοριανή Επακτή ---- //Calculates the Gregorian Epact
  var ΓΕ1 = Τ + θ - Κ;
  
  function mod(n) {
      var ΓΕ2 = ((n % 30) + 30) % 30;
      return ΓΕ2;
  };
  var ΓΕ = mod(ΓΕ1);
  if((ΓΕ == 24 || ΓΕ == 25) && a > 11){ΓΕ = ΓΕ++;}
  // ---- Γρηγοριανή Επακτή ----
  
  var gPan = 21 + (53 - ΓΕ) % 30; //Calculate the Gregorian Full-Moon
  
  if (gPan > 31) { //if March days > 31, they are converted to April days
    var gPanM = gPan - 31;
    month = "Απριλίου"; //and month is set to April
  } else {
    var gPanM = gPan;
  } //else it is assigned as itself on the new variable
    //console.log("gPan: " + gPan);
    
    var Y = (E + Math.floor(E/4) - Math.floor(E/100) + Math.floor(E/400) + gPan - 26) % 7; //calculates Y
    var gPas = gPanM + (7-Y); //calculates Catholic Easter date

    if (gPas > 31 && month == "Μαρτίου"){
      month = "Απριλίου";
      gPas = gPas - 31;
    }

    var arr1 = []; //creates array and pushes the values inside of it, so they can be transfered to the HTML form
    arr1.push(gPas, month);
    return arr1;
    
}
/* 
Debugging Tools - Οrthodox ~ 
----------------------------
console.log("Κ: "+ K);
console.log("Έτος " + E);
console.log("α: "+a);
console.log("Επακτή Τ: " + T);
console.log(month);

console.log("iPanArx: " + iPanArx);
console.log("iPanArxM: " + iPanArxM);
console.log("iPanTel: " + iPanTel);
console.log("Πάσχα: " + iPas + " " + month);
   
Debugging Tools - Catholic~
---------------------------
    console.log(E);
    console.log("α: " + a);
    console.log("Τ: " + Τ);
    console.log(month);
    console.log("Κ: " + Κ);
    console.log("θ: " + θ);
    console.log("ΓΕ: " + ΓΕ);
    console.log("Y: " + Y);
    console.log(ΓΕ1);
    console.log("gPan: " + gPan);
    console.log("gPanM: " + gPanM);
    console.log("gPas: " + gPas);
    console.log("------------");
    
Testing Loop ~
--------------------------
for (var i = 2000; i <= 2060; i = i + 1){
  console.log(cathPasCalc(i) + i + " Καθ");
  console.log(οrthPasCalc(i) + i + " Ορθ");
  console.log("------------");
}
*/

