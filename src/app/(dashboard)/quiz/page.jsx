/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";
import quizData from "@/app/data/quiz";
import Countdown from "../../components/Countdown";
import Shuffle from "../../components/Shuffle";
const shuffledQuestions = Shuffle(quizData.questions);

const QuizPage = () => {
  const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [restartShuffledQuestions, setRestartShuffledQuestions] = useState(shuffledQuestions);
  const [startQuiz, setStartQuiz] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(true);
  const currentQuestion = restartShuffledQuestions[currentQuestionIndex];
  

  const checkAnswer = (indexAnswer) => {
    setSelectedAnswers(indexAnswer);

    if (indexAnswer === currentQuestion.correctAnswer) {
      setNumberCorrectAnswers(numberCorrectAnswers + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswers("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    handleResetTime();
    setIsActive(true);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setNumberCorrectAnswers(0);
    setSelectedAnswers("");
    setRestartShuffledQuestions(Shuffle(quizData.questions));
  };

  const handleResetTime = () => {
    setTimeLeft(10);
    setIsActive(true);
  };

  const handleStartQuize = () => {
    setStartQuiz(true);
  };


  console.log(currentQuestionIndex)
  return (
    <div className="main_frame_quiz">
      <h1>Quiz Game</h1>

      {startQuiz === false ? (
        <Button onClick={handleStartQuize} variant="contained">
          Start Game
        </Button>
      ) : (
        <div>
          {currentQuestionIndex < quizData.questions.length ? (
            <div>
              <div>
                <Countdown
                  timeLeft={timeLeft}
                  setTimeLeft={setTimeLeft}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />

                <h2>{currentQuestionIndex + 1} - {currentQuestion.question}</h2>

                {currentQuestion.questionType === "text" ? (
                  <TextQuestion
                    currentQuestion={currentQuestion}
                    selectedAnswers={selectedAnswers}
                    checkAnswer={checkAnswer}
                    isActive={isActive}
                  />
                ) : (
                  <ImageQuestion
                    currentQuestion={currentQuestion}
                    selectedAnswers={selectedAnswers}
                    checkAnswer={checkAnswer}
                    isActive={isActive}
                  />
                )}

                <div>
                  {selectedAnswers === currentQuestion.correctAnswer && (
                    <h3 className="correct">
                      {currentQuestion.messageForCorrectAnswer}
                    </h3>
                  )}
                  {selectedAnswers !== currentQuestion.correctAnswer &&
                    typeof selectedAnswers !== "string" && (
                      <h3 className="error">
                        {currentQuestion.messageForIncorrectAnswer}
                      </h3>
                    )}
                </div>

                <Button
                  onClick={nextQuestion}
                  variant="contained"
                  sx={{ marginTop: "1rem" }}
                >
                  Next
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <h2>
                Correct {numberCorrectAnswers}/{quizData.questions.length}
              </h2>
              <Button
                onClick={restartGame}
                variant="contained"
                sx={{ display: "block" }}
              >
                Restart
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TextQuestion = ({
  currentQuestion,
  selectedAnswers,
  checkAnswer,
  isActive,
}) => (
  <div>
    {currentQuestion.answers.map((answer, index) => (
      <button
        key={index}
        onClick={() => checkAnswer(index)}
        disabled={typeof selectedAnswers !== "string" || !isActive}
        className={`customButton ${
          selectedAnswers === index
            ? selectedAnswers === currentQuestion.correctAnswer
              ? "stylesTrue"
              : "stylesFalse"
            : ""
        }`}
      >
        {answer}
      </button>
    ))}
  </div>
);

const ImageQuestion = ({
  currentQuestion,
  selectedAnswers,
  checkAnswer,
  isActive,
}) => (
  <div>
    {currentQuestion.answers.map((answer, index) => (
      <button
        key={index}
        onClick={() => checkAnswer(index)}
        disabled={typeof selectedAnswers !== "string" || !isActive}
        className={`customButton ${
          selectedAnswers === index
            ? selectedAnswers === currentQuestion.correctAnswer
              ? "stylesTrue"
              : "stylesFalse"
            : ""
        }`}
      >
        <img src={answer} alt="" />
      </button>
    ))}
  </div>
);

export default QuizPage;
