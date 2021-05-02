import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const Result = styled.div`
  .versus.hidden {
    display: none;
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
        <div>
          <p>Please do the quiz to get your own SuperHero !</p>
        </div>
      ) : (
        <Result>
          <div className={`versus ${isActive ? 'hidden' : ''}`}>
            <img src={location.state.myHero.image.url} alt="héros" />
            <p>VS</p>
            <img src={location.state.vsHero.image.url} alt="vshéros" />
            <button
              onClick={() => {
                result();
                handleToggle();
              }}
              type="button"
            >
              Ready for the fight... Come on !
            </button>
          </div>
          <div>
            {resFight === null && <></>}
            {resFight === true && (
              <div>
                <h2>You WIN</h2>
                <img src={location.state.myHero.image.url} alt="héros" />
              </div>
            )}
            {resFight === false && (
              <div>
                <h2>You LOSE</h2>
                <img src={location.state.vsHero.image.url} alt="vshéros" />
              </div>
            )}
          </div>
        </Result>
      )}
    </>
  );
}
