import React from "react";
import style from './result.module.css';

export default function Result(props) {
  const { score, reset } = props;

  return (
    <div className={style.quizContainer}>
      <div className={style.questionWrapper}>
        <p className={style.question}>you have scored</p>
      </div>
      <div className={style.questionWrapper}>
      <p className={style.question}>{score}</p></div>

      <div className={style.quizNav}>
        <button onClick={reset} className={style.answer}>
          <p className={style.option}></p>
          <p className={style.detail}>Play again</p>
        </button>
      </div>
    </div>
  );
}
