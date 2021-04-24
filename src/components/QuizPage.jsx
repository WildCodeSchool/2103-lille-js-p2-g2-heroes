import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';

export default function QuizPage() {
  const [int, setInt] = useState(0);
  const [spe, setSpe] = useState(0);
  const [str, setStr] = useState(0);
  const [pow, setPow] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const history = useHistory();

  const questions = [
    {
      questionText: 'What is the first question ?',
      answerOptions: [
        {
          content: 'answer 1',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'answer 2',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'answer 3',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'answer 4',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'What is the second question ?',
      answerOptions: [
        {
          content: 'answer 1',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'answer 2',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'answer 3',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'answer 4',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'What is the third question ?',
      answerOptions: [
        {
          content: 'answer 1',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'answer 2',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'answer 3',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'answer 4',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'What is the fourth question ?',
      answerOptions: [
        {
          content: 'answer 1',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'answer 2',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'answer 3',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'answer 4',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'What is the fifth question ?',
      answerOptions: [
        {
          content: 'answer 1',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'answer 2',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'answer 3',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'answer 4',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'What is the sixth question ?',
      answerOptions: [
        {
          content: 'answer 1',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'answer 2',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'answer 3',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'answer 4',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'What is the seventh question ?',
      answerOptions: [
        {
          content: 'answer 1',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'answer 2',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'answer 3',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'answer 4',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'What is the seventh question ?',
      answerOptions: [
        {
          content: 'answer 1',
          stat: 'female',
          value: 1,
        },
        {
          content: 'answer 2',
          stat: 'male',
          value: 1,
        },
        {
          content: 'answer 3',
          stat: 'whatever',
          value: 1,
        },
      ],
    },
  ];

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
      <Header />

      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button
            type="button"
            onClick={() => handleAnswerOptionClick(answerOption)}
          >
            {answerOption.content}
          </button>
        ))}
      </div>
    </div>
  );
}
