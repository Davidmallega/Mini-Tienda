import { IconoProducto } from './Iconos.jsx';

export function TarjetaProducto({ producto, onEliminar }) {
  const sinStock = producto.stock === 0;

  const precioFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(producto.precio);

  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Zona del ícono */}
      <div className="relative flex h-32 items-center justify-center bg-surface-2">
        <span className="text-brand-500">
          <IconoProducto id={producto.imagen} className="h-12 w-12" />
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-info-bg px-2.5 py-0.5 text-xs font-medium text-info">
          {producto.categoria}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-3 text-sm font-semibold leading-snug text-text">
          {producto.nombre}
        </h3>

        <div className="mb-4 flex items-end justify-between">
          <p className="font-mono text-xl font-bold text-text">{precioFormateado}</p>
          {sinStock ? (
            <span className="inline-flex items-center rounded-full bg-error-bg px-2.5 py-0.5 text-xs font-medium text-error">
              Agotado
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-success-bg px-2.5 py-0.5 text-xs font-medium text-success">
              {producto.stock} disponibles
            </span>
          )}
        </div>

        <button
          onClick={() => onEliminar(producto.id)}
          className="mt-auto w-full rounded-sm border border-border py-2 text-xs font-medium text-text-subtle transition-colors hover:border-error/40 hover:bg-error-bg hover:text-error"
        >
          Eliminar producto
        </button>
      </div>
    </article>
  );
}
