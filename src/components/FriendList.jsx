import React from 'react';
import PropTypes from 'prop-types';
import friendsData from '../data/friends.json';


const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="friends-item">
    <span className="status">
      <div className={`status-circle ${isOnline ? 'online' : 'offline'}`}></div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="friends-name">{name}</p>
    </span>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const App = () => (
  <section className="section-container">
    <FriendList friends={friendsData} />
  </section>
);

export default App;