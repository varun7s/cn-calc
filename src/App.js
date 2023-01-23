import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState("");//This variable will store the final result of the calculation.
  const [input, setInput] = useState("");//This variable will store the current input being entered by the user.

  function handleNumberClick(e) {  //This function is triggered when the user clicks on a number button. It updates the input state variable by concatenating the new input value to the existing input value.
    setInput(input + e.target.value);
  }

  function handleEqualClick() {  //This function is triggered when the user clicks on the '=' button. It uses the eval() function to evaluate the input as a mathematical expression. The input is passed through replace function to change x to * and ÷ to / before passing it to eval function. It then sets the result state variable to the evaluated value and clears the input state variable.
    const finalInput = input.replace("x", "*").replace("÷", "/");
    let evaluated = eval(finalInput);
    setResult(evaluated);
    setInput("");
  }

  function handleClearClick() { //This function is triggered when the user clicks on the 'Clear' button. It clears the result and input state variables.This function is triggered when the user clicks on the 'Clear' button. It clears the result and input state variables.
    setResult("");
    setInput("");
  }

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="input-display">{input}</div>
        <div className="output-display">{result}</div>
      </div>
      <div className="calculator-keys">
        <button value="7" onClick={handleNumberClick}>7</button>
        <button value="8" onClick={handleNumberClick}>8</button>
        <button value="9" onClick={handleNumberClick}>9</button>
        <button value="+" className="operator" onClick={handleNumberClick}>+</button>
        <button value="4" onClick={handleNumberClick}>4</button>
        <button value="5" onClick={handleNumberClick}>5</button>
        <button value="6" onClick={handleNumberClick}>6</button>
        <button value="-" className="operator" onClick={handleNumberClick}>-</button>
        <button value="1" onClick={handleNumberClick}>1</button>
        <button value="2" onClick={handleNumberClick}>2</button>
        <button value="3" onClick={handleNumberClick}>3</button>
        <button value="x" className="operator" onClick={handleNumberClick}>x</button>
        <button value="." onClick={handleNumberClick}>.</button>
        <button value="0" onClick={handleNumberClick}>0</button>
        <button onClick={handleEqualClick}>=</button>
        <button value="÷" className="operator" onClick={handleNumberClick}>÷</button>
        <button className="clear" onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;

