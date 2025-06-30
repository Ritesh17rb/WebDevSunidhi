import React, { useState } from 'react';
import './Counter.css'; // optional for separate styling

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={handleIncrement}>➕ Increment</button>
        <button onClick={handleDecrement}>➖ Decrement</button>
        <button onClick={handleReset}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default Counter;
