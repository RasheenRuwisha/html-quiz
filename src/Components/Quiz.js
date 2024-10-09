import React, { useState, useRef } from "react";
import "./Quiz.css";
import { data } from "../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(1);
  let [result, setResult] = useState(false);
  let [answers, setAnswers] = useState(data[index].options);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const shuffle = (array) => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans == ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("incorrect");
        setLock(true);
        option_array.map((option) => {
          if (option.current.innerText === question.ans) {
            option.current.classList.add("correct");
          }
        });
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index == data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setAnswers(shuffle(data[index].options));
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("incorrect");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setAnswers(shuffle(data[0].options));
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const setScoreView = () => {
    if (score <= 5) {
      return (
        <div>
          <h2 className="score">
            You Scored {score} out of {data.length}
          </h2>
          <img
            className="image"
            src="https://i1.sndcdn.com/artworks-BE72T6QuR7IYqIYr-XHJymA-t1080x1080.jpg"
          />
          <button onClick={reset}>Reset</button>
        </div>
      );
    } else if (score > 5 && score < 10) {
      return (
        <div>
          <h2 className="score">
            You Scored {score} out of {data.length}
          </h2>
          <img
            className="image"
            src="https://media.tenor.com/ALNgfWrgk1cAAAAe/sad-hamster-meme-sad-hamster.png"
          />
          <button onClick={reset}>Reset</button>
        </div>
      );
    } else if (score > 10 && score < 15) {
      return (
        <div>
          <h2 className="score">
            You Scored {score} out of {data.length}
          </h2>
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDC5xzMOPcZiMemxekVVq_-que9_RSQ9uP0g&s"
          />
          <button onClick={reset}>Reset</button>
        </div>
      );
    } else if (score > 15) {
      return (
        <div>
          <h2 className="score">
            You Scored {score} out of {data.length}
          </h2>
          <img
            className="image"
            src="https://media.tenor.com/gjTjxUCoP3sAAAAj/jumping-gatito.gif"
          />
          <button onClick={reset}>Reset</button>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <h1> HTML QUIZ </h1>
      <hr />
      {result ? (
        setScoreView()
      ) : (
        <div>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAns(e, answers[0]);
              }}
            >
              {answers[0]}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAns(e, answers[1]);
              }}
            >
              {answers[1]}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAns(e, answers[2]);
              }}
            >
              {answers[2]}
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAns(e, answers[3]);
              }}
            >
              {answers[3]}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {" "}
            {index + 1} of {data.length}{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
