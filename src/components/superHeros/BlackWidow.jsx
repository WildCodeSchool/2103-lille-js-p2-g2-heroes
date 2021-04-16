import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BlackWidow() {
  const [blackWidow, setBlackWidow] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/107')
      .then(({ data }) => {
        setBlackWidow(data);
      });
  }, []);
  return (
    <div>
      <img src={blackWidow.image.url} alt="img" />
      <h2>{blackWidow.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {blackWidow.powerstats.intelligence}</p>
        <p>strength: {blackWidow.powerstats.strength}</p>
        <p>speed: {blackWidow.powerstats.speed}</p>
        <p>durability: {blackWidow.powerstats.durability}</p>
        <p>power: {blackWidow.powerstats.power}</p>
        <p>combat: {blackWidow.powerstats.combat}</p>
      </div>
    </div>
  );
}
