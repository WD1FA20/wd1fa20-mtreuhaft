/*
 * Filename:    lab_7.js
 * Description: A simple quiz that uses arrays and functions
 * Author:      Luke Sathrum / YOUR NAME HERE
 */
"use strict";

// Create a score variable and set to 0



/* Create a function that outputs the questions/answers in your object
 * You will probably want to write this function AFTER you write the rest of the code
 * Has a single parameter which is a question/answer object
 * In the function
 * -Use a prompt() to ask the question to the user
 * -To compare: if(result_of_prompt == question_answer)
 * -- If they get the question right increment the count and inform the user.
 *    Use the alert() function to inform the user
 * -- If they get the question wrong inform the user using alert()
 * -Use HTML to output the question, the user's answer, and the correct answer
 */

function askAnswer(questionObject) {
  
  // 1) use prompt() to ask the questionObject.question and store the result

  // 2) if (result_of prompt == questionObject.answer)
  //    use alert() to inform user they are correct
  //    Increment your score variable

  // 3) else
  //    use alert() to inform the user that they are incorrect

  // 4) document.write the question, user's answer, and correct answer.

}

// Create an array to store at least 5 questions. Each question should have a
// numeric answer.
// Since every question has also has an answer each item of the array will be 
// an object with the first key being the question and the second key being the
// answer
var questions = [ {
					question: 'QUESTION',
					answer: 'ANSWER'
				  },
				  {
					question: 'QUESTION',
					answer: 'ANSWER'
				  },
				  {
					question: 'QUESTION',
					answer: 'ANSWER'
				  },
				  {
					question: 'QUESTION',
					answer: 'ANSWER'
				  },
				  {
					question: 'QUESTION',
					answer: 'ANSWER'
				  }
				];

// Use the following loop to loop through each question
for (let questionObject of questions) {
  
  // Call your askAnswer function and pass in an item (the questionObject) of
  // the array 
}

// Output to the user via HTML the number of questions they got right out of the
// total.
// Get the total using the .length property of the array

// USE document.write()
