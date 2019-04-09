
// Show the question
function showQuestion() {
    /*
        Take argument 'questionNumber', the current question the user is viewing.
        Retrieve the 'question' object from the store. Use that object's values
        to populate the question HTML block. Return the block.
    */
    let questionCount = STORE.questions.length;
    let questionNumber = STORE.currentQuestion;
    let correctSoFar = STORE.currentScore;

    if (questionNumber <= questionCount - 1) {
        let question = STORE.questions[questionNumber].question;
        let options = STORE.questions[questionNumber].options;

        return `
            <section role="region">
                <h2>${question}</h2>
                <hr>
                <fieldset>
                    <form action="">
                        <input type="radio" name="answer" value="0" required>${options[0]}<br>
                        <input type="radio" name="answer" value="1">${options[1]}<br>
                        <input type="radio" name="answer" value="2">${options[2]}<br>
                        <input type="radio" name="answer" value="3">${options[3]}
                        <div class="btn-container"><button id="submit-answer">SUBMIT</button></div>
                    </form>
                </fieldset>
                <div class="status-bar">
                    <div class="current-question"><span>Q | ${questionNumber + 1}</span></div>    
                    <div class="current-status"><span>${correctSoFar}</span> / ${questionCount}</div> 
                </div>
            </section>
        `;
    }
    else {
        assessScore();
    }
}

function startQuiz() {
    $('#start-page').on('click', '.start-quiz', event => {
        // STORE.increaseQuestion();
        $('#start-page').remove();
        renderQuestion();
    })
}

function renderQuestion() {
    $('.generate-questions').html(showQuestion);
}

// Check for the answer
function checkAnswer() {
    $('.generate-questions').on('submit', event => {
        event.preventDefault();
        let chosenAnswer = $('input:checked');
        let value = parseInt(chosenAnswer.val());
        let questionNumber = STORE.currentQuestion;
        let correctAnswer = STORE.questions[questionNumber].correct;

        if (value === correctAnswer) {
            STORE.increaseScore();
            showAnswerCorrect();
        }
        else {
            showAnswerWrong(correctAnswer);
        }

    })
}

// Show that answer is correct
function showAnswerCorrect() {
    // show the answer...
    // 
    // If user is on last question, 'next' button should advance user to end card (this would be function 'showFinalPage')
    // If user is not on last question, 'next' button should advance user to next question
    STORE.increaseQuestion();
    let questionNumber = STORE.currentQuestion;
    let questionCount = STORE.questions.length;
    let correctSoFar = STORE.currentScore;
    let newHTML = `
        <section>
            <h2>Atta boy, Podrick!</h2>
            <h3>Congratulations! You're one step closer to sitting on the Iron Throne.</h3>
            <div class="btn-container">
                <button id="next-question">NEXT</button>
            </div>
            <div class="status-bar">
                <div class="current-question"><span>Q | ${questionNumber}</span></div>    
                <div class="current-status"><span>${correctSoFar}</span> / ${questionCount}</div> 
            </div>
        </section>
    `
        ;
    $('.generate-questions').html(newHTML);
}

// Show that answer is wrong
function showAnswerWrong() {
    // show the answer...
    // 
    // If user is on last question, 'next' button should advance user to end card (this would be function 'showFinalPage')
    // If user is not on last question, 'next' button should advance user to next question    
    STORE.increaseQuestion();
    let questionCount = STORE.questions.length;
    let correctSoFar = STORE.currentScore;
    let questionNumber = STORE.currentQuestion;
    let correctAnswer = STORE.questions[questionNumber].correct;
    let newHTML =
        `
        <section>
            <h2> Ser? My Lady?</h2>
            <h3>Wrong! The correct answer was ${STORE.questions[questionNumber].options[correctAnswer]}</h3>
            <div class="btn-container">
                <button id="next-question">NEXT</button>
            </div>
            <div class="status-bar">
                <div class="current-question"><span>Q | ${questionNumber}</span></div>    
                <div class="current-status"><span>${correctSoFar}</span> / ${questionCount}</div> 
            </div>
        </section>`;

    $('.generate-questions').html(newHTML);
}


// Show the final page with results
function showFinalPage(rating) {
    let score = STORE.currentScore;
    let questionCount = STORE.questions.length;
    let gameResult = '';

    switch (rating) {
        case 0:
        case 1:
            gameResult = "You have lost the Game of Thrones!";
            break;
        case 2:
            gameResult = "You have won the Game of Thrones!"
    }
    $('.generate-questions').html(`
            <section role="region">
                <h1>Game Over</h1> 
                <h2>${gameResult}</h2>
                <div><span>${score}</span> correct!</div>
                <div><span>${questionCount - score}</span> wrong!</div>
                <div class="btn-container">
                    <button id="restart-quiz">Play Again?</button>
                </div>
            </section>`);
}

function startNewQuiz() {
    $('.generate-questions').on('click', '#restart-quiz', event => {
        location.reload();
    })
}
function assessScore() {    // Assess user's score
    let score = STORE.currentScore;
    if (score < 4) {
        showFinalPage(0);
    } else if (score <= 8 && score >= 4) {
        showFinalPage(1);
    } else if (score >= 8) {
        showFinalPage(2);
    }
}

function renderNextQuestion() {
    $('.generate-questions').on('click', '#next-question', event => {
        event.preventDefault();
        renderQuestion();
        // checkAnswer();
    })
}

function updateQuestionNumber() {
    $('.current-question').text(STORE.currentQuestion);
}

function updateScoreNumber() {
    $('.current-score').text(STORE.currentScore);
}


function callQuizFunctions() {
    startQuiz();
    showQuestion();
    checkAnswer();
    renderNextQuestion();
    startNewQuiz();
}

$(callQuizFunctions);
