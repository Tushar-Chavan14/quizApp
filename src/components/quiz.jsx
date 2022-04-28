import style from "./quiz.module.css";
import { IconContext } from "react-icons";
import { useState } from "react";
import Result from "./result";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import questions from "../data/quesitions.json";

export default function Quiz() {
  const [questioncnt, setquestioncnt] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  function handleClick() {
    const nextquest = questioncnt + 1;
    if (nextquest < questions.length) {
      setquestioncnt(nextquest);
    } else {
      setshowScore(true);
    }
  }

  function handlePrev() {
    const prevQues = questioncnt - 1;
    if (prevQues > 0) {
      setquestioncnt(prevQues);
    }
  }

  function handleScore(correct) {
    if (correct === true) {
      setscore(score + 1);
    }
  }

  function playAgain() {
    setshowScore(false);
    setscore(0);
    setquestioncnt(0);
  }

  return (
    <IconContext.Provider value={{}}>
      {/* Main Container */}

      {showScore ? (
        <Result questions={questions} score={score} reset={playAgain} />
      ) : (
        <div className={style.quizContainer}>
          {/* Header */}
          <div className={style.header}>
            <button className={style.btn}>
              <p className={style.icon} />
              <p className={style.text}></p>
            </button>
            <p className={style.title}>Quiz</p>
            <button className={style.btn}>
              <p className={style.text}></p>
              <p className={style.icon} />
            </button>
          </div>

          {/* Main Question */}
          <div className={style.questionWrapper}>
            <p className={style.question}>
              {questions[questioncnt].questionText}
            </p>
          </div>

          {/* Answers */}
          <div className={style.answerWrapper}>
            {questions[questioncnt].answerOption.map((ans) => (
              <button
                id="option"
                onClick={() => handleScore(ans.isTure)}
                className={style.answer}
              >
                <p className={style.option}>{ans.id}</p>
                <p className={style.details}>{ans.option}</p>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className={style.quizNav}>
            <button onClick={handlePrev} className={style.btn}>
              <BsArrowLeft className={style.icon} />
              <p className={style.text}>Prev</p>
            </button>
            <button onClick={handleClick} className={style.btn}>
              <p className={style.text}>Next</p>
              <BsArrowRight className={style.icon} />
            </button>
          </div>
        </div>
      )}
    </IconContext.Provider>
  );
}
