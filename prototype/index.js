

// Testing showAnswerCorrect and showAnswerWrong
$(
    () => {
        let questionIndex = STORE.currentQuestion;
        let text1 = showAnswerCorrect();
        let text2 = showAnswerWrong("unicorns");
        let text3 = showQuestion(questionIndex);
        $('#anything').html(text3 + '<hr>' + text1 + '<hr>' + text2);
    }
)

// Show the question
function showQuestion(questionNumber) {
    /*
        Take argument 'questionNumber', the current question the user is viewing.
        Retrieve the 'question' object from the store. Use that object's values
        to populate the question HTML block. Return the block.
    */
    let questionCount = STORE.questions.length;

    if (questionNumber < questionCount - 1) {
        let question = STORE.questions[questionNumber].question;
        let options = STORE.questions[questionNumber].options;

        return `
            <section role="region">
                <h2>${question}</h2>
                <form action="">
                    <input type="radio" name="answer" value="0">${options[0]}<br>
                    <input type="radio" name="answer" value="1">${options[1]}<br>
                    <input type="radio" name="answer" value="2">${options[2]}<br>
                    <input type="radio" name="answer" value="3">${options[3]}<br>
                </form>
                <div><button id="submit-answer">SUBMIT</button></div>
                <div><span>${questionNumber + 1}</span> out of ${questionCount}</div>
            </section>
        `;
    }
    else {
        assessScore();
    }
}


// Check for the answer
function checkAnswer(questionNumber) {
    $('#submit-answer').on('submit', event => {
        event.preventDefault();
        let chosenAnswer = $('input:checked');
        let correctAnswer = STORE.questions[questionNumber].correct

        if (chosenAnswer.val === correctAnswer) {
            $('section').remove;
            showAnswerCorrect();
            incrementScore();
        }
        else {
            $('section').remove;
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
    return `
        <section>
            <h2>Atta boy, Podrick!</h2>
            <h3>Congratulations! You're one step closer to sitting on the Iron Throne.</h3>
            <button id="next-question">NEXT</button>
        </section>
    `;
}

// Show that answer is wrong
function showAnswerWrong(answer) {
    // show the answer...
    // 
    // If user is on last question, 'next' button should advance user to end card (this would be function 'showFinalPage')
    // If user is not on last question, 'next' button should advance user to next question    
    return `
        <section>
            <h2> Ser? My Lady?</h2>
            <h3>Wrong! The correct answer was ${answer}</h3>
            <button id="next-question">NEXT</button>
        </section>`;
}


// Show the final page with results
function showFinalPage(rating) {
    let score = STORE.currentScore;
    let questionCount = STORE.questions.length;

    switch (rating) {
        case 1:
            // show mediocre results view
            return `
            <section role="region">
                <h1>Game Over</h1> 
                <h2>You have lost the Game of Thrones!</h2>
                <div><span>${score}</span> correct!</div>
                <div><span>${questionCount - score}</span> wrong!</div>
                <button class="restart-quiz" id="play-again">Play Again?</button>
            </section>
        `;
            break;
        case 2:
            // show ok results view
            return `
            <section role="region">
                <h1>Game Over</h1> 
                <h2>You have lost the Game of Thrones!</h2>
                <div><span>${score}</span> correct!</div>
                <div><span>${questionCount - score}</span> wrong!</div>
                <button class="restart-quiz" id="play-again">Play Again?</button>
            </section>
        `;
            break;
        default:
            // show awesome results view
            return `
            <section role="region">
                <h1>Game Over</h1> 
                <h2>You have won the Game of Thrones!</h2>
                <div><span>${score}</span> correct!</div>
                <div><span>${questionCount - score}</span> wrong!</div>
                <button class="restart-quiz" id="play-again">Play Again?</button>
            </section>
        `;
    }
}


// Start a new quiz
function startNewQuiz() {
    // ...
}


// Assess user's score
function assessScore(score) {
    if (score > 4) {
        showFinalPage(0);
    } else if (score <= 8 && score >= 4) {
        showFinalPage(1);
    } else if (score >= 8) {
        showFinalPage(2);
    }
}