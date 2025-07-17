import React, { useState } from "react";
import "./styles.css";

type Flashcard = {
  question: string;
  answer: string;
};

const flashcardsData: Flashcard[] = [
  {
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces.",
  },
  {
    question: "What is JSX?",
    answer: "A syntax extension that allows writing HTML in JavaScript.",
  },
  {
    question: "What is a component?",
    answer: "A reusable and independent piece of UI.",
  },
];

export default function App() {
  const [index, setIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % flashcardsData.length);
    setShowAnswer(false);
  };

  const handlePrev = () => {
    setIndex(
      (prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length
    );
    setShowAnswer(false);
  };

  return (
    <div className="App">
      <h1 className="heading">🚀 Flashcard Quiz App</h1>
      <div className="card animated">
        <h2>{flashcardsData[index].question}</h2>
        {showAnswer && <p className="answer">{flashcardsData[index].answer}</p>}
        <button
          className="toggle-btn"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "🙈 Hide Answer" : "👀 Show Answer"}
        </button>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>⬅️ Previous</button>
        <span className="progress">
          {index + 1} / {flashcardsData.length}
        </span>
        <button onClick={handleNext}>Next ➡️</button>
      </div>
    </div>
  );
}
