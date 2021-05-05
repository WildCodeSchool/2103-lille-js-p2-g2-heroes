import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../superhero.gif';

const Myimg = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.2em;
  border-radius: 100px;
`;

const Sh1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas neue', sans-serif;
  font-size: 3em;
  color: #dedede;
  margin-right: 60px;
  padding: 10px;
  @media (max-width: 768px) {
    font-size: 2.9em;
    margin-right: 0px;
  }
`;

const ButtonWrapper = styled.section`
  background-color: #222222;
  display: flex;
  justify-content: space-around;
  padding-left: 20vw;
  padding-right: 20vw;
  box-shadow: 0px 5px 10px black;
  @media (max-width: 768px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const Button = styled.button`
  font-family: 'Bebas neue', sans-serif;
  color: #dedede;
  background-color: #222222;
  font-size: 1.7em;
  border: none;
  position: relative;
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
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-top: 0.2em;
`;

export default function Header() {
  return (
    <header>
      <Sh1>
        <Slink to="/">
          <Myimg src={logo} alt="Logo" />
          <p>SUPER HEROES</p>
        </Slink>
      </Sh1>
      <nav>
        <ButtonWrapper>
          <Button>
            <Slink to="/quiz">QUIZ</Slink>
          </Button>
          <Button>
            <Slink to="/fight">FIGHT</Slink>
          </Button>
          <Button>
            <Slink to="/request">REQUEST</Slink>
          </Button>
        </ButtonWrapper>
      </nav>
    </header>
  );
}
