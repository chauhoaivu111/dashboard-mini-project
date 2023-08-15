import React, { useEffect } from "react";

const CountdownTimer = ({ timeLeft, setTimeLeft, isActive, setIsActive }) => {
  useEffect(() => {
    if (timeLeft > 0 && isActive) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
  }, [timeLeft, isActive, setIsActive, setTimeLeft]);

  return (
    <div >
      
      <div className="frame_timeer">   
        <p>{timeLeft}s</p>
      </div>
      <h4 >Time</h4>
    </div>
  );
};

export default CountdownTimer;
