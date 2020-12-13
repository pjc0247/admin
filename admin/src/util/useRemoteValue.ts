import React, { useEffect, useState } from 'react';

export const useRemoteValue = (api: any, deps = [], defaultValue: any = null)=> {
  const [value, setValue] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        setValue(await api());
      } catch({ message }) {
        console.error(message);
        //Toast.show({ text1: message, type: 'error' });
      }
    })();
  }, [counter, ...deps]);

  return [value || defaultValue, () => setCounter((v) => v + 1)];
};