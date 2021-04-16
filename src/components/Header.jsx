import './Header.scss';
import styled from 'styled-components';

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

export default function Header() {
  return (
    <header className="Header">
      <h1>SUPER HEROES</h1>
      <nav>
        <ButtonWrapper>
          <Button> QUIZ </Button>
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
