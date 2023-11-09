import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles['friends-item']}>
    <span className={styles['status']}>
      <div className={`${styles['status-circle']} ${isOnline ? styles['online'] : styles['offline']}`}></div>
      <img className={styles['avatar']} src={avatar} alt="User avatar" width="48" />
      <p className={styles['friends-name']}>{name}</p>
    </span>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;