import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../superhero.gif';

const Myimg = styled.img`
  width: 1.3em;
  height: 1.3em;
  margin-right: 0.2em;
  border-radius: 100px;
`;

const Sh1 = styled.h1`
  font-family: 'Bebas neue', sans-serif;
  font-size: 2.2em;
  color: #dedede;
  padding: 8px;

  p {
    margin-top: 2px;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const ButtonWrapper = styled.section`
  background-color: #222222;
  display: flex;
  justify-content: space-between;
  padding-right: 30vw;
  box-shadow: 0px 5px 10px black;
  @media (max-width: 768px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
  @media (max-width: 600px) {
    justify-content: space-around;
  }
`;

const Button = styled.button`
  font-family: 'Bebas neue', sans-serif;
  color: #dedede;
  background-color: #222222;
  font-size: 2em;
  border: none;
  position: relative;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 8px;
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
`;

export default function Header() {
  return (
    <header>
      <nav>
        <ButtonWrapper>
          <Sh1>
            <Slink to="/">
              <Myimg src={logo} alt="Logo" />
              <p>SUPER HEROES</p>
            </Slink>
          </Sh1>

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
