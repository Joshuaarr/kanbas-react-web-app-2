import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "green", border: "none" }}
        onClick={() => setCount(count + 1)}
      >
        Up
      </button>

      <button
        className="btn btn-primary ms-2"
        style={{ backgroundColor: "red", border: "none" }}
        onClick={() => setCount(count - 1)}
      >
        Down
      </button>
    </div>
  );
}
export default Counter;
