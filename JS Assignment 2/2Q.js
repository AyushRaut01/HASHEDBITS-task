// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Cannot divide by zero";
        }
        break;
      default:
        result = "Invalid operator, Enter correct one.";
    }
  
    return result;
  }
  
  //OUTPUTS:
  console.log(calculator(5, 3, "+")); // Output: 8
  console.log(calculator(5, 3, "-")); // Output: 2
  console.log(calculator(5, 3, "*")); // Output: 15
  console.log(calculator(5, 0, "/")); // Output: "Cannot divide by zero"
  console.log(calculator(5, 3, "/")); // Output: 1.6666666666666667
  console.log(calculator(5, 3, "%")); // Output: "Invalid operator"