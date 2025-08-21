// api/contact.mjs  (ou .cjs se estiver usando CommonJS)
import { Resend } from "resend";

const TO_DEFAULT = process.env.TO_EMAIL;                // destino padrão
const TO_PARTNERS = process.env.TO_EMAIL_PARTNERS;      // opcional para parceiros

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const payload = req.body || {};
    const { hp, source, email } = payload;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY ausente");
      return res.status(500).json({ error: "Configuração ausente." });
    }

    // Honeypot (campo oculto): se vier preenchido, não envia nada
    if (hp) return res.status(200).json({ ok: true });

    // Monte HTML a partir de todos os campos do payload (exceto hp)
    const rows = Object.entries(payload)
      .filter(([k]) => k !== "hp")
      .map(([k, v]) => {
        const label = k.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        return `<p><b>${label}:</b> ${String(v ?? "").replace(/\n/g, "<br/>")}</p>`;
      })
      .join("\n");

    const subjectPrefix =
      source === "parceiros" ? "Parceria" :
      source === "contato"   ? "Contato"   :
      "Formulário";

    const toEmail =
      source === "parceiros" && TO_PARTNERS ? TO_PARTNERS : TO_DEFAULT;

    if (!toEmail) {
      console.error("TO_EMAIL (ou TO_EMAIL_PARTNERS) ausente");
      return res.status(500).json({ error: "Destinatário não configurado." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Alcar Humana <onboarding@resend.dev>", // troque p/ seu domínio verificado quando tiver
      to: toEmail,
      replyTo: email || undefined,
      subject: `${subjectPrefix} | ${payload?.empresa || payload?.company || payload?.nome || ""}`.trim(),
      html: `
        <h2>Novo envio (${source || "Geral"})</h2>
        ${rows}
        <hr/><small>Enviado via site</small>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Falha ao enviar e-mail (Resend)." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Falha ao enviar e-mail." });
  }
}
