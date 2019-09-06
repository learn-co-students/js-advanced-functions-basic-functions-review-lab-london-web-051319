function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual = "*"){
    return function(adjective = 'special') {
        return `You are ${visual}${adjective}${visual}!`
    }
}

const Calculator = {}
Calculator.add = function(x,y){return x+y}
Calculator.subtract = function(x,y){return x-y}
Calculator.multiply = function(x,y){return x*y}
Calculator.divide = function(x,y){return x/y}

function actionApplyer(start, array) {
    let a = start
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
    return a
}