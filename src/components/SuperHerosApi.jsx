import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SuperHerosApi() {
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/289')
      .then(({ data }) => {
        setHeros(data);
      });
  }, []);
  return (
    <div>
      <h2>{heros.name}</h2>
      <img src={heros.image.url} alt="img" />
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {heros.powerstats.intelligence}</p>
        <p>strength: {heros.powerstats.strength}</p>
        <p>speed: {heros.powerstats.speed}</p>
        <p>durability: {heros.powerstats.durability}</p>
        <p>power: {heros.powerstats.power}</p>
        <p>combat: {heros.powerstats.combat}</p>
        <h3>Biography</h3>
        <p>full name: {heros.biography['full-name']}</p>
        <div>
          {heros.biography.aliases.map((alias) => {
            return <p>{alias}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
