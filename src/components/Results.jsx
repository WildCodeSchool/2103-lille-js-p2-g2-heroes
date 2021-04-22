import { useEffect, useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';
// import { useParams } from 'react-router-dom';

export default function Results() {
  // const { int, spe, str, pow } = useParams();
  /* const heroes = [
    {
      id: 165,
      name: 'Catwoman',
    },
    {
      id: 69,
      name: 'Batman',
    },
  ]; */
  const [superHero, setSuperHero] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.superheroapi.com/api.php/10158558049699051/69`)
      .then(({ data }) => {
        setSuperHero(data);
      });
  }, []);

  return (
    <div>
      <ResultCard superHero={superHero} />
    </div>
  );
}
