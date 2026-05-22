export const getAllCatData = async()=>{
    const res = await fetch(`http://localhost:8000/allCards`)
    const data = await res.json();
    console.log(data)
    return data;
}

// all-cat details
export const getCatDetailsData = async(id)=>{
    const res = await fetch(`http://localhost:8000/allCards/${id}`)
    const data = await res.json();
    console.log(data)
    return data;
}

// api/data.js e add koro
export const getMyCards = async (email) => {
    const res = await fetch(`http://localhost:8000/myCards?email=${email}`)
    const data = await res.json();
    return data;
}

// NEW: Search, Filter & Sort query API function
export const getFilteredCatData = async (searchParams) => {
  const search = searchParams?.search || '';
  const species = searchParams?.species || '';
  const sort = searchParams?.sort || '';

  const res = await fetch(
    `http://localhost:8000/allCards?search=${search}&species=${species}&sort=${sort}`,
    { cache: 'no-store' }
  );
  
  if (!res.ok) {
    throw new Error("Failed to fetch filtered data");
  }
  
  return res.json();
};

