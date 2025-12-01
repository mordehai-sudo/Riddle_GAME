const readline = require('readline-sync');
const { riddles } = require("./riddles/r1")
const Riddle = require("./classes/riddle")
const play = () => {
   console.log("Walcome to Riddle Game !");
   const riddleArr = loadRiddles()
   for(let  i = 0 ; i < riddleArr.length;i++){
        let startTime = riddleArr[i].recoredTime();
        riddleArr[i].ask();
        let endTime  = riddleArr[i].recoredTime();
        let diffTime = startTime - endTime;
        
   }

    const name = readline.question("Whate is your name: ")
    console.log(name);

}

const loadRiddles = () => {
    const arr = []
    for (let i = 0; i < riddles.length; i++) {
        let { id, name, correctAnswer, taskDescription } = riddles[i]
        arr.push(new Riddle(id,name,taskDescription,correctAnswer))

    }
    return arr
}

play()