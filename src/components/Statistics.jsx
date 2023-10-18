import React from 'react';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
     <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item-one">
      <p className="stat-label">.docx</p>
      <p className="stat-percentage">4%</p>
    </li>
    <li className="item-two">
      <p className="stat-label">.mp3</p>
      <p className="stat-percentage">14%</p>
    </li>
    <li className="item-three">
      <p className="stat-label">.pdf</p>
      <p className="stat-percentage">41%</p>
    </li>
    <li className="item-four">
      <p className="stat-label">.mp4</p>
      <p className="stat-percentage">12%</p>
    </li>
    <li className="item-five">
      <p className="stat-label">.pdf</p>
      <p className="stat-percentage">10%</p>
    </li>
  </ul>
    </section>
  );
};

export default Statistics;