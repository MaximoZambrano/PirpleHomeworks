// jshint esversion:6
/*
Details:

Let's look at a popular logical argument (a syllogism).
Syllogism: An instance of a form of reasoning in which a conclusion is drawn (whether validly or not) from two given 
    or assumed propositions (premises), each of which shares a term with the conclusion, and shares a common or middle 
    term not present in the conclusion.
    (e.g., all dogs are animals; all animals have four legs; therefore all dogs have four legs ).

All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument. Your code should make clear that "socrates" is part of a collection of items referred to as "men", and that all members of this collection are mortal. You should also then demonstrate that since Socrates is part of this collection, it follows that he is mortal as well.

Extra Credit:

Got the hang of creating a logical argument? Want to try another one? Try this one as well:

This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.

*/
// let's have an array of objects, each one represents a human
const humans =
[
    {name: "Socrates", mortal: true, alive: false,},
    {name: "Max", mortal: true, alive: true},
    {name: "Maria", mortal: true, alive: true},
    {name: "Gandhi", mortal: true, alive: false},
];

// Who de we whant to search for
const toBeFound = "Socrates";

// From the data, let's determine if all humans are mortal
// we define a variable as true and then do a boolean "and" to the boolean values in the mortal attribute of the humans
// the net effect is that if there is any human that is not mortal, our variable will turn false
let areAllHumansMortal = true;
for (var i=0; i < humans.length ; i++) 
{
    areAllHumansMortal = areAllHumansMortal && humans[i].mortal;
}
console.log("Are all humans mortal? " + areAllHumansMortal);

// Now we want to know if the name we are searching is included in our array
// if so, he/she is a human
// let's use IF statements here
let isHuman = false;
for (var i=0; i < humans.length ; i++) 
{
    if (humans[i].name === toBeFound)
    {
        isHuman = true;
        break;
    }
    else
    {
        isHuman = false;
    }
}

// is toBeFound human?
console.log("Is " + toBeFound + " human? " + isHuman);

// Is to be found mortal?
// If all humans are mortal and toBeFound is human, we can conclude that he is also mortal.
// We just use boolean logic using both variables and the 'and' operator
console.log("Is " + toBeFound + " mortal? " + (isHuman && areAllHumansMortal))

// Extra credit
// This cake is either vanilla or chocolate.
// This cake is not chocolate.
// Therefore, this cake is vanilla.

const vanillaCake = "Vanilla"
const chocolateCake = "Chocolate";
const thisCake = "Coconut";

if (thisCake !== chocolateCake)
{
    console.log("This " + thisCake + " cake is a " + vanillaCake + " cake")
}
else
{
    console.log("This " + thisCake + " cake is a " + chocolateCake + " cake")
}