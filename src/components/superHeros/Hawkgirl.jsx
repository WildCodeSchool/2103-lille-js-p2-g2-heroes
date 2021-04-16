import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hawkgirl() {
  const [hawkgirl, setHawkgirl] = useState([]);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/796521371273281/315')
      .then(({ data }) => {
        setHawkgirl(data);
      });
  }, []);
  return (
    <div>
      <img src={hawkgirl.image.url} alt="img" />
      <h2>{hawkgirl.name}</h2>
      <div>
        <h3>powerStats</h3>
        <p>intelligence: {hawkgirl.powerstats.intelligence}</p>
        <p>strength: {hawkgirl.powerstats.strength}</p>
        <p>speed: {hawkgirl.powerstats.speed}</p>
        <p>durability: {hawkgirl.powerstats.durability}</p>
        <p>power: {hawkgirl.powerstats.power}</p>
        <p>combat: {hawkgirl.powerstats.combat}</p>
      </div>
    </div>
  );
}
