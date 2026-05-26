import { useState, useEffect, useCallback } from 'react';
import { productosAPI } from '../services/api.js';

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const cargar = useCallback(async () => {
    try {
      setCargando(true);
      setError(null);
      const datos = await productosAPI.listar();
      setProductos(datos.productos);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const crear = async (producto) => {
    await productosAPI.crear(producto);
    await cargar();
  };

  const eliminar = async (id) => {
    await productosAPI.eliminar(id);
    await cargar();
  };

  return { productos, cargando, error, cargar, crear, eliminar };
}
