"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Inbox,
  TrendingUp,
  CalendarCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from "lucide-react";

interface Stats {
  totalEnquiries: number;
  newEnquiries: number;
  todayEnquiries: number;
  pendingFollowup: number;
  contactedEnquiries: number;
  inProgressEnquiries: number;
  convertedEnquiries: number;
}

interface RecentEnquiry {
  _id: string;
  enquiryId: string;
  name: string;
  phone: string;
  service: string | null;
  pickup: string | null;
  destination: string | null;
  status: string;
  createdAt: string;
}

const STATUS_STYLES: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  in_progress: "bg-purple-100 text-purple-700",
  converted: "bg-green-100 text-green-700",
  closed: "bg-gray-100 text-gray-600",
};

const STATUS_LABELS: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  in_progress: "In Progress",
  converted: "Converted",
  closed: "Closed",
};

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex items-center gap-5">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-2xl font-black text-gray-900">{value}</p>
        <p className="text-xs font-semibold text-gray-500 mt-0.5">{title}</p>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentEnquiries, setRecentEnquiries] = useState<RecentEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("/api/admin/dashboard");
        const data = await res.json();
        if (data.success) {
          setStats(data.stats);
          setRecentEnquiries(data.recentEnquiries || []);
        } else {
          setError(data.error || "Failed to load dashboard.");
        }
      } catch {
        setError("Network error. Please refresh.");
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-brandColor" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center text-red-500">
        <p className="font-semibold">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Overview of customer enquiries and leads</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard
          title="Total Enquiries"
          value={stats?.totalEnquiries ?? 0}
          icon={TrendingUp}
          color="bg-gray-100 text-gray-600"
        />
        <StatCard
          title="New Enquiries"
          value={stats?.newEnquiries ?? 0}
          icon={Inbox}
          color="bg-blue-50 text-blue-600"
        />
        <StatCard
          title="Today's Enquiries"
          value={stats?.todayEnquiries ?? 0}
          icon={CalendarCheck}
          color="bg-purple-50 text-purple-600"
        />
        <StatCard
          title="Pending Follow-up"
          value={stats?.pendingFollowup ?? 0}
          icon={Clock}
          color="bg-orange-50 text-brandColor"
        />
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm text-center">
          <p className="text-xl font-black text-yellow-600">{stats?.contactedEnquiries ?? 0}</p>
          <p className="text-xs font-semibold text-gray-500 mt-1">Contacted</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm text-center">
          <p className="text-xl font-black text-purple-600">{stats?.inProgressEnquiries ?? 0}</p>
          <p className="text-xs font-semibold text-gray-500 mt-1">In Progress</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm text-center">
          <p className="text-xl font-black text-green-600">{stats?.convertedEnquiries ?? 0}</p>
          <p className="text-xs font-semibold text-gray-500 mt-1">Converted</p>
        </div>
      </div>

      {/* Recent Enquiries */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900">Recent Enquiries</h2>
          <Link
            href="/admin/enquiries"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brandColor hover:underline"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentEnquiries.length === 0 ? (
          <div className="py-16 text-center">
            <CheckCircle2 className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">No enquiries yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {recentEnquiries.map((enq) => (
              <Link
                key={enq._id}
                href={`/admin/enquiries/${enq._id}`}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition group"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-bold text-gray-900 text-sm">{enq.name}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        STATUS_STYLES[enq.status] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {STATUS_LABELS[enq.status] || enq.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    {enq.phone}
                    {enq.service && ` · ${enq.service}`}
                    {enq.pickup && enq.destination && ` · ${enq.pickup} → ${enq.destination}`}
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                  <span className="text-xs text-gray-400">
                    {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brandColor transition" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
