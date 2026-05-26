let productos = [
  { id: 1, nombre: 'Café de especialidad',  precio: 8990,  stock: 24, categoria: 'Bebidas',    imagen: 'cafe'      },
  { id: 2, nombre: 'Cuaderno artesanal',    precio: 5500,  stock: 12, categoria: 'Papelería',  imagen: 'libro'     },
  { id: 3, nombre: 'Audífonos inalámbricos',precio: 34990, stock: 7,  categoria: 'Tecnología', imagen: 'audifonos' },
  { id: 4, nombre: 'Planta suculenta',      precio: 4200,  stock: 0,  categoria: 'Hogar',      imagen: 'planta'    },
];

// Autoincremental de ID (reemplazable por Firestore/Cloud SQL)
let siguienteId = 5;

export const repositorioProductos = {
  listar: () => productos,

  buscarPorId: (id) => productos.find((p) => p.id === id),

  crear: ({ nombre, precio, stock, categoria, imagen }) => {
    const nuevo = { id: siguienteId++, nombre, precio, stock, categoria, imagen: imagen || 'caja' };
    productos.push(nuevo);
    return nuevo;
  },

  actualizar: (id, cambios) => {
    const indice = productos.findIndex((p) => p.id === id);
    if (indice === -1) return null;
    productos[indice] = { ...productos[indice], ...cambios, id };
    return productos[indice];
  },

  eliminar: (id) => {
    const indice = productos.findIndex((p) => p.id === id);
    if (indice === -1) return false;
    productos.splice(indice, 1);
    return true;
  },
};
