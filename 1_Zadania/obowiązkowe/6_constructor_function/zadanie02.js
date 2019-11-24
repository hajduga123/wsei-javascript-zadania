var Calculator = function() {
    this.operationHistory =[];
}

Calculator.prototype.add = function (num1, num2){
    var result = num1 + num2;
    this.operationHistory.push ("added" + num1 + "to" + num2 + "got" + result)
    return result;
}
Calculator.prototype.multiply = function (num1, num2){
    var result = num1 * num2;
    this.operationHistory.push("multiplied" + num1 + "with" + num2 + "got" + result)
    return result;
}
Calculator.prototype.substract = function (num1, num2){
    var result = num1 * num2;
    this.operationHistory.push("subtracked" + num1 + "from" + num2 + "got" + result)
    return result;
}
Calculator.prototype.divide = function (num1, num2){
    var result = num1 * num2;
    this.operationHistory.push("mdivided" + num1 + "by" + num2 + "got" + result)
    return result;
}
Calculator.prototype.printOperations = function(){
    console.table(this.operationHistory);
}
Calculator.prototype.clearOperations = function(){
    this.operationHistory =[];
}
var calc = new Calculator();

calc.add(1,2);
calc.multiply(2,3);
calc.substract(6,3);
calc.divide(2,4);
calc.printOperations();
calc.clearOperations();
calc.printOperations();