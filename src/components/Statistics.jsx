import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={styles['statistics']}>
      {title && <h2 className={styles['title']}>{title}</h2>}
      
      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles['item']}
            key={id}
            style={{
              backgroundColor: '#' + RandomColor(),
              width: `calc(100% / ${stats.length})`, 
            }}
          >
            <span className={styles['label']}>{label}</span>
            <span className={styles['percentage']}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string, 
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

function RandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
    