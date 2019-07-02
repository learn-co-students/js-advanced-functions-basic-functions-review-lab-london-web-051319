// Your code here

function saturdayFun(target="roller-skate") {
    return `This Saturday, I want to ${target}!`;
 }


function mondayWork(target="go to the office") {

    return `This Monday, I will ${target}.`; 

  }

  function wrapAdjective(visualFlair="*") {
      return function(target="special"){
          return `You are ${visualFlair}${target}${visualFlair}!`;
      }
  }

  const Calculator = {
      add: function () {
          return 1 + 3;
      }, 
      subtract: function() {
          return 1 - 3;
      },
      multiply: function() {
          return 1 * 3;
      }, 
      divide: function() {
          return 10 / 5;
      }
  }; 


function actionApplyer (start, array) {

    let x = start

    for (let i = 0; i < array.length; i++){
    
        x = array[i](x)
    }

    return x
}
