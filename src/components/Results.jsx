import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import heroes from '../heroes.json';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 30vh 47vw;
  padding: 20px;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #dedede;
  margin-top: 15vh;

  img {
    max-height: 50vh;
    border-radius: 5px;
    box-shadow: 0px 5px 10px black;
    @media (max-width: 1000px) {
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }

  button {
    font-family: 'Bebas neue', sans-serif;
    color: #dedede;
    font-size: 1.7em;
    border-radius: 5px;
    height: 50px;
    cursor: pointer;
    width: 200px;
    background-color: #c17400;
    border: 0px;
    margin: 30px;
    box-shadow: 0px 5px 10px black;
  }

  a {
    text-decoration: none;
    color: #dedede;
  }
`;

const Identity = styled.div`
  max-width: 50vw;
  margin-right: 30px;
  font-size: 1em;
  line-height: 1.5em;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 1.5em;

  @media (max-width: 1000px) {
    max-width: 80vw;
  }

  h1 {
    font-family: 'Bebas neue', sans-serif;
    font-size: 2.4em;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
    text-align: center;
  }

  p {
    font-size: 1.4em;
    text-align: center;
  }

  h2 {
    padding-bottom: 1em;
  }

  h4 {
    padding-bottom: 1em;
  }

  h5 {
    padding-bottom: 1em;
  }
`;

const Result = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    margin-right: 0px;
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
          (hero) => parseInt(hero.powerstats[chosenStat], 10) > 85
        )
      );
    }, 1000);
  }, []);

  return (
    <>
      {myHeroes.length === 0 && <Spinner />}
      {myHeroes.length > 0 && (
        <Hero>
          <Result>
            <Identity>
              <p>You are</p>
              <h1>{myHeroes[0].name}</h1>
              <h2>{`Full Name : ${myHeroes[0].biography['full-name']}`} </h2>
              <h3>{`Gender : ${myHeroes[0].appearance.gender}`}</h3>
              <h4>{`Height : ${myHeroes[0].appearance.height[1]}, Weight : ${myHeroes[0].appearance.weight[1]}`}</h4>
              <h5>{`Work : ${myHeroes[0].work.occupation} in ${myHeroes[0].work.base}`}</h5>
              <h6>{`Groups : ${myHeroes[0].connections['group-affiliation']}`}</h6>
            </Identity>
            <img src={myHeroes[0].image.url} alt="my Hero" />
          </Result>

          <Link
            to={{
              pathname: '/Fight',
              state: { myHero: myHeroes[0], vsHero: myHeroes[1] },
            }}
          >
            <button type="button" className="button">
              FIGHT
            </button>
          </Link>
        </Hero>
      )}
    </>
  );
}
