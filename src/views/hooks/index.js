import React, { useState, useCallback, useRef, useMemo } from 'react';

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
function CallBackExample() {
  const [count, setCount] = useState(0);

  const ref = useRef(11)
  const cb = useMemo(() => count, [count])
  console.log(cb, ref, '>>>>cb')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count)}>
      Click me
      </button>
    </div>
  );
}

export default CallBackExample