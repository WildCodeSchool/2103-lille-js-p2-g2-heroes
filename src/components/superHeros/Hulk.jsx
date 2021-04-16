import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hulk() {
  const [hulk, setHulk] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/332')
      .then(({ data }) => {
        setHulk(data);
      });
  }, []);
  return (
    <div>
      <img src={hulk.image.url} alt="img" />
      <h2>{hulk.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {hulk.powerstats.intelligence}</p>
        <p>strength: {hulk.powerstats.strength}</p>
        <p>speed: {hulk.powerstats.speed}</p>
        <p>durability: {hulk.powerstats.durability}</p>
        <p>power: {hulk.powerstats.power}</p>
        <p>combat: {hulk.powerstats.combat}</p>
      </div>
    </div>
  );
}
