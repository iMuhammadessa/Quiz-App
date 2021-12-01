const quizData = [
    {
        question: 'Who is the Prime Minister Of Pakistan?',
        a: 'Mian Nawaz Sharif',
        b: 'Imran Khan Niazi',
        c: 'Qamar Javed Bajwa',
        d: 'Asif Ali Zardari',
        correct: 'b'
    }, {
        question: 'Who is the President  Of Pakistan?',
        a: 'Pervez Musharraf',
        b: 'Mamnoon Hussain',
        c: 'Arif Alvi',
        d: 'Farooq Leghari',
        correct: 'c'
    }, {
        question: 'Who is the Minister of Finance, Pakistan?',
        a: 'Shaukat Tarin',
        b: 'Hammad Azhar',
        c: 'Abdul Hafeez Shaikh',
        d: 'Asad Umar',
        correct: 'a'
    }, {
        question: 'Which language is mostly spoken in pakistan?',
        a: 'Punjabi',
        b: 'English',
        c: 'Pashto',
        d: 'Urdu',
        correct: 'd'
    }, {
        question: 'Who is Federal Minister for Science and Technology, Pakistan?',
        a: 'Shibli Faraz',
        b: 'Muhammad Yusuf Shaikh',
        c: 'Rana Tanveer Hussain',
        d: 'Sania Nishtar',
        correct: 'a'
    }
];

const quiz = document.getElementById('quiz');
const answerEli = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEli.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deSelectAnswers() {
    answerEli.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // Check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
        loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at
                ${score}/${quizData.length}
                questions.</h2>
            
            <button onClick='location.reload()'>Reload</button>
            `}
    }
});