```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Cleanup function to ensure it always run
    const cleanup = () => {
      console.log('Unmounted!');
      setIsMounted(false);
    };
    return cleanup;
  }, []);

  useEffect(() => {
    if (isMounted) {
        console.log('Mounted!');
    }
  }, [isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MyComponent;
```