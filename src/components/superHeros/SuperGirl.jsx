import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SuperGirl() {
  const [superGirl, setSuperGirl] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/414')
      .then(({ data }) => {
        setSuperGirl(data);
      });
  }, []);
  return (
    <div>
      <img src={superGirl.image.url} alt="img" />
      <h2>{superGirl.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {superGirl.powerstats.intelligence}</p>
        <p>strength: {superGirl.powerstats.strength}</p>
        <p>speed: {superGirl.powerstats.speed}</p>
        <p>durability: {superGirl.powerstats.durability}</p>
        <p>power: {superGirl.powerstats.power}</p>
        <p>combat: {superGirl.powerstats.combat}</p>
      </div>
    </div>
  );
}
