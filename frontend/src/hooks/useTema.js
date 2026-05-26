import { useState, useEffect } from 'react';

export function useTema() {
  const [oscuro, setOscuro] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (oscuro) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [oscuro]);

  return { oscuro, alternar: () => setOscuro((v) => !v) };
}
