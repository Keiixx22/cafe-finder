import { getCafes } from "@/lib/cafes";
import { NextResponse } from "next/server";

export async function GET() {
  const cafes = getCafes();
  return NextResponse.json(cafes);
}

