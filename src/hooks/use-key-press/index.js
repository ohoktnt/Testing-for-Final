import { useEffect } from 'react';

export default function useKeyPress(func) {
  useEffect(() => {
    window.addEventListener('keydown', func)
    return () => window.removeEventListener('keydown', func);
  }, [func])
}