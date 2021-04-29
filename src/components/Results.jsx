import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import heroes from '../heroes.json';

const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: 'Bebas neue', sans-serif;
    font-size: 2.4em;
    color: #dedede;
    margin: 0.5em;
  }

  img {
    height: 50vh;
    border-radius: 5px;
    box-shadow: 0px 5px 10px black;
    }
  }

  button {
    font-family: 'Bebas neue', sans-serif;
    color: #dedede;
    font-size: 1.7em;
    border-radius: 5px;
    height: 50px;
    width: 200px;
    background-color: #c17400;
    border: 0px;
    margin-top: 25px;
    box-shadow: 0px 5px 10px black;
  }

  a {
    text-decoration: none;
    color: #dedede;
  }
`;

export default function Results() {
  const { int, spe, str, pow } = useParams();
  const [myHeroes, setMyHeroes] = useState([]);

  const getStat = () => {
    let stat = 'intelligence';
    if (int > spe && int > str && int > pow) {
      stat = 'intelligence';
    }
    if (spe > int && spe > str && spe > pow) {
      stat = 'speed';
    }
    if (str > int && str > spe && str > pow) {
      stat = 'strength';
    }
    if (pow > int && pow > str && pow > spe) {
      stat = 'power';
    }
    return stat;
  };
  useEffect(() => {
    const tmpHeroes = [];
    const chosenStat = getStat();

    for (let i = 0; i < heroes.length; i += 1) {
      axios
        .get(
          `https://www.superheroapi.com/api.php/10158558049699051/${heroes[i].id}`
        )
        .then(({ data }) => {
          tmpHeroes.push(data);
        });
    }
    setTimeout(() => {
      setMyHeroes(
        tmpHeroes.filter(
          (hero) => parseInt(hero.powerstats[chosenStat], 10) > 80
        )
      );
    }, 1000);
  }, []);

  return (
    <>
      {myHeroes.length === 0 && <p>Loading</p>}
      {myHeroes.length > 0 && (
        <div className="hero">
          <Hero>
            <h1>{`You are ${myHeroes[0].name}`}</h1>
            <img src={myHeroes[0].image.url} alt="" />
            <button type="button" className="button">
              <Link
                to={{
                  pathname: '/Fight',
                  state: { myHero: myHeroes[0], vsHero: myHeroes[1] },
                }}
              >
                FIGHT
              </Link>
            </button>
          </Hero>
        </div>
      )}
    </>
  );
}
