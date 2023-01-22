class creatureOne {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 0;
        this.age = 0;
    }
}


let creatureName = "ro"//prompt("What is your creature's name?")
let creatureProtagonist = new creatureOne(creatureName)
let creatureStats = document.getElementById("stats")
let hand = document.getElementById("fingerTime")
creatureStats.children[0].innerHTML = `Hunger: ${creatureProtagonist.hunger}`
creatureStats.children[1].innerHTML = `Sleepiness: ${creatureProtagonist.sleepiness}`
creatureStats.children[2].innerHTML = `Boredom: ${creatureProtagonist.boredom}`
creatureStats.children[3].innerHTML = `Age: ${creatureProtagonist.age}`

degrees = 0
function passTime() {
    degrees += 0.1875
    hand.style.transform = `rotate(${degrees}deg)`
}
setInterval(passTime, 31.25)

console.log(creatureStats.children[0])