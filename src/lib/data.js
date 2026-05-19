export const getAllCatData = async()=>{
    const res = await fetch(`http://localhost:8000/allCards`)
    const data = await res.json();
    console.log(data)
    return data;
}