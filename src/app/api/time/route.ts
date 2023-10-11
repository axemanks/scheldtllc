import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
    const time = new Date().toString();
    return new NextResponse (JSON.stringify({ time }));
  }