import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AdminPayload {
  id: string;
  email: string;
}

export function verifyAdminToken(req: NextRequest): AdminPayload | null {
  try {
    const token = req.cookies.get("adminToken")?.value;
    if (!token) return null;
    const payload = jwt.verify(token, JWT_SECRET) as AdminPayload;
    return payload;
  } catch {
    return null;
  }
}

export function unauthorizedResponse() {
  return NextResponse.json(
    { success: false, error: "Unauthorized" },
    { status: 401 }
  );
}
