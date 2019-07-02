// Your code here
const saturdayFun = (string = "roller-skate") => `This Saturday, I want to ${string}!`;

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`;

const wrapAdjective = (wrap = "*") => (string) => `You are ${wrap + string + wrap}!`;

const Calculator = new Object()
  Calculator.add = (a,b) => a + b;
  Calculator.subtract = (a,b) => a - b;
  Calculator.multiply = (a,b) => a * b;
  Calculator.divide = (a,b) => a / b;

const actionApplyer = (integer, funcArr) => funcArr.reduce((result, func) => func(result), integer);
