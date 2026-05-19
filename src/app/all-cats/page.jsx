import React from 'react';
import Catcard from '../../components/Catcard';
import { getAllCatData } from '../../lib/data';

const AllCatsPage = async() => {
    const CatData = await getAllCatData();
    return (
        <div className=" container mx-auto my-20">

      {/* //agea pi banate hobe server e */}
      <h1 className="mb-5 text-4xl font-bold text-cyan-500 dark:text-cyan-400">All Cats</h1>
      
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {CatData.map((data) => (
          <Catcard data={data} key={data._id} />
        ))}
      </div
      >
    </div>
    );
};

export default AllCatsPage;