const readline = require('readline-sync');

class Riddle {
    constructor(id, name, riddleDescription, correctAnswer) {
        this.id = id
        this.name = name
        this.riddleDescription = riddleDescription
        this.correctAnswer = correctAnswer
    }

    ask() {
        console.log(`name: ${name} dscription: ${this.riddleDescription}`);
        while (true) {
            let answer = readline.question("enter your answer :")
            if (answer === this.correctAnswer) {
                return
            }
        }
    }
    recoredTime() {
        const d = new Date()
        let time = d.getSeconds()
        return time
    }
}

module.exports = { Riddle: Riddle }