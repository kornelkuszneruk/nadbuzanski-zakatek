import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, checkIn, checkOut, guests, message } = await req.json();

  if (!name || !email || !checkIn || !checkOut) {
    return NextResponse.json({ error: "Brakujące pola" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    return NextResponse.json({ error: "Brak konfiguracji e-mail" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Nadbużański Zakątek" <${user}>`,
    to: user,
    replyTo: email,
    subject: `Nowe zapytanie o rezerwację — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a2f1a">
        <h2 style="border-bottom:2px solid #6b8f5e;padding-bottom:8px">Nowe zapytanie o rezerwację</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:6px 0;color:#6b8f5e;font-weight:600;width:160px">Imię i nazwisko</td><td>${name}</td></tr>
          <tr><td style="padding:6px 0;color:#6b8f5e;font-weight:600">E-mail</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 0;color:#6b8f5e;font-weight:600">Przyjazd</td><td>${checkIn}</td></tr>
          <tr><td style="padding:6px 0;color:#6b8f5e;font-weight:600">Wyjazd</td><td>${checkOut}</td></tr>
          <tr><td style="padding:6px 0;color:#6b8f5e;font-weight:600">Liczba osób</td><td>${guests}</td></tr>
          ${message ? `<tr><td style="padding:6px 0;color:#6b8f5e;font-weight:600;vertical-align:top">Wiadomość</td><td style="white-space:pre-wrap">${message}</td></tr>` : ""}
        </table>
        <p style="margin-top:24px;font-size:12px;color:#9e9287">Odpowiedz bezpośrednio na tego maila — wiadomość trafi do gościa.</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
