// ============================================================
// 🏠  VARIABLES — HOMEWORK
// ============================================================
// Complete each task using only what you learned in class:
//   - const and let
//   - declaring, assigning, reassigning
//   - console.log()
//   - string + number combination with +
//
// No DOM. No HTML edits. Open DevTools to see your output.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Your personal profile
// ----------------------------------------------------------
// Declare the following using the correct keyword (const or let).
// Add a comment next to each one explaining WHY you chose that keyword.
//
//   fullName    → your full name as a string
//   age         → your age as a number
//   city        → the city you live in
//   isStudent   → true or false
//
// Log all four to the console.

    const fullName = "Sammy_Rai";   //Variable value remains constant
    const age = 33;                 // Value remains constant
    let city = "Perth";           // Value is changing ahead
    let isStudent = true;           // Value can change

    console.log(`My fullmane is ${fullName}, age is ${age}, living in ${city} and isStudent is ${isStudent}`); // I learnt this in Level 1 from videos
// ----------------------------------------------------------
// TASK 2 — Update what can change
// ----------------------------------------------------------
// Reassign city to a different city.
// Reassign isStudent to the opposite value.
// Log both after reassigning.
//
// Then try to reassign fullName.
// Read the error, then comment that line out.

    city = "Adelaide"; 
    isStudent = false;
    console.log(city, isStudent);
    //app.js:42 Uncaught TypeError: Assignment to constant variable.
    //at app.js:42:10
    //(anonymous)	@	app.js:42


    //fullName = "Nanny";
    //console.log(fullName);
    //app.js:50 Uncaught TypeError: Assignment to constant variable.
    //at app.js:50:14


// ----------------------------------------------------------
// TASK 3 — Undefined in the wild
// ----------------------------------------------------------
// Declare a let called favoriteMovie — do NOT assign a value.
// Log it. Write what you see as a comment.

    let favoriteMovie; // undefined as the value has not been assigned
    console.log(favoriteMovie);
//
// Now assign it a movie title.
// Log it again.

    favoriteMovie ="Batman";
    console.log(favoriteMovie);
// ----------------------------------------------------------
// TASK 4 — Build a product listing
// ----------------------------------------------------------
// You're building a small online store.
// Declare const variables for:
//
//   productName  → a made-up product name
//   productBrand → the brand name
//   productPrice → a price as a number
//   inStock      → true
//
// Log each variable on its own line.
// Then log: productName + " by " + productBrand + " — $" + productPrice

const productName = "Apple", productBrand = "Fiji" , productPrice = 12 ;// Decalring and assigning all three variables in a line 
let inStock = true; 
    console.log(productName + " by " + productBrand + " — $" + productPrice);
// ----------------------------------------------------------
// TASK 5 — Stock status update
// ----------------------------------------------------------
// Reassign inStock to false.
// Log: "In stock: " + inStock

    inStock = false;
    console.log( "In stock: " + inStock);
//
// Try to reassign productName.
// Read the error and comment the line out.
// Why did this fail but inStock worked?
// Write your answer as a comment.

    //productName = "Banana";
    //console.log(productName); // app.js:101 Uncaught TypeError: Assignment to constant variable. at app.js:101:17
    // Assigning value to const variable is not allowed as it remains fixed

// ----------------------------------------------------------
// TASK 6 — Fix the bad names
// ----------------------------------------------------------
// The variable names below are all invalid or poor practice.
// Rewrite each one correctly, declare it with any value, and log it.
//
//   2ndPlayer     → fix it
//   my score      → fix it
//   X             → rename to something descriptive, then declare it
//   GaMeLeVeL     → fix the casing

    let secondPlayer = "Abhi";
    let myScore = 87;
    let fitnessScore = 39;
    let gameLevel = 3;

    console.log(secondPlayer,myScore,fitnessScore,gameLevel);

// ----------------------------------------------------------
// TASK 7 — Two-step declaration
// ----------------------------------------------------------
// Declare a let called highScore — do NOT assign a value.
// Log it.

    let highScore;
    console.log(highScore);
//
// Assign highScore the value 500.
// Log it.

    highScore = 500;
    console.log(highScore);
//
// Reassign highScore to 750.
// Log it.

    highScore = 750;
    console.log(highScore);
//
// You should see three console lines: undefined → 500 → 750

// ----------------------------------------------------------
// TASK 8 — Connect the variables
// ----------------------------------------------------------
// Declare these consts:
//   appName    → "TaskMaster"
//   version    → 3
//   authorName → your name
// 

    const appName = "TaskMaster", version = 3; authorName = "Sammy_Rai"; // Using Shorthand to declare and assign three variables
// Log: appName + " v" + version + " — built by " + authorName

    console.log(appName + " v" + version + " — built by " + authorName);
// Expected format: "TaskMaster v3 — built by [your name]"

// ----------------------------------------------------------
// ⭐ STRETCH GOAL
// ----------------------------------------------------------
// Declare a const called startYear with the value 2020.
// Declare a const called currentYear with the value 2025.
// Declare a let called yearsRunning = currentYear - startYear.
//
// Log: appName + " has been running for " + yearsRunning + " years."
//
// Then reassign currentYear... wait, can you? Why not? // currentYear.. has the constant decalration value cannot change
// Write the answer as a comment.
// What keyword would you need if currentYear could change? // to reassign value declaration should be let


const startYear =2020;
const currentYear = 2025;
let yearsRunning = currentYear - startYear;

console.log(appName +"has been running for" + " "+ yearsRunning +" " + "years."); 

