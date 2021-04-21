import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Smain = styled.main`
  color: #dedede;
  align-items: center;
`;

const Sarticle = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Stext = styled.p`
  font-size: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 50px;
  margin: 20px;
`;

const Stoto = styled.div`
  width: 70%;
`;

const Spicture = styled.picture`
  img {
    height: 100%;
  }
`;

const Sbutton = styled.button`
  border-radius: 10px;
  height: 50px;
  width: 200px;
  background-color: #c17400;
  font-size: 20px;
  border: 0px;
  margin-bottom: 5px;
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
          <Stext>
            {`They fascinate with their powers, their charisma or their bank 
            account. 
            What superhero are you? 
            Take the time to take our personality 
            test to learn more about your superhero profile. You can then make your 
            hero fight, face to face! Put on your best costume, because now it's your turn.`}
          </Stext>
          <Spicture>
            <img src="/super-girl.png" alt="Justice-League" />
          </Spicture>
        </Stoto>
      </Sarticle>
      <Abutton>
        <Sbutton type="button" className="button">
          <Slink to="/quiz">QUIZ</Slink>
        </Sbutton>
      </Abutton>
    </Smain>
  );
}
