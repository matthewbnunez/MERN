class Ninja{
    constructor(name, health = 100){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`${this.name} has ${this.health} HP with a speed of ${this.speed} and a strength of ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Jake");

ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

ninja2.sayName();
ninja2.showStats();
