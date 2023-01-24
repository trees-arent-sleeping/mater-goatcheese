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
let head = document.getElementById("fishHead")

let daysDisplay = document.getElementById("days")
let daysNum = 0

let controls = document.getElementById("controls")
function splashButton(x) {
    creatureStats.children[x].style.filter = `hue-rotate(${Math.random()*360}rad)`;
    controls.children[x].style.filter = `hue-rotate(${Math.random()*360}deg)`;
}

controls.children[0].addEventListener("click", ()=>{
    if (creatureProtagonist.hunger != 0) {
        creatureProtagonist.hunger --;
        splashButton(0)
    }

})
controls.children[1].addEventListener("click",()=>{
    if (creatureProtagonist.rot != 0) {
        creatureProtagonist.rot --;
        splashButton(1);
    }
})
controls.children[2].addEventListener("click",()=>{
    if (creatureProtagonist.boredom != 0) {
        creatureProtagonist.boredom --;
        splashButton(2);
    }
});


function updateStats() {
    creatureStats.children[0].innerHTML = `Hunger: ${creatureProtagonist.hunger}`
    creatureStats.children[0].style.transform = `scale(${1+creatureProtagonist.hunger/20})`

    creatureStats.children[1].innerHTML = `Rot: ${creatureProtagonist.rot}`
    creatureStats.children[1].style.transform = `scale(${1+creatureProtagonist.rot/20})`

    creatureStats.children[2].innerHTML = `Boredom: ${creatureProtagonist.boredom}`
    creatureStats.children[2].style.transform = `scale(${1+creatureProtagonist.boredom/20})`
    creatureStats.children[3].innerHTML = `Age: ${creatureProtagonist.age}`
}

degrees = 18
function passTime() {
    degrees += 24
    hand.style.transform = `rotate(${degrees}deg)`
    if (daysNum % 75 == 0) {
        creatureProtagonist.rot += 1
    }
    hand.style.filter = `hue-rotate(${daysNum}deg)`
}
setInterval(()=>{
    daysNum += 1
    if (daysNum % 365 == 0) {
        creatureProtagonist.age +=1
        splashButton(3)
        degrees = 18
    }
    if (daysNum % 73 == 0) {
        creatureProtagonist.hunger += 1
        creatureProtagonist.boredom +=1
        creatureProtagonist.rot +=2
    }
    daysDisplay.innerHTML = `Days: ${Math.floor(daysNum)}`;
    updateStats();
    if (creatureProtagonist.boredom == 10) {
        alert("failed to boredom")
    if (creatureProtagonist.rot == 10) {
        alert("failed to rot")
    if (creatureProtagonist.boredom == 10) {
        alert("failed to boredom")
    }
    } 
    }
},41.0958904109589)
setInterval(passTime, 1000)


