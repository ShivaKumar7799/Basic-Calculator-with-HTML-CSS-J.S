function calc(){
        var number1 = parseInt(document.getElementById("number1").value);
        var number2 = parseInt(document.getElementById("number2").value);
        var oper = document.getElementById("operators").value;

        if(oper == "+"){
                document.getElementById("result").value = number1 + number2;
        }
        if(oper == "-"){
                document.getElementById("result").value = number1 - number2;        
        }
        if(oper == "*"){
                document.getElementById("result").value = number1 * number2;
        }
        if(oper == "/"){
                document.getElementById("result").value = number1 / number2;
        }
     
}
