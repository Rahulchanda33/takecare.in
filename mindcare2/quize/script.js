// script.js

const questions = [
    {
        question: "How often do you feel overwhelmed?",
        options: ["Never", "Rarely", "Sometimes", "Often"],
        score: [0, 1, 2, 3]
    },
    {
        question: "Do you find it hard to concentrate?",
        options: ["Never", "Rarely", "Sometimes", "Often"],
        score: [0, 1, 2, 3]
    },
    {
        question: "How often do you feel anxious or stressed?",
        options: ["Never", "Rarely", "Sometimes", "Often"],
        score: [0, 1, 2, 3]
    }
];

let currentQuestion = 0;
let totalScore = 0;

function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.textContent = questionData.options[index];
        option.dataset.score = questionData.score[index];
    });
}

function selectOption(index) {
    const selectedScore = parseInt(
        document.querySelectorAll(".option")[index].dataset.score
    );
    totalScore += selectedScore;

    document.querySelectorAll(".option").forEach(option => {
        option.style.pointerEvents = "none";
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    let summary = "You seem to be doing fine!";
    if (totalScore > 5) {
        summary = "You might be experiencing some stress. Consider reaching out to someone.";
    }
    document.getElementById("result-summary").textContent = summary;
}

function restartQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
}

// Initialize quiz
loadQuestion();
