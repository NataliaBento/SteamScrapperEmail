require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(conteudo) {
  try {
    const info = await transporter.sendMail({
      from: `"Steam Promo Bot" <${process.env.EMAIL_USER}>`,
      to: 'nataliabento97@gmail.com',
      subject: 'Relatório das melhores ofertas da Steam',
      text: conteudo,  // Conteúdo em texto
      html: `<div style="font-family: Arial; line-height: 1.5;"><pre>${conteudo}</pre></div>`,  
    });

    console.log('E-mail enviado: %s', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
}

module.exports = { sendEmail };
