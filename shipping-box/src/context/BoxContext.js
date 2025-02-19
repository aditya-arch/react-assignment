import { createContext, useState, useEffect } from 'react';

const BoxContext = createContext();
export const BoxProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const storedBoxes = localStorage.getItem('boxes');
    if (storedBoxes) setBoxes(JSON.parse(storedBoxes));
  }, []);

  useEffect(() => {
    localStorage.setItem('boxes', JSON.stringify(boxes));
  }, [boxes]);

  const addBox = (newBox) => {
    setBoxes([...boxes, { ...newBox, id: Date.now() }]);
  };

  return (
    <BoxContext.Provider value={{ boxes, addBox }}>
      {children}
    </BoxContext.Provider>
  );
};

export default BoxContext;
