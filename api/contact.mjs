// api/contact.mjs
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, email, company, phone, service, message, hp } = req.body || {};
    if (hp) return res.status(200).json({ ok: true });

    if (!name || !email || !company || !phone || !service || !message) {
      return res.status(400).json({ error: "Campos obrigatórios faltando." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Alcar Humana <onboarding@resend.dev>",
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Proposta | ${company} - ${name}`,
      html: `
        <h2>Nova solicitação de proposta</h2>
        <p><b>Nome:</b> ${name}</p>
        <p><b>E-mail:</b> ${email}</p>
        <p><b>Empresa:</b> ${company}</p>
        <p><b>Telefone:</b> ${phone}</p>
        <p><b>Serviço:</b> ${service}</p>
        <p><b>Mensagem:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Falha ao enviar e-mail." });
  }
}
