// Your code here
function saturdayFun(string="roller-skate"){
   return `This Saturday, I want to ${string}!`
}

function mondayWork(string='go to the office'){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(flair="*"){
    return function(string="special"){
        return `You are ${flair+string+flair}!`
    }
}

const Calculator = {
    add: function add(num1, num2){
        return num1 + num2
    },
    subtract: function subtract(num1, num2){
        return num1 - num2
    },
    multiply: function multiply(num1, num2){
        return num1 * num2
    },
    divide: function divide(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(int, arr){
    let applied = int
    for (let each of arr) {
        applied = each(applied)
    }
    return applied
}
