const table = document.getElementById("periodic-table");
const info = document.getElementById("info-content");
const filter = document.getElementById("group-filter");
const search = document.getElementById("search");
const quizBtn = document.getElementById("start-quiz");
const darkToggle = document.getElementById("toggle-dark");

const quizArea = document.getElementById("quiz-area");
const quizQ = document.getElementById("quiz-question");
const quizChoices = document.getElementById("quiz-choices");
const quizFeedback = document.getElementById("quiz-feedback");
const quizNext = document.getElementById("quiz-next");
const quizProgress = document.getElementById("quiz-progress");

function renderTable(group = "", query = "") {
  table.innerHTML = "";
  for (let i = 0; i < 118; i++) {
    const el = elements.find(e => e.number === i + 1);
    const div = document.createElement("div");

    if (el && (!group || el.group === group) && (!query || el.name.toLowerCase().includes(query.toLowerCase()) || el.symbol.toLowerCase().includes(query.toLowerCase()))) {
      div.className = "element";
      div.innerHTML = `<strong>${el.symbol}</strong><br><small>${el.number}</small>`;
      div.title = el.name;
      div.onclick = () => {
        info.innerHTML = `<strong>${el.name}</strong> (Symbol: ${el.symbol}, Ordnungszahl: ${el.number}, Zustand: ${el.state})`;
      };
    } else {
      div.className = "placeholder";
    }

    table.appendChild(div);
  }
}

let quizIndex = 0;

function startQuiz() {
  quizIndex = 0;
  quizArea.hidden = false;
  showQuiz();
}

function showQuiz() {
  const q = quizQuestions[quizIndex];
  quizQ.textContent = q.question;
  quizChoices.innerHTML = "";
  quizFeedback.textContent = "";
  quizProgress.textContent = `Frage ${quizIndex + 1} von ${quizQuestions.length}`;

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      quizFeedback.textContent = choice === q.answer ? "Richtig!" : `Falsch. Richtig: ${q.answer}`;
      quizNext.hidden = false;
    };
    quizChoices.appendChild(btn);
  });
}

quizNext.onclick = () => {
  quizIndex++;
  if (quizIndex >= quizQuestions.length) {
    quizFeedback.textContent = "Quiz beendet!";
    quizNext.hidden = true;
  } else {
    showQuiz();
    quizNext.hidden = true;
  }
};

filter.addEventListener("change", () => renderTable(filter.value, search.value));
search.addEventListener("input", () => renderTable(filter.value, search.value));
quizBtn.addEventListener("click", startQuiz);
darkToggle.addEventListener("click", () => document.body.classList.toggle("dark"));

renderTable();
