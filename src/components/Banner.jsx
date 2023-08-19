import PropTypes from 'prop-types';

const Banner = ({ imageUrl, projectName }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <span className="project-name">{projectName}</span>
    </div>
  );
};

// Adicione essa parte para definir os proptypes
Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired
};

export default Banner;