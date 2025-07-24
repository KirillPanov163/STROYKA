import nodemailer from 'nodemailer';

export class RecordingService {
  static async sendMessage({
    name,
    tel,
    message,
    personalData,
    oferta,
  }: {
    name: string;
    tel: string;
    message: string;
    personalData: boolean;
    oferta: boolean;
  }) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true,
      debug: true,
    });

    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Новая заявка</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #4a76a8;
          color: white;
          padding: 15px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          border: 1px solid #ddd;
          border-top: none;
          padding: 20px;
          border-radius: 0 0 5px 5px;
        }
        .field {
          margin-bottom: 15px;
        }
        .field-name {
          font-weight: bold;
          color: #4a76a8;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          color: #777;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Новая заявка с формы записи</h1>
      </div>
      <div class="content">
        <div class="field">
          <span class="field-name">Имя:</span> ${name}
        </div>
        <div class="field">
          <span class="field-name">Телефон:</span> ${tel}
        </div>
        <div class="field">
          <span class="field-name">Сообщение:</span> ${message || 'Не указано'}
        </div>
        <div class="field">
          <span class="field-name">Согласие на обработку персональных данных:</span> 
          ${personalData ? '✅ Да' : '❌ Нет'}
        </div>
        <div class="field">
          <span class="field-name">Принятие оферты:</span> 
          ${oferta ? '✅ Да' : '❌ Нет'}
        </div>
      </div>
      <div class="footer">
        Это письмо было отправлено автоматически. Пожалуйста, не отвечайте на него.
      </div>
    </body>
    </html>
    `;

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_ADMIN,
      subject: 'Новое сообщение с формы записи',
      html: htmlTemplate,
      text: `У вас новая заявка\nИмя: ${name}\nТелефон: ${tel}\nСообщение: ${message}\nПерсональные данные: ${personalData ? 'Да' : 'Нет'}\nОферта: ${oferta ? 'Да' : 'Нет'}`,
    };

    await transporter.sendMail(mailOptions);
  }
}