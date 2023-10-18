import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => (
<div className="profile">
  <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
      alt="User avatar"
        className="avatar"
        height={70}
        width={70}
    />
    <p className="name">Jacques Gluke</p>
    <p className="tag">@jgluke</p>
    <p className="location">Ocho Rios, Jamaica</p>
  </div>

  <ul className="stats">
    <li className='stats-list'>
      <p className="label">Followers</p>
      <p className="quantity">5603</p>
    </li>
    <li className='stats-list'>
      <p className="label">Views</p>
      <p className="quantity">4827</p>
    </li>
    <li className='stats-list'>
      <p className="label">Likes</p>
      <p className="quantity">1308</p>
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