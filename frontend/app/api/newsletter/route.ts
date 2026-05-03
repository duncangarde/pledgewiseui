import { Resend } from "resend";

export const POST = async (request: Request) => {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return Response.json(
      { error: "Newsletter service not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const { email } = await request.json();

  // Create contact
  try {
    resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId,
    });

    return Response.json({ success: true });
  } catch (error: any) {
    return Response.json(
      { error: "Error subscribing to updates" },
      { status: 400 }
    );
  }
};
