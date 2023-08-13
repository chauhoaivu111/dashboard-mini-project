"use client"

import React, { useState, useEffect, use } from 'react';
import quizData from '@/app/components/data/quiz';
import { Button } from '@mui/material';
import Coundown from "../../components/Countdown"



const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};


const shuffledQuestions = shuffleArray(quizData.questions);

const page = () => {

  const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState('')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [restartShuffledQuestions, setrestartShuffledQuestions] = useState(shuffledQuestions)


  console.log(restartShuffledQuestions)
  const currentQuestion = restartShuffledQuestions[currentQuestionIndex]
  console.log(currentQuestion)


  const checkAnswer = (indexAnswer) => {
    setSelectedAnswers(indexAnswer)

    if (indexAnswer === currentQuestion.correctAnswer) {
      setNumberCorrectAnswers(numberCorrectAnswers + 1)


    }

  //   setTimeout(() => {
  //     nextQuestion()
  //   }, 2000)

  }

  console.log("selectecanswers", typeof (selectedAnswers))

  const nextQuestion = () => {
    setSelectedAnswers('')
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    handleReset()
    setIsActive(true)


  }


  const restartGame = () => {
    setCurrentQuestionIndex(0)
    setNumberCorrectAnswers(0)
    setSelectedAnswers('')
    setrestartShuffledQuestions(shuffleArray(quizData.questions))

  }



  console.log("dd", quizData.questions.length)
  console.log("cunrrenINdex", currentQuestionIndex)


  // coundown here
  const initialTime = 10;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  

  const handleReset = () => {
    setTimeLeft(initialTime);
    setIsActive(true);
  };



  // console.log(isActive)
  

  



  

  return (
    <div style={{ display: "block" }}>

      {
       currentQuestionIndex < quizData.questions.length  ? <div>
        <h1>Quiz Game</h1>
      <h2>{currentQuestion.question}</h2>

      {
        currentQuestion.questionType === "text" ?

          (<div style={{ display: "block" }}>
            {currentQuestion.answers.map((answers, index) => (
              <Button variant="outlined"
                sx={{ display: "block", width: "250px", marginTop: "10px" }}
                key={index}
                onClick={() => checkAnswer(index)}
                disabled={typeof(selectedAnswers) !== "string" || isActive === false}


              >{answers}</Button>
            ))}
          </div>) : (<div style={{ display: "block" }}>
            {currentQuestion.answers.map((answers, index) => (
              <Button sx={{ display: "block" }} key={index} onClick={() => checkAnswer(index)}  disabled={typeof(selectedAnswers) !== "string" || isActive === false}>

                <img src={answers} alt="" style={{ width: "100px", }} />
              </Button>
            ))}
          </div>)
      }
      <div>
        {selectedAnswers === currentQuestion.correctAnswer ? (<h4>{currentQuestion.messageForCorrectAnswer}</h4>) : ""}
        {selectedAnswers !== currentQuestion.correctAnswer && typeof(selectedAnswers) !== "string" ? (<h4>{currentQuestion.messageForIncorrectAnswer}</h4>) : ""}
        {numberCorrectAnswers}

      </div>


      <Button onClick={nextQuestion} variant="contained" >next</Button>
      {/* {timeLeft}s */}

      <Coundown 
      timeLeft={timeLeft}
      setTimeLeft={setTimeLeft}
      isActive={isActive}
      setIsActive={setIsActive}
      />
     
       </div> :
        <div>
         <h4>Correct {numberCorrectAnswers}/{quizData.questions.length}</h4> 
           <Button onClick={restartGame} variant="contained" sx={{ display: "block" }} >restart</Button>
        </div>
      }
      
    </div>
  );
}


export default page

