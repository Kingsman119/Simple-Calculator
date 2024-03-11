document.getElementById("btn").onclick = function () {
 const ope = document.getElementById('operator').value;
 const num1 = document.getElementById('val1').value; 
 const num2 = document.getElementById('val2').value; 

 if (ope == '+') {  
  res = parseInt(num1) + parseInt(num2);  
}  
else if (ope == '-') {  
  res = parseInt(num1) - parseInt(num2);  
}  
else if (ope == '*') {  
  res = parseInt(num1) * parseInt(num2);  
}  
else {  
  res = parseInt(num1) / parseInt(num2); 
}  

  document.getElementById("res").innerHTML = "Result is " + res  ;
};
