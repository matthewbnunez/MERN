class Ninja{
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
        return this
    }

    showStats(){
        console.log(`${this.name} has ${this.health} HP with a speed of ${this.speed} and a strength of ${this.strength}`);
        return this
    }

    drinkSake(){
        this.health += 10;
        return this
    }
}


class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('What on programmer can do in one month, two programmers can do in two months.')
        return this
    }
}


const ninja1 = new Ninja("Hyabusa");
const superSensei = new Sensei("Master Jake");

ninja1.sayName().drinkSake().showStats();

superSensei.speakWisdom().showStats();
