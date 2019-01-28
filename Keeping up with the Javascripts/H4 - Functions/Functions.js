// jshint esversion:6
/*
Details:

Let's go back to your syllogism (logical argument) examples from Homework #3. 
Now it's time to turn those loose bits of logic into functions. 
Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts 
a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. 
Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a 
    string at all) without throwing an exception.
*/

// Our function
const isHuman = (name) => {
    // array of known humans, let's stop pretending, we know humans are mortal...
    const humans = ["Socrates", "Max", "Maria", "Gandhi","Plato"];
    toReturn = false;
    if (typeof name === 'string')
    {
        toReturn = toReturn || typeof humans.find(human => human === name) === "string";          
    }
    return toReturn;
};


// function testing
let toBeFound = "Perico";
console.log("Is " + toBeFound + " human? " + isHuman(toBeFound));

toBeFound = 1000;
console.log("Is " + toBeFound + " human? " + isHuman(toBeFound));

toBeFound = false;
console.log("Is " + toBeFound + " human? " + isHuman(toBeFound));

toBeFound = undefined;
console.log("Is " + toBeFound + " human? " + isHuman(toBeFound));

toBeFound = "Gandhi";
console.log("Is " + toBeFound + " human? " + isHuman(toBeFound));

toBeFound = "Maria";
console.log("Is " + toBeFound + " human? " + isHuman(toBeFound) + "\n");


// Extra credit
// let's turn that the cakes example into a function as well. It should accept in 2 arguments:
// 1. An array of all cake possibilities (vanilla or chocolate)
// 2. A boolean representing whether or not the cake is chocolate.
// It should return a string indicating the actual flavor of the cake.

// our default array
aCakes = ["vanilla", "chocolate"];

// The function, it receives an array and a boolean with explicit defaults
const getCakesType = (aCakeFlavors = aCakes, isChocolate = false) =>
{
    let toReturn = "Cake is ";
    if (isChocolate)
    {
        toReturn += aCakeFlavors.find(flavor => flavor === "chocolate");
    }
    else
    {
        toReturn += aCakeFlavors.find(flavor => flavor === "vanilla");
    }
    return toReturn;
};

// "sanity checks"
console.log("Extra credit");
console.log(getCakesType()); // no values passed, will take defaults, will return vanilla
console.log(getCakesType(["chocolate", "vanilla"],true)); // will return chocolate
console.log(getCakesType(["chocolate", "vanilla"],false)); // will return vanilla
console.log(getCakesType(["coconut", "strawberry"],true)); // we pass an trick array here, will return undefined
console.log(getCakesType(aCakes, true)); // will return chocolate
console.log(getCakesType(aCakes)); // will use default value for the second parameter, returning vanilla
