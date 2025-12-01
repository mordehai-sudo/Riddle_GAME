class Player{
    constructor(name){
        this.name = name
        this.times = []
    }

    showState(){
        let total = this.times.reduce((s,a) => s + a,0)
        let len = this.times.length
        let avg = total / len
        console.log(`the totla time : ${total} the averagr : ${avg}`);
    }

}