import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      venue,
      guests,
      message,
      turnstileToken,
    } = await req.json();

    // Check that Turnstile token exists
    if (!turnstileToken) {
      return Response.json(
        {
          success: false,
          error: "Security verification required.",
        },
        {
          status: 400,
        }
      );
    }

    // Verify Turnstile token with Cloudflare
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
  console.error("TURNSTILE VERIFICATION FAILED:", {
    errorCodes: turnstileResult["error-codes"],
    hostname: turnstileResult.hostname,
    action: turnstileResult.action,
  });

  return Response.json(
    {
      success: false,
      error: "Security verification failed. Please try again.",
    },
    {
      status: 403,
    }
  );
}

    // Send the booking enquiry
    const { data, error } = await resend.emails.send({
      from: "Bobby's Super Whip <bookings@bobbyssuperwhip.co.uk>",
      to: ["bobbyssuperwhip@gmail.com"],
      replyTo: email,
      subject: `New Booking Enquiry - ${name}`,
      html: `
        <h2>New Booking Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <hr>

        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Venue:</strong> ${venue}</p>
        <p><strong>Guests:</strong> ${guests || "Not provided"}</p>

        <hr>

        <p><strong>Message</strong></p>

        <p>${message?.replace(/\n/g, "<br>") || ""}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return Response.json(
        {
          success: false,
          error: "Unable to send booking enquiry.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("Booking enquiry error:", err);

    return Response.json(
      {
        success: false,
        error: "Unable to send booking enquiry.",
      },
      {
        status: 500,
      }
    );
  }
}