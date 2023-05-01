import PropTypes from 'prop-types';
import css from './user.module.css';

const profile = data => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={data.avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{data.username}</p>
      <p className={css.tag}>@{data.tag}</p>
      <p className={css.location}>{data.location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className="label">Followers - </span>
        <span className="quantity">{data.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views - </span>
        <span className="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes - </span>
        <span className="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>
);

profile.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};

export default profile;
