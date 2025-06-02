const questions = [
  {
    question: "What is the smallest bone in the human body?",
    options: ["Femur", "Stapes", "Ulna", "Scapula"],
    correct: 1
  },
  {
    question: "Which of the following is a water-soluble vitamin?",
    options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin C"],
    correct: 3
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById("quiz-container");
  let html = `<p>${q.question}</p>`;

  q.options.forEach((opt, i) => {
    html += `
      <label>
        <input type="radio" name="answer" value="${i}">
        ${opt}
      </label>`;
  });

  container.innerHTML = html;
  document.getElementById("result").innerHTML = "";
}

function submitQuiz() {
  const selected = document.querySelector('input[name="answer"]:checked');
  const resultDiv = document.getElementById("result");

  if (!selected) {
    resultDiv.innerHTML = "Please select an answer.";
    return;
  }

  const answer = parseInt(selected.value);
  const isCorrect = answer === questions[currentQuestion].correct;

  if (isCorrect) {
    resultDiv.innerHTML = `<div class="correct">✅ Correct! Well done! <br> “Believe in yourself. Even the darkest night will end and the sun will rise.”</div>`;
  } else {
    resultDiv.innerHTML = `<div class="incorrect">❌ Incorrect! Keep trying. <br> “Success is not final, failure is not fatal: it is the courage to continue that counts.”</div>`;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz-container").innerHTML = "<p>🎉 You've completed all questions!</p>";
    }
  }, 5000);
}

window.onload = loadQuestion;