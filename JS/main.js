var fstNumber = 0;
var sndNumber = 0;
var operator = 0;
var result = 0;
var fstStringSize = 0;

//numbers EventListeners
cero.addEventListener("click", function(){
  update(0);
});
one.addEventListener("click", function(){
  update(1);
});
two.addEventListener("click", function(){
  update(2);
});
three.addEventListener("click", function(){
  update(3);
});
four.addEventListener("click", function(){
  update(4);
});
five.addEventListener("click", function(){
  update(5);
});
six.addEventListener("click", function(){
  update(6);
});
seven.addEventListener("click", function(){
  update(7);
});
eight.addEventListener("click", function(){
  update(8);
});
nine.addEventListener("click", function(){
  update(9);
});
dot.addEventListener("click", function(){
  update('.');
});
//Operator EventListeners
difference.addEventListener("click", function(){
  operator='-';
  update('-');
});
plus.addEventListener("click", function(){
  operator='+';
  update('+');
});
multiply.addEventListener("click", function(){
  operator='*';
  update('*');
});
divide.addEventListener("click", function(){
  operator='/';
  update('/');
});
modulo.addEventListener("click", function(){
  operator='%';
  update('%');
});
reciprocal.addEventListener("click", function(){
  operator='1/x';
  reciprocal();
});
clear.addEventListener("click", function(){
  clearUP();
});

calculate.addEventListener("click", function(){
  sndNumber = document.getElementById("result").value.substring(fstStringSize ,document.getElementById("result").value.length);
  document.getElementById('result').value = 0;
  if(operator == '-'){
    result = parseFloat(fstNumber) - parseFloat(sndNumber);
    document.getElementById("lastResult").value = ''+fstNumber+''+operator+''+sndNumber+'= '+result;
  } else if(operator == '+'){
    result = parseFloat(fstNumber) + parseFloat(sndNumber);
    document.getElementById("lastResult").value = ''+fstNumber+''+operator+''+sndNumber+'= '+result;
  } else if(operator == '*'){
    result = parseFloat(fstNumber) * parseFloat(sndNumber);
    document.getElementById("lastResult").value = ''+fstNumber+''+operator+''+sndNumber+'= '+result;
  } else if(operator == '/'){
    result = parseFloat(fstNumber) / parseFloat(sndNumber);
    document.getElementById("lastResult").value = ''+fstNumber+''+operator+''+sndNumber+'= '+result;
  } else if(operator == '%'){
    result = parseFloat(fstNumber) % parseFloat(sndNumber);
    document.getElementById("lastResult").value = ''+fstNumber+''+operator+''+sndNumber+'= '+result;
  }

  operator=0;
  fstNumber=0;
  sndNumber=0;
  result=0;
});


//functions
function reciprocal(){
  result = 1/parseFloat(fstNumber);
  document.getElementById("lastResult").value = 'reciprocal('+fstNumber+')='+result;
}
//Button 'C'
function clearUP(){
  fstNumber = 0;
  sndNumber = 0;
  document.getElementById("result").innerHTML = 0;
  document.getElementById("result").value = 0;
  document.getElementById("lastResult").innerHTML = 0;
  document.getElementById("lastResult").value = 0;
} //works

function operatorCheck(x){
  if(x != 0 && x!=1 && x!=2 && x!=3 && x!=4 && x!=5 && x!=6 && x!=7 && x!=8 && x!=9 && x!='.'){
    return true;
  }
  return false;
}

function numberCheck(x){
  if(x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 || x==9){
    return true;
  }
  return false;
}

//only update the outputScreen
function update(x){
  //6 cases:
  // 1: result=0 and x=0 -> nothing happens
  // 2: result=0 and x=operator -> save 0 in fstNumber and operator in operator
  // 3: result=number and x=0 -> concatenate the 0 to the number
  // 4: result=number and x=operator -> save number in fstNumber and operator in operator; reset result
  // 5: result=0 and x=number -> result = x
  // 6: result=number and x=number -> concatenate the number

  //first case:
  if(document.getElementById("result").innerHTML == 0 && x == 0){}
  //second case:
  else if(document.getElementById("result").innerHTML == 0 && operatorCheck(x) ){
    console.log('second Case');
    fstNumber = 0;
    document.getElementById("lastResult").innerHTML = '0'+operator;
    document.getElementById("result").innerHTML = 0;
  }
  //third case:
  else if(document.getElementById("result").innerHTML != 0 && x == 0){
    console.log('third Case');
    document.getElementById("result").innerHTML += x;
  }
  //fourth case
  else if(document.getElementById("result").innerHTML != 0 && operatorCheck(x)){
    console.log('fourth Case');
    fstNumber = document.getElementById("result").innerHTML; //value.substring(0, document.getElementById("result").value.length);
    document.getElementById("lastResult").innerHTML = ''+fstNumber+''+operator;
    document.getElementById("result").innerHTML = 0;
  }
  //fifth case
  else if(document.getElementById("result").innerHTML == 0 && numberCheck(x)){
    console.log('fifth1 Case');
    document.getElementById("result").innerHTML = x;
  } else if(document.getElementById("result").innerHTML != 0 && numberCheck(x)){
    console.log('fifth2 Case');
    document.getElementById("result").innerHTML += x;
  }
  //sixth case
  else if(x=='.'){
    console.log('sixth case');
    document.getElementById("result").innerHTML += '.';
    console.log(document.getElementById("result").innerHTML.substring(document.getElementById("result").innerHTML.length-1,document.getElementById("result").innerHTML.length));

  }
}
