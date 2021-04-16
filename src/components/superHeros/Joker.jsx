import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Joker() {
  const [joker, setJoker] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/370')
      .then(({ data }) => {
        setJoker(data);
      });
  }, []);
  return (
    <div>
      <img src={joker.image.url} alt="img" />
      <h2>{joker.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {joker.powerstats.intelligence}</p>
        <p>strength: {joker.powerstats.strength}</p>
        <p>speed: {joker.powerstats.speed}</p>
        <p>durability: {joker.powerstats.durability}</p>
        <p>power: {joker.powerstats.power}</p>
        <p>combat: {joker.powerstats.combat}</p>
      </div>
    </div>
  );
}
