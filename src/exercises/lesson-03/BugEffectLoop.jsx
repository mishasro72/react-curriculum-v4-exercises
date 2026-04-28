//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The error lies in the fact that the dependency array is missing. What actually happens is this: after the UI renders, `useEffect` runs; this triggers `setCount`, which updates the `count` state; a re-render then occurs, and `useEffect` runs again—triggering... well, you get the idea: an infinite loop. To avoid this—and ensure `useEffect` runs only once—you need to add `[]`.
