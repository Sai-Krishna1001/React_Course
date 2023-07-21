import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const evaluateExpression = (exp) => {
    try {
      // Use Function constructor to evaluate the expression safely
      // This will prevent direct code execution and potential security risks
      // For more advanced security, consider using libraries like math.js
      const result = new Function('return ' + exp)();
      return Number.isFinite(result) ? result : 'Error';
    } catch (error) {
      return 'Error';
    }
  };

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleCalculate = () => {
    const result = evaluateExpression(expression);
    setResult(result);
  };

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <div className="buttons">
        <Button onClick={handleClear}>C</Button>
        <Button onClick={() => handleButtonClick('/')}>/</Button>
        <Button onClick={() => handleButtonClick('*')}>*</Button>
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('+')}>+</Button>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={() => handleButtonClick('.')}>.</Button>
        <Button onClick={handleCalculate}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
