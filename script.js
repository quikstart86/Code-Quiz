
// Sudo code sitting in HTML to take up less window space on JS file
// <--------------- START OF CODE -----------------> //



const startScreenPage = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start");
const askQuestion = document.querySelector("#questions");



// ---------Set Questions Array (10 questions)----------
const questions = [
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
    question: `What is the world's fastest bird?`,
    choices: [`something`, `The Peregrine Falcon`, `something`, `something`],
    answer: `The Peregrine Falcon`
  },
  {
    question: "How tall is the Eiffel Tower in Paris?",
    choices: [`something`, `something`, `something`, `something`],
    answer: ``
  },
  {
    question: "What is the collective noun for a group of flamingos?",
    choices: [`something`, `something`, `something`, `something`],
    answer: `A Flamboyance`
  },
]
console.log(questions);

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

    } else if (questionCount >= questions.length + 1) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

// click button to start the quiz
function startQuiz() {
  startScreenPage.style.display = `none`;
  questions.style.display = `block`;
  questionNumber = 0;
  countdown();
  showQuestion(questionNumber);
}

