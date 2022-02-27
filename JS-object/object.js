const person = {
    fName: "Jhon",
    lName: "Doe",
    age: 30,
    fullName: function () {
        return this.fName + " " + this.lName;
    },
};

const person2 = {
    fName: "Kabir",
    lName: "Mollha",
    age: 25,
};
const j = JSON.stringify(person);
const result = JSON.parse(j);
const result = person.fullName();

// *** applaying the Methods to another objects

/*** bind() Methods */
const resultFun = person.fullName.bind(person2);
const result = resultFun();
console.log(result);

//*** call() Methods
const result = person.fullName.call(person2);
console.log(result);

//*** apply() Methods
const result = person.fullName.apply(person2);
console.log(result);

//** seal() Methods
Object.seal(person);

if (Object.isSealed(person)) {
    console.log("person obj is sealed");
    person.lName = "Smith"; // Possible to change
    person.job = "Web developer"; // NOt possible to add
    console.log(person);
}

Object.freeze(person);

if (Object.isFrozen(freez)) {
    console.log("Freezed");
}

const freez = Object.freeze(person);

if (Object.isFrozen(freez)) {
    console.log("person obj Freezed");
    person.lName = "Smith"; // Possible to change
    person.job = "Web developer"; // NOt possible to add
}
console.log(person);

/** Compearing the objects */
let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
if (obj1 === obj2) {
    console.log(`${obj1} = ${obj2} is ture.`);
} else {
    console.log(`${obj1} = ${obj2} is false.`); // false
}

function hello() {
    console.log("first");
}
const x = JSON.stringify(obj1);
const y = JSON.stringify(obj2);

if (x === y) {
    console.log(`${x} = ${y} is ture.`); // true
} else {
    console.log(`${x} = ${y} is false.`);
}
