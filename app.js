let brickPics = [
    "brickpics/1x1.jpeg", "brickpics/1x2.jpeg", "brickpics/2x2.jpeg", "brickpics/2x3.jpeg", "brickpics/3x3.jpeg", "brickpics/arm.jpeg", "brickpics/leg.jpeg", "brickpics/torso.jpeg", "brickpics/head.jpeg", "brickpics/skeleton.png", "brickpics/horse.png"
] // accessing pictures that I'll use for the pet's evolution. These are located in the /brickpics folder.

class creatureOne {
    constructor(name, hunger, heat, boredom, age) {
        this.name = name;
        this.hunger = 1;
        this.heat = 1;
        this.boredom = 0;
        this.age = 0;
    }
} // creating a class for the pet which I'm calling creatureOne. Stats are name, heat, boredom, and age.

let creatureName = prompt("What is your creature's name?")
let creatureProtagonist = new creatureOne(creatureName) // instantiating the object for our pet with the creatureOne class
let creatureStats = document.getElementById("stats")
let hand = document.getElementById("fingerTime")
let petPic = document.getElementById("ourBrick")
let brickNick = document.getElementById("brickName")
brickNick.innerHTML = creatureName
brickNick.style.transform = `scale(${1+creatureName.length/15})` // grows the pet's nametag based on its length. Accessing the <uL> stats (hunger, heat boredom, age), <p> name, <img> hand, and initial image <img> for the pet. Displays the user's input for a pet name

let daysDisplay = document.getElementById("days") // accessing the <p> which displays how many days have passed
let daysNum = 0 // this variable will keep track of how many days have passed. daysDisplay will display it

let controls = document.getElementById("controls") // accessing the <div> which holds three <p> tags for our Feed, Cool, and Stroke button

function splashButton(x) {
    creatureStats.children[x].style.filter = `hue-rotate(${Math.random()*360}rad)`;
    controls.children[x].style.filter = `hue-rotate(${Math.random()*360}deg)`;
    petPic.style.filter = `hue-rotate(${Math.random()*360}deg)`
} // this function applies CSS filter properties to the creatureStats <ul>, one of the children of the controls <div>, and the <img> of the brick, petPick. A random hue-rotate is applied to each every time this function is called

controls.children[0].addEventListener("click", ()=>{
    if (creatureProtagonist.hunger != 0) {
        creatureProtagonist.hunger --;
        splashButton(0)
    }

})
controls.children[1].addEventListener("click",()=>{
    if (creatureProtagonist.heat != 0) {
        creatureProtagonist.heat --;
        splashButton(1);
    }
})
controls.children[2].addEventListener("click",()=>{
    if (creatureProtagonist.boredom != 0) {
        creatureProtagonist.boredom --;
        splashButton(2);
    }
}); // adding event listeners to the <p> Feed, Cool, and Stroke buttons of the controller. When the player clicks on a button, that stat is decremented by 1 if it isn't already equal to 0


function updateStats() {
    creatureStats.children[0].innerHTML = `Hunger: ${creatureProtagonist.hunger}`
    creatureStats.children[0].style.transform = `scale(${1+creatureProtagonist.hunger/17})`

    creatureStats.children[1].innerHTML = `Heat: ${creatureProtagonist.heat}`
    creatureStats.children[1].style.transform = `scale(${1+creatureProtagonist.heat/17})`

    creatureStats.children[2].innerHTML = `Boredom: ${creatureProtagonist.boredom}`
    creatureStats.children[2].style.transform = `scale(${1+creatureProtagonist.boredom/17})`
    creatureStats.children[3].innerHTML = `Age: ${creatureProtagonist.age}`
    daysDisplay.innerHTML = `Days: ${Math.floor(daysNum)}`; // updates the tag that displays the current day
} // updates the <p> tags which display the pet's stats and uses a CSS transform property to scale that tag based on the size of the state. The stat is divided by 17 and added to a minimum of 1 so that the tag does not shrink out of view

degrees = 18 // setting the initial position of the time hand, which puts the index finger on 12
function animateTime() {
    degrees += 24 // the clock ticks in big motions at a time
    hand.style.transform = `rotate(${degrees}deg)`
    if (daysNum % 75 == 0) {
        creatureProtagonist.heat += 1 // the heat rises every 75 days
    }
    hand.style.filter = `hue-rotate(${daysNum}deg)` // rainbow hand!
    petPic.src=`${brickPics[creatureProtagonist.age]}` // updates how our pet looks so that it can evolve with each year. The pet's age tells us which image to pull from the petPic array
    petPic.style.width = "10%";
    petPic.style.height = "auto"; // the images vary in size so they each need to be formatted as they come in
}

function incrementStats() {
    if (daysNum % 365 == 0) {
        creatureProtagonist.age +=1
        splashButton(3)
        degrees = 18 // the brick's age is incremented every 365 days and splashButton is called on the tag displaying its year
    } 
    if (daysNum % 73 == 0) {
        creatureProtagonist.hunger += 1
        creatureProtagonist.boredom +=1
        creatureProtagonist.heat +=2 // hunger and boredom are incremented by 1 every 73 days, heat by 2
    }
}

function endMessages() {
    if (creatureProtagonist.boredom > 9) {
        alert("the brick was BORED!!")
    } else if (creatureProtagonist.heat > 9) {
        alert("the brick MELTED!!")
    } else if (creatureProtagonist.hunger > 9) {
        alert("the brick was too HUNGRY")
    } else if (creatureProtagonist.age > 10) {
        alert("the brick lived happily ever after")
    }
}

setInterval(()=>{
    daysNum += 1
    incrementStats()
    updateStats()
    endMessages()
    // if any of the stats increase above 10, fail messages are alerted. A win message happens at 10 years 
},41.0958904109589)
setInterval(animateTime, 1000) // with some math, these intervals make a year pass in 15 seconds while still allowing for daysNum to be incremented in whole numbers




