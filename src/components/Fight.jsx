import { useLocation } from 'react-router-dom';

export default function Fight() {
  const location = useLocation();

  return (
    <div>
      <img src={location.state.myHero.image.url} alt="héros" />
      <p>VS</p>
      <img src={location.state.vsHero.image.url} alt="vshéros" />
    </div>
  );
}
