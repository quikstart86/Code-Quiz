// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

// Landing page:
  // Explanation of the quiz
  // Start button

// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again
  
  // Home page > Welcome message 
// Start button > need to get access to it (query selector //Get byID)
// create even listener and attach to start button on click

// When click start > hide welcome message and show quiz area
// Create class in JS for hide/remove .remove

// Questions/Choices/Answers stored as an array

// <--------------- START OF CODE -----------------> //

const startScreenPage = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start");

// ---------Set Questions Array ----------
let questions = [
    {
        question: "What country has the highest life expectancy?",
        choices: [`Japan`, `Hong Kong`, `Sweden`, `Paraguay`],
        answer: `Hong Kong`,
        
    },
    {
        question: "Who was the Ancient Greek God of the Sun?",
        choices: [`Apollo`, ``, ``, ``],
        answer: `Apollo`
    },
    {
        question: "How many minutes are in a full week?",
        choices: [`A`, `B`, `C`, `D. 10,080`],
        answer: `10,080`
    },
    {
        question: "How many elements are in the periodic table?",
        choices: [`A`, `B`, `C. 118`, `D`],
        answer: `118`
    },
    {
        question: "What country drinks the most coffee per capita?",
        choices: [`A. Finland`, `B`, `C`, `D`],
        answer: `Finland`
    },
    {
        question: "Which planet in the Milky Way is the hottest?",
        choices: [`A`, `B`, `C. Venus`, `D`],
        answer: `Venus`
    },
    {
        question: `What company was initially known as "Blue Ribbon Sports"?`,
        choices: [`A`, `B`, ``, `D`],
        answer: `Nike`
    },
    {
        question: "What is the world's fastest bird?",
        choices: [`A`, `B. The Peregrine Falcon`, `C`, `D`],
        answer: `The Peregrine Falcon`
    },
]

// Setting other variables
const timeLeft = document.getElementById(`time`);
const secondsLeft = 60;
const questionNumber = 0;
const maxQuestions = 8;
const totalScore = 0;

// Function - Time left
function countdown() {

}


