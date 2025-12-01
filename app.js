const readline = require("readline-sync");
const { Player } = require("./classes/Player");
const { Riddle } = require("./classes/Riddle");
const { riddles } = require("./riddles/r1")


const play = () => {
    console.log("Welcome to the Riddle Game!");
    const name = readline.question("What is your name? ")
    const player = new Player(name)
    const riddleArr = loadRiddles()
    for (let i = 0; i < riddleArr.length; i++) {
        let startTime = riddleArr[i].recoredTime();
        riddleArr[i].ask();
        let endTime = riddleArr[i].recoredTime();
        let diffTime = startTime - endTime;
        player.times.push(diffTime)
    }
    player.showState();


}

const loadRiddles = () => {
    const arr = []
    for (let i = 0; i < riddles.length; i++) {
        let { id, name, correctAnswer, taskDescription } = riddles[i]
        arr.push(new Riddle(id, name, taskDescription, correctAnswer))

    }
    return arr
}

play()