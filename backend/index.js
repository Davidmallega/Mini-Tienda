import express from 'express';
import cors from 'cors';
import productosRouter from './src/routes/productos.js';

const app = express();

const origenesPermitidos = [
  'http://localhost:5173',
  'http://localhost:4173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || origenesPermitidos.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Origen no permitido por CORS'));
      }
    },
  })
);

app.use(express.json());

// Health check requerido por Cloud Run
app.get('/health', (req, res) => {
  res.status(200).json({ estado: 'ok', servicio: 'mini-tienda-api' });
});

app.use('/api/productos', productosRouter);

app.use((req, res) => {
  res.status(404).json({ error: `Ruta no encontrada: ${req.method} ${req.path}` });
});

app.use((err, req, res, next) => {
  console.error('Error no controlado:', err.message);
  res.status(500).json({ error: 'Error interno del servidor.' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Mini Tienda API corriendo en el puerto ${PORT}`);
});
