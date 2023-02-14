import React, { useEffect, useState } from "react";

const useCustomHook = (initialCount, componentName) => {
  const [count, setCount] = useState(initialCount);
  const updateCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`you clicked this ${componentName} ${count} times`);
  }, [count, componentName]);

  return updateCount;
};

export default useCustomHook;
