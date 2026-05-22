'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { IoFilterSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const FilterSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [species, setSpecies] = useState(searchParams.get('species') || '');
  const [sort, setSort] = useState(searchParams.get('sort') || '');

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (species) params.set('species', species);
    if (sort) params.set('sort', sort);

   
    router.push(`/all-cats?${params.toString()}`, { scroll: false });
  }, [search, species, sort, router]);

  return (
    <div className="w-full bg-[#1e293b]/20 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl mb-10">
      {/* Header Tag */}
      <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-5">
        <IoFilterSharp className="text-sm text-rose-500" />
        <span>Filter & Search</span>
      </div>

      {/* Grid Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Search Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-white tracking-wide">Search by name</label>
          <div className="relative">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white text-lg" />
            <input
              type="text"
              placeholder="Search pets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0f172a]/60 border border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition duration-200"
            />
          </div>
        </div>

        {/* Filter by Species */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-slate-400 tracking-wide">Filter by species</label>
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full bg-[#0f172a]/60 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition duration-200 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[size:1.25rem] bg-[position:right_0.75rem_center] bg-no-repeat pr-10"
          >
            <option value="" className="bg-[#0f172a]">All Species</option>
            <option value="Cat" className="bg-[#0f172a]">Cat 🐱</option>
            <option value="Dog" className="bg-[#0f172a]">Dog 🐶</option>
            <option value="Rabbit" className="bg-[#0f172a]">Rabbit 🐰</option>
            <option value="Bird" className="bg-[#0f172a]">Bird 🦜</option>
          </select>
        </div>

        {/* Sort by Fee */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-slate-400 tracking-wide">Sort by fee</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full bg-[#0f172a]/60 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition duration-200 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[size:1.25rem] bg-[position:right_0.75rem_center] bg-no-repeat pr-10"
          >
            <option value="" className="bg-[#0f172a]">Default</option>
            <option value="asc" className="bg-[#0f172a]">Price: Low to High</option>
            <option value="desc" className="bg-[#0f172a]">Price: High to Low</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default FilterSection;