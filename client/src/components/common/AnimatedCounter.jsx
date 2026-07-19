import { useEffect, useState } from "react";

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1000; // animation time in ms
    const steps = 60;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, duration / steps);

    return () => clearInterval(timer);

  }, [value]);

  return <span>{count}</span>;
}

export default AnimatedCounter;