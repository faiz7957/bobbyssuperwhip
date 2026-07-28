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
    } = await req.json();

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
        <p><strong>Guests:</strong> ${guests}</p>

        <hr>

        <p><strong>Message</strong></p>

        <p>${message?.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return Response.json(
        {
          success: false,
          error,
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
    return Response.json(
      {
        success: false,
        error: err,
      },
      {
        status: 500,
      }
    );
  }
}