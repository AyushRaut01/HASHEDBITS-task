import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (op) => {
    setOperation(op);
  };
  const handleCalculate = () => {
    let res;
    switch (operation) {
      case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        res = "";
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter number"
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <br></br>
        <button onClick={handleCalculate}>=</button>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default Calculator;
