import React, { useState } from 'react';
import styles from './style.css';

const Card = ({ name, completed, total }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleImportant = () => {
    setIsImportant(!isImportant);
  };

  return (
    <div className="card">
      <h3 className="name">{name}</h3>
      <div className="icons">
        <span
          className={`icon ${isFavorite ? "favorite" : ''}`}
          onClick={toggleFavorite}
        >
          ♥
        </span>
        <span
          className={`icon ${isImportant ? "important" : ''}`}
          onClick={toggleImportant}
        >
          ★
        </span>
      </div>
      <div className="progress">
        ({completed}/{total})
      </div>
    </div>
  );
};

export default Card;
