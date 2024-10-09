import React from 'react';

const CharacterCard = ({ name, height, mass, hair_color, eye_color, gender, birth_year, homeworld }) => {
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Height: {height} cm</li>
          <li className="list-group-item">Mass: {mass} kg</li>
          <li className="list-group-item">Hair Color: {hair_color}</li>
          <li className="list-group-item">Eye Color: {eye_color}</li>
          <li className="list-group-item">Gender: {gender}</li>
          <li className="list-group-item">Birth Year: {birth_year}</li>
          <li className="list-group-item">Homeworld: {homeworld}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterCard;
