import React, { useState } from "react";
import QuestionList from "./QuestionList";
import Question from "./Question";
import Iconquestion from "./Iconquestion";
import Succesflag from "./Succesflag";

const ResponseSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCorrectResponses = (isCorrect, option) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedOption(option);
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    setSelectedOption(null);
    if (currentQuestion < QuestionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const disableOptions = () => {
    return clicked;
  };

  const questionIcon = "/src/question-flag.png"; 
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setClicked(false);
    setShowScore(false);
    setSelectedOption(null);
  }
  

  return (
    <div>
      {showScore ? null : <Iconquestion icon={questionIcon} />}
      <div className="app-wrapper">
        {showScore ? (
          <div>
            <div className="completed"><Succesflag  /></div>
            <div className="score-section">
              Results
            </div>
            <div className="score-section2">You got <span className="score-color">{score}</span> correct answers</div>
            <div className="btnElement"><button className="refresh-Btn" onClick={resetQuiz}>Try again</button>
</div>
          </div>
        ) : (
          <div>
            <Question index={QuestionList[currentQuestion].question} />
            <div className="answer-section-wrapper">
              {QuestionList[currentQuestion].answerList.map((answerOption, index) => (
                <li key={index} className="answer-list">
                  <button
                    className={`answer-button ${
                      clicked && answerOption.isCorrect ? "correct" : ""
                    } ${
                      clicked && !answerOption.isCorrect && selectedOption === answerOption ? "incorrect" : ""
                    }`}
                    disabled={disableOptions()}
                    onClick={() => handleCorrectResponses(answerOption.isCorrect, answerOption)}
                  >
                    <div className="lol">
                      <span className="lolf">{answerOption.letter}</span>
                    </div>
                    <div className="lola">{answerOption.answer}</div>
                    <div>
                      {clicked && answerOption.isCorrect ? (
                        <i className="fa-solid fa-circle-check"></i>
                      ) : (
                        <span></span>
                      )}
                      {clicked && !answerOption.isCorrect && selectedOption === answerOption ? (
                        <i className="fa-solid fa-circle-xmark"></i>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </div>

            {clicked && (
              <div>
                <button className="next-button" onClick={handleNextQuestion}>
                  Next
                </button>
               
              </div>
            )}
<div className="pAuthor">Build by <a className="nAuthor" href="https://www.linkedin.com/in/ostin-m%C3%A9dard-sognon-37b72a238/" target="_blank">@Ostindev229</a></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseSection;
