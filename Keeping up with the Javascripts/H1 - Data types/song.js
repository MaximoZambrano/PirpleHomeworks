/*
Pirple's Homework 1: Data types
    - Store attributes of a favorite song into variables 
    - Console log out them 
    - Use comments judiciosly
    - strings, numbers, boolean, objects and arrays
*/

// string variables
var name = "Vive La Vida 2011";
var description = "Timba pa to' el mundo";
var youTubeUrl = "https://www.youtube.com/watch?v=Xhriw1Yn5Ds";
var bandName = "Timbalive";
var genre = "Timba";

// Console output using ES6 new convention
console.log(
`
String variables:
-----------------
Name: ${name}
Description: ${description}
YouTubeUrl: ${youTubeUrl}
Band name: ${bandName};
Genre: ${genre}
`);

// a number variable
var durationInSeconds = 376;
console.log(
`
Number variable:
---------------- 
Duration (s): ${durationInSeconds}
`);

// a boolean variable
var isTropicalMusic = true;
console.log(
`
Boolean variable:
---------------- 
Duration (s): ${isTropicalMusic}
`);



// content details object (data from youtube APIs) 
var contentDetails = {
    type: "Content details",
    duration: "PT6M16S",
    dimension: "2d",
    definition: "sd",
    caption: "false",
    licensedContent: false,
    projection: "rectangular"
};

console.log("Object contentDetails: ");
console.log(contentDetails) ;
console.log("\n") ;

// content statistics object (data from youtube APIs)
// notice this notation works fine too
var contentStatistics = {
    type: "Content statistics",
    "viewCount": "170302",
    "likeCount": "448",
    "dislikeCount": "16",
    "favoriteCount": "0",
    "commentCount": "16"
   };
console.log("Object contentStatistics: ");
console.log(contentStatistics) ;
console.log("\n") ;

 // array adding two previously created objects
 var youTubeDataArray = [contentDetails, contentStatistics];
 console.log("Array of content objects: " + youTubeDataArray[0].type + ", " + youTubeDataArray[1].type);
 
// we can also build a class, create an object and display to console using a method
class Song {
    constructor(name, description, YTUrl, bandName, genre, youTubeDataArray) {
        this.name = name;
        this.description = description;
        this.youTubeUrl = YTUrl;
        this.bandName = bandName;
        this.genre = genre;
        this.youTubeData = youTubeDataArray;
        this.displaySongDetails = 
        function () {
            console.log("\n-------------------------------------------------------------------------------------");
            console.log("Song details:");
            console.log("-------------");
            console.log("Name: " + this.name);
            console.log("Description: " + this.description);
            console.log("YouTubeUrl: " + this.youTubeUrl);
            console.log("Band name: " + this.bandName);
            console.log("Genre: " + this.genre + "\n");
            console.log("YouTube statistics: ");
            console.log("-------------------");
            console.log(this.youTubeData[1]) ;
            console.log("\n") ;
            console.log("YouTube details: ");
            console.log("-------------------");
            console.log(this.youTubeData[0]) ;    
            console.log("-------------------------------------------------------------------------------------");
        };
    }
}

// create 3 "Song" objects
var song1 = new Song(name, description, youTubeUrl, bandName, genre, youTubeDataArray);
var song2 = new Song("Consumelo", "CONSUMELO - TIMBALIVE", "https://www.youtube.com/watch?v=QYV2c3PDV7E", "Timbalive", "Timba", [{},{}]);
var song3 = new Song("Ave Maria que calor", "From Miami a La Habana", "https://www.youtube.com/watch?v=zsOWJA9qS8o", "Timbalive", "Timba", [{},{}]);

// Console output using object's method displaySongDetails
song1.displaySongDetails();
song2.displaySongDetails();
song3.displaySongDetails();

// Great course so far, enjoying learning JS from the basics and up!