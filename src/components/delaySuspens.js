import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LoaderWrapper = ({ children, minDuration = 1000, fallback }) => {
  const [timePassed, setTimePassed] = useState(false);
  const [componentReady, setComponentReady] = useState(false);
  const location = useLocation();

  // Start timer for minimum duration
  useEffect(() => {
    const timer = setTimeout(() => setTimePassed(true), minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  // When children are mounted (lazy component resolved), set ready
  useEffect(() => {
    if (children) {
      setComponentReady(true);
    }
  }, [children]);

  // Prevent fallback on the '/' path
  if (location.pathname === '/') {
    return children; // Return children directly without fallback
  }

  return timePassed && componentReady ? children : fallback;
};

export default LoaderWrapper;
