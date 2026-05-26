import { repositorioProductos } from '../data/productos.js';

export function listarProductos(req, res) {
  try {
    const productos = repositorioProductos.listar();
    res.status(200).json({ total: productos.length, productos });
  } catch (error) {
    res.status(500).json({ error: 'Error al listar productos.' });
  }
}

export function obtenerProducto(req, res) {
  try {
    const producto = repositorioProductos.buscarPorId(req.idNumerico);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
}

export function crearProducto(req, res) {
  try {
    const nuevo = repositorioProductos.crear(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto.' });
  }
}

export function actualizarProducto(req, res) {
  try {
    const actualizado = repositorioProductos.actualizar(req.idNumerico, req.body);
    if (!actualizado) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto.' });
  }
}

export function eliminarProducto(req, res) {
  try {
    const eliminado = repositorioProductos.eliminar(req.idNumerico);
    if (!eliminado) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto.' });
  }
}
