import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { randomBytes } from "crypto";

function generateEnquiryId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = randomBytes(3).toString("hex").toUpperCase();
  return `CEQ-${timestamp}-${random}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, pickup, destination, travelDate, message } = body;

    // Validate required fields
    if (!name?.trim()) {
      return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }
    if (!phone?.trim()) {
      return NextResponse.json({ success: false, error: "Phone number is required." }, { status: 400 });
    }

    const phoneRegex = /^[6-9]\d{9}$|^\+91[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/\s+/g, "").replace(/^\+91/, "");
    if (!phoneRegex.test(cleanPhone) && !phoneRegex.test(phone.replace(/\s+/g, ""))) {
      return NextResponse.json({ success: false, error: "Please enter a valid phone number." }, { status: 400 });
    }

    if (email && email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
      }
    }

    await connectDB();

    const enquiryId = generateEnquiryId();

    const enquiry = await Enquiry.create({
      enquiryId,
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || null,
      service: service?.trim() || null,
      pickup: pickup?.trim() || null,
      destination: destination?.trim() || null,
      travelDate: travelDate?.trim() || null,
      message: message?.trim() || null,
      status: "new",
      source: "website_contact_form",
    });

    return NextResponse.json({
      success: true,
      enquiryId: enquiry.enquiryId,
      message: "Your enquiry has been received. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to submit enquiry. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
