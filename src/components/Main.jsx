import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Smain = styled.main`
  color: #dedede;
  align-items: center;
`;

const Sarticle = styled.article`
  width: 60vw;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 80vw;
  }
  @media (max-width: 768px) {
    width: 75vw;
  }
  @media (max-width: 425px) {
    width: 90vw;
  }
`;

const Stoto = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Stext = styled.p`
  font-size: 1.3em;
  line-height: 1.3em;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 1.5em;
  @media (max-width: 1024px) {
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

const Spicture = styled.picture`
  .superGirl {
    width: 25vw;
    margin-top: 1em;
    @media (max-width: 1024px) {
      width: 35vw;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Sbutton = styled.button`
  font-family: 'Bebas neue', sans-serif;
  color: #dedede;
  font-size: 1.7em;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  background-color: #c17400;
  border: 0px;
  margin-top: 25px;
  margin-bottom: 75px;
  box-shadow: 0px 5px 10px black;
`;

const Slink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Abutton = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Main() {
  return (
    <Smain>
      <Sarticle>
        <Stoto>
          <div>
            <Stext>
              {`They fascinate with their powers, their charisma or their bank 
            account. 
            What superhero are you? 
            Take the time to take our personality 
            test to learn more about your superhero profile. You can then make your 
            hero fight, face to face! Put on your best costume, because now it's your turn.`}
            </Stext>
            <Abutton>
              <Sbutton type="button" className="button">
                <Slink to="/quiz">QUIZ</Slink>
              </Sbutton>
            </Abutton>
          </div>
          <Spicture>
            <img
              className="superGirl"
              src="/super-girl-modify.png"
              alt="Super Girl"
            />
          </Spicture>
        </Stoto>
      </Sarticle>
    </Smain>
  );
}
