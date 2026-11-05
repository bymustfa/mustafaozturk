import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Mustafa Öztürk — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgCard />, { ...size });
}
