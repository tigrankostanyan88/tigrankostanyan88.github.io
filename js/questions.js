class Questions {
    constructor(tests, containerSelector) {
        this.tests = tests;
        this.container = document.querySelector(containerSelector);
        this.correctAnswers = tests.map(test => test.correctAnswerIndex);
        this.answeredQuestions = new Set();
        this.score = 0;
        this.resultBox = document.createElement('div');
        this.resultBox.id = 'resultBox';
        this.init();
    }

    generateAnswer(option, i, qIndex) {
        return `
            <li class="question_answer" data-question="${qIndex}" data-index="${i}">
              <span class="count">0${i + 1}</span> ${option}
            </li>`;
    }

    renderQuestionCard(item, index) {
        let answersHTML = '';
        item.options.forEach((option, i) => {
            answersHTML += this.generateAnswer(option, i, index);
        });

        return `
            <div class="questionCard">
              <div class="image" id="lightgallery">
                <a href="https://caradas.com/wp-content/uploads/2024/09/AdobeStock_224332680-scaled.jpeg" data-src="https://caradas.com/wp-content/uploads/2024/09/AdobeStock_224332680-scaled.jpeg" class="gallery_item scroll_animate">
                    <img src="https://caradas.com/wp-content/uploads/2024/09/AdobeStock_224332680-scaled.jpeg" alt="">
                </a>
              </div>
              <div class="card_body">
                <h3 class="title">${item.question}</h3>
                <ul class="question_answers">${answersHTML}</ul>
              </div>
            </div>`;
    }

    renderQuestions() {
        this.tests.forEach((item, index) => {
            this.container.innerHTML += this.renderQuestionCard(item, index);
        });
        
        if(this.container) this.container.appendChild(this.resultBox);
    }

    handleClicks() {
        const allAnswers = document.querySelectorAll('.question_answer');
        allAnswers.forEach(answer => {
            answer.addEventListener('click', () => {
                const qIndex = parseInt(answer.dataset.question);
                const selected = parseInt(answer.dataset.index);
                const correct = this.correctAnswers[qIndex];

                const allInQuestion = answer.parentElement.querySelectorAll('.question_answer');
                if (this.answeredQuestions.has(qIndex)) return;

                allInQuestion.forEach((ans, i) => {
                    ans.style.pointerEvents = 'none';

                    if (i === correct) {
                        ans.style.backgroundColor = '#d4edda';
                        ans.style.color = '#155724';
                    }

                    if (i === selected && selected !== correct) {
                        ans.style.backgroundColor = '#f8d7da';
                        ans.style.color = '#721c24';
                    }
                });

                this.answeredQuestions.add(qIndex);
                if (selected === correct) this.score++;

                if (this.answeredQuestions.size === this.tests.length) {
                    this.resultBox.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size: 20px; color: #00DE3B"></i> Դու պատասխանել ես ${this.tests.length}-ից <strong>${this.score}</strong> ճիշտ հարցի։`;
                }
            });
        });
    }

    init() {
        this.renderQuestions();
        this.handleClicks();
    }
}

// Usage:
let testsRow = document.querySelector('.tests_page');
let groupRow = document.querySelector('.group_page');

if(testsRow) {
    new Questions(tests, '.tests_page .container');
} else if (groupRow) {
    new Questions(groups, '.group_page .container');
}