import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "Cabeazy Admin",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.CabeazyAdmin ||
  mongoose.model("CabeazyAdmin", AdminSchema);
