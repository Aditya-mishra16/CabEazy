"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  vehicleClass: string;
  pickup: string;
  destination: string;
  travelDate: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  vehicleClass: "",
  pickup: "",
  destination: "",
  travelDate: "",
  message: "",
};

const serviceOptions = [
  "Intercity Outstation (One-Way / Round-Trip)",
  "City Ride / Local Commute",
  "Airport Pickup / Drop",
  "Hourly / Multi-Day Rental",
  "Corporate / Group Transportation",
];

const vehicleOptions = [
  "Any Vehicle Type (Let Team Suggest)",
  "Mini / Hatchback (4 Seater)",
  "Sedan Prime (4 Seater)",
  "SUV / MUV (6-7 Seater - Innova, Ertiga)",
  "Luxury Vehicle (Fortuner, BMW, Merc)",
  "Tempo Traveller / Group Bus",
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [enquiryId, setEnquiryId] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    const combinedService = formData.vehicleClass
      ? `${formData.service || "Booking"} (${formData.vehicleClass})`
      : formData.service;

    try {
      // 1. Submit to Database API
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: combinedService,
        }),
      });

      const data = await res.json();

      if (data.success) {
        const id = data.enquiryId || "";
        setStatus("success");
        setEnquiryId(id);

        // 2. Build full details WhatsApp message and open
        const whatsappMessage = [
          `*New Booking Enquiry - CabEazy*`,
          id ? `*Ref ID:* ${id}` : "",
          `*Name:* ${formData.name}`,
          `*Phone:* ${formData.phone}`,
          formData.email ? `*Email:* ${formData.email}` : "",
          formData.service ? `*Service:* ${formData.service}` : "",
          formData.vehicleClass ? `*Vehicle:* ${formData.vehicleClass}` : "",
          formData.pickup ? `*Pickup:* ${formData.pickup}` : "",
          formData.destination ? `*Destination:* ${formData.destination}` : "",
          formData.travelDate ? `*Date:* ${formData.travelDate}` : "",
          formData.message ? `*Notes:* ${formData.message}` : "",
        ]
          .filter(Boolean)
          .join("\n");

        window.open(getWhatsAppLink(whatsappMessage), "_blank", "noopener,noreferrer");

        setFormData(initialFormData);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setErrorMsg("");
  };

  // Normalized input styling for cross-browser / macOS consistency
  const inputClass =
    "w-full h-[48px] px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition bg-white";

  const labelClass =
    "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5";

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address.full
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 border-t border-gray-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Book Your Ride with <span className="text-brandColor">CabEazy</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Tell us where you need to go. Fill out the booking enquiry form below or connect with us directly via Phone or WhatsApp.
          </p>
        </div>

        {/* 2-COLUMN ALIGNED LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
          {/* LEFT COLUMN: Quick Contact Cards + Location Map */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Quick contact card: Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-brandColor/40 hover-lift transition group"
              aria-label={`Call CabEazy at ${siteConfig.phone}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-brandColor/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brandColor group-hover:border-brandColor transition">
                <Phone className="w-5 h-5 text-brandColor group-hover:text-white transition" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                  Call Directly
                </span>
                <p className="text-base font-bold text-gray-900 group-hover:text-brandColor transition">
                  {siteConfig.phone}
                </p>
                <p className="text-xs text-gray-500">Instant assistance &amp; booking</p>
              </div>
            </a>

            {/* Quick contact card: WhatsApp */}
            <a
              href={getWhatsAppLink("Hi CabEazy, I would like to enquire about vehicle booking.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-brandColor/30 shadow-sm hover-lift transition group ring-1 ring-brandColor/10"
              aria-label="Chat on WhatsApp"
            >
              <div className="w-12 h-12 rounded-2xl bg-brandColor flex items-center justify-center flex-shrink-0 shadow-sm">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-brandColor mb-0.5">
                  WhatsApp Desk
                </span>
                <p className="text-base font-bold text-gray-900 group-hover:text-brandColor transition">
                  Chat on WhatsApp
                </p>
                <p className="text-xs text-gray-500">Instant quotes &amp; driver dispatch</p>
              </div>
            </a>

            {/* Quick contact card: Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-brandColor/40 hover-lift transition group"
              aria-label={`Email CabEazy at ${siteConfig.email}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-brandColor/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brandColor group-hover:border-brandColor transition">
                <Mail className="w-5 h-5 text-brandColor group-hover:text-white transition" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                  Email Desk
                </span>
                <p className="text-sm font-bold text-gray-900 break-all group-hover:text-brandColor transition">
                  {siteConfig.email}
                </p>
                <p className="text-xs text-gray-500">Corporate &amp; bulk travel bookings</p>
              </div>
            </a>

            {/* LOCATION MAP EMBED */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm overflow-hidden flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brandColor" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Location Map
                  </span>
                </div>
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brandColor hover:underline"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative flex-1 min-h-[220px] w-full rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  title="CabEazy Location Map"
                  src="https://maps.google.com/maps?q=Mumbai-400072,%20Maharashtra,%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Enquiry Form with Aligned Matching Height */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7 sm:p-9 flex-1 flex flex-col justify-between">
              {status === "success" ? (
                /* SUCCESS STATE */
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 my-auto">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-2 animate-pulse-subtle">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Enquiry Received!</h3>
                  <p className="text-gray-600 max-w-md leading-relaxed text-sm sm:text-base">
                    Thank you for reaching out. We have received your trip details and opened WhatsApp to confirm your driver assignment and quote.
                  </p>
                  {enquiryId && (
                    <p className="text-xs text-gray-400 mt-2">
                      Reference ID: <span className="font-mono font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md">{enquiryId}</span>
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto">
                    <a
                      href={getWhatsAppLink("Hi CabEazy, I just submitted an enquiry on the website. Please confirm availability.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-brandColor hover:bg-brandColor-hover text-white px-5 py-3 rounded-xl font-bold text-sm btn-press transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Follow Up on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setEnquiryId("");
                      }}
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-gray-200 text-gray-800 font-semibold text-sm btn-press hover:bg-gray-50 transition"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM STATE */
                <div className="flex flex-col h-full justify-between">
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-gray-900">Send a Booking Enquiry</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Fill in your journey requirements. All fields with <span className="text-red-500">*</span> are required.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm animate-fade-in">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 font-medium">{errorMsg}</div>
                      <button
                        type="button"
                        onClick={handleRetry}
                        className="text-xs font-bold text-red-700 underline hover:no-underline"
                      >
                        Try again
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-4" noValidate>
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClass}
                          disabled={status === "loading"}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                    {/* Row 2: Service Type + Vehicle Class */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className={labelClass}>
                          Service Type
                        </label>
                        <div className="relative w-full">
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full h-[48px] px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition bg-white appearance-none pr-10 cursor-pointer disabled:opacity-60"
                            disabled={status === "loading"}
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="vehicleClass" className={labelClass}>
                          Vehicle Class
                        </label>
                        <div className="relative w-full">
                          <select
                            id="vehicleClass"
                            name="vehicleClass"
                            value={formData.vehicleClass}
                            onChange={handleChange}
                            className="w-full h-[48px] px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition bg-white appearance-none pr-10 cursor-pointer disabled:opacity-60"
                            disabled={status === "loading"}
                          >
                            <option value="">Select vehicle class</option>
                            {vehicleOptions.map((v) => (
                              <option key={v} value={v}>
                                {v}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Pickup + Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pickup" className={labelClass}>
                          Pickup Location
                        </label>
                        <input
                          id="pickup"
                          name="pickup"
                          type="text"
                          placeholder="e.g. Pickup address or city..."
                          value={formData.pickup}
                          onChange={handleChange}
                          className={inputClass}
                          disabled={status === "loading"}
                        />
                      </div>
                      <div>
                        <label htmlFor="destination" className={labelClass}>
                          Destination
                        </label>
                        <input
                          id="destination"
                          name="destination"
                          type="text"
                          placeholder="Where do you need to go?"
                          value={formData.destination}
                          onChange={handleChange}
                          className={inputClass}
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                    {/* Row 4: Travel Date + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="travelDate" className={labelClass}>
                          Preferred Travel Date
                        </label>
                        <input
                          id="travelDate"
                          name="travelDate"
                          type="date"
                          value={formData.travelDate}
                          onChange={handleChange}
                          className={inputClass}
                          min={new Date().toISOString().split("T")[0]}
                          disabled={status === "loading"}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email Address (Optional)
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass}
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="flex-1 flex flex-col">
                      <label htmlFor="message" className={labelClass}>
                        Message / Special Requests
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Describe your trip details, number of passengers, luggage, or any special requests..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full flex-1 min-h-[90px] px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition bg-white resize-none"
                        disabled={status === "loading"}
                      />
                    </div>

                    {/* Submit Action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-sm shadow-md btn-press transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending Enquiry...</span>
                          </>
                        ) : (
                          <span>Send Enquiry</span>
                        )}
                      </button>

                      <p className="text-[11px] text-center text-gray-400 mt-2">
                        🔒 Your contact info is strictly confidential and only used for your booking.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
