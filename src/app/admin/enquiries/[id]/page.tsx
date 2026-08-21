"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  MessageSquare,
  Loader2,
  CheckCircle2,
  Tag,
} from "lucide-react";

interface Enquiry {
  _id: string;
  enquiryId: string;
  name: string;
  phone: string;
  email: string | null;
  service: string | null;
  pickup: string | null;
  destination: string | null;
  travelDate: string | null;
  message: string | null;
  status: string;
  adminNotes: string | null;
  source: string;
  createdAt: string;
  updatedAt: string;
}

const STATUS_STYLES: Record<string, string> = {
  new: "bg-blue-100 text-blue-700 border-blue-200",
  contacted: "bg-yellow-100 text-yellow-700 border-yellow-200",
  in_progress: "bg-purple-100 text-purple-700 border-purple-200",
  converted: "bg-green-100 text-green-700 border-green-200",
  closed: "bg-gray-100 text-gray-500 border-gray-200",
};

const STATUS_LABELS: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  in_progress: "In Progress",
  converted: "Converted",
  closed: "Closed",
};

const STATUS_ACTIONS: Array<{ status: string; label: string; color: string }> = [
  { status: "contacted", label: "Mark Contacted", color: "bg-yellow-500 hover:bg-yellow-600" },
  { status: "in_progress", label: "Mark In Progress", color: "bg-purple-600 hover:bg-purple-700" },
  { status: "converted", label: "Mark Converted", color: "bg-green-600 hover:bg-green-700" },
  { status: "closed", label: "Close Enquiry", color: "bg-gray-600 hover:bg-gray-700" },
  { status: "new", label: "Reopen as New", color: "bg-blue-600 hover:bg-blue-700" },
];

export default function EnquiryDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [notes, setNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEnquiry = async () => {
      try {
        const res = await fetch(`/api/admin/enquiries/${id}`);
        const data = await res.json();
        if (data.success) {
          setEnquiry(data.enquiry);
          setNotes(data.enquiry.adminNotes || "");
        } else {
          setError(data.error || "Enquiry not found.");
        }
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchEnquiry();
  }, [id]);

  const updateStatus = async (newStatus: string) => {
    if (updating) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiry(data.enquiry);
      }
    } finally {
      setUpdating(false);
    }
  };

  const saveNotes = async () => {
    if (savingNotes) return;
    setSavingNotes(true);
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminNotes: notes }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiry(data.enquiry);
      }
    } finally {
      setSavingNotes(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-brandColor" />
      </div>
    );
  }

  if (error || !enquiry) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
        <p className="text-red-500 font-semibold">{error || "Enquiry not found."}</p>
        <Link href="/admin/enquiries" className="mt-4 inline-block text-sm text-brandColor hover:underline">
          ← Back to Enquiries
        </Link>
      </div>
    );
  }

  const currentActions = STATUS_ACTIONS.filter((a) => a.status !== enquiry.status);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Back */}
      <Link
        href="/admin/enquiries"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Enquiries
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-5 shadow-sm">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h1 className="text-xl font-black text-gray-900">{enquiry.name}</h1>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${STATUS_STYLES[enquiry.status]}`}>
                {STATUS_LABELS[enquiry.status] || enquiry.status}
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono">{enquiry.enquiryId}</p>
          </div>
          <div className="text-right text-xs text-gray-400">
            <p>Received: {new Date(enquiry.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</p>
            <p>Updated: {new Date(enquiry.updatedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left — Customer Info */}
        <div className="lg:col-span-2 space-y-5">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Customer Information</h2>
            <div className="space-y-3">
              <a
                href={`tel:${enquiry.phone}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-brandColor/30 transition group"
              >
                <Phone className="w-4 h-4 text-brandColor flex-shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Phone</span>
                  <span className="font-bold text-gray-900 group-hover:text-brandColor transition">{enquiry.phone}</span>
                </div>
              </a>
              {enquiry.email && (
                <a
                  href={`mailto:${enquiry.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-brandColor/30 transition group"
                >
                  <Mail className="w-4 h-4 text-brandColor flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block">Email</span>
                    <span className="font-bold text-gray-900">{enquiry.email}</span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Trip Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {enquiry.service && (
                <div className="flex items-start gap-3">
                  <Tag className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Service</span>
                    <span className="text-sm font-semibold text-gray-800">{enquiry.service}</span>
                  </div>
                </div>
              )}
              {enquiry.pickup && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Pickup</span>
                    <span className="text-sm font-semibold text-gray-800">{enquiry.pickup}</span>
                  </div>
                </div>
              )}
              {enquiry.destination && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Destination</span>
                    <span className="text-sm font-semibold text-gray-800">{enquiry.destination}</span>
                  </div>
                </div>
              )}
              {enquiry.travelDate && (
                <div className="flex items-start gap-3">
                  <CalendarDays className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5">Travel Date</span>
                    <span className="text-sm font-semibold text-gray-800">{enquiry.travelDate}</span>
                  </div>
                </div>
              )}
            </div>
            {enquiry.message && (
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block mb-1">Customer Message</span>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{enquiry.message}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Admin Notes */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Admin Notes</h2>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add internal notes about this enquiry..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor transition resize-none"
            />
            <button
              onClick={saveNotes}
              disabled={savingNotes}
              className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-sm font-bold transition disabled:opacity-50"
            >
              {savingNotes ? (
                <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving...</>
              ) : (
                <><CheckCircle2 className="w-3.5 h-3.5" /> Save Notes</>
              )}
            </button>
          </div>
        </div>

        {/* Right — Status Actions */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Status Actions</h2>
            <div className="space-y-2.5">
              {currentActions.map((action) => (
                <button
                  key={action.status}
                  onClick={() => updateStatus(action.status)}
                  disabled={updating}
                  className={`w-full py-2.5 px-4 rounded-xl text-white text-sm font-bold transition disabled:opacity-50 disabled:cursor-not-allowed ${action.color}`}
                >
                  {updating ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Updating...
                    </span>
                  ) : (
                    action.label
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Quick Contact</h2>
            <div className="space-y-2.5">
              <a
                href={`tel:${enquiry.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-black text-white text-sm font-bold transition"
              >
                <Phone className="w-4 h-4" />
                Call Customer
              </a>
              <a
                href={`https://wa.me/91${enquiry.phone.replace(/\D/g, "").replace(/^91/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-brandColor hover:bg-brandColor-hover text-white text-sm font-bold transition"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Customer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
