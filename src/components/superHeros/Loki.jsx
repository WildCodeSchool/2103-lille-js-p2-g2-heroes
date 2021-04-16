import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Loki() {
  const [loki, setLoki] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/414')
      .then(({ data }) => {
        setLoki(data);
      });
  }, []);
  return (
    <div>
      <img src={loki.image.url} alt="img" />
      <h2>{loki.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {loki.powerstats.intelligence}</p>
        <p>strength: {loki.powerstats.strength}</p>
        <p>speed: {loki.powerstats.speed}</p>
        <p>durability: {loki.powerstats.durability}</p>
        <p>power: {loki.powerstats.power}</p>
        <p>combat: {loki.powerstats.combat}</p>
      </div>
    </div>
  );
}
