const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '20',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most popular programming language?',
        a: 'Java',
        b: 'Python',
        c: 'JavaScript',
        d: 'C++',
        correct: 'c'
    }, {
        question: 'Who is the Prime Minister of India?',
        a: 'Narendra Modi',
        b: 'Rahul Gandhi',
        c: 'Manmohan Singh',
        d: 'Arvind Kejriwal',
        correct: 'a'
    },
    {
        question: 'What does HTML stands for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyper Thinker\'s Markup Language',
        c: 'Helicopters Terminals Motorboats Lamborginis',
        d: 'Heigher Than Music Luggage',
        correct: 'a'
    }, {
        question: 'When was JavaScript launched?',
        a: '1996',
        b: '1994',
        c: '1995',
        d: 'None of the above',
        correct: 'c'
    }
];

const quizid = document.querySelectorAll(".quiz-container");
const answers = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitEl = document.getElementById("submit");

let currentQuiz = 0;
// let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    // currentQuestion++;
}

function getSelected() {


    let answerEl = undefined;

    answers.forEach((answer) => {
        if (answer.checked) {
            answerEl = answer.id;
        }
    });

    return answerEl;
}

function deselectAnswers() {
    answers.forEach((answer) => {
        answer.checked = false;
    });
}

submitEl.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizid[0].innerHTML = `<h2>You answered correctly at ${score} out of ${quizData.length} questions.</h2>`;
        }
    }


    // loadQuiz();
});