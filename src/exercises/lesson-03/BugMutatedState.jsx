// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// First and foremost, we need to use `const` instead of `let` to prevent the state variable from being modified directly. The cardinal rule is that such a variable can *only* be updated via the `setCount` function—the one we declared within the `useState` expression. Next, inside the `handleAdd` function, we must remove the line that directly modifies the variable. Moreover, attempting to do so now would immediately trigger an error, given that we declared the variable using `const`. And finally, we need to configure `setCount` correctly to avoid running into the adverse effects of React's batching behavior. And voilà...
