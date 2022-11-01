function saturdayFun(activity = "roller-skate"){
     return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(workActivity = "go to the office"){
    return `This Monday, I will ${workActivity}.`;
};

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
  }