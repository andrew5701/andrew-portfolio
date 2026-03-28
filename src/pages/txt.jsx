// The Coding Problem: "The Counter Toggle"

// Task: Create a simple functional component called Counter. It should display a number (starting at 0) and a button. When the button is clicked, the number increases by 1. Bonus: Add a second button that resets the counter back to 0.
import React, { useState } from 'react';

function Counter() {
  // 1. Initialize state
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>

        <button onClick={() =>{setCount(count +1)}}>Increment Count</button>

        <button onClick={() =>{setCount(0)}}>Reset Count</button>
    </div>
  );
}

export default Counter;