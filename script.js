
// Sudo code sitting in HTML to take up less window space on JS file
// <--------------- START OF CODE -----------------> //

// Welcome/ start screen query selectors
const welcomeScreen = document.querySelector('#welcomeScreen');
const startScreen = document.querySelector("#startScreen");

// Start button & questions page/ question title query selectors
const startBtn = document.querySelector("#startBtn");
const questionPage = document.querySelector("#questionPage");
const questionTitle = document.querySelector('questionTitle');

// Button choice and answer buttons query selectors
const buttonChoice = document.querySelectorAll('.buttonChoice');
const answerBtn1 = document.querySelector('#answerBtn1');
const answerBtn2 = document.querySelector('#answerBtn2');
const answerBtn3 = document.querySelector('#answerBtn3');
const answerBtn4 = document.querySelector('#answerBtn4');
const checkChoice = document.querySelector('#checkChoice');

const endScreen = document.querySelector('endScreen');
const gameOverText = document.querySelector('gameOverText');
const finalScore = document.querySelector('finalScore');

const highScores = document.querySelector('highScores'); 


// ---------Set Questions Array (10 questions)----------
const questionList = [
  {
    question: "What country has the highest life expectancy?",
    choices: [`a. Japan`, `b. Hong Kong`, `c. Sweden`, `d. Paraguay`],
    answer: `b`,
  },
  {
    question: "Who was the Ancient Greek God of the Sun?",
    choices: [`a. Apollo`, `b. Hermes`, `c. Ares`, `d. Poseidon`],
    answer: `a`
  },
  {
    question: "How many minutes are in a full week?",
    choices: [`a. 16,800`, `b. 4,860 `, `c. 12,400`, `d. 10,080`],
    answer: `d`
  },
  {
    question: "How many elements are in the periodic table?",
    choices: [`a. 186`, `b. 140`, `c. 118`, `d. 98`],
    answer: `c`
  },
  {
    question: "What country drinks the most coffee per capita?",
    choices: [`a. Finland`, `b. England`, `c. France`, `d. Italy`],
    answer: `a`
  },
  {
    question: "Which planet in the Milky Way is the hottest?",
    choices: [`a. Mars`, `b. Mercury`, `c. Venus`, `d. Jupiter`],
    answer: `c`
  },
  {
    question: `What company was initially known as "Blue Ribbon Sports"?`,
    choices: [`a. Donnay`, `b. Reebok`, `c. Addidas`, `d. Nike`],
    answer: `d`
  },
  {
    question: `What is the world's fastest bird?`,
    choices: [`a. Penguine`, `b. Peregrine Falcon`, `c. Golden Eagle`, `d. Swift`],
    answer: `b`
  },
  {
    question: "How tall is the Eiffel Tower in Paris?",
    choices: [`a. 290m`, `b. 375m`, `c. 330m`, `d. 256m`],
    answer: `c`
  },
  {
    question: "What is the collective noun for a group of flamingos?",
    choices: [`a. A Flamboyance`, `b. A Bustle`, `c. A Dance`, `d. A Ballet`],
    answer: `a`
  },
]
console.log(questionList);

// Setting other variables
const timeLeft = document.getElementById(`time`);
const secondsLeft = 60;
const questionNumber = 0;
const maxQuestions = 10;
const totalScore = 0;
const questionCount = 1;



// Function - Time left
function countdown() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = `${timeLeft} + ${secondsLeft}`;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timeLeft.textContent = `Time is up!`;

      // If the timer is up, show timer is up
      finish.textContent = `Time is up!`;
      gameOver();

    } else if (questionCount >= questionList.length + 1) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

// click button to start the quiz
function startQuiz() {
  welcomeScreen.style.display = `none`;
  questionPage.style.display = `block`;
  questionNumber = 0;
  countdown();
  showQuestion(questionNumber);
}

function showQuestion (n) {
  questionTitle.textContent = questionList[n].question;
  answerBtn1.textContent = questionSource[n].choices[0];
  answerBtn2.textContent = questionSource[n].choices[1];
  answerBtn3.textContent = questionSource[n].choices[2];
  answerBtn4.textContent = questionSource[n].choices[3];
  questionNumber = n;
}


