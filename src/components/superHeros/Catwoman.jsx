import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Catwoman() {
  const [catwoman, setCatwoman] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/165')
      .then(({ data }) => {
        setCatwoman(data);
      });
  }, []);
  return (
    <div>
      <img src={catwoman.image.url} alt="img" />
      <h2>{catwoman.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {catwoman.powerstats.intelligence}</p>
        <p>strength: {catwoman.powerstats.strength}</p>
        <p>speed: {catwoman.powerstats.speed}</p>
        <p>durability: {catwoman.powerstats.durability}</p>
        <p>power: {catwoman.powerstats.power}</p>
        <p>combat: {catwoman.powerstats.combat}</p>
      </div>
    </div>
  );
}
