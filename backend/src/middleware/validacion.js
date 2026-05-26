export function validarProducto(req, res, next) {
  const { nombre, precio, stock } = req.body;
  const errores = [];

  if (!nombre || typeof nombre !== 'string' || nombre.trim().length < 2) {
    errores.push('El nombre es obligatorio y debe tener al menos 2 caracteres.');
  }
  if (precio === undefined || typeof precio !== 'number' || precio < 0) {
    errores.push('El precio debe ser un número mayor o igual a 0.');
  }
  if (stock === undefined || typeof stock !== 'number' || stock < 0) {
    errores.push('El stock debe ser un número mayor o igual a 0.');
  }

  if (errores.length > 0) {
    return res.status(400).json({ error: 'Datos inválidos', detalles: errores });
  }

  next();
}

// Valida y parsea el parámetro :id de la URL
export function validarId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'El ID debe ser un número entero positivo.' });
  }
  req.idNumerico = id;
  next();
}
