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
    let status = alreadySelected(question);

    // If we are clicking the question that already has the "selected" class, 
    // we remove it
    if (status) {
        // Remove font-weight bold to the question and add the standard padding
        question.classList.remove("selected");
        question.parentNode.style.paddingBottom = "19px";

        // Remove the answer
        answer.classList.remove("display-answer");
    }
    // In the other case, we remove all the "selected" class and we add it
    // to the clicked one
    else {
        for (let i = 0; i < questions.length; i++) {
            // Remove font-weight bold to questions and add the standard padding
            questions[i].classList.remove("selected");
            questions[i].parentNode.style.paddingBottom = "19px";

            // Remove the answer
            answers[i].classList.remove("display-answer");
        }
        // Add font-weight bold to the question and remove the standard padding
        question.classList.add("selected");
        question.parentNode.style.paddingBottom = "0px";

        // Display the answer
        answer.classList.add("display-answer");
    }
}

// Return -true- if the question we clicked is already displayed (had "selected" class)
// -false- if not
function alreadySelected(question) {
    if (question.classList.contains("selected"))
        return true;
    return false;
}