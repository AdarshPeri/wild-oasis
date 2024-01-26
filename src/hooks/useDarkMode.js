import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error('Dark mode used outside dark mode context provider.');
  return context;
};
