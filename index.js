// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*") {
  return function(adjective = "special") {
    return `You are ${symbol}${adjective}${symbol}!`
  }
}

const Calculator = {
  "add": function add(num1, num2){
    return num1 + num2
  },
  "subtract": function subtract(num1, num2) {
    return num1 - num2
  },
  "multiply": function subtract(num1, num2) {
    return num1 * num2
  },
  "divide": function subtract(num1, num2) {
    return num1 / num2
  }
}

function actionApplyer(startingNum, functions) {
  if (functions.length > 0) {
    let result = startingNum;
    for(const func of functions) {
      result = func(result);
    }
    return result

  } else {
    return startingNum;
  }
}