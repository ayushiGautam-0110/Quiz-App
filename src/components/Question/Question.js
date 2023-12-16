import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";
import { ErrorMessage } from "../ErrorMessage";

export const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
   
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="single-question-box">
        <h2>{questions[currQues] && questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`single-option  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            className="single-button"
            variant="contained"
            color="secondary"
            size="large"
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            className="single-button"
            variant="contained"
            color="primary"
            size="large"
            style={{
              margin: "20px  10px",
            }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

// export default Question;
