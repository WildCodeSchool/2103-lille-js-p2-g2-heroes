import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Thanos() {
  const [thanos, setThanos] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/655')
      .then(({ data }) => {
        setThanos(data);
      });
  }, []);
  return (
    <div>
      <img src={thanos.image.url} alt="img" />
      <h2>{thanos.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {thanos.powerstats.intelligence}</p>
        <p>strength: {thanos.powerstats.strength}</p>
        <p>speed: {thanos.powerstats.speed}</p>
        <p>durability: {thanos.powerstats.durability}</p>
        <p>power: {thanos.powerstats.power}</p>
        <p>combat: {thanos.powerstats.combat}</p>
      </div>
    </div>
  );
}
