import { useTema } from '../hooks/useTema.js';

export function ToggleTema() {
  const { oscuro, alternar } = useTema();
  return (
    <button
      onClick={alternar}
      className="rounded-sm border border-border px-3 py-2 text-sm text-text-muted transition-colors hover:bg-surface-2"
      aria-label="Cambiar tema"
    >
      {oscuro ? '☀️ Claro' : '🌙 Oscuro'}
    </button>
  );
}
