import { useEffect, useState } from "react";

const useDebounce = <T,>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
