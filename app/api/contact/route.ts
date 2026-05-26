import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function buildConfirmationEmail(firstName: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f5eff3;font-family:Georgia,'Times New Roman',serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5eff3;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background-color:#FFDEF0;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
              <img
                src="https://www.autobnbs.com/logoman.png"
                alt="AutoBNBs"
                width="160"
                style="height:auto;display:block;margin:0 auto;"
              />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;border-left:1px solid #f0e6ed;border-right:1px solid #f0e6ed;">

              <h1 style="margin:0 0 8px;font-family:Georgia,serif;font-size:26px;font-weight:700;color:#111827;line-height:1.3;">
                Hi ${firstName},
              </h1>
              <p style="margin:0 0 24px;font-size:16px;color:#6b7280;line-height:1.7;">
                Thanks so much for getting in touch with us.
              </p>

              <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.7;">
                We've received your property enquiry and our team will review the details you've shared.
                You can expect to hear from us within <strong style="color:#111827;">one business day</strong>.
              </p>

              <p style="margin:0 0 28px;font-size:15px;color:#374151;line-height:1.7;">
                In the meantime, the best next step is to lock in a free 30-minute discovery call with our team.
                We'll walk you through exactly how AutoBNBs works, what your property could earn on Airbnb,
                and answer any questions you have — no pressure, no obligation.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding:8px 0 32px;">
                    <a
                      href="https://calendly.com/wiari-autobnbs/30min"
                      style="display:inline-block;background-color:#111827;color:#ffffff;font-family:Georgia,serif;font-size:16px;font-weight:700;text-decoration:none;padding:16px 36px;border-radius:50px;letter-spacing:0.3px;"
                    >
                      Book Your Free 30-Min Call &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-top:1px solid #f0e6ed;padding-top:28px;">

                    <!-- Value props -->
                    <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#111827;text-transform:uppercase;letter-spacing:0.8px;">
                      Why AutoBNBs?
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="width:20px;vertical-align:top;padding-top:2px;">
                                <span style="display:inline-block;width:8px;height:8px;background-color:#FFDEF0;border-radius:50%;border:2px solid #111827;"></span>
                              </td>
                              <td style="font-size:14px;color:#374151;line-height:1.6;padding-left:8px;">
                                <strong style="color:#111827;">$0 upfront fees</strong> — we only earn when you earn
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="width:20px;vertical-align:top;padding-top:2px;">
                                <span style="display:inline-block;width:8px;height:8px;background-color:#FFDEF0;border-radius:50%;border:2px solid #111827;"></span>
                              </td>
                              <td style="font-size:14px;color:#374151;line-height:1.6;padding-left:8px;">
                                We handle <strong style="color:#111827;">everything</strong> — listings, guests, cleaning, pricing
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="width:20px;vertical-align:top;padding-top:2px;">
                                <span style="display:inline-block;width:8px;height:8px;background-color:#FFDEF0;border-radius:50%;border:2px solid #111827;"></span>
                              </td>
                              <td style="font-size:14px;color:#374151;line-height:1.6;padding-left:8px;">
                                Owners typically earn <strong style="color:#111827;">40% more</strong> than with traditional long-term renting
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="width:20px;vertical-align:top;padding-top:2px;">
                                <span style="display:inline-block;width:8px;height:8px;background-color:#FFDEF0;border-radius:50%;border:2px solid #111827;"></span>
                              </td>
                              <td style="font-size:14px;color:#374151;line-height:1.6;padding-left:8px;">
                                Properties are typically live on Airbnb <strong style="color:#111827;">within 7–10 days</strong>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Sign off -->
              <p style="margin:28px 0 0;font-size:15px;color:#374151;line-height:1.7;">
                Looking forward to speaking with you soon.
              </p>
              <p style="margin:8px 0 0;font-size:15px;color:#111827;font-weight:700;">
                The AutoBNBs Team
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#111827;border-radius:0 0 16px 16px;padding:28px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#9ca3af;">
                AutoBNBs — Short-Term Rental Management
              </p>
              <p style="margin:0 0 6px;font-size:13px;color:#9ca3af;">
                <a href="mailto:contact@autobnbs.com" style="color:#FFDEF0;text-decoration:none;">contact@autobnbs.com</a>
                &nbsp;·&nbsp;
                <a href="tel:+64223682143" style="color:#FFDEF0;text-decoration:none;">022 368 2143</a>
              </p>
              <p style="margin:16px 0 0;font-size:12px;color:#6b7280;">
                You're receiving this because you submitted an enquiry on autobnbs.com.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, propertyType, message, plan } = body;

    if (!name || !email || !address) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const planLabel =
      plan === "basic" ? "Basic Plan (15%)"
      : plan === "pro" ? "Pro Plan (20%)"
      : plan === "unsure" ? "Not Sure Yet"
      : "Not selected";

    // 1. Admin notification via Web3Forms
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "7b4360e5-cf5c-4c48-9611-9eb251e1a7ac",
          subject: "New AutoBNBs Property Enquiry",
          from_name: name,
          name,
          email,
          phone: phone || "Not provided",
          property_address: address,
          property_type: propertyType || "Not specified",
          plan: planLabel,
          message: message || "No message provided",
        }),
      });
    } catch {
      // Non-fatal
    }

    // 2. Confirmation email to lead via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const firstName = name.trim().split(" ")[0];
        await resend.emails.send({
          from: "AutoBNBs <contact@autobnbs.com>",
          to: [email],
          subject: `We've received your enquiry — let's talk, ${firstName}`,
          html: buildConfirmationEmail(firstName),
        });
      } catch {
        // Non-fatal — form submission still succeeds without confirmation email
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
