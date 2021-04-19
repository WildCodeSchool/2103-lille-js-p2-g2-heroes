import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sh1 = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: #dedede;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ButtonWrapper = styled.section`
  background-color: #222222;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  border-radius: 20px;
  padding: 18px 30px;
  font-size: 30px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease;
  background-color: #222222;
  &:hover {
    background-color: red;
    transform: translateY(-0.5rem) scale(1.02);
    color: white;
  }
`;

const Slink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Header() {
  return (
    <header>
      <Sh1>
        <Slink to="/">SUPER HEROES</Slink>
      </Sh1>
      <nav>
        <ButtonWrapper>
          <Button>
            <Slink to="/quiz">QUIZ</Slink>
          </Button>
          <Button
            onClick={() =>
              alert('Please do the quiz to get your own SuperHero!')
            }
          >
            FIGHT
          </Button>
          <Button> REQUEST </Button>
        </ButtonWrapper>
      </nav>
    </header>
  );
}
