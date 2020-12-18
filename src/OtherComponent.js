import React, { useEffect } from 'react';

const OtherComponent = () => {
  // ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount
  // are all combined into useEffect hook
  useEffect(() => {
    // empty dependencies will help trigger componentDidMount hook
    console.log('ComponentDidMount triggered');

    // a returned function inside useEffect would help trigger ComponentWillUnmount hook
    return () => {
      console.log('ComponentWillUnmount triggered');
    };
  }, [])

  return (
    <div>Other Component</div>
  );
};

export default OtherComponent;