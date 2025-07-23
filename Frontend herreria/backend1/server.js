const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura tu transporte de correo (puedes usar Gmail, Outlook, etc.)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'serares72@gmail.com',      // Cambia por tu email
        pass: ''       // Usa una contraseña de aplicación
    }
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'serares72@gmail.com', // Tu correo donde recibes los mensajes
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error al enviar el mensaje');
        }
        res.send('Mensaje enviado correctamente');
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});