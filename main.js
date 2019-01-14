alert("Calculator!");



var activeCal = true;

while (activeCal) {
    var firstNum = parseInt(prompt("Press your first number"));
    var symbol = prompt("Enter your opertator")
    var secondNum = parseInt(prompt("Press your second number"));
    function BasicCalculate(num1, num2, sign) {
        var total;
        if (sign === "+") {
            return (num1 + num2);
        }
        if (sign === "-") {
            return (num1 - num2);
        }
        if (sign === "*") {
            return (num1 * num2);
        }
        if (sign === "/") {
            return (num1 / num2);
        }

    }
    var sum = BasicCalculate(firstNum, secondNum, symbol);
    alert(sum);

    var choice = prompt("will you like to continue -- yes/no");
    if (choice === "yes") {
        activeCal = true;
        var sum = BasicCalculate(firstNum, secondNum, symbol);
        alert(sum);
    } else if (choice === "no") {
       var other =  prompt("want to try my BMI calculator ? yes/no");
        if(other === "yes")
        {
            alert("BMI calculator in progress");
        }else if (other === "no"){
            activeCal = false;
        }
    }
}