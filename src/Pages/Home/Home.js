import React from "react";
import "./Home.css";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import homeImage from "../../images/quiz-home_5.avif";
import { TextField, MenuItem, Button } from "@mui/material";
import Categories from "../../Data/Categories";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export const Home = ({ name, setName, fetchQuestions }) => {
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  // const history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
      // history.push("/quiz");
    }
  };

  return (
    <div className="home-container">
      <div className="quizForm">
        <h1 className="quiz-heading">Quiz Credentials</h1>
        <div className="data-Container">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}

          <TextField
            style={{
              padding: "5px",
              width: "80%",
              marginBottom: "15px",
            }}
            className="formElement"
            id="filled-basic"
            label="Enter Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            style={{
              padding: "5px",
              width: "80%",
              marginBottom: "15px",
            }}
            className="formElement"
            select
            id="filled-basic"
            variant="outlined"
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            helperText="Select the category of the quiz"
          >
            {Categories.map((option) => (
              <MenuItem key={option.category} value={option.value}>
                {option.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            style={{
              padding: "5px",
              width: "80%",
            }}
            select
            className="formElement"
            id="filled-basic"
            variant="outlined"
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            helperText="Please select your Difficulty Level"
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <div className="startBtn">
            <Button variant="contained" size="large" onClick={handleSubmit}>
              Start Quiz
            </Button>
          </div>
        </div>
      </div>

      <div className="home_image">
        <img src={homeImage} alt="Quiz Home" />
      </div>
    </div>
  );
};
