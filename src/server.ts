
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mi API funciona');
});

app.get('/api/personas', (req, res) => {
  res.json([
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20,
      correo: 'juan@gmail.com'
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 22,
      correo: 'maria@gmail.com'
    }
  ]);
});

app.listen(4000, () => {
  console.log('Servidor funcionando en http://localhost:4000');
});


app.post('/api/personas', (req, res) => {
  const nuevaPersona = req.body;

  res.status(201).json({
    mensaje: 'Persona creada correctamente',
    persona: nuevaPersona
  });
});


app.put('/api/personas/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;

  res.json({
    mensaje: 'Persona actualizada correctamente',
    id: id,
    persona: datosActualizados
  });
});
