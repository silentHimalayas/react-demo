import React, { useState } from 'react';

function StateExample() {
  const [count, setCount] = useState(0);
  console.log(this, '>>>>this')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
    </div>
  );
}

function EffectExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
    </div>
  );
}

export default StateExample