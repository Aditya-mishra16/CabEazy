import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    enquiryId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
    },
    service: {
      type: String,
      trim: true,
      default: null,
    },
    pickup: {
      type: String,
      trim: true,
      default: null,
    },
    destination: {
      type: String,
      trim: true,
      default: null,
    },
    travelDate: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      trim: true,
      default: null,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "in_progress", "converted", "closed"],
      default: "new",
    },
    source: {
      type: String,
      default: "website_contact_form",
    },
    adminNotes: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", EnquirySchema);
