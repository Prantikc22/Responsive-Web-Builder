import { Router } from "express";
import { Resend } from "resend";

const router = Router();

const FROM_ADDRESS = "appointment@healandcureclinic.com";
const CLINIC_EMAIL = "healandcurehealthclinic@gmail.com";
const REPLY_TO    = "healandcurehealthclinic@gmail.com";

const doctorLabel: Record<string, { name: string; title: string; specialty: string }> = {
  souvik:  { name: "Dr. Souvik Dutta",    title: "Consultant Homoeopathic Physician", specialty: "Homoeopathy" },
  pampita: { name: "Mrs. Pampita Banerjee", title: "Consultant Therapeutic Dietician", specialty: "Therapeutic Nutrition" },
};

function formatDate(raw: string) {
  try {
    return new Date(raw).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  } catch {
    return raw;
  }
}

router.post("/appointment", async (req, res) => {
  const { fullName, phone, email, doctor, date, reason } = req.body as Record<string, string>;

  if (!fullName || !phone || !doctor || !date) {
    res.status(400).json({ error: "Missing required fields: fullName, phone, doctor, date." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    res.status(200).json({ success: true, emailSent: false, message: "RESEND_API_KEY not configured." });
    return;
  }

  const resend   = new Resend(apiKey);
  const doc      = doctorLabel[doctor] ?? { name: doctor, title: "", specialty: "" };
  const dateStr  = formatDate(date);
  const firstName = fullName.split(" ")[0] ?? fullName;

  /* ── Clinic notification email ──────────────────────────── */
  const clinicHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background:#1B4332;padding:32px 40px;text-align:center;">
          <p style="color:#C9A84C;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 8px;">Heal &amp; Cure Health Clinic</p>
          <h1 style="color:#ffffff;font-size:22px;margin:0;font-weight:600;">New Appointment Request</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:12px 0;color:#6B7280;font-size:13px;width:160px;">Patient Name</td>
              <td style="padding:12px 0;color:#111827;font-weight:600;font-size:15px;">${fullName}</td>
            </tr>
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:12px 0;color:#6B7280;font-size:13px;">Phone</td>
              <td style="padding:12px 0;color:#111827;font-weight:500;font-size:14px;">${phone}</td>
            </tr>
            ${email ? `<tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:12px 0;color:#6B7280;font-size:13px;">Email</td>
              <td style="padding:12px 0;color:#111827;font-size:14px;">${email}</td>
            </tr>` : ""}
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:12px 0;color:#6B7280;font-size:13px;">Preferred Doctor</td>
              <td style="padding:12px 0;font-size:14px;">
                <span style="color:#1B4332;font-weight:700;">${doc.name}</span>
                <span style="color:#6B7280;font-size:12px;"> · ${doc.specialty}</span>
              </td>
            </tr>
            <tr style="border-bottom:1px solid #f0ece4;">
              <td style="padding:12px 0;color:#6B7280;font-size:13px;">Preferred Date</td>
              <td style="padding:12px 0;color:#111827;font-weight:600;font-size:14px;">${dateStr}</td>
            </tr>
            ${reason ? `<tr>
              <td style="padding:12px 0;color:#6B7280;font-size:13px;vertical-align:top;">Health Concern</td>
              <td style="padding:12px 0;color:#374151;font-size:14px;line-height:1.6;">${reason}</td>
            </tr>` : ""}
          </table>

          <!-- Action note -->
          <div style="margin-top:28px;padding:20px 24px;background:#F5F0E8;border-left:4px solid #C9A84C;border-radius:8px;">
            <p style="margin:0 0 6px;color:#1B4332;font-weight:700;font-size:14px;">Action Required</p>
            <p style="margin:0;color:#4B5563;font-size:13px;line-height:1.6;">
              Please contact <strong>${fullName}</strong> at <strong>${phone}</strong> to confirm the appointment date and time via phone call or WhatsApp.
            </p>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f9f7f4;padding:20px 40px;text-align:center;border-top:1px solid #e8e2d8;">
          <p style="margin:0;color:#9CA3AF;font-size:12px;">Heal &amp; Cure Health Clinic · Panpara Lane, Uttarpara, Hooghly, West Bengal</p>
          <p style="margin:4px 0 0;color:#9CA3AF;font-size:12px;">+91 8961661727</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  /* ── Patient confirmation email ──────────────────────────── */
  const patientHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background:#1B4332;padding:36px 40px;text-align:center;">
          <p style="color:#C9A84C;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 8px;">Heal &amp; Cure Health Clinic</p>
          <h1 style="color:#ffffff;font-size:22px;margin:0 0 6px;font-weight:600;">Appointment Request Received</h1>
          <p style="color:rgba(255,255,255,0.7);margin:0;font-size:14px;">We'll confirm your slot shortly, ${firstName}.</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 24px;">
            Thank you for reaching out to <strong>Heal &amp; Cure Health Clinic</strong>. We have received your appointment request and our clinic team will contact you shortly to confirm your exact date and time via <strong>phone call or WhatsApp</strong>.
          </p>

          <!-- Appointment summary box -->
          <div style="background:#F5F0E8;border-radius:10px;padding:24px 28px;margin-bottom:24px;">
            <p style="margin:0 0 16px;color:#1B4332;font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.12em;">Your Request Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:6px 0;color:#6B7280;font-size:13px;width:140px;">Doctor</td>
                <td style="padding:6px 0;color:#1B4332;font-weight:700;font-size:14px;">${doc.name}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#6B7280;font-size:13px;">Specialty</td>
                <td style="padding:6px 0;color:#374151;font-size:13px;">${doc.title}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#6B7280;font-size:13px;">Preferred Date</td>
                <td style="padding:6px 0;color:#111827;font-weight:600;font-size:14px;">${dateStr}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#6B7280;font-size:13px;">Your Phone</td>
                <td style="padding:6px 0;color:#374151;font-size:13px;">${phone}</td>
              </tr>
            </table>
          </div>

          <!-- What happens next -->
          <div style="border:1px solid #e8e2d8;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
            <p style="margin:0 0 12px;color:#1B4332;font-weight:700;font-size:13px;">What Happens Next?</p>
            <p style="margin:0 0 8px;color:#374151;font-size:13px;line-height:1.6;">
              ✅ &nbsp;Our team will call or WhatsApp you at <strong>${phone}</strong> to confirm the appointment slot.
            </p>
            <p style="margin:0 0 8px;color:#374151;font-size:13px;line-height:1.6;">
              📅 &nbsp;For online consultations, please book at least <strong>24 hours in advance</strong>.
            </p>
            <p style="margin:0;color:#374151;font-size:13px;line-height:1.6;">
              💬 &nbsp;You can also reach us on WhatsApp at <strong>+91 8961661727</strong> for any queries.
            </p>
          </div>

          <p style="color:#6B7280;font-size:13px;line-height:1.6;margin:0;">
            If you have an urgent concern, please call <strong style="color:#1B4332;">+91 8961661727</strong> directly.<br/>
            We look forward to supporting your health journey.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f9f7f4;padding:20px 40px;text-align:center;border-top:1px solid #e8e2d8;">
          <p style="margin:0 0 4px;color:#9CA3AF;font-size:12px;">Heal &amp; Cure Health Clinic · Panpara Lane, Uttarpara, Hooghly, West Bengal</p>
          <p style="margin:0;color:#9CA3AF;font-size:12px;">+91 8961661727 &nbsp;·&nbsp; healandcureclinic.com</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    const sends: Promise<unknown>[] = [
      resend.emails.send({
        from:     `Heal & Cure Clinic <${FROM_ADDRESS}>`,
        to:       [CLINIC_EMAIL],
        reply_to: REPLY_TO,
        subject:  `New Appointment — ${doc.name} · ${dateStr} · ${fullName}`,
        html:     clinicHtml,
      }),
    ];

    if (email) {
      sends.push(
        resend.emails.send({
          from:     `Heal & Cure Clinic <${FROM_ADDRESS}>`,
          to:       [email],
          reply_to: REPLY_TO,
          subject:  `Appointment Request Received — Heal & Cure Health Clinic`,
          html:     patientHtml,
        }),
      );
    }

    await Promise.all(sends);
    res.status(200).json({ success: true, emailSent: true });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(200).json({ success: true, emailSent: false, error: "Email delivery failed but appointment recorded." });
  }
});

export default router;
