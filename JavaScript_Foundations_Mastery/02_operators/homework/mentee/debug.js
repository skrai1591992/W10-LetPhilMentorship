// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % tipPercent;  // 80 % 15 is 5 but 15% of 80 is $12
console.log("Tip: $" + tipAmount);

// What's wrong ↓ // 80 % 15 is 5 but 15% of 80 is $12

// Your fix ↓ 
const tipAmount  = billAmount * (tipPercent/100);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

const countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// What's wrong ↓ const variable can't be reassigned a value

// Your fix ↓ 
let countdown =10;


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓  Strict Equality ===;

// Style issue 1 ↓ var username1 = "gamer99";
 
// Style issue 2 ↓ var username1 = "gamer99";

// Your fix ↓
const username1 = "gamer99";
const username2 = "Gamer99";
console.log("Names match: " + (username1 === username2));
