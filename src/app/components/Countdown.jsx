// CountdownTimer.js
import React, { useEffect } from 'react';

const CountdownTimer = ({ timeLeft,setTimeLeft, isActive, setIsActive }) => {


  useEffect(() => {
    if (timeLeft > 0 && isActive) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      console.log("interval",interval)
      return () => {
        clearInterval(interval);
      };

    } else if (timeLeft === 0) {
      setIsActive(false);
    }
  }, [timeLeft, isActive, setIsActive]);

  return <>{timeLeft}s</>;
};

export default CountdownTimer;
