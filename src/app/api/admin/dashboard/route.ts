import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { verifyAdminToken, unauthorizedResponse } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const admin = verifyAdminToken(req);
  if (!admin) return unauthorizedResponse();

  try {
    await connectDB();

    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const [
      totalEnquiries,
      newEnquiries,
      todayEnquiries,
      contactedEnquiries,
      inProgressEnquiries,
      convertedEnquiries,
      recentEnquiries,
    ] = await Promise.all([
      Enquiry.countDocuments(),
      Enquiry.countDocuments({ status: "new" }),
      Enquiry.countDocuments({ createdAt: { $gte: startOfDay } }),
      Enquiry.countDocuments({ status: "contacted" }),
      Enquiry.countDocuments({ status: "in_progress" }),
      Enquiry.countDocuments({ status: "converted" }),
      Enquiry.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .lean()
        .select("enquiryId name phone service pickup destination status createdAt"),
    ]);

    return NextResponse.json({
      success: true,
      stats: {
        totalEnquiries,
        newEnquiries,
        todayEnquiries,
        contactedEnquiries,
        inProgressEnquiries,
        convertedEnquiries,
        pendingFollowup: newEnquiries + contactedEnquiries,
      },
      recentEnquiries,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load dashboard data." },
      { status: 500 }
    );
  }
}
