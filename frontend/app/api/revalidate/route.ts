import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody(
      req,
      process.env.SANITY_WEBHOOK_SECRET,
    );
    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }
    if (!body?._type) {
      return NextResponse.json(
        { message: "Invalid body" },
        { status: 400 },
      );
    }
    revalidateTag("sanity", { expire: 0 });
    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json({ message: "Invalid body" }, { status: 400 });
  }
}
