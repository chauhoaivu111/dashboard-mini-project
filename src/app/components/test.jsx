"use client"

import React,{useState,useEffect} from 'react';
import Quiz from "../../components/ComponentsQuiz";
import quizData from '@/app/components/data/quiz';




export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const checkAnswer = (selectedIndex) => {
    setSelectedAnswer(selectedIndex);

    if (selectedIndex === currentQuestion.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    setTimeout(() => {
      nextQuestion();
    }, 2000); // 2 seconds delay before moving to the next question
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const displayResults = () => {
    return (
      <div>
        <h2>Quiz Results</h2>
        <p>Correct Answers: {correctAnswers} / {quizData.questions.length}</p>
        <button onClick={restartGame}>Restart</button>
      </div>
    );
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setSelectedAnswer(null);
  };

  const renderAnswer = (answer, index) => {
    if (currentQuestion.questionType === 'text') {
      return (
        <button
          key={index}
          onClick={() => checkAnswer(index)}
          className={selectedAnswer === index ? 'selected' : ''}
        >
          {answer}
        </button>
      );
    } else if (currentQuestion.questionType === 'photo') {
      return (
        <button
          key={index}
          onClick={() => checkAnswer(index)}
          className={selectedAnswer === index ? 'selected' : ''}
        >
          <img src={answer} alt={`Answer ${index}`} />
        </button>
      );
    }
    return null;
  };

  if (currentQuestionIndex < quizData.questions.length) {
    return (
      <div>
        <h1>Quiz Game</h1>
        <h2>Question {currentQuestionIndex + 1}</h2>
        <h3>{currentQuestion.question}</h3>
        <ul>
          {currentQuestion.answers.map((answer, index) => (
            <li key={index}>{renderAnswer(answer, index)}</li>
          ))}
        </ul>
        {selectedAnswer !== null && (
          <div className="answer-message">
            {selectedAnswer === currentQuestion.correctAnswer
              ? currentQuestion.messageForCorrectAnswer
              : currentQuestion.messageForIncorrectAnswer}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Quiz Game</h1>
        {displayResults()}
      </div>
    );
  }
}

