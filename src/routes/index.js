const { Router } = require('express')
const nodemailer = require('nodemailer')
const router = Router();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

router.post('/send-email', async (req,res) => {
    const { name, apellido, email, tel , message} = req.body;

    res.redirect('/success.html');

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Apellido: ${apellido}</li>
            <li>Email: ${email}</li>
            <li>Telefono: ${tel}</li>
           </ul>

           <p>${message}</p>
    
            `   
        const transporter = nodemailer.createTransport({
               host: 'smtpout.secureserver.net',
               port: 465,
               secure: true,
               auth: {
                   user: 'contacto@modularneuquen.com',
                   pass: 'orejasnrc1993'
               },
               tls: {
                   rejectUnauthorize: false
               }
           })

       const info = await transporter.sendMail({
               from: "'Formulario web Modular' <web@modularneuquen.com>",
               to: 'panchinrc1993@gmail.com',
               subject: 'Contacto formulario web.',
               text: 'Holaa esta andando'

           });

           console.log('Message sent', info.messageId);




    
})

module.exports = router;