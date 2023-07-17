import { useEffect } from "react";

/**
 * The Timer function is a React component that displays a countdown timer and updates the timer every
 * second.
 * @returns The Timer component is returning a div element with the class name "timer". Inside the div,
 * it displays the minutes and seconds remaining in the format "mm:ss". If the minutes or seconds are
 * less than 10, a leading "0" is added to the display.
 */
function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  /* The `useEffect` hook is used to start a timer that updates the countdown every second. */
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
