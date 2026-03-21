const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parsear body de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS, imágenes, fuentes)
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para el formulario de contacto
app.post('/contacto', async (req, res) => {
  const { nombre, telefono, mensaje } = req.body;

  // Validación básica
  if (!nombre || !telefono || !mensaje) {
    return res.status(400).json({ ok: false, error: 'Todos los campos son obligatorios.' });
  }

  // Configuración del transporte de correo
  // Usa las variables de entorno definidas en Hostinger
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.MAIL_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Sitio Julia" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: `Nuevo mensaje de contacto — ${nombre}`,
      text: `Nombre: ${nombre}\nTeléfono/WhatsApp: ${telefono}\nMensaje:\n${mensaje}`,
      html: `
        <h2>Nuevo mensaje desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono / WhatsApp:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Error al enviar correo:', err);
    res.status(500).json({ ok: false, error: 'No se pudo enviar el mensaje. Intenta más tarde.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
