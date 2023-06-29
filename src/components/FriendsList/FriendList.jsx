import PropTypes from 'prop-types';
import css from './friends.module.css';
import FriendListItem from './FriendListItem';

const Friends = ({ data }) => {
  return (
    <ul className={css.friends_list}>
      {data.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Friends;
