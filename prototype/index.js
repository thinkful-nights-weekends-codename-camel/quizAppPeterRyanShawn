

// Show the question
function showQuestion(questionNumber) {
    /*
        Take argument 'questionNumber', the current question the user is viewing.
        Retrieve the 'question' object from the store. Use that object's values
        to populate the question HTML block. Return the block.
    */
    // if(questionNumber)
    // return `

    // `;
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
}


// Show that answer is wrong
function showAnswerWrong() {
    // show the answer...
    // 
    // If user is on last question, 'next' button should advance user to end card (this would be function 'showFinalPage')
    // If user is not on last question, 'next' button should advance user to next question
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