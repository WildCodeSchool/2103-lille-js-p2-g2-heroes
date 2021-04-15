import { useState } from 'react';

export default function QuizPage() {
  const questions = [
    {
      questionText: 'What is the first question ?',
      answerOptions: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    },
    {
      questionText: 'What is the second question ?',
      answerOptions: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    },
    {
      questionText: 'What is the third question ?',
      answerOptions: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    },
    {
      questionText: 'What is the fourth question ?',
      answerOptions: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    },
    {
      questionText: 'What is the fifth question ?',
      answerOptions: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    },
    {
      questionText: 'What is the sixth question ?',
      answerOptions: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    },
    {
      questionText: 'What is the seventh question ?',
      answerOptions: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };
  return (
    <div className="app">
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
            {answerOption}
          </button>
        ))}
      </div>
      )
    </div>
  );
}
