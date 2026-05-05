// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// When developing in React, you might notice useEffect running twice — this is not a bug. It happens because most starter projects wrap the app in <React.StrictMode>
// React automatically wraps components in <React.StrictMode> when you start a new app with tools like Create React App or Vite. StrictMode helps detect unexpected side effects, memory leaks, and other issues early in development.
