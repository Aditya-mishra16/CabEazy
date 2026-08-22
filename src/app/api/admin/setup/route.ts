import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(req: NextRequest) {
  // Security: only allow setup if a special key is provided
  const setupKey = req.headers.get("x-setup-key");
  if (setupKey !== process.env.ADMIN_SETUP_KEY) {
    return NextResponse.json({ success: false, error: "Forbidden." }, { status: 403 });
  }

  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email and password are required." }, { status: 400 });
    }

    await connectDB();

    const existing = await Admin.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json({ success: false, error: "Admin with this email already exists." }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const admin = await Admin.create({
      email: email.toLowerCase(),
      password: hashedPassword,
      name: name || "Cabeazy Admin",
    });

    return NextResponse.json({
      success: true,
      message: "Admin account created successfully.",
      email: admin.email,
    });
  } catch (error) {
    console.error("Admin setup error:", error);
    return NextResponse.json({ success: false, error: "Setup failed." }, { status: 500 });
  }
}
