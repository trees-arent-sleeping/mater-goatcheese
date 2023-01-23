class creatureOne {
    constructor(name, hunger, rot, boredom, age) {
        this.name = name;
        this.hunger = 1;
        this.rot = 1;
        this.boredom = 0;
        this.age = 0;
    }
}


let creatureName = "ro"//prompt("What is your creature's name?")
let creatureProtagonist = new creatureOne(creatureName)
let creatureStats = document.getElementById("stats")
let hand = document.getElementById("fingerTime")


let daysDisplay = document.getElementById("days")
let daysNum = 0
degrees = 0

function updateStats() {
    creatureStats.children[0].innerHTML = `Hunger: ${creatureProtagonist.hunger}`
    creatureStats.children[1].innerHTML = `Rot: ${creatureProtagonist.rot}`
    creatureStats.children[2].innerHTML = `Boredom: ${creatureProtagonist.boredom}`
    creatureStats.children[3].innerHTML = `Age: ${creatureProtagonist.age}`
}

function passTime() {
    degrees += 6
    hand.style.transform = `rotate(${degrees}deg)`
    daysNum += 3.75
    daysDisplay.innerHTML = `Days: ${Math.floor(daysNum)}`;
    if (degrees % 378 == 0) {
        creatureProtagonist.age +=1
        creatureProtagonist.boredom +=2
        creatureProtagonist.rot +=3
    }
    if (daysNum % 112.5 == 0) {
        creatureProtagonist.hunger += 1
    }
    hand.style.filter = `hue-rotate(${degrees}deg)`
    updateStats()
}
setInterval(passTime, 250)

