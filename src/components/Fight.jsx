import { useLocation } from 'react-router-dom';

export default function Fight() {
  const location = useLocation();
  /* const myHero = {
    int: parseInt(location.state.myHero.powerstats.intelligence, 10),
    str: parseInt(location.state.myHero.powerstats.strength, 10),
    spe: parseInt(location.state.myHero.powerstats.speed, 10),
    dur: parseInt(location.state.myHero.powerstats.durability, 10),
    pow: parseInt(location.state.myHero.powerstats.power, 10),
    com: parseInt(location.state.myHero.powerstats.combat, 10),
    img: location.state.myHero.image.url,
  };
  const vsHero = {
    int: parseInt(location.state.vsHero.powerstats.intelligence, 10),
    str: parseInt(location.state.vsHero.powerstats.strength, 10),
    spe: parseInt(location.state.vsHero.powerstats.speed, 10),
    dur: parseInt(location.state.vsHero.powerstats.durability, 10),
    pow: parseInt(location.state.vsHero.powerstats.power, 10),
    com: parseInt(location.state.vsHero.powerstats.combat, 10),
    img: location.state.vsHero.image.url,
  }; */

  return (
    <>
      {!location.state ? (
        <div>
          <p>Please do the quiz to get your own SuperHero!</p>
        </div>
      ) : (
        <div>
          <img src={location.state.myHero.image.url} alt="héros" />
          <p>VS</p>
          <img src={location.state.vsHero.image.url} alt="vshéros" />
          <button type="button">Ready for the fight... Come on !</button>
        </div>
      )}
    </>
  );
}
