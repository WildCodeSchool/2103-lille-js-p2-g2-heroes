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
      questionText:
        'If you were to become a superhero, what would your outfit be? ',
      answerOptions: [
        {
          content: 'Make-up will do',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'Old pajamas and go!  ',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'I make myself an armor ',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'Something that is scary',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'What power would you like to have? ',
      answerOptions: [
        {
          content: 'Be smart enough to build my outfit ',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'To be fast ',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'Be gifted in martial arts ',
          stat: 'strenght',
          value: 10,
        },
        {
          content:
            'Not having any powers, but just knowing how to create my own combat items ',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'To get out of a sticky situation, what would you do? ',
      answerOptions: [
        {
          content: 'You would divert attention with something surprising  ',
          stat: 'intelligence',
          value: 10,
        },
        {
          content:
            'You would escape and arrange so that no one could find you ',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'You would neutralize your enemies until the last ',
          stat: 'strenght',
          value: 10,
        },
        {
          content: 'You would blow everything around you ',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText:
        'You are at the end of the line, the enemy is far too powerful for you and the reinforcements are not coming ',
      answerOptions: [
        {
          content:
            'You wait for the endless monologue of the super villains about to win to stab him',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'You try to save time by hiding behind debris ',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'You keep on fighting even if it means dying ',
          stat: 'strenght',
          value: 10,
        },
        {
          content:
            'You use your last strength to ward off fatal blows and save time ',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText:
        'Following intense fights between super heroes, planet Earth is no more than a deserted battlefield. What are you going to do now? ',
      answerOptions: [
        {
          content: 'So much desolation we must repopulate the planet ',
          stat: 'intelligence',
          value: 10,
        },
        {
          content: 'Im trying to find survivors ',
          stat: 'speed',
          value: 10,
        },
        {
          content: 'Im sipping a refreshing drink now that Im finally alone! ',
          stat: 'strenght',
          value: 10,
        },
        {
          content:
            'Im leaving the blue planet because there is nothing more to do ',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText:
        'At the bend of an alley you come across an individual dressed in a bat costume, he offers you a wedding ring, what do you do? ',
      answerOptions: [
        {
          content: 'For you super heroes = super powers',
          stat: 'intelligence',
          value: 10,
        },
        {
          content:
            'Insulted, you push him in a dumpster and climb to the roof ',
          stat: 'speed',
          value: 10,
        },
        {
          content:
            'You join him without hesitation because you find that his armor inspires respect ',
          stat: 'strenght',
          value: 10,
        },
        {
          content:
            'You thank him kindly, but the Justice League is not really your thing',
          stat: 'power',
          value: 10,
        },
      ],
    },
    {
      questionText: 'In an epic fight, a little girl is caught in the flames ',
      answerOptions: [
        {
          content: 'You run to save her and you use her as a human shield ',
          stat: 'intelligence',
          value: 10,
        },
        {
          content:
            'You ask the super villain to be fair and take a short break  ',
          stat: 'speed',
          value: 10,
        },
        {
          content:
            'You brave the danger by burning yourself, but the girl is safe and sound ',
          stat: 'strenght',
          value: 10,
        },
        {
          content:
            'You violently throw a car on the ground in order to extinguish the flames and stun your opponent, at the risk of injuring the girl ',
          stat: 'power',
          value: 10,
        },
      ],
    },
  ];

  const handleAnswerOptionClick = (e, answerOption) => {
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
            onClick={(e) => handleAnswerOptionClick(e, answerOption)}
          >
            {answerOption.content}
          </button>
        ))}
      </div>
    </div>
  );
}
