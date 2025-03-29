import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import connectDB from "@/lib/db";
import Url from "@/models/Url";

function isValidUrl(url: string) {
  try { 
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const { originalUrl, customShortUrl } = await req.json();
  const shortCode = customShortUrl || nanoid(6);

  if (!isValidUrl(originalUrl)) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  await connectDB();

  const existingUrl = await Url.findOne({ short_code: shortCode });
  if (existingUrl) {
    return NextResponse.json({ error: "Custom URL already taken" }, { status: 400 });
  }

  await Url.create({ original_url: originalUrl, short_code: shortCode });

  return NextResponse.json({ shortUrl: shortCode });
}
