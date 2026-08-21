import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken, unauthorizedResponse } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const admin = verifyAdminToken(req);
  if (!admin) return unauthorizedResponse();
  return NextResponse.json({ success: true, admin: { email: admin.email } });
}
