// PS Lab 308h.7.1 - JavaScript Classes
// https://ps-react-curriculum.herokuapp.com/308H/7/lab-2/


class Cat {
    constructor(name, owner, age) {
        this.name = name;
        this.owner = owner;
        this.age = age;
    }
    sleep() {
        console.log(`${this.name} is sleeping. Zzzzz...`);
    }
    eat() {
        console.log(`Nom nom nom.`);
    }
    meow() {
        console.log(`Meeeeeow. ${this.owner}, give me attention!`)
    }
}


const sox = new Cat("Sox", "Hugo McHuman", 6);
const garfield = new Cat("Garfield", "Jim", 10);


function operateCat(instance) {
    console.log(instance);
    instance.sleep();
    instance.eat();
    instance.meow();
    console.log("\n");
}

operateCat(sox);
operateCat(garfield);



// ----------------------------------------------------
class Pirate {
    constructor(name, hireDate, isActive) {
        this.name = name;
        this.hireDate = hireDate;
        this.isActive = isActive;
    }
    fight() {
        console.log(`I been fightin on these seas since ${this.hireDate}.`);
    }
    reportStatus() {
        console.log(`So, you think I's be active eh? Well, that be ${this.isActive}!`);
    }
    brag() {
        console.log(`Don't ya know that ${this.name} be the most fierce pirate that ever lived?!`);
    }
}


const jollyRoger = [new Pirate('Blackbeard', "May 1849", "True"),
new Pirate('Bluebeard', "December 1902", "False"),
new Pirate('Redbeard', "June 1944", "True")
];

const blackPearl = [new Pirate('Articus', "October 1901", "True"),
new Pirate('Sully', "July 1877", "True"),
new Pirate('Salty', "April 1899", "False")
];



function crewShip(ship) {
    for (const pirate of ship) {
        console.log(pirate);
        pirate.fight();
        pirate.reportStatus();
        pirate.brag();
        console.log("\n");
    }
}

crewShip(jollyRoger);
crewShip(blackPearl);