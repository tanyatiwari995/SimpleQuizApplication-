
const question1="What is 2+3";
const answer1=5;

const question2="Where are you from?";
const answer2 = "India";

const question3="Are you happy?";
const answer3="Yes";


let score=0;
const user1=Number(prompt(question1));
if(user1===answer1){
    score++;
}
const  user2 = Number(prompt(question2));
if(user2===answer2){
    score++;
}
const user3=Number(prompt(question3));
if(user3===answer3){
    score++;
}

const totalScore=3;
const percentageScore= (score/totalScore)*100;

const roundedScore = percentageScore | 0;



let result ="Quiz Result/n";
result="Its is correct Quiz"+ score+ "out of" +totalScore + "/n";
result += "Your score: " + roundedScore + "%\n\n";


if (score === totalScore) {
    result += "Excellent! You got all questions right!";
    } else if (score > 0 && score < totalScore) {
    result += "Good job! You got some questions right.";
    } else if (score === 0) {
    result += "Keep practicing! You'll do better next time.";
    }
   
    alert(result);


//     Simple Quiz Application
// Problem Statement

// Objective
// Create a "Simple Quiz Application" using JavaScript to reinforce your understanding of
// assignment, logical, and other operators, type conversion, and conditional statements. Your task
// is to build a program that asks the user a series of questions, evaluates their responses, and
// calculates their score. You will use assignment operators to store user inputs and scores, logical
// operators to validate answers, and bitwise operators for an advanced touch. You will practice
// type conversion to ensure the user inputs are correctly handled, using both implicit and explicit
// methods. Finally, you will implement conditional statements to display appropriate messages
// based on the user's score.
// Requirements
// 1. Quiz Questions and Answers:
// ○ Prepare a set of questions and their corresponding answers.
// ○ Use different data types for answers (e.g., number, string).
// 2. User Interaction:
// ○ Prompt the user to answer each question.
// ○ Store the user's responses using assignment operators.
// 3. Score Calculation:
// ○ Evaluate the user's responses using logical operators.
// ○ Increment the score for each correct answer.
// 4. Type Conversion:
// ○ Convert user inputs to the appropriate data types.
// ○ Use both implicit and explicit type conversion methods.
// 5. Advanced Operators:
// ○ Use bitwise operators to demonstrate their application in the quiz.
// 6. Conditional Statements:
// ○ Use conditional statements to display appropriate messages based on the user's
// score.
// Instructions
// 1. Prepare Quiz Questions and Answers:
// ○ Define at least three quiz questions and their answers.
// ○ Ensure the answers cover different data types (e.g., number, string).
// 2. Initialize Score:
// ○ Initialize a variable to store the user's score.
// 3. Ask Questions and Evaluate Responses:

// ○ Prompt the user to answer each question.
// ○ Convert the user's response to the correct data type.
// ○ Compare the user's response with the correct answer.
// ○ Increment the score for each correct answer.
// 4. Calculate and Round the Percentage Score:
// ○ Calculate the user's percentage score based on the total number of questions.
// ○ Use a bitwise OR operator to round down the percentage score.
// 5. Display the Result:
// ○ Prepare a message displaying the number of correct answers, the percentage
// score, and a performance evaluation.
// ○ Use conditional statements to customize the performance evaluation message
// based on the user's score.