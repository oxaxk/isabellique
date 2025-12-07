import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  const { name, email, service, date, message } = req.body || {};

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Kontaktformular" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECIPIENT,
    replyTo: email || undefined,
    subject: `Neue Anfrage – ${service || 'Allgemeine Anfrage'}`,
    text: [
      `Name: ${name}`,
      `E-Mail: ${email || '-'}`,
      `Leistung: ${service || '-'}`,
      `Wunschtermin: ${date || '-'}`,
      '',
      'Nachricht:',
      message || '-',
    ].join('\n'),
  });

  return res.status(200).json({ ok: true });
}