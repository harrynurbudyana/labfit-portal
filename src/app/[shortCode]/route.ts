import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Url from "@/models/Url";

export async function GET(req: Request, { params }: { params: { shortCode: string } }) {
  await connectDB();
  const foundUrl = await Url.findOne({ short_code: params.shortCode });

  if (!foundUrl) {
    return NextResponse.json({ error: "URL not found" }, { status: 404 });
  }

  return NextResponse.redirect(foundUrl.original_url);
}
