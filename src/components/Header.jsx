import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../superhero.gif';

const Sheader = styled.header`
  padding-top: 30px;
  background-color: black;
  color: white;
`;

const Sh1 = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const ButtonWrapper = styled.section`
  background-color: #222222;
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
    background-color: #222222l;
    transform: translateY(-0.5rem) scale(1.02);
    color: #c17400;
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
`;

const Myimg = styled.img`
  width: 150px;
  height: 150px;
`;

const MiddleButton = styled(Button)`
  position: relative;
  left: 30px;
`;

export default function Header() {
  return (
    <Sheader>
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
    </Sheader>
  );
}
