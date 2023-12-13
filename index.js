// code your solution here
function saturdayFun(funActivity="roller-skate"){
  return`This Saturday, I want to ${funActivity}!`;
  }
  console.log(saturdayFun()); 
  console.log(saturdayFun("bathe my dog"));

const mondayWork=function(work="go to the office"){
    return`This Monday, I will ${work}`;
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(flair = "*") {
        return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
    
  } 
const encouragingPromptFunction = wrapAdjective("!!!");
