import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sh1 = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: #dedede;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ButtonWrapper = styled.section`
  background-color: #222222;
  display: flex;
  justify-content: space-around;
  padding-left: 20vw;
  padding-right: 20vw;
  box-shadow: 0px 5px 10px black;
`;

const Button = styled.button`
  color: #dedede;
  background-color: #222222;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 20px;
  &:hover {
    color: #c17400;
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
