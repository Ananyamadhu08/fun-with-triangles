// query selectors

const quizForm = document.forms[0];
const questionDivs = document.querySelectorAll(".ow");
const scoreDiv = document.querySelector(".scoreHere");
const submitQuiz = document.querySelector("#submitQuiz");

const correctAns = ["option1", "option2", "option1"];

let score = 0;

quizForm.addEventListener("submit", (e) => {
  console.log(">>>>>>");
  e.preventDefault();
  const data = new FormData(quizForm);
  let index = 0;
  for (let entry of data) {
    if (entry[1] == correctAns[index]) {
      questionDivs[index].style.backgroundColor = "lightgreen";
      score++;
    } else {
      questionDivs[index].style.backgroundColor = "pink";
    }
    index++;
  }
  scoreDiv.innerText = score;
  submitQuiz.style.display = "none";
});
