function convertToRoman(num) {
  var numVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romVal = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var result ='';

 for (var i = 0; i < numVal.length; i++){
   while (numVal[i] <= num){
     result += romVal[i];
     num -= numVal[i];
     console.log("index: " + i + " result: " + result + " num: " + num);
   }
 }	
 return result;
}