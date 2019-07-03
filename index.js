// Your code here
function saturdayFun(activity = 'roller-skate')
{
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(office = 'go to the office')
{
    return `This Monday, I will ${office}.`
}

function wrapAdjective(nothing = '*'){
    return function innerFunction(word='special'){
        return `You are ${nothing}${word}${nothing}!`
    }
}

const Calculator = {
    add: function(a,b)
    {
       return a + b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    }
};

function actionApplyer(start, functions_array){
    let a = start;
    for(let i=0;i < functions_array.length;i++){
        a = functions_array[i](a)
    }
    return a
}