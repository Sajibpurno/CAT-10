import React from 'react';
import Catcard from '../../components/Catcard';
// import { getAllCatData } from '../../lib/data';
import { getFilteredCatData } from '../../lib/data';
import FilterSection from '../../components/FilterSection';

const AllCatsPage = async({ searchParams }) => {
  const resolvedParams = await searchParams;

    // const CatData = await getAllCatData();
    const CatData = await getFilteredCatData(resolvedParams);

    return (
      <div className="container mx-auto my-20 px-4 sm:px-6">
        
        {/* Title and Count */}
        <h1 className="mb-2 text-4xl font-bold bg-linear-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent hover:opacity-90">All Pets</h1>
        <p className="mb-5 text-slate-400">{CatData?.length || 0} pets available for adoption</p>

        {/* Filter UI */}
        <FilterSection />
        
        {/* Grid Display Area */}
        {CatData?.length === 0 ? (
          <div className="text-center py-20 bg-[#1e293b]/10 rounded-2xl border border-dashed border-slate-800">
            <p className="text-slate-500 font-medium text-lg">No pets found matching the criteria. 🔍</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:justify-items-stretch">
            {CatData.map((data) => (
              <Catcard data={data} key={data._id} />
            ))}
          </div>
        )}

      </div>
    );
};

export default AllCatsPage;