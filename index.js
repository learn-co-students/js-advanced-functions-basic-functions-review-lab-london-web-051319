// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(str = "*") {
  return function(adj = 'special') {
    return `You are ${str}${adj}${str}!`;
  }
}

let Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide:  function(a, b) {
    return a / b;
  }
};

function actionApplyer(int, arr) {
 let n = int;
  for (let fn of arr) {
    n = fn(n);
  }

  return n;
}
