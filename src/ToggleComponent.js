import React, { useState } from 'react';
import OtherComponent from './OtherComponent';

const ToggleComponent = () => {
  const [displayStatus, setDisplayStatus] = useState(true);

  return (
    <div className="toggle-component">
      <h3>Toggle Component</h3>
      <button onClick={ () => setDisplayStatus(true) }>Show Component</button>
      <button onClick={ () => setDisplayStatus(false) }>Hide Component</button>
      { displayStatus && <OtherComponent /> }
    </div>
  );
};

export default ToggleComponent;