const readline = require("readline-sync")

class MultipleChoiceRiddle extends Riddle {
    constructor(id, name, riddleDescription, correctAnswer) {
        super(id, name, riddleDescription, correctAnswer)
        this.choises = []

    }
    display() {
        console.log("options : ");
        for (let i = 0; i < this.choise.length; i++) {
            console.log(`choise : ${i}) ${this.choises[i]}`);
        }
    }

    checkAnswer() {
        let choise = readline.question("enter your choise :")
        if (choise === this.correctAnswer) {
            console.log("Correct!");
            return
        }
    }
}