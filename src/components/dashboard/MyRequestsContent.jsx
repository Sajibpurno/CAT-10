'use client';
import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { authClient } from "../../lib/auth-client";
import Link from 'next/link';

const MyRequestsContent = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8000/adopting?email=${user.email}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching requests:", err);
          setLoading(false);
        });
    }
  }, [user]);

  const totalRequests = data.length;
  const pendingRequests = data.filter(item => !item.status || item.status.toLowerCase() === 'pending').length;
  const approvedRequests = data.filter(item => item.status?.toLowerCase() === 'approved').length;
  const rejectedRequests = data.filter(item => item.status?.toLowerCase() === 'rejected').length;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-gray-400">
        <p className="text-lg animate-pulse">Loading requests...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111827] p-6 text-white font-sans selection:bg-cyan-500/30">
      
      {/* Top Tag & Title Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-400 border border-rose-500/20 mb-3">
          📋 My Requests
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-white via-rose-300 to-cyan-400 bg-clip-text text-transparent">
          My Adoption Requests
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Track the status of all your adoption requests here.
        </p>
      </div>

      {/* Stats Cards Section */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {/* Total Card */}
        <div className="rounded-xl border border-gray-800 bg-[#1F2937]/40 p-5 text-center backdrop-blur-sm">
          <p className="text-3xl font-black text-cyan-400">{totalRequests}</p>
          <p className="mt-1 text-xs font-semibold text-gray-400 tracking-wider uppercase">Total</p>
        </div>

        {/* Pending Card */}
        <div className="rounded-xl border border-gray-800 bg-[#1F2937]/40 p-5 text-center backdrop-blur-sm">
          <p className="text-3xl font-black text-amber-500">{pendingRequests}</p>
          <p className="mt-1 text-xs font-semibold text-gray-400 tracking-wider uppercase">Pending</p>
        </div>

        {/* Approved Card */}
        <div className="rounded-xl border border-gray-800 bg-[#1F2937]/40 p-5 text-center backdrop-blur-sm">
          <p className="text-3xl font-black text-emerald-500">{approvedRequests}</p>
          <p className="mt-1 text-xs font-semibold text-gray-400 tracking-wider uppercase">Approved</p>
        </div>

        {/* Rejected Card */}
        <div className="rounded-xl border border-gray-800 bg-[#1F2937]/40 p-5 text-center backdrop-blur-sm">
          <p className="text-3xl font-black text-rose-500">{rejectedRequests}</p>
          <p className="mt-1 text-xs font-semibold text-gray-400 tracking-wider uppercase">Rejected</p>
        </div>
      </div>

      {/* Data Table / Empty State Section */}
      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-[#1F2937]/20 py-16 backdrop-blur-sm">
          <FaSearch className="mb-4 text-5xl text-amber-500 opacity-80 animate-bounce" />
          <p className="text-gray-400 font-medium">No adoption requests found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#1F2937]/20 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-xs font-bold uppercase tracking-wider text-gray-400 bg-[#1F2937]/40">
                <th className="px-6 py-4">Pet Name</th>
                <th className="px-6 py-4">Request Date</th>
                <th className="px-6 py-4">Pickup Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-sm">
              {data.map((item) => (
                <tr key={item._id} className="hover:bg-[#1F2937]/30 transition duration-150 group">
                  {/* Pet Name with Image Option */}
                  <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-100 flex items-center gap-3">
                    {item.petImage && (
                      <img 
                        src={item.petImage} 
                        alt={item.petName} 
                        className="w-8 h-8 rounded-full object-cover border border-gray-700 group-hover:scale-105 transition"
                      />
                    )}
                    <span>{item.petName}</span>
                  </td>
                  
                  {/* Request Date (Database এর default id বা timestamp থেকে জেনারেট করা) */}
                  <td className="whitespace-nowrap px-6 py-4 text-gray-300">
                    {formatDate(item._id ? new Date(parseInt(item._id.substring(0, 8), 16) * 1000) : new Date())}
                  </td>
                  
                  {/* Pickup Date */}
                  <td className="whitespace-nowrap px-6 py-4 text-gray-300">
                    {formatDate(item.pickupDate)}
                  </td>
                  
                  {/* Status Badge */}
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400 border border-amber-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                      {item.status || 'Pending'}
                    </span>
                  </td>
                  
                  {/* Actions Buttons */}
                  <td className="whitespace-nowrap px-6 py-4 text-right space-x-2">

                    <Link href={`/all-cats/${item?.petId}`}>
                    <button className="inline-flex items-center gap-1 rounded-lg bg-gray-800 px-3 py-1.5 text-xs font-semibold text-gray-200 border border-gray-700 hover:bg-gray-700 transition duration-150">
                      👁️ View
                    </button>
                    </Link>

                    <button className="inline-flex items-center gap-1 rounded-lg bg-rose-500/10 px-3 py-1.5 text-xs font-semibold text-rose-400 border border-rose-500/20 hover:bg-rose-500 hover:text-white transition duration-150">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRequestsContent;