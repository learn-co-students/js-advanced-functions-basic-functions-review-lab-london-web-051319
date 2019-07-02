// Your code here
function saturdayFun(string = 'roller-skate') {
    return `This Saturday, I want to ${string}!`
};

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
};

function wrapAdjective(style = "*") {
    return function(string = "special") {
        return `You are ${style}${string}${style}!`
    };
};

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }
  
  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }