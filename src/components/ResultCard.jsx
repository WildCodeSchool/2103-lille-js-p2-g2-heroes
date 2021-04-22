import PropTypes from 'prop-types';

export default function ResultCard({ superHero }) {
  return (
    <div>
      <img src={superHero.image.url} alt={superHero.image} />
    </div>
  );
}

ResultCard.propTypes = {
  superHero: PropTypes.string,
};
ResultCard.defaultProps = {
  superHero: 'Default',
};
