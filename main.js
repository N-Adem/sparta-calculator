alert("Calculator!");
var activeCal = true;
var advanced = false;
var advTemp = false;
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
        var other = prompt("want to try my BMI calculator or temperature converter ? PRESS 1 or 2");
        if (other === "1") {
            alert("BMI calculator in progress");
            advanced = true;
            // Advanced calculator
            while (advanced === true) {
                var weight = prompt("Input your weight in KG please.");
                var height = prompt("Input your height in meters please.");
                function BMIcal(kg, metre2) {
                    var total = kg / (metre2 * metre2);
                    return total;
                }
                var Bmitotal = BMIcal(weight, height);
                alert(Bmitotal);
                break;
            }
        } else if (other === "2") {
            activeCal = false;
            advTemp = true;
            var sum = BasicCalculate(firstNum, secondNum, symbol);
            alert(sum);
        }
    }
}
