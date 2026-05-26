// services/api.js

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const BASE = `${API_URL}/api/productos`;

// Función auxiliar que centraliza el manejo de errores HTTP.
async function manejarRespuesta(respuesta) {
  if (!respuesta.ok) {
    // Intenta leer el mensaje de error que envió el backend.
    const datos = await respuesta.json().catch(() => ({}));
    throw new Error(datos.error || `Error HTTP ${respuesta.status}`);
  }
  // 204 (borrado) no trae cuerpo.
  if (respuesta.status === 204) return null;
  return respuesta.json();
}

export const productosAPI = {
  // GET todos
  listar: async () => {
    const respuesta = await fetch(BASE);
    return manejarRespuesta(respuesta);
  },

  // POST crear
  crear: async (producto) => {
    const respuesta = await fetch(BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto),
    });
    return manejarRespuesta(respuesta);
  },

  // PUT actualizar
  actualizar: async (id, producto) => {
    const respuesta = await fetch(`${BASE}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto),
    });
    return manejarRespuesta(respuesta);
  },

  // DELETE eliminar
  eliminar: async (id) => {
    const respuesta = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
    return manejarRespuesta(respuesta);
  },
};
