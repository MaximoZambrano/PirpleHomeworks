// jshint esversion:6

/*
Homework Assignment #2: Variables and Constants

Details:
What are the differences between let, const and var? When would each be appropriate too use? In your own words, write 1 - 2 paragraphs explaining the different use-cases for each. If English is not your native language, feel free to write in whatever language you prefer. Just please note which language it is at the top of the assignment, so we know how to translate it.
Create a file called variables.js and add your explanation as comments at the top of the page.
Then, within the document write 3 code examples (1 for var, 1 for const and 1 for let) showcasing the use-cases you explained above.

Extra Credit:
To earn extra credit, add an explanation of "hoisting" to the top of your document. What is hoisting? What does the word mean, and how does hoisting work in Javascript?

*/

/* What is "hoisting"? 
"Hoist" means raise, lift up.
 Hoisting is relatively new in ECMAScript documentation, appearing from the 2015 language specification.
 In Javascript, during the compile phase, variable and function declarations are put into memory.
 This equates to var and function decalarations lifted (hoisted) to the top of the code, depending on their scope, global or local.
 An important observation is needed here, declarations are hoisted, initializations are not.
 One advantage of hoisting is that a function can be used before it being declared.
 Hoisting is the reason this code works:
 
 helloWorld("Max");

 function helloWorld(name) {
   console.log("Hello World " + name);
 }
--> Hello World Max

 A more detailed explanation is found here https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

 */

 
 // What are the differences between let, const and var? When would each be appropriate too use? 
 // In your own words, write 1 - 2 paragraphs explaining the different use-cases for each. 
 // :) Calvin and Hobbes -In your own words-- https://lynettemcdougal.files.wordpress.com/2013/05/cartoon-6.jpg
 
 // var is the traditional way to declare a variable in Javascript 
 // the variable can be reassigned, and it may be used globally or for an entire function
 // var does not offer block scope 
 // Let's consider this simple code, it will work
 var name = "Maria";
 var name = "Max"; // we can re-assign the variable, no problem

 // The following code will also work
 helloWorld(true); //BTW, we are calling the function before it is declared... Hoisting makes this possible! :)
 // returns "Hello World David!!"
 helloWorld();
 // returns "Hello World undefined"

 function helloWorld (isExpressive)
 {
    if (isExpressive) {
        var name = "David"; 
    }

    if (isExpressive) {
        console.log("Hello World " + name + "!!"); // name is used out of scope!
    }
    else {
        console.log("Hello World " + name); // name is used out of scope!
    }

 }

 // let and const are welcome latecomers to the language, these also allow us to create identifiers

 // let permits the identifier to be reasigned BUT differs from var in the way the identifier is scoped, 
 // variables declared with let are scoped to the block they are defined in, a great language improvement
 // it allow us to emulate private members 
 // A "let" example 

 let name1 = "Paola";
 // if we uncomment the next line we'll get a "SyntaxError: Identifier 'name1' has already been declared"
 // we can't redeclare it in the same scope!
 // let name1 = "Max" 

 // The following code won't work
 helloWorldWithLet(true); 
 helloWorldWithLet();

 function helloWorldWithLet (isExpressive)
 {
    if (isExpressive) {
        let namelet = "David"; 
    }

    if (isExpressive) {
        //console.log("Hello World " + namelet + "!!"); // name is used out of scope and will error
    }
    else {
        //console.log("Hello World " + namelet); // name is used out of scope and will error
    }

 }

 // const means that the identifier can't be reassigned, the following code won't compile
 // and will give us a "TypeError: Assignment to constant variable."
 // So, if no reassigment is needed, use const to declare the identifier and call it a day
 /*
  console.log(name2);
  name2 = "Max"; // <-- "TypeError: Assignment to constant variable."
  console.log(name2);
 */

 // objects and arrays need some consideration when declared with const
 const arrayNames = ["Max","Maria"];
 console.log(arrayNames);
 // the following line is not allowed, no reassigment allowable, will error with "arrayNames has already been declared"
 // const arrayNames = ["David", "Paola"];
 
 // BUT we can change the content of arrays and objects
 // So "constant" does not means "immutable", it just prevents reassigment
 arrayNames.push("Agustin");
 console.log(arrayNames);

 const objectAges = {Max: 56, Maria: 49};
 console.log(objectAges);
 objectAges.Agustin = 29;
 console.log(objectAges);
 

 
 


