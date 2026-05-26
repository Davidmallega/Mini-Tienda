import { useProductos } from './hooks/useProductos.js';
import { TarjetaProducto } from './components/TarjetaProducto.jsx';
import { FormularioProducto } from './components/FormularioProducto.jsx';
import { ToggleTema } from './components/ToggleTema.jsx';

export default function App() {
  const { productos, cargando, error, crear, eliminar, cargar } = useProductos();

  const totalStock = productos.reduce((acc, p) => acc + p.stock, 0);

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-semibold leading-none text-text">Mini Tienda</h1>
              <span className="font-mono text-xs text-text-subtle">Cloud Run</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1.5 rounded-full border border-success/30 bg-success-bg px-3 py-1 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-medium text-success">Cloud Run activo</span>
            </div>
            <ToggleTema />
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div className="border-b border-border bg-surface-2">
        <div className="mx-auto flex max-w-6xl gap-8 px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-subtle">Productos</span>
            <span className="font-mono text-sm font-semibold text-text">{productos.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-subtle">Stock total</span>
            <span className="font-mono text-sm font-semibold text-text">{totalStock}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-subtle">Agotados</span>
            <span className="font-mono text-sm font-semibold text-error">
              {productos.filter((p) => p.stock === 0).length}
            </span>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside>
            <FormularioProducto onCrear={crear} />
          </aside>

          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-base font-semibold text-text">Catálogo de productos</h2>
              <button
                onClick={cargar}
                className="flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:bg-surface-2"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Recargar
              </button>
            </div>

            {cargando && (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-md border border-border bg-surface p-5">
                    <div className="mb-4 h-24 animate-pulse rounded-md bg-surface-2" />
                    <div className="mb-2 h-4 w-2/3 animate-pulse rounded bg-surface-2" />
                    <div className="h-6 w-1/2 animate-pulse rounded bg-surface-2" />
                  </div>
                ))}
              </div>
            )}

            {error && !cargando && (
              <div className="rounded-md border border-error/20 bg-error-bg p-6">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-error">No se pudo conectar con Cloud Run</h3>
                    <p className="mt-1 text-sm text-text-muted">{error}</p>
                    <button
                      onClick={cargar}
                      className="mt-3 rounded-sm border border-error/30 px-3 py-1.5 text-sm font-medium text-error transition-colors hover:bg-error/10"
                    >
                      Reintentar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {!cargando && !error && productos.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-border-strong bg-surface py-20 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-surface-2">
                  <svg className="h-6 w-6 text-text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-text">Sin productos todavía</h3>
                <p className="text-sm text-text-muted">Agrega el primero usando el formulario.</p>
              </div>
            )}

            {!cargando && !error && productos.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {productos.map((producto) => (
                  <TarjetaProducto
                    key={producto.id}
                    producto={producto}
                    onEliminar={eliminar}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
