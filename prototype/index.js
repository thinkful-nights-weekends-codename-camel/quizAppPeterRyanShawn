// $(
//     () => {
//         text = showQuestion(3)
//         $('#anything').html(text);
//     }
// )

// Testing showAnswerCorrect and showAnswerWrong
$(
    () => {
        let text1 = showAnswerCorrect();
        let text2 = showAnswerWrong("unicorns");
        $('#anything').html(text1 + '<hr>' + text2);
    }
)

// Show the question
function showQuestion(questionNumber) {
    /*
        Take argument 'questionNumber', the current question the user is viewing.
        Retrieve the 'question' object from the store. Use that object's values
        to populate the question HTML block. Return the block.
    */
    if (questionNumber < STORE.length - 1) {
        let question = STORE[questionNumber].question;
        let options = STORE[questionNumber].options;
        let totalQuestions = STORE.length;

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
                <div><span>${questionNumber + 1}</span> out of ${totalQuestions}</div>
            </section>
        `;
    }
    else {
        assessScore();
    }
}


// Check for the answer
function checkAnswer(questionNumber, currentAnswer) {
    // ...
    // If answer is correct
    // ... showAnswerCorrect()
    // else
    // ... showAnswerWrong()
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
    // ...
    /*
    If rating = 1
        show mediocre results view
    If rating = 2
        show ok results view
    Otherwise
        show awesome results view
    */
}


// Start a new quiz
function startNewQuiz() {
    // ...
}


// ...
function incrementScore() {
    // score += 100;
}


// ...
function assessScore() {
    /*
    Identify user's final score
    If score is less than 4
        Direct user to 'crappy results' view
        showFinalPage(0)
    If score is 4 or more, but less than 8
        Direct user to "i mean, you did fine. it's fine" view
        showFinalPage(1)
    If score is 8 or more
        Direct user to "you won the throne" view
        showFinalPage(2)
    */
}