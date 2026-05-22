// import { headers } from "next/headers";
// import { auth } from "./auth";

export const getAllCatData = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/allCards`)
    const data = await res.json();
    console.log(data)
    return data;
}

// all-cat details
// export const getCatDetailsData = async(id)=>{
//  console.log(token);
 
//     const res = await fetch(`${process.env.PUBLIC_BETTER_AUTH_URL}/allCards/${id}`)
//     const data = await res.json();
//     console.log(data)
//     return data;
// }

// api/data.js e add koro
export const getMyCards = async (email) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/myCards?email=${email}`)
    const data = await res.json();
    return data;
}

// NEW: Search, Filter & Sort query API function
export const getFilteredCatData = async (searchParams) => {
  const search = searchParams?.search || '';
  const species = searchParams?.species || '';
  const sort = searchParams?.sort || '';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/allCards?search=${search}&species=${species}&sort=${sort}`,
    { cache: 'no-store' }
  );
  
  if (!res.ok) {
    throw new Error("Failed to fetch filtered data");
  }
  
  return res.json();
};

