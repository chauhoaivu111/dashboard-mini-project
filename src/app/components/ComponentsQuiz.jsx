"use client"

import React, { useState, useEffect } from 'react';

const Quiz = ({ data, startQuiz, setStartQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    if (startQuiz) {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setScore(0);
      setRemainingTime(10);
    }
  }, [startQuiz]);

  useEffect(() => {
    let timer;
    if (startQuiz && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      handleNextQuestion();
    }

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime, startQuiz]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null || remainingTime <= 0) {
      if (selectedAnswer === data.questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
      setRemainingTime(10);
    }
  };

  return (
    <div>
      {startQuiz ? (
        <div>
          {currentQuestion < data.questions.length ? (
            <div>
              <h2>Question {currentQuestion + 1}</h2>
              <p>Time remaining: {remainingTime >= 0 ? remainingTime : 0} seconds</p>
              <p>{data.questions[currentQuestion].question}</p>
              <ul>
                {data.questions[currentQuestion].answers.map((answer, index) => (
                  <li
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={selectedAnswer === index ? 'selected' : ''}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <button onClick={handleNextQuestion}>Next</button>
            </div>
          ) : (
            <div>
              <h2>Quiz Completed</h2>
              <p>Your Score: {score}/{data.questions.length}</p>
              <p>Questions not answered: {data.questions.length - score}</p>
              <button onClick={() => setStartQuiz(false)}>Start Again</button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => setStartQuiz(true)}>Start Quiz</button>
      )}
    </div>
  );
};
export default Quiz