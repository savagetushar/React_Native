
import { useState, useEffect } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  return { count, increment, decrement };
};

export default useCounter;
