import React, { createContext, useContext, useState, useEffect } from 'react';

const WorkContext = createContext();

export const WorkProvider = ({ children }) => {
  const [work, setWork] = useState(null);

  useEffect(() => {
    // Check if work data exists in local storage on component mount
    const storedWork = localStorage.getItem('work');
    if (storedWork) {
      setWork(JSON.parse(storedWork));
    }
  }, []);

  const saveWork = (workData) => {
    // Set work data in both state and local storage
    setWork(workData);
    localStorage.setItem('work', JSON.stringify(workData));
  };

  const clearWork = () => {
    // Clear work data from both state and local storage
    setWork(null);
    localStorage.removeItem('work');
  };

  return (
    <WorkContext.Provider value={{ work, saveWork, clearWork }}>
      {children}
    </WorkContext.Provider>
  );
};

export const useWork = () => useContext(WorkContext);
