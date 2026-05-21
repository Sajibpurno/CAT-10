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