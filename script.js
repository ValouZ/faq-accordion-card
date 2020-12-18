const group = document.getElementsByClassName("group");
const questionDiv = document.getElementsByClassName("question-div");
const questions = document.getElementsByClassName("question");
const answers = document.getElementsByClassName("answer");
console.log(answers)
for (let i = 0; i < questionDiv.length; i++) {
    questionDiv[i].addEventListener("click", displayName);
}


function displayName() {
    let answer = this.parentNode.getElementsByClassName("answer")[0];
    let question = this.getElementsByClassName("question")[0];

    // Add / Remove font-weight bold to the questions
    for (let i = 0; i < questions.length; i++) {
        questions[i].classList.remove("selected");
    }
    question.classList.add("selected");

    // Display the answer
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("display-answer");
        questions[i].parentNode.style.paddingBottom = "19px";
    }
    question.parentNode.style.paddingBottom = "0px";
    answer.classList.add("display-answer");
}