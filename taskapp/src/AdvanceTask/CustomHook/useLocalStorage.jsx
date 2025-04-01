import { useState } from 'react';

// key - name of item in localStorage where value be saved
const useLocalStorage = (key, initialValue) => {
// function tries to retrieve stored value with key
  const valueStored = localStorage.getItem(key);
  // JSON.parse() - to convert JSON string into JavaScript object
  const [value, setValue] = useState(valueStored ? JSON.parse(valueStored) : initialValue);

  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    // JSON.stringify() - to convert JavaScript object into JSON string
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setLocalStorageValue];
};
export default useLocalStorage;