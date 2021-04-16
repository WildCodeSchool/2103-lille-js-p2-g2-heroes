import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HarleyQuinn() {
  const [harleyQuinn, setHarleyQuinn] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/309')
      .then(({ data }) => {
        setHarleyQuinn(data);
      });
  }, []);
  return (
    <div>
      <img src={harleyQuinn.image.url} alt="img" />
      <h2>{harleyQuinn.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {harleyQuinn.powerstats.intelligence}</p>
        <p>strength: {harleyQuinn.powerstats.strength}</p>
        <p>speed: {harleyQuinn.powerstats.speed}</p>
        <p>durability: {harleyQuinn.powerstats.durability}</p>
        <p>power: {harleyQuinn.powerstats.power}</p>
        <p>combat: {harleyQuinn.powerstats.combat}</p>
      </div>
    </div>
  );
}
