import React from 'react';

import satData from './satData';
import App from '../App';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

      <button onClick={(satData) => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
