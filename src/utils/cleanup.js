import React, { useEffect } from 'react';

const SideEffect = () => {
  useEffect(() => {
    // Code with side effects
    // Perform any necessary side effects or async operations

    // Cleanup function (optional)
    return () => {
      // Clean up any resources or subscriptions
    };
  }, []); // Empty dependency array to run the effect only once (on mount)

  return null;
};

export default SideEffect;
