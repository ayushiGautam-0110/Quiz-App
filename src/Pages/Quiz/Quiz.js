import React, { useState } from "react";
import { useEffect } from "react";
import "./Quiz.css";
import { CircularProgress } from "@mui/material";
import {Question} from "../../components/Question/Question";

// C:\Users\ayush\quiz-app\src\components\Question\Question.js
export const Quiz = ({name,questions,score,setScore,setQuestions}) => {
  const [options,setOptions]=useState();
  const [currQues,setCurrQues]=useState(0);

  useEffect(() => {
    if (questions && questions[currQues]) {
      setOptions(handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers
      ]));
    }
  }, [questions, currQues]);
  
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  

  return (
    <div className="quiz-container">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span className="category"> {questions[currQues]?.category}</span>
            <span className="score">
              Score : {score}
            </span>
          </div>


         <div   className="question-container">
         <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            category={questions[currQues]?.category}
          />
         </div>
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
          display="inline-flex"
          align-items="center"
          justify-content="center"
          
        />
      )}
    </div>
  );
};
