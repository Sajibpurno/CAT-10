'use client';
import React from 'react';
import { authClient } from '../lib/auth-client';
import { toast } from 'react-toastify';

const AdoptCard = ({ pet }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log("--- FULL PET OBJECT CHECK ---", pet);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formFields = Object.fromEntries(formData.entries());

    const allAdoptionData = {
      petName: pet?.petName,
      petId: pet?.petId,
      userId: user?.id,
      userName: user?.name,
      petImageUrl: pet?.image,
      userEmail: user?.email,
      pickupDate: formFields.pickupDate,
      message: formFields.message,
    };

    console.log("Sending Data:", allAdoptionData);

    try {
      const res = await fetch(`http://localhost:8000/adopting`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(allAdoptionData),
      });
      const data = await res.json();
      console.log("Response:", data);

      if (data.insertedId) {
        toast.success("Adoption application submitted successfully! 🐾");
        e.target.reset(); 
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!user) {
    return <p className="text-sm opacity-50">Loading user session...</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Pet Name Input */}
      <div>
        <label className="block text-xs font-semibold mb-1.5 opacity-80">Pet Name</label>
        <input 
          type="text" 
          value={pet?.petName || ''} 
          readOnly 
          className="w-full bg-slate-100 font-bold dark:bg-[#1F2937] text-slate-500 dark:text-slate-300 rounded-lg p-2.5 text-sm outline-none border border-slate-200 dark:border-slate-700 capitalize cursor-not-allowed"
        />
      </div>

      {/* Your Name Input */}
      <div>
        <label className="block text-xs font-semibold mb-1.5 opacity-80">Your Name</label>
        <div className="relative">
          <input 
            type="text" 
            value={user?.name || ''} 
            readOnly 
            className="w-full bg-slate-50 dark:bg-[#1F2937] border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 pl-8 text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
          />
          <span className="absolute left-2.5 top-3 text-xs opacity-50">👤</span>
        </div>
      </div>

      {/* Your Email Input */}
      <div>
        <label className="block text-xs font-semibold mb-1.5 opacity-80">Your Email</label>
        <div className="relative">
          <input 
            type="email" 
            value={user?.email || ''} 
            readOnly 
            className="w-full bg-slate-50 dark:bg-[#1F2937] border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 pl-8 text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
          />
          <span className="absolute left-2.5 top-3 text-xs opacity-50">✉️</span>
        </div>
      </div>

      {/* Preferred Pickup Date */}
      <div>
        <label className="block text-xs font-semibold mb-1.5 opacity-80">Preferred Pickup Date</label>
        <input 
          type="date" 
          name="pickupDate"
          required 
          className="w-full bg-slate-50 dark:bg-[#1F2937] border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-cyan-500 outline-none dark:[color-scheme:dark]"
        />
      </div>

      {/* Message to Owner */}
      <div>
        <label className="block text-xs font-semibold mb-1.5 opacity-80">Message to Owner</label>
        <textarea 
          name="message"
          rows="4"
          required
          placeholder={`Tell the owner why you'd be a great match for ${pet?.petName || 'this pet'}...`}
          className="w-full bg-slate-50 dark:bg-[#1F2937] border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-cyan-500 outline-none resize-none"
        ></textarea>
      </div>

      {/* Adopt Gradient Button */}
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-yellow-400 to-gray-400 hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition duration-200 mt-2"
      >
        Adopt {pet?.petName} 🐾
      </button>
    </form>
  );
};

export default AdoptCard;