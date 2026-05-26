import { Router } from 'express';
import {
  listarProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from '../controllers/productosController.js';
import { validarProducto, validarId } from '../middleware/validacion.js';

const router = Router();

router.get('/',    listarProductos);
router.get('/:id', validarId, obtenerProducto);
router.post('/',   validarProducto, crearProducto);
router.put('/:id', validarId, validarProducto, actualizarProducto);
router.delete('/:id', validarId, eliminarProducto);

export default router;
