import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import questions from '../Question';

export default function QuizPage() {
  const [int, setInt] = useState(0);
  const [spe, setSpe] = useState(0);
  const [str, setStr] = useState(0);
  const [pow, setPow] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const history = useHistory();

  const Answer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;
    background-color: transparent;
    border: transparent;
    margin-top: 40px;
    @media screen and (min-width: 1180px) {
      width: 50%;
    }
  `;

  const Button = styled.div`
    display: flex;
    justify-content: center;
    border: transparent;
    border-radius: 10px;
    padding: 10px 30px;
    color: white;
    background-color: #222222;
    transition: 0.3s;
    font-size: 2em;
    outline: none;
    user-select: none;
    margin-top: 0.3em;
    cursor: pointer;
    font-family: 'Bebas neue', sans-serif;
    @media screen and (min-width: 1180px) {
      &:hover {
        color: white;
        background-color: #616a94;
      }
    }
  `;

  const Question = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 30px;
    color: white;
    background-color: #222222;
    font-family: 'Bebas neue', sans-serif;
    font-size: 2em;
  `;

  const Questioncount = styled.div`
    display: flex;
    justify-content: center;

    padding: 10px 30px;
    color: white;
    background-color: #222222;
    font-size: 1.5em;
    font-family: 'Bebas neue', sans-serif;
  `;

  const Blocquestion = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;
    background-color: transparent;
    border: transparent;
    margin-top: 150px;
    @media screen and (min-width: 1180px) {
      width: 50%;
    }
  `;

  const handleAnswerOptionClick = (answerOption) => {
    if (answerOption.stat === 'intelligence') {
      setInt(int + answerOption.value);
    }
    if (answerOption.stat === 'speed') {
      setSpe(spe + answerOption.value);
    }
    if (answerOption.stat === 'strenght') {
      setStr(str + answerOption.value);
    }
    if (answerOption.stat === 'power') {
      setPow(pow + answerOption.value);
    }
  };

  useEffect(() => {
    if (int + spe + str + pow) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        history.push(`/results/${int}/${spe}/${str}/${pow}`);
      }
    }
  }, [int, spe, str, pow]);

  return (
    <div className="QuizPage">
      <div className="question-section">
        <Blocquestion>
          <Questioncount>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </Questioncount>
          <Question>{questions[currentQuestion].questionText}</Question>
        </Blocquestion>
      </div>
      <Answer>
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <Button
            type="button"
            onClick={() => handleAnswerOptionClick(answerOption)}
          >
            {answerOption.content}
          </Button>
        ))}
      </Answer>
    </div>
  );
}
