import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile({
  userName,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
 return (
   <div className={css.profile}>
     <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
         className={css.avatar} />
       <p className={css.name}>{userName}</p>
       <p className={css.tag}>{tag}</p>
       <p className={css.location}>{location}</p>
      </div>

     <ul className={css.stats}>
       <li className={css.statsList}>
         <p className={css.label}>Followers</p>
         <p className={css.quantity}>{followers}</p>
        </li>
        <li className={css.statsList}>
           <p className={css.label}>Views</p>
         <p className={css.quantity}>{views}</p>
        </li>
        <li className={css.statsList}>
           <p className={css.label}>Likes</p>
         <p className={css.quantity}>{likes}</p>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired, 
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired, 
  }).isRequired,
};

