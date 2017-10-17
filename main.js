


function start(){
  document.getElementById("orthodox").innerHTML = "Ορθόδοξο πάσχα:";
  document.getElementById("catholic").innerHTML = "Καθολικό πάσχα:";
  var pasxa = οrthPasCalc(parseInt(document.getElementById("inputfield").value));
  var cathpasxa = cathPasCalc(parseInt(document.getElementById("inputfield").value));
  console.log(pasxa);
  document.getElementById("orthodox").innerHTML += " " + pasxa[0] + " " + pasxa[1] + ".";
  document.getElementById("catholic").innerHTML += " " + cathpasxa[0] + " " + cathpasxa[1] + ".";
}



function οrthPasCalc(E){

  
  var a = E % 19; 
  var T = (8 +11 * a) % 30; 
  var month = "Μαρτίου";
  var K = Math.floor((E / 100) - (E / 400) - 2);

  var iPanArx = 21 + (53 - T) % 30;

  if (iPanArx > 31) {
    var iPanArxM = iPanArx - 31;
    month = "Απριλίου";
  } else {
    var iPanArxM = iPanArx;}

  var iPanTel = iPanArxM + K;
  var Y = (E + Math.floor(E/4) + iPanArx) % 7;
  var iPas = iPanTel + (7-Y);

  if (iPas > 30 && month == "Απριλίου") {
    month = "Μαΐου";
    var iPas = iPas - 30;
  } else if (iPas > 31 && month == "Μαρτίου"){
    month = "Απριλίου";
    var iPas = iPas - 31;
  }
  console.log(iPas + " " + month + " " + E);
  if (E > 2099){iPas++;}
  var arr = [];
  arr.push(iPas);
  arr.push(month);
  console.log(arr);
  return arr;
  }
  
  

  /* 
Debugging Tools ~ 
---------------------
console.log("Κ: "+ K);
console.log("Έτος " + E);
console.log("α: "+a);
console.log("Επακτή Τ: " + T);
console.log(month);

console.log("iPanArx: " + iPanArx);
console.log("iPanArxM: " + iPanArxM);
console.log("iPanTel: " + iPanTel);
console.log("Πάσχα: " + iPas + " " + month);
*/
function cathPasCalc(E){
  
  var a = E % 19; 
  var Τ = (8 +11 * a) % 30; 
  var month = "Μαρτίου";
  var Κ = Math.floor((E / 100) - (E / 400) - 2);
  var θ = Math.floor(((E-1400)/100)*8/25)+3;
  
  // ---- Γρηγοριανή Επακτή ----
  var ΓΕ1 = Τ + θ - Κ;
  
  function mod(n) {
      var ΓΕ2 = ((n % 30) + 30) % 30;
      console.log("ΓΕ " + ΓΕ2);
      return ΓΕ2;
  };
  var ΓΕ = mod(ΓΕ1);
  if((ΓΕ == 24 || ΓΕ == 25) && a > 11){ΓΕ = ΓΕ++;}
  // ---- Γρηγοριανή Επακτή ----
  
  var gPan = 21 + (53 - ΓΕ) % 30;
  
  if (gPan => 31) {
    var gPanM = gPan - 31;
    month = "Απριλίου";
  } else {
    var gPanM = gPan;}
  
    var Y = (E + Math.floor(E/4) - Math.floor(E/100) + Math.floor(E/400) + gPan - 26) % 7;
    var gPas = gPanM + (7-Y);

    var arr1 = [];
    arr1.push(gPas, month);
    console.log(arr1);
    
    

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
    return arr1;
}

cathPasCalc(2016);
cathPasCalc(2017);
cathPasCalc(2018);
/*
  var iPanTel = iPanArxM + K;
  var Y = (E + Math.floor(E/4) + iPanArx) % 7;
  var iPas = iPanTel + (7-Y);

  if (iPas > 30 && month == "Απριλίου") {
    month = "Μαΐου";
    var iPas = iPas - 30;
  } else if (iPas > 31 && month == "Μαρτίου"){
    month = "Απριλίου";
    var iPas = iPas - 31;
  }
  console.log(iPas + " " + month + " " + E);
  if (E > 2099){iPas++;}
  var arr = [];
  arr.push(iPas);
  arr.push(month);
  console.log(arr);
  return arr; */
  