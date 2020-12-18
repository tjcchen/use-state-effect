import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(5);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // utilize useEffect second parameter will make the first parameter depend on the second parameter,
  // that is to say, we trigger first parameter's function when second parameter changes
  useEffect(() => {
    setCount(prevCount => prevCount + 1);
  }, [secondCount]);

  return (
    <div className="app">
      { count }
      <button onClick={ increment }>Increment</button>
      <button onClick={ () => setCount(prevCount => prevCount - 1) }>Decrement</button>
      <br/>
      { secondCount }
      <button onClick={ () => setSecondCount(prevCount => prevCount + 1) }>Increment Second Count</button>
    </div>
  );
};

export default App;
