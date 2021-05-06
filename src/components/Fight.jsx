import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import 'animate.css';

const Result = styled.div`
  .versus.hidden {
    display: none;
  }
`;

const Conditional = styled.div`
  p {
    text-align: center;
    margin: 25vh auto 5vh;
    padding: 30px;
    border: transparent;
    border-radius: 10px;
    width: 40%;
    color: white;
    background-color: #222222;
    font-family: 'Bebas neue', sans-serif;
    font-size: 2em;
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

const Sbutton = styled.div`
  font-family: 'Bebas neue', sans-serif;
  color: #dedede;
  font-size: 1.7em;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  background-color: #c17400;
  border: 0px;
  margin-bottom: 20vh;
  box-shadow: 0px 5px 10px black;
  h1 {
    text-align: center;
    padding-top: 12px;
  }
  @media (max-width: 1024px) {
    font-size: 1.2em;
    margin-bottom: 10vh;
  }
`;

const Versus = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    font-family: 'Bebas neue', sans-serif;
    color: #dedede;
    font-size: 1.7em;
    border-radius: 5px;
    height: 50px;
    width: 350px;
    background-color: #c17400;
    border: 0px;
    margin: 50px;
    box-shadow: 0px 5px 10px black;
  }
`;

const Heroes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;

  img {
    max-height: 50vh;
    border-radius: 5px;
    box-shadow: 0px 5px 10px black;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 0px;
  }

  .txtVersus {
    display: none;
    @media (max-width: 800px) {
      display: block;
      font-family: 'Bebas neue', sans-serif;
      color: #dedede;
      font-size: 3em;
      margin: 20px;
    }
  }

  .versus {
    box-shadow: none;
    @media (max-width: 800px) {
      display: none;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

const Battle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8vh;

  img {
    max-height: 50vh;
    border-radius: 5px;
    box-shadow: 0px 5px 10px black;
  }

  h2 {
    text-align: center;
    font-family: 'Bebas neue', sans-serif;
    font-size: 6em;
    color: #dedede;
    margin-bottom: 20px;
  }
`;

export default function Fight() {
  const location = useLocation();
  const [resFight, setResFight] = useState(null);
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const result = () => {
    const myHero = {
      int: parseInt(location.state.myHero.powerstats.intelligence, 10),
      str: parseInt(location.state.myHero.powerstats.strength, 10),
      spe: parseInt(location.state.myHero.powerstats.speed, 10),
      dur: parseInt(location.state.myHero.powerstats.durability, 10),
      pow: parseInt(location.state.myHero.powerstats.power, 10),
      com: parseInt(location.state.myHero.powerstats.combat, 10),
    };
    const vsHero = {
      int: parseInt(location.state.vsHero.powerstats.intelligence, 10),
      str: parseInt(location.state.vsHero.powerstats.strength, 10),
      spe: parseInt(location.state.vsHero.powerstats.speed, 10),
      dur: parseInt(location.state.vsHero.powerstats.durability, 10),
      pow: parseInt(location.state.vsHero.powerstats.power, 10),
      com: parseInt(location.state.vsHero.powerstats.combat, 10),
    };
    if (
      myHero.int +
        myHero.str +
        myHero.spe +
        myHero.dur +
        myHero.pow +
        myHero.com >
      vsHero.int +
        vsHero.str +
        vsHero.spe +
        vsHero.dur +
        vsHero.pow +
        vsHero.com
    ) {
      setResFight(true);
    } else {
      setResFight(false);
    }
    return setResFight;
  };

  return (
    <>
      {!location.state ? (
        <Conditional>
          <p>Please do the quiz to get your own SuperHero !!!</p>
          <Abutton>
            <Slink to="/quiz">
              <Sbutton type="button" className="button">
                <h1>QUIZ</h1>
              </Sbutton>
            </Slink>
          </Abutton>
        </Conditional>
      ) : (
        <Result>
          <div className={`versus ${isActive ? 'hidden' : ''}`}>
            <Versus>
              <Heroes>
                <img src={location.state.myHero.image.url} alt="héros" />
                <img className="versus" src="/versus.svg" alt="versus" />
                <h2 className="txtVersus">VERSUS</h2>
                <img src={location.state.vsHero.image.url} alt="vshéros" />
              </Heroes>
              <button
                onClick={() => {
                  result();
                  handleToggle();
                }}
                type="button"
              >
                Ready for the fight... Come on !
              </button>
            </Versus>
          </div>
          <Battle>
            <div>
              {resFight === null && <></>}
              {resFight === true && (
                <div>
                  <h2>You WIN !</h2>
                  <img
                    className="animate__animated animate__zoomInDown"
                    src={location.state.myHero.image.url}
                    alt="héros"
                  />
                </div>
              )}
              {resFight === false && (
                <div>
                  <h2>You LOSE</h2>
                  <img
                    className="animate__animated animate__zoomInDown"
                    src={location.state.vsHero.image.url}
                    alt="vshéros"
                  />
                </div>
              )}
            </div>
          </Battle>
        </Result>
      )}
    </>
  );
}
