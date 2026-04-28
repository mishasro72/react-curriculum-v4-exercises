// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// The issue is that when a standard variable declared inside a component changes, React does not trigger a re-render; consequently, the variable's new value is not reflected in the UI. To make this work, we need to utilize the `useState` hook once again. Furthermore, within the `handleChange` function, we must include an expression using `setMessage` so that the value of `message` is updated and React re-renders the UI to display this new value.
