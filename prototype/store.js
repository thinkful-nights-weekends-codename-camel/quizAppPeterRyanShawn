const STORE = {
  currentScore: 0,
  currentQuestion: 0,
  questions: [
     {
        question: "What is the surname given to bastards born in the Riverlands?",
        options: ["Snow", "Rivers", "Sand", "Stone"],
        correct: 1 
     },
      {
        question: "Who does Tyrion intially declare as his champion at the Eyrie?",
        options: ["Bronn", "The Blackfish", "Jaime Lannister", "Jon Arryn"],
        correct: 2   
      },
      {
        question: "Who was the rightful king after the death of Robert Baratheon?",
        options: ["Stannis Baratheon", "Joffrey Baratheon", "Renly Baratheon", "Balon Greyjoy"],
        correct: 0
      },
      
      {
       question: "Who led the betrayal of Jon Snow at Castle Black?",
       options: ["Gilly", "Samwell Tarly", "Olly", "Alister Thorne"],
       correct: 3 
      },
      {
        question: "Who was the man that saved Eddard Stark at the Tower of Joy?",
       options: ["Rhaegar Targaryen", "Howland Reed", "Arthur Dayne", "Benjen Stark"],
       correct: 1 
      },
      {
       question: "Which city did Daenerys Targaryen free the slaves from their masters?",
       options: ["Braavos", "Lys", "Meereen", "Astapor"],
       correct: 2  
      },
      {
       question: "In the series, Why was Cersei Lannister taken into custody by the Faith Militant?",
       options: ["Murder of her father", "Incest with her cousin Lancel", "Conspiring to murder her late husband Robert", "Never eating food in the show"],
       correct: 1 
      },
      {
       question: "What was the turning point of Robert's Rebellion, where Rhaegar Targaryen was Killed?",
       options: ["Battle of Ashford", "Battle of the Blackwater", "Sack of King's Landing", "Battle of the Trident"],
       correct: 3  
      },
      {
       question: "What was Mance's occupation before he became leader of the Wildlings?",
       options: ["Brother of the Night's Watch", "Stonemason", "Minor Lord of the North", "Mercenary"],
       correct: 0 
      },
      {
       question: "What is the name of the women assigned to train Arya at the House of Black and White?",
       options: ["The Woman", "The Whore", "The Waif", "Melisandre"],
       correct: 2
      }],
    increaseScore: function() {
      this.currentScore++;
    },
    increaseQuestion: function() {
      this.currentQuestion++;
    }
}