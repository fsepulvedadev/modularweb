const { Router } = require('express')
const nodemailer = require('nodemailer')
const router = Router();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

router.post('/send-email', async (req,res) => {
    const { name, apellido, email, tel , message} = req.body;

    res.redirect('/success.html');

    contentHTML = `
        INFORMACION DEL CONTACTO
        
            Nombre: ${name}
            Apellido: ${apellido}
            Email: ${email}
            Telefono: ${tel}
           

           
           Mensaje:
           ${message}
           
    
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
               to: 'contacto@modularneuquen.com , panchi_nrc@hotmail.com',
               subject: 'Contacto formulario web.',
               text: contentHTML

           });

           console.log('Message sent', info.messageId);




    
})

module.exports = router;