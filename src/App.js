import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import { Home } from "./Pages/Home/Home";
import { Quiz } from "./Pages/Quiz/Quiz";
import { Result } from "./Pages/Result/Result";
import { Footer } from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
  //  console.log(data);
    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="components">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route path="/quiz" 
            element={
            <Quiz 
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />} />
            <Route path="/result" element={<Result name={name} score={score} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
