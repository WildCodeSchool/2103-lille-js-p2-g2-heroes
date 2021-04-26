import { useParams } from 'react-router-dom';

export default function Fight() {
  const { myHero } = useParams();
  return (
    <div>
      <img src={myHero.image.url} alt="héros" />
    </div>
  );
}
