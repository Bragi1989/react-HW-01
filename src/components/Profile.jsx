import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => (
<div className="profile">
  <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
      alt="User avatar"
      className="avatar"
    />
    <p className="name">Jacques Gluke</p>
    <p className="tag">@jgluke</p>
    <p className="location">Ocho Rios, Jamaica</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">5603</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">4827</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">1308</span>
    </li>
  </ul>
</div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    Followers: PropTypes.number.isRequired,
    Views: PropTypes.number.isRequired,
    Likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;