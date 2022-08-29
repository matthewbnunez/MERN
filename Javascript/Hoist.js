// 1 Assignment
console.log(hello); //undefined
var hello = 'world';


// 2 Assignment
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); //'magnet'
}


// 3 Assignment
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //'super cool'


// 4 Assignment
var food = 'chicken';
console.log(food); //'chicken'
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); //'half-chicken'
    var food = 'gone';
}


// 5 Assignment
mean();
console.log(food);
var mean = function() { //error
    console.log(food); 
    food = "chicken";
    var food = "fish";
    console.log(food); 
}
console.log(food); 


// 6 Assignment
console.log(genre); //undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //"rock"
    var genre = "r&b";
    console.log(genre); //"r&b"
}
console.log(genre); //"disco"


// 7 Assignment
dojo = "san jose";
console.log(dojo); //"san jose"
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //"seattle"
    var dojo = "burbank";
    console.log(dojo); //"burbank"
}
console.log(dojo); //"san jose"


// 8 - Bonus ES6: const Assignment
console.log(makeDojo("Chicago", 65)); //{"Chicago", 65, true}
console.log(makeDojo("Berkeley", 0)); //error
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
