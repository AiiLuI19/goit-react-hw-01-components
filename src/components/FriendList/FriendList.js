import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
