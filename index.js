// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
mondayWork()

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
    add: function(a = 1, b = 3) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a = 10 , b = 5) {
        return a / b;
    }
}

let actionApplyer = function(start, ray) {
    let a = start

    for (let i = 0; i < ray.length; i++) {
        a = ray[i](a)
    }

    return a
}