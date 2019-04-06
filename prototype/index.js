// $(
//     () => {
//         text = showQuestion(3)
//         $('#anything').html(text);
//     }
// )


// Show the question
let questionNumber = 0;
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
function checkAnswer(questionNumber) {
   $('#submit-answer').on('submit', event => {
    event.preventDefault();
    let chosenAnswer = $('input:checked');
    let correctAnswer = STORE[questionNumber].correct

    if (chosenAnswer.val === correctAnswer){
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
 let score = parseInt($('#current-score').attr('data-current-score')) ++;
 $('#current-score').attr({'data-current-score' : score});
 $('#current-score').text(score);
}


// ...
function assessScore(score) {
   if (score > 4){
       showFinalPage(0);
   } else if (score <= 8 && score >= 4){
       showFinalPage(1);
   } else if (score >= 8) {
       showFinalPage(2);
   }
}



function updateQuestion(){
    $('#next-question').on('click', event => {
        questionNumber++;
        showQuestion();
})
}