class creatureOne {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 0;
        this.age = 0;
    }
}


let creatureName = prompt("What is your creature's name?")
let creatureProtagonist = new creatureOne(creatureName)

