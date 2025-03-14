import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import connectDB from "@/lib/db";
import Url from "@/models/Url";

export async function POST(req: Request) {
  const { originalUrl, customShortUrl } = await req.json();
  const shortCode = customShortUrl || nanoid(6);

  await connectDB();

  const existingUrl = await Url.findOne({ short_code: shortCode });
  if (existingUrl) {
    return NextResponse.json({ error: "Custom URL already taken" }, { status: 400 });
  }

  const newUrl = await Url.create({ original_url: originalUrl, short_code: shortCode });

  return NextResponse.json({ shortUrl: shortCode });
}
