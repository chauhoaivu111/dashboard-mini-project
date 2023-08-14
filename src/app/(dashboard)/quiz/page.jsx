/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import quizData from "@/app/components/data/quiz";
import { Button } from "@mui/material";
import Coundown from "../../components/Countdown";
import Shuffle from "../../components/Shuffle";
const shuffledQuestions = Shuffle(quizData.questions);

const page = () => {
  const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [restartShuffledQuestions, setrestartShuffledQuestions] =useState(shuffledQuestions);
  const [startquiz, setStartquiz] = useState(false);

  console.log(restartShuffledQuestions);
  const currentQuestion = restartShuffledQuestions[currentQuestionIndex];
  console.log(currentQuestion);

  const checkAnswer = (indexAnswer) => {
    setSelectedAnswers(indexAnswer);

    if (indexAnswer === currentQuestion.correctAnswer) {
      setNumberCorrectAnswers(numberCorrectAnswers + 1);
    }
  };

  console.log("selectecanswers", typeof selectedAnswers);

  const nextQuestion = () => {
    setSelectedAnswers("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    handleReset();
    setIsActive(true);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setNumberCorrectAnswers(0);
    setSelectedAnswers("");
    setrestartShuffledQuestions(Shuffle(quizData.questions));
  };

  console.log("dd", quizData.questions.length);
  console.log("cunrrenINdex", currentQuestionIndex);

  // coundown here
  const initialTime = 10;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  const handleReset = () => {
    setTimeLeft(initialTime);
    setIsActive(true);
  };

  // console.log(isActive)

  const handleStart = () => {
    setStartquiz(true);
  };

  return (
    <div className="main_frame_quiz">
      <h1>Quiz Game</h1>

      {startquiz === false ? (
        <Button onClick={handleStart} variant="contained">
          start Game
        </Button>
      ) : (
        <div>
          {currentQuestionIndex < quizData.questions.length ? (
            <div>
              <div>
                <Coundown
                  timeLeft={timeLeft}
                  setTimeLeft={setTimeLeft}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />

                <h2>{currentQuestion.question}</h2>
{/* need split -------------------------------------------------------------------------------------------------------------- */}
                {currentQuestion.questionType === "text" ? (
                  <div>
                    {currentQuestion.answers.map((answers, index) => (
                      <button
                        variant="outlined"
                        key={index}
                        onClick={() => checkAnswer(index)}
                        disabled={typeof selectedAnswers !== "string" || isActive === false}
                        className={`${"customButton"} ${
                          selectedAnswers === index
                            ? selectedAnswers === currentQuestion.correctAnswer
                              ? "stylesTrue"
                              : "stylesFalse"
                            : ""
                        }`}
                      >
                        {answers}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    {currentQuestion.answers.map((answers, index) => (
                      <button
                        className={`${"customButton"} ${
                          selectedAnswers === index
                            ? selectedAnswers === currentQuestion.correctAnswer
                              ? "stylesTrue"
                              : "stylesFalse"
                            : ""
                        }`}
                        key={index}
                        onClick={() => checkAnswer(index)}
                        disabled={typeof selectedAnswers !== "string" ||isActive === false}
                      >
                        <img src={answers} alt="" />
                      </button>
                    ))}
                  </div>
                )}


                <div>
                  {selectedAnswers === currentQuestion.correctAnswer ? (
                    <h3 className="correct">
                      {currentQuestion.messageForCorrectAnswer}
                    </h3>
                  ) : (
                    ""
                  )}
                  {selectedAnswers !== currentQuestion.correctAnswer &&
                  typeof selectedAnswers !== "string" ? (
                    <h3 className="error">
                      {currentQuestion.messageForIncorrectAnswer}
                    </h3>
                  ) : (
                    ""
                  )}
                </div>

                <Button
                  onClick={nextQuestion}
                  variant="contained"
                  sx={{ marginTop: "1rem" }}
                >
                  next
                </Button>
              </div>
            </div>
          ) :(
            <div>
              <h4>
                Correct {numberCorrectAnswers}/{quizData.questions.length}
              </h4>
              <Button
                onClick={restartGame}
                variant="contained"
                sx={{ display: "block" }}
              >
                restart
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
