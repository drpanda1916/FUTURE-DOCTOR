const questions = [
  {
    subject: "Anatomy",
    question: "Which bone is the longest in the human body?",
    options: ["Humerus", "Femur", "Tibia", "Fibula"],
    answer: "Femur"
  },
  {
    subject: "Physiology",
    question: "What is the pacemaker of the heart?",
    options: ["SA node", "AV node", "Bundle of His", "Purkinje fibers"],
    answer: "SA node"
  },
  {
    subject: "Biochemistry",
    question: "Which vitamin is also known as Ascorbic acid?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
    answer: "Vitamin C"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let filteredQuestions = questions;

function showQuestion() {
  const question = filteredQuestions[currentQuestionIndex];
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.textContent = question.question;
  optionsEl.innerHTML = "";

  question.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = filteredQuestions[currentQuestionIndex].answer;
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => {
    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = "lightgreen";
    } else {
      btn.disabled = true;
    }
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < filteredQuestions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = "<h3>Quiz completed!</h3><p>Score: " + score + "/" + filteredQuestions.length + "</p>";
  }
}

function filterQuestionsBySubject() {
  const selectedSubject = document.getElementById("subject").value;
  if (selectedSubject === "all") {
    filteredQuestions = questions;
  } else {
    filteredQuestions = questions.filter(q => q.subject === selectedSubject);
  }
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

window.onload = showQuestion;
