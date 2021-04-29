import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Smain = styled.main`
  color: #dedede;
  align-items: center;
`;

const Stoto = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Sarticle = styled.div``;

const Stext = styled.p`
  width: 30vw;
  font-size: 1.3em;
  line-height: 1.3em;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 1.5em;
  @media (max-width: 1440px) {
    width: 40vw;
  }
  @media (max-width: 1024px) {
    font-size: 1.2em;
    width: 50vw;
  }
  @media (max-width: 1000px) {
    margin-top: 1em;
    width: 80vw;
  }
`;

const Sbutton = styled.div`
  font-family: 'Bebas neue', sans-serif;
  color: #dedede;
  font-size: 1.7em;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  background-color: #c17400;
  border: 0px;
  margin-top: 25px;
  margin-bottom: 20vh;
  box-shadow: 0px 5px 10px black;
  p {
    text-align: center;
    padding-top: 12px;
  }
`;

const Spicture = styled.picture`
  .superGirl {
    width: 50vh;
    margin-top: 8vh;
    }
    @media (max-width: 1024px) {
      width: 30vh;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const Slink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Abutton = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <Smain>
      <Stoto>
        <Sarticle>
          <Stext>
            {`They fascinate with their powers, their charisma or their bank 
            account. 
            Which superhero are you? 
            Take the time to take our personality 
            test to learn more about your superhero profile. You can then make your 
            hero fight, face to face! Put on your best costume, because now it's your turn.`}
          </Stext>
          <Abutton>
            <Slink to="/quiz">
              <Sbutton type="button" className="button">
                <p>QUIZ</p>
              </Sbutton>
            </Slink>
          </Abutton>
        </Sarticle>
        <Spicture>
          <img
            className="superGirl"
            src="/super-girl-modify.png"
            alt="Super Girl"
          />
        </Spicture>
      </Stoto>
      <Footer />
    </Smain>
  );
}
