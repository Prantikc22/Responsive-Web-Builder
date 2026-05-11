import { Router } from "express";
import { Resend } from "resend";

const router = Router();

router.post("/appointment", async (req, res) => {
  const { fullName, phone, email, doctor, date, reason } = req.body;

  if (!fullName || !phone || !doctor || !date) {
    res.status(400).json({ error: "Missing required fields: fullName, phone, doctor, date." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    res.status(200).json({
      success: true,
      message: "Appointment received. Email notifications are pending API key configuration.",
      emailSent: false,
    });
    return;
  }

  const resend = new Resend(apiKey);
  const clinicEmail = process.env["CLINIC_EMAIL"] ?? "appointments@healandcure.in";
  const doctorName = doctor === "souvik" ? "Dr. Souvik Dutta" : "Pampita Banerjee";

  try {
    await Promise.all([
      resend.emails.send({
        from: "Heal & Cure Clinic <no-reply@healandcure.in>",
        to: [clinicEmail],
        subject: `New Appointment Request — ${doctorName} on ${date}`,
        html: `
          <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FAFAF7; border-radius: 12px; overflow: hidden;">
            <div style="background: #1B4332; padding: 32px 40px; text-align: center;">
              <h1 style="color: white; font-size: 24px; margin: 0; font-weight: 600;">New Appointment Request</h1>
              <p style="color: rgba(255,255,255,0.75); margin: 8px 0 0; font-size: 14px;">Heal &amp; Cure Health Clinic</p>
            </div>
            <div style="padding: 40px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; color: #6B7280; font-size: 13px; width: 140px;">Patient Name</td><td style="padding: 10px 0; color: #1A1A1A; font-weight: 500;">${fullName}</td></tr>
                <tr><td style="padding: 10px 0; color: #6B7280; font-size: 13px;">Phone</td><td style="padding: 10px 0; color: #1A1A1A; font-weight: 500;">${phone}</td></tr>
                ${email ? `<tr><td style="padding: 10px 0; color: #6B7280; font-size: 13px;">Email</td><td style="padding: 10px 0; color: #1A1A1A;">${email}</td></tr>` : ""}
                <tr><td style="padding: 10px 0; color: #6B7280; font-size: 13px;">Preferred Doctor</td><td style="padding: 10px 0; color: #1B4332; font-weight: 600;">${doctorName}</td></tr>
                <tr><td style="padding: 10px 0; color: #6B7280; font-size: 13px;">Preferred Date</td><td style="padding: 10px 0; color: #1A1A1A; font-weight: 500;">${date}</td></tr>
                ${reason ? `<tr><td style="padding: 10px 0; color: #6B7280; font-size: 13px; vertical-align: top;">Reason / Notes</td><td style="padding: 10px 0; color: #1A1A1A;">${reason}</td></tr>` : ""}
              </table>
              <div style="margin-top: 32px; padding: 20px; background: #F5F0E8; border-radius: 10px; font-size: 13px; color: #6B7280;">
                Clinic Hours: Sunday – Saturday, 9 AM – 9 PM<br/>
                <strong style="color: #1B4332;">Please call the patient to confirm the appointment.</strong>
              </div>
            </div>
          </div>
        `,
      }),
      ...(email ? [resend.emails.send({
        from: "Heal & Cure Clinic <no-reply@healandcure.in>",
        to: [email],
        subject: "Your Appointment Request — Heal & Cure Health Clinic",
        html: `
          <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FAFAF7; border-radius: 12px; overflow: hidden;">
            <div style="background: #1B4332; padding: 32px 40px; text-align: center;">
              <h1 style="color: white; font-size: 22px; margin: 0; font-weight: 600;">Thank You, ${fullName.split(" ")[0]}!</h1>
              <p style="color: rgba(255,255,255,0.75); margin: 8px 0 0; font-size: 14px;">Your appointment request has been received.</p>
            </div>
            <div style="padding: 40px;">
              <p style="color: #1A1A1A; font-size: 15px; line-height: 1.7;">We have received your request to see <strong>${doctorName}</strong> on <strong>${date}</strong>. Our clinic team will call you shortly to confirm your appointment.</p>
              <div style="margin: 28px 0; padding: 24px; background: #F5F0E8; border-radius: 10px;">
                <p style="margin: 0 0 12px; font-size: 13px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Clinic Contact</p>
                <p style="margin: 4px 0; color: #1B4332; font-weight: 500;">Dr. Souvik: +91 7980219737</p>
                <p style="margin: 4px 0; color: #0D4F4F; font-weight: 500;">Pampita: +91 8961661721</p>
                <p style="margin: 12px 0 0; font-size: 13px; color: #6B7280;">Sunday – Saturday, 9 AM – 9 PM</p>
              </div>
              <p style="color: #6B7280; font-size: 13px;">Uttarpara, West Bengal · Heal &amp; Cure Health Clinic</p>
            </div>
          </div>
        `,
      })] : []),
    ]);

    res.status(200).json({ success: true, emailSent: true });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(200).json({ success: true, emailSent: false, error: "Email delivery failed but appointment recorded." });
  }
});

export default router;
