const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
numVisits++;
let lastVisit = new Date(window.localStorage.getItem("lastVisit-ls"))

var currentYear = new Date()

var operation = currentYear - lastVisit;
var days = Math.floor(operation / (1000 * 60 * 60 * 24)); //use for counting days delete acording to need, seconds, minutes, ect..

if (numVisits === 1) {
    visitsDisplay.textContent = `🥳 Welcome! Let us know if you have any questions.`;
} 

else if (numVisits === 2) {
    visitsDisplay.textContent = `Back so soon! Awesome!`;
} 

else {
    visitsDisplay.textContent = `You last visit was ` + days + ` days ago.`;
}

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", currentYear);