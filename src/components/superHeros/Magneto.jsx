import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Magneto() {
  const [magneto, setMagneto] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/423')
      .then(({ data }) => {
        setMagneto(data);
      });
  }, []);
  return (
    <div>
      <img src={magneto.image.url} alt="img" />
      <h2>{magneto.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {magneto.powerstats.intelligence}</p>
        <p>strength: {magneto.powerstats.strength}</p>
        <p>speed: {magneto.powerstats.speed}</p>
        <p>durability: {magneto.powerstats.durability}</p>
        <p>power: {magneto.powerstats.power}</p>
        <p>combat: {magneto.powerstats.combat}</p>
      </div>
    </div>
  );
}
