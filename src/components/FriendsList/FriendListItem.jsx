import PropTypes from 'prop-types';
import css from './friends.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.friends_list_item} key={id}>
      <img
        className={css.friends_list_item_avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />

      <div className={css.friends_list_item_text}>
        <p className="name">{name}</p>

        <span
          className={`${css.status} ${
            isOnline ? css.status__online : css.status__offline
          }`}
        >
          &#9679;
        </span>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
