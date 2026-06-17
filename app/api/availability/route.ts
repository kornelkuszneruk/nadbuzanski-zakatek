import { NextResponse } from "next/server";

export type BookedRange = { start: string; end: string };

function parseIcal(text: string): BookedRange[] {
  const booked: BookedRange[] = [];
  const blocks = text.split("BEGIN:VEVENT");
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const s = block.match(/DTSTART[^:\r\n]*:(\d{8})/)?.[1];
    const e = block.match(/DTEND[^:\r\n]*:(\d{8})/)?.[1];
    if (s && e) booked.push({ start: s, end: e });
  }
  return booked;
}

let cache: { booked: BookedRange[]; at: number } | null = null;
const TTL = 15 * 60 * 1000; // 15 minut

export async function GET() {
  const url = process.env.BOOKING_ICAL_URL;

  if (!url) {
    return NextResponse.json({ booked: [], configured: false });
  }

  if (cache && Date.now() - cache.at < TTL) {
    return NextResponse.json({ booked: cache.booked, configured: true });
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const booked = parseIcal(text);
    cache = { booked, at: Date.now() };
    return NextResponse.json({ booked, configured: true });
  } catch {
    return NextResponse.json({ booked: cache?.booked ?? [], configured: true });
  }
}
