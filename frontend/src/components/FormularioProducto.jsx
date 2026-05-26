import { useState } from 'react';
import { ICONOS } from './Iconos.jsx';

const IDS_ICONOS = Object.keys(ICONOS);

export function FormularioProducto({ onCrear }) {
  const [form, setForm] = useState({
    nombre: '',
    precio: '',
    stock: '',
    categoria: '',
    imagen: 'caja',
  });
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const actualizarCampo = (campo, valor) =>
    setForm((prev) => ({ ...prev, [campo]: valor }));

  const enviar = async () => {
    setError(null);
    if (form.nombre.trim().length < 2) return setError('El nombre debe tener al menos 2 caracteres.');
    if (Number(form.precio) < 0 || form.precio === '') return setError('Ingresa un precio válido.');
    if (Number(form.stock) < 0 || form.stock === '') return setError('Ingresa un stock válido.');

    try {
      setEnviando(true);
      await onCrear({
        nombre: form.nombre.trim(),
        precio: Number(form.precio),
        stock: Number(form.stock),
        categoria: form.categoria.trim() || 'General',
        imagen: form.imagen,
      });
      setForm({ nombre: '', precio: '', stock: '', categoria: '', imagen: 'caja' });
    } catch (err) {
      setError(err.message);
    } finally {
      setEnviando(false);
    }
  };

  const inputClase =
    'w-full rounded-sm border border-border bg-bg px-3 py-2.5 text-sm text-text placeholder:text-text-subtle transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20';

  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-2 px-5 py-4">
        <h2 className="text-sm font-semibold text-text">Agregar producto</h2>
        <p className="mt-0.5 text-xs text-text-muted">Se guardará en Cloud Run</p>
      </div>

      <div className="p-5">
        <div className="grid gap-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-text-muted">Nombre</span>
            <input
              type="text"
              placeholder="Ej: Café de especialidad"
              value={form.nombre}
              onChange={(e) => actualizarCampo('nombre', e.target.value)}
              className={inputClase}
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-text-muted">Precio</span>
              <input
                type="number"
                placeholder="0"
                value={form.precio}
                onChange={(e) => actualizarCampo('precio', e.target.value)}
                className={inputClase}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-text-muted">Stock</span>
              <input
                type="number"
                placeholder="0"
                value={form.stock}
                onChange={(e) => actualizarCampo('stock', e.target.value)}
                className={inputClase}
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-text-muted">Categoría</span>
            <input
              type="text"
              placeholder="Ej: Bebidas"
              value={form.categoria}
              onChange={(e) => actualizarCampo('categoria', e.target.value)}
              className={inputClase}
            />
          </label>

          <div>
            <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-text-muted">Ícono</span>
            <div className="grid grid-cols-5 gap-2">
              {IDS_ICONOS.map((id) => {
                const icono = ICONOS[id];
                const activo = form.imagen === id;
                return (
                  <button
                    key={id}
                    type="button"
                    title={icono.label}
                    onClick={() => actualizarCampo('imagen', id)}
                    className={`flex h-10 w-full items-center justify-center rounded-sm border transition-colors ${
                      activo
                        ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-900/30'
                        : 'border-border bg-bg text-text-muted hover:border-border-strong hover:text-text'
                    }`}
                  >
                    <icono.Comp className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
            <p className="mt-1.5 text-xs text-text-subtle">{ICONOS[form.imagen]?.label}</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-sm border border-error/20 bg-error-bg px-3 py-2.5 text-xs text-error">
              <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          <button
            onClick={enviar}
            disabled={enviando}
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50"
          >
            {enviando ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Guardando en Cloud Run...
              </>
            ) : (
              'Agregar a la tienda'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
