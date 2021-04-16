import styled from 'styled-components';

const Smain = styled.main`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Sintro = styled.div`
  width: 50vw;
  padding: 120px;
`;

const Stext = styled.p`
  font-size: 50px;
  text-align: center;
  padding-bottom: 50px;
`;

const Spicture = styled.picture`
  width: 50vw;
  padding: 60px;
`;

const Sbutton = styled.button`
  float: right;
  border-radius: 10px;
  height: 50px;
  width: 200px;
  background-color: darkred;
  font-weight: bold;
  font-size: 20px;
`;

export default function Main() {
  return (
    <Smain>
      <Sintro>
        <Stext>
          {`They fascinate with their powers, their charisma or their bank 
          account. 
          What superhero are you? 
          Take the time to take our personality 
          test to learn more about your superhero profile. You can then make your 
          hero fight, face to face! Put on your best costume, because now it's your turn.`}
        </Stext>
        <Sbutton type="button">QUIZ</Sbutton>
      </Sintro>
      <Spicture>
        <img src="/justice-league-new-52.jpg" alt="Justice-League" />
      </Spicture>
    </Smain>
  );
}
