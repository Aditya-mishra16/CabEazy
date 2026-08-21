import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { verifyAdminToken, unauthorizedResponse } from "@/lib/auth";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  const admin = verifyAdminToken(req);
  if (!admin) return unauthorizedResponse();

  try {
    await connectDB();
    const { id } = await params;
    const enquiry = await Enquiry.findById(id).lean();

    if (!enquiry) {
      return NextResponse.json(
        { success: false, error: "Enquiry not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, enquiry });
  } catch (error) {
    console.error("Fetch enquiry error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch enquiry." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  const admin = verifyAdminToken(req);
  if (!admin) return unauthorizedResponse();

  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const allowedStatuses = ["new", "contacted", "in_progress", "converted", "closed"];
    const updates: Record<string, unknown> = {};

    if (body.status && allowedStatuses.includes(body.status)) {
      updates.status = body.status;
    }
    if (typeof body.adminNotes === "string") {
      updates.adminNotes = body.adminNotes;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { success: false, error: "No valid fields to update." },
        { status: 400 }
      );
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, lean: true }
    );

    if (!enquiry) {
      return NextResponse.json(
        { success: false, error: "Enquiry not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, enquiry });
  } catch (error) {
    console.error("Update enquiry error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update enquiry." },
      { status: 500 }
    );
  }
}
