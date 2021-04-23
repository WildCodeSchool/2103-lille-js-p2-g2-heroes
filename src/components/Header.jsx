import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../superhero.gif';

const Sh1 = styled.h1`
  font-family: 'Bebas neue', sans-serif;
  text-align: center;
  font-size: 3em;
  color: #dedede;
  padding-top: 30px;
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
  font-family: 'Bebas neue', sans-serif;
  color: #dedede;
  background-color: #222222;
  font-size: 1.7em;
  border: none;
  cursor: pointer;
  padding-top: 15px;
  padding-bottom: 15px;
  &:hover {
    background-color: transparent;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    color: #c17400;
  }
`;

const Slink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Padd = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Myimg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

const MiddleButton = styled(Button)`
  position: relative;
  left: 30px;
`;

export default function Header() {
  return (
    <header>
      <Sh1>
        <Slink to="/">SUPER HEROES</Slink>
      </Sh1>

      <Padd>
        <Myimg src={logo} alt="Logo" />
      </Padd>

      <nav>
        <ButtonWrapper>
          <Button>
            <Slink to="/quiz">QUIZ</Slink>
          </Button>
          <MiddleButton
            onClick={() =>
              alert('Please do the quiz to get your own SuperHero!')
            }
          >
            FIGHT
          </MiddleButton>
          <Button> REQUEST </Button>
        </ButtonWrapper>
      </nav>
    </header>
  );
}
