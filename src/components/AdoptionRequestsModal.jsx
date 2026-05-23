"use client";

import { useState } from "react";
import { Users, X, Check, XCircle, Clock, Mail, Calendar, MessageSquare, PawPrint } from "lucide-react";

export function AdoptionRequestsModal({ card }) {
  const { _id, petName } = card;
  const [isOpen, setIsOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/adopting/pet/${_id}`
      );
      const data = await res.json();
      setRequests(data);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    fetchRequests();
  };

  const handleClose = () => {
    setIsOpen(false);
    setRequests([]);
  };

  const handleStatusUpdate = async (requestId, status) => {
    setUpdatingId(requestId);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/adopting/${requestId}`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );
      const data = await res.json();
      if (data.modifiedCount > 0) {
        setRequests((prev) =>
          prev.map((r) => (r._id === requestId ? { ...r, status } : r))
        );
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
    });
  };

  const getStatusStyle = (status) => {
    const s = status?.toLowerCase();
    if (s === "approved") return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    if (s === "rejected") return "bg-rose-500/10 text-rose-400 border-rose-500/20";
    return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  };

  const getStatusDot = (status) => {
    const s = status?.toLowerCase();
    if (s === "approved") return "bg-emerald-400";
    if (s === "rejected") return "bg-rose-400";
    return "bg-amber-400";
  };

  const pending = requests.filter(
    (r) => !r.status || r.status.toLowerCase() === "pending"
  ).length;

  return (
    <>
      {/* Trigger Button */}
      <Button
        onClick={handleOpen}
        className="flex items-center justify-center gap-1.5 rounded-lg border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950/40 transition w-full"
      >
        <Users size={14} />
        Requests
        {pending > 0 && (
          <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">
            {pending}
          </span>
        )}
      </Button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-[#111827] border border-gray-800 shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-800 shrink-0">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20 mb-2">
                  <Users size={11} /> Adoption Requests
                </div>
                <h2 className="text-xl font-extrabold text-white">{petName}</h2>
                <p className="mt-1 text-sm text-gray-400">
                  {requests.length} total &middot;{" "}
                  <span className="text-amber-400">{pending} pending</span>
                </p>
              </div>
              <button
                onClick={handleClose}
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1 p-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
                  <p className="text-sm text-gray-400">Loading requests...</p>
                </div>
              ) : requests.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3">
                  <PawPrint className="text-amber-500 opacity-60" size={40} />
                  <p className="text-gray-400 text-sm font-medium">
                    No adoption requests yet for {petName}.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {requests.map((req) => {
                    const isApproved = req.status?.toLowerCase() === "approved";
                    const isRejected = req.status?.toLowerCase() === "rejected";
                    const isDone = isApproved || isRejected;
                    const isUpdating = updatingId === req._id;

                    return (
                      <div key={req._id} className="rounded-xl border border-gray-800 bg-[#1F2937]/40 p-5">

                        {/* User info + status */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <p className="font-bold text-white text-sm">{req.userName || "Unknown"}</p>
                            <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-400">
                              <Mail size={11} /> {req.userEmail}
                            </div>
                          </div>
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border ${getStatusStyle(req.status)}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${getStatusDot(req.status)}`} />
                            {req.status || "Pending"}
                          </span>
                        </div>

                        {/* Pickup date */}
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                          <Calendar size={11} />
                          <span>Pickup: {formatDate(req.pickupDate)}</span>
                        </div>

                        {/* Message */}
                        {req.message && (
                          <div className="flex gap-2 rounded-lg bg-gray-800/50 p-3 mb-4">
                            <MessageSquare size={13} className="text-gray-500 mt-0.5 shrink-0" />
                            <p className="text-xs text-gray-300 leading-relaxed">{req.message}</p>
                          </div>
                        )}

                        {/* Approve / Reject — pending hole show korbe */}
                        {!isDone ? (
                          <div className="flex gap-2">
                            <button
                              disabled={isUpdating}
                              onClick={() => handleStatusUpdate(req._id, "approved")}
                              className="flex items-center gap-1.5 rounded-lg bg-emerald-600/20 border border-emerald-600/30 px-3 py-2 text-xs font-semibold text-emerald-400 hover:bg-emerald-600/30 transition disabled:opacity-50"
                            >
                              {isUpdating ? <div className="h-3 w-3 animate-spin rounded-full border border-emerald-400 border-t-transparent" /> : <Check size={13} />}
                              Approve
                            </button>
                            <button
                              disabled={isUpdating}
                              onClick={() => handleStatusUpdate(req._id, "rejected")}
                              className="flex items-center gap-1.5 rounded-lg bg-rose-600/20 border border-rose-600/30 px-3 py-2 text-xs font-semibold text-rose-400 hover:bg-rose-600/30 transition disabled:opacity-50"
                            >
                              {isUpdating ? <div className="h-3 w-3 animate-spin rounded-full border border-rose-400 border-t-transparent" /> : <XCircle size={13} />}
                              Reject
                            </button>
                          </div>
                        ) : (
                          // already done hole message show
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <Clock size={11} />
                            {isApproved ? "You approved this request." : "You rejected this request."}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}