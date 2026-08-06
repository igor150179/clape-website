import { Resend } from "resend";
import { OTP_TTL_SECONDS } from "./constants";

const FROM =
  process.env.CALCULADORA_EMAIL_FROM ?? "Clape <acesso@clape.com.br>";

export async function sendLoginCode(email: string, code: string): Promise<void> {
  const minutes = Math.round(OTP_TTL_SECONDS / 60);
  const subject = `${code} — código de acesso à Calculadora Clape`;
  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 480px; color: #2b2b2b;">
      <p style="font-size: 1.1rem;">Seu código de acesso à <strong>Calculadora de Massa</strong>:</p>
      <p style="font-size: 2rem; letter-spacing: 0.3em; font-weight: 700; color: #f47920;">${code}</p>
      <p>Válido por ${minutes} minutos. Depois de confirmar, você fica logado por <strong>3 dias</strong> neste aparelho.</p>
      <p style="color: #777; font-size: 0.9rem;">Se outro aparelho entrar com sua conta, esta sessão será encerrada automaticamente.</p>
      <p style="color: #777; font-size: 0.9rem;">Se você não solicitou este código, ignore este e-mail.</p>
    </div>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(`[calculadora-auth] OTP para ${email}: ${code}`);
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: email,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function sendWelcomeAccess(
  email: string,
  password: string,
): Promise<void> {
  const loginUrl = "https://clape.com.br/calculadora/acesso";
  const subject = "Seu acesso à Calculadora de Massa — A Farinha Certa";
  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 520px; color: #2b2b2b;">
      <p>Obrigado pela compra de <strong>A Farinha Certa</strong>!</p>
      <p>Sua calculadora online está em:<br><a href="${loginUrl}">${loginUrl}</a></p>
      <p><strong>E-mail:</strong> ${email}<br>
      <strong>Senha inicial:</strong> ${password}</p>
      <p>Na primeira entrada, informe e-mail e senha — enviaremos um código de confirmação. A sessão dura <strong>3 dias</strong> por aparelho.</p>
      <p style="color: #777; font-size: 0.9rem;">Guarde esta senha. O eBook continua na sua área de membros Hotmart.</p>
    </div>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(
      `[calculadora-auth] Boas-vindas ${email} — senha: ${password}`,
    );
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: email,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
