"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Search, Filter, ArrowRight, Loader2, RefreshCw } from "lucide-react";

interface Enquiry {
  _id: string;
  enquiryId: string;
  name: string;
  phone: string;
  email: string | null;
  service: string | null;
  pickup: string | null;
  destination: string | null;
  status: string;
  createdAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
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

const STATUS_OPTIONS = ["all", "new", "contacted", "in_progress", "converted", "closed"];

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "20",
        status: statusFilter,
        search,
      });
      const res = await fetch(`/api/admin/enquiries?${params}`);
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.enquiries);
        setPagination(data.pagination);
      }
    } catch {
      // silently fail, user can retry
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter, search]);

  useEffect(() => {
    const timer = setTimeout(() => fetchEnquiries(), search ? 400 : 0);
    return () => clearTimeout(timer);
  }, [fetchEnquiries, search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleStatusFilter = (s: string) => {
    setStatusFilter(s);
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-7 gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Enquiries</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {pagination ? `${pagination.total} total enquiries` : "Loading..."}
          </p>
        </div>
        <button
          onClick={fetchEnquiries}
          className="p-2 rounded-lg bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 transition"
          aria-label="Refresh"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-5 flex flex-col sm:flex-row gap-3 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, phone, location..."
            value={search}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition"
          />
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => handleStatusFilter(e.target.value)}
            className="pl-3 pr-8 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brandColor transition bg-white"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s === "all" ? "All Statuses" : STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table — desktop */}
      <div className="hidden md:block bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500">Customer</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500">Phone</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500">Service</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500">Route</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500">Date</th>
                <th className="px-5 py-3.5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center">
                    <Loader2 className="w-6 h-6 animate-spin text-brandColor mx-auto" />
                  </td>
                </tr>
              ) : enquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-gray-400 text-sm">
                    No enquiries found.
                  </td>
                </tr>
              ) : (
                enquiries.map((enq) => (
                  <tr key={enq._id} className="hover:bg-gray-50 transition group">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-gray-900">{enq.name}</div>
                      <div className="text-xs text-gray-400 font-mono mt-0.5">{enq.enquiryId}</div>
                    </td>
                    <td className="px-5 py-4">
                      <a href={`tel:${enq.phone}`} className="text-brandColor hover:underline font-medium">
                        {enq.phone}
                      </a>
                    </td>
                    <td className="px-5 py-4 text-gray-600 max-w-[140px] truncate">{enq.service || "—"}</td>
                    <td className="px-5 py-4 text-gray-600 max-w-[160px] truncate">
                      {enq.pickup && enq.destination
                        ? `${enq.pickup} → ${enq.destination}`
                        : enq.pickup || enq.destination || "—"}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${STATUS_STYLES[enq.status] || "bg-gray-100 text-gray-500"}`}>
                        {STATUS_LABELS[enq.status] || enq.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">
                      {new Date(enq.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/enquiries/${enq._id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 group-hover:text-brandColor transition"
                      >
                        View <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cards — mobile */}
      <div className="md:hidden space-y-3">
        {loading ? (
          <div className="py-16 text-center">
            <Loader2 className="w-6 h-6 animate-spin text-brandColor mx-auto" />
          </div>
        ) : enquiries.length === 0 ? (
          <div className="py-10 text-center text-gray-400 text-sm bg-white rounded-2xl border border-gray-200">
            No enquiries found.
          </div>
        ) : (
          enquiries.map((enq) => (
            <Link
              key={enq._id}
              href={`/admin/enquiries/${enq._id}`}
              className="block bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:border-brandColor/30 transition"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p className="font-bold text-gray-900">{enq.name}</p>
                  <p className="text-xs text-gray-400 font-mono">{enq.enquiryId}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border flex-shrink-0 ${STATUS_STYLES[enq.status] || "bg-gray-100 text-gray-500"}`}>
                  {STATUS_LABELS[enq.status] || enq.status}
                </span>
              </div>
              <p className="text-sm text-brandColor font-semibold">{enq.phone}</p>
              {enq.service && <p className="text-xs text-gray-500 mt-1">{enq.service}</p>}
              {enq.pickup && enq.destination && (
                <p className="text-xs text-gray-500 mt-0.5">{enq.pickup} → {enq.destination}</p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                {new Date(enq.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </Link>
          ))
        )}
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>
          <span className="text-sm text-gray-500">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
            disabled={page === pagination.totalPages}
            className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
