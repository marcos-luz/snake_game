import React from 'react';
import '../styles/part.css';

const Part = ({ transition, direction, top, left }) => {
  let color = ` p${Math.floor(Math.random() * 4)}`;
  let classes = "part " +   direction + color;
  return (
    <article
      style={{
        transition: transition + 50 + "ms",
        top: top + "px",
        left: left + "px"
      }}
      className={classes}
    />
  );
}

export default Part;