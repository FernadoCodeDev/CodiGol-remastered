import React, { useState, useEffect, useRef } from "react";

export default function Timer({ onTimeOut, resetTrigger }) {
  const [remainingTime, setRemainingTime] = useState({
    minutes: 1,
    seconds: 30,
  });

  const timeoutTriggered = useRef(false);

  useEffect(() => {
    setRemainingTime({
      minutes: 1,
      seconds: 30,
    });

    timeoutTriggered.current = false;
  }, [resetTrigger]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        const { minutes, seconds } = prevTime;

        if (minutes === 0 && seconds === 0) {
          return prevTime;
        }

        if (seconds === 0) {
          return {
            minutes: minutes - 1,
            seconds: 59,
          };
        }

        return {
          minutes,
          seconds: seconds - 1,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resetTrigger]);

  useEffect(() => {
    if (
      remainingTime.minutes === 0 &&
      remainingTime.seconds === 0 &&
      !timeoutTriggered.current
    ) {
      timeoutTriggered.current = true;

      if (onTimeOut) {
        onTimeOut();
      }
    }
  }, [remainingTime, onTimeOut]);

  return (
    <div className="absolute top-0 right-0 grid grid-flow-col gap-5 m-2 text-center text-white bg-black rounded-2xl auto-cols-max">
      <div className="flex flex-col p-2">
        <span className="font-mono text-5xl countdown">
          <span>
            {String(remainingTime.minutes).padStart(2, "0")}
          </span>
        </span>
        min
      </div>

      <div className="flex flex-col p-2">
        <span className="font-mono text-5xl countdown">
          <span>
            {String(remainingTime.seconds).padStart(2, "0")}
          </span>
        </span>
        sec
      </div>
    </div>
  );
}